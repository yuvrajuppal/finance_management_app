"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Login handler logic can be hooked up here
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen flex flex-col justify-between font-sans selection:bg-[#1d4ed8] selection:text-white">
      {/* Main Login Card */}
      <main className="flex-1 flex items-center justify-center p-4 w-full">
        <div className="w-full max-w-md mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-xl border border-[#eaedff] p-6 md:p-8">
            {/* Title Section */}
            <div className="text-center space-y-1 mb-6">
              <h1 className="text-2xl font-semibold text-[#131b2e] tracking-tight leading-8">
                Welcome back
              </h1>
              <p className="text-sm text-[#434655] leading-5">
                Log in to track your daily expenses
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email Input */}
              <div className="space-y-1">
                <label
                  className="block text-xs font-semibold text-[#131b2e] leading-4"
                  htmlFor="emailInput"
                >
                  Email
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-[#747686] pointer-events-none flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.75}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <input
                    className="w-full h-11 pl-10 pr-4 rounded-lg border border-[#eaedff] bg-white text-[#131b2e] text-sm placeholder:text-[#747686] focus:outline-none focus:bg-[#f2f3ff] focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all duration-150"
                    id="emailInput"
                    placeholder="Enter your email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label
                  className="block text-xs font-semibold text-[#131b2e] leading-4"
                  htmlFor="passwordInput"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-[#747686] pointer-events-none flex items-center justify-center">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.75}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </span>
                  <input
                    className="w-full h-11 pl-10 pr-11 rounded-lg border border-[#eaedff] bg-white text-[#131b2e] text-sm placeholder:text-[#747686] focus:outline-none focus:bg-[#f2f3ff] focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/20 transition-all duration-150"
                    id="passwordInput"
                    placeholder="Enter your password"
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-[#747686] hover:text-[#131b2e] transition-colors p-1 flex items-center justify-center cursor-pointer"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.75}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.75}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between pt-1">
                <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                  <input
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#1d4ed8] accent-[#1d4ed8] cursor-pointer"
                    id="rememberDevice"
                    type="checkbox"
                  />
                  <span className="text-[13px] text-[#434655] leading-[18px]">
                    Remember me
                  </span>
                </label>
                <Link
                  className="text-[11px] font-semibold text-[#0051d5] hover:underline"
                  href="#forgot"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit Button */}
              <button
                className="w-full h-11 rounded-lg bg-[#1d4ed8] text-white font-semibold text-base shadow-md hover:bg-[#0051d5] transition-all duration-150 active:scale-[0.99] flex items-center justify-center cursor-pointer disabled:opacity-70"
                id="submitBtn"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Log In"
                )}
              </button>
            </form>

            {/* Signup Link */}
            <div className="mt-6 pt-4 border-t border-[#eaedff] text-center">
              <p className="text-[13px] text-[#434655] leading-[18px]">
                Don't have an account?{" "}
                <Link
                  className="font-semibold text-[#0037b0] hover:underline"
                  href="/signup"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-xs font-semibold text-[#434655]">
        <p>© 2025 Finova Capital Management LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}
