// src/app/login/page.tsx
"use client";
import { useState } from "react";
import {
  LuMail,
  LuLock,
  LuEye,
  LuEyeOff,
  LuGithub,
  LuTwitter,
  LuShield,
  LuArrowRight,
} from "react-icons/lu";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here (API call)
    console.log("Login attempt", { email, password, rememberMe });
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center py-24 px-4">
      <div className="w-full max-w-md">
        {/* Card container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Top accent bar */}
          <div className="h-1.5 bg-linear-to-r from-primary-600 to-primary-400"></div>

          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3">
                <LuShield className="h-6 w-6 text-primary-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
              <p className="text-gray-500 text-sm mt-1">
                Sign in to your Stellar account
              </p>
            </div>

            {/* Login form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <LuMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password field */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <LuLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <LuEyeOff size={18} />
                    ) : (
                      <LuEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me & security note */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  Remember me
                </label>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <LuShield size={12} /> 256‑bit encrypted
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-semibold py-2.5 rounded-lg hover:bg-primary-700 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                Sign In <LuArrowRight size={18} />
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social login buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
                <LuGithub size={18} /> GitHub
              </button>
              <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
                <LuTwitter size={18} /> Twitter
              </button>
            </div>

            {/* Sign-up link */}
            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <Link
                href="/open-account"
                className="text-primary-600 font-semibold hover:underline"
              >
                Open one for free
              </Link>
            </p>
          </div>
        </div>

        {/* Security assurance */}
        <div className="text-center mt-6 text-xs text-gray-400 flex justify-center gap-4">
          <span className="flex items-center gap-1">
            <LuShield size={12} /> SOC2 certified
          </span>
          <span className="flex items-center gap-1">
            <LuLock size={12} /> MFA ready
          </span>
        </div>
      </div>
    </main>
  );
}
