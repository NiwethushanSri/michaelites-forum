"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b3e] via-[#1a2d5a] to-[#0d1b3e] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-4 border-[#c9a227] mb-4 shadow-xl bg-white">
            <Image src="/logo.png" alt="Michaelites Logo" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white font-black text-2xl">Welcome Back</h1>
          <p className="text-gray-300 text-sm mt-1">Sign in to your Michaelites Forum account</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0d1b3e] focus:ring-2 focus:ring-[#0d1b3e]/10"
              />
            </div>
            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <a href="#" className="text-xs text-[#8b0000] hover:underline">Forgot password?</a>
              </div>
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0d1b3e] focus:ring-2 focus:ring-[#0d1b3e]/10"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#0d1b3e] hover:bg-[#1a2d5a] text-white font-bold py-3.5 rounded-xl transition-colors text-sm"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Not yet a member?{" "}
              <Link href="/register" className="text-[#8b0000] font-semibold hover:underline">
                Request to join
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          For members of St. Michael's College A/L 2015 batch only.<br />
          Membership requires admin approval.
        </p>
      </div>
    </div>
  );
}
