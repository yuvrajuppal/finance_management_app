import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma, productionmode } from "../config/dbconfig.js";

const JWT_SECRET = process.env.JWT_SECRET || "finance_management_super_secret_jwt_key_2025";

/**
 * Register a new user
 */
export const signup = async (req, res) => {
  /*  #swagger.tags = ['User']
      #swagger.summary = 'Register a new user'
      #swagger.description = 'Create a new user account with full name, email, and password'
      #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["fullName", "email", "password"],
              properties: {
                fullName: { type: "string", example: "Alexander Wright" },
                email: { type: "string", example: "alexander@domain.com" },
                password: { type: "string", example: "Password@123" }
              }
            }
          }
        }
      }
  */
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Full name, email, and password are required",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        fullName: fullName.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    // Generate JWT token (default 7 days)
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie
    res.cookie("usertoken", token, {
      httpOnly: true,
      secure: productionmode,
      sameSite: productionmode ? "None" : "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: newUser,
        token,
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during registration",
      error: error.message,
    });
  }
};

/**
 * User login
 */
export const login = async (req, res) => {
  /*  #swagger.tags = ['User']
      #swagger.summary = 'User login'
      #swagger.description = 'Authenticate user with email and password'
      #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: { type: "string", example: "alexander@domain.com" },
                password: { type: "string", example: "Password@123" },
                rememberMe: { type: "boolean", example: true }
              }
            }
          }
        }
      }
  */
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: normalizedEmail },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Determine token duration based on rememberMe
    const expiresIn = rememberMe ? "30d" : "1d";
    const maxAge = (rememberMe ? 30 : 1) * 24 * 60 * 60 * 1000;

    const token = jwt.sign(
      { id: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn }
    );

    // Set cookie
    res.cookie("usertoken", token, {
      httpOnly: true,
      secure: productionmode,
      sameSite: productionmode ? "None" : "lax",
      maxAge,
    });

    const userResponse = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      isVerified: user.isVerified,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return res.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: {
        user: userResponse,
        token,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
      error: error.message,
    });
  }
};

/**
 * Check if the user is currently logged in
 */
export const checkislogin = async (req, res) => {
  /*  #swagger.tags = ['User']
      #swagger.summary = 'Check authentication status'
      #swagger.description = 'Verify if current session or token is authenticated'
  */
  try {
    let token = req.cookies?.usertoken || req.cookies?.token;

    // Check authorization header fallback
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];
      } else {
        token = authHeader;
      }
    }

    if (!token) {
      return res.status(200).json({
        success: false,
        isLogin: false,
        message: "User is not logged in",
      });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      res.clearCookie("usertoken", {
        httpOnly: true,
        secure: productionmode,
        sameSite: productionmode ? "None" : "lax",
      });
      return res.status(200).json({
        success: false,
        isLogin: false,
        message: "Token is invalid or expired",
      });
    }

    // Fetch user from DB
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        fullName: true,
        email: true,
        isVerified: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      res.clearCookie("usertoken", {
        httpOnly: true,
        secure: productionmode,
        sameSite: productionmode ? "None" : "lax",
      });
      return res.status(200).json({
        success: false,
        isLogin: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      isLogin: true,
      message: "User is authenticated",
      data: {
        user,
      },
    });
  } catch (error) {
    console.error("Check login error:", error);
    return res.status(500).json({
      success: false,
      isLogin: false,
      message: "Internal server error checking login status",
      error: error.message,
    });
  }
};

// Also export camelCase alias
export const checkIsLogin = checkislogin;

/**
 * Logout user
 */
export const logout = async (req, res) => {
  /*  #swagger.tags = ['User']
      #swagger.summary = 'Logout user'
      #swagger.description = 'Clear authentication cookie and invalidate session'
  */
  try {
    res.clearCookie("usertoken", {
      httpOnly: true,
      secure: productionmode,
      sameSite: productionmode ? "None" : "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error during logout",
      error: error.message,
    });
  }
};