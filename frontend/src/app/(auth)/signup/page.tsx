"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password requirement checks
  const requirements = useMemo(() => {
    return {
      length: password.length >= 8,
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      mixedCase: /[a-z]/.test(password) && /[A-Z]/.test(password),
    };
  }, [password]);

  const passwordScore = useMemo(() => {
    return [
      requirements.length,
      requirements.number,
      requirements.special,
      requirements.mixedCase,
    ].filter(Boolean).length;
  }, [requirements]);

  const strengthConfig = useMemo(() => {
    if (password.length === 0) {
      return { text: "Enter password", color: "text-[#434655]", barBg: "bg-slate-200", width: "w-0" };
    }
    if (passwordScore <= 1) {
      return { text: "Weak", color: "text-[#ba1a1a]", barBg: "bg-[#ba1a1a]", width: "w-1/4" };
    }
    if (passwordScore <= 3) {
      return { text: "Good", color: "text-[#0051d5]", barBg: "bg-[#0051d5]", width: "w-3/4" };
    }
    return { text: "Strong", color: "text-[#006a48]", barBg: "bg-[#006a48]", width: "w-full" };
  }, [password, passwordScore]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-[#faf8ff] text-[#131b2e] min-h-screen flex flex-col justify-between font-sans selection:bg-[#1d4ed8] selection:text-white">
      {/* Main Signup Card */}
      <main className="flex-1 flex items-center justify-center p-4 w-full">
        <div className="w-full max-w-md mx-auto py-6">
          <div className="bg-white rounded-xl shadow-xl border border-[#eaedff] p-6 lg:p-8">
            {/* Title Section */}
            <div className="flex flex-col items-center text-center space-y-1 mb-6">
              <h1 className="text-2xl font-semibold text-[#131b2e] tracking-tight leading-8">
                Create your account
              </h1>
              <p className="text-sm text-[#434655] leading-5">
                Start managing your day-to-day expenses simply
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="space-y-1">
                <label
                  className="block text-xs font-semibold text-[#434655] leading-4"
                  htmlFor="fullName"
                >
                  Full Name
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
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </span>
                  <input
                    className="w-full h-11 pl-10 pr-4 bg-[#f2f3ff] rounded-lg text-[#131b2e] text-sm placeholder:text-[#747686] focus:outline-none focus:bg-white focus:border-[#0037b0] focus:ring-2 focus:ring-[#0037b0]/20 transition-all duration-150 border border-transparent focus:border-[#0037b0]"
                    id="fullName"
                    placeholder="Enter your full name"
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label
                  className="block text-xs font-semibold text-[#434655] leading-4"
                  htmlFor="email"
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
                    className="w-full h-11 pl-10 pr-4 bg-[#f2f3ff] rounded-lg text-[#131b2e] text-sm placeholder:text-[#747686] focus:outline-none focus:bg-white focus:border-[#0037b0] focus:ring-2 focus:ring-[#0037b0]/20 transition-all duration-150 border border-transparent focus:border-[#0037b0]"
                    id="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    className="block text-xs font-semibold text-[#434655] leading-4"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  {password.length > 0 && (
                    <span className={`text-[11px] font-semibold ${strengthConfig.color}`}>
                      {strengthConfig.text}
                    </span>
                  )}
                </div>
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
                    className="w-full h-11 pl-10 pr-10 bg-[#f2f3ff] rounded-lg text-[#131b2e] text-sm placeholder:text-[#747686] focus:outline-none focus:bg-white focus:border-[#0037b0] focus:ring-2 focus:ring-[#0037b0]/20 transition-all duration-150 border border-transparent focus:border-[#0037b0]"
                    id="password"
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

                {/* Password Strength Meter Bar */}
                {password.length > 0 && (
                  <div className="w-full bg-[#eaedff] h-1 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full ${strengthConfig.barBg} transition-all duration-300 ${strengthConfig.width}`}
                    />
                  </div>
                )}

                {/* Password Requirements Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                      requirements.length
                        ? "bg-[#004f35] text-white"
                        : "bg-[#eaedff] text-[#434655]"
                    }`}
                  >
                    {requirements.length ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#747686]" />
                    )}
                    8+ chars
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                      requirements.mixedCase
                        ? "bg-[#004f35] text-white"
                        : "bg-[#eaedff] text-[#434655]"
                    }`}
                  >
                    {requirements.mixedCase ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#747686]" />
                    )}
                    Aa (mixed case)
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                      requirements.number
                        ? "bg-[#004f35] text-white"
                        : "bg-[#eaedff] text-[#434655]"
                    }`}
                  >
                    {requirements.number ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#747686]" />
                    )}
                    1+ number
                  </span>

                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                      requirements.special
                        ? "bg-[#004f35] text-white"
                        : "bg-[#eaedff] text-[#434655]"
                    }`}
                  >
                    {requirements.special ? (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#747686]" />
                    )}
                    1+ symbol
                  </span>
                </div>
              </div>

              {/* Terms of Service Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer select-none group">
                  <div className="relative flex items-center pt-0.5">
                    <input
                      className="w-4 h-4 rounded text-[#0037b0] accent-[#0037b0] cursor-pointer"
                      id="tos-agree"
                      required
                      type="checkbox"
                      checked={agreedToTerms}
                      onChange={(e) => setAgreedToTerms(e.target.checked)}
                    />
                  </div>
                  <span className="text-[13px] text-[#434655] leading-tight">
                    I agree to the{" "}
                    <a className="text-[#0037b0] hover:underline font-medium" href="#terms">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a className="text-[#0037b0] hover:underline font-medium" href="#privacy">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  className="w-full h-11 bg-[#0037b0] hover:bg-[#1d4ed8] text-white font-semibold text-base rounded-lg shadow-md hover:shadow-lg active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Create Free Account"
                  )}
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="mt-6 pt-4 border-t border-[#eaedff] text-center text-sm text-[#434655]">
              Already have an account?{" "}
              <Link
                className="font-semibold text-[#0037b0] hover:text-[#1d4ed8] transition-colors hover:underline underline-offset-4 ml-1"
                href="/login"
              >
                Log in
              </Link>
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
