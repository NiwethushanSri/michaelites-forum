"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    country: "", city: "", profession: "", stream: "",
    indexNumber: "", password: "", confirm: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0d1b3e] via-[#1a2d5a] to-[#0d1b3e] flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
          <div className="text-6xl mb-5">🎉</div>
          <h2 className="text-2xl font-black text-[#0d1b3e] mb-3">Registration Submitted!</h2>
          <p className="text-gray-500 leading-relaxed mb-6">
            Your membership request has been sent to the Forum Committee for review. You'll receive an email once approved — usually within 2–3 days.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700 mb-6">
            ⚠️ Your details are kept private and only visible to members after approval.
          </div>
          <Link href="/" className="inline-block bg-[#0d1b3e] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#1a2d5a] transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1b3e] via-[#1a2d5a] to-[#0d1b3e] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-4 border-[#c9a227] mb-4 shadow-xl bg-white">
            <Image src="/logo.png" alt="Michaelites Logo" width={96} height={96} className="w-full h-full object-cover" />
          </div>
          <h1 className="text-white font-black text-2xl">Join the Forum</h1>
          <p className="text-gray-300 text-sm mt-1">A/L 2015 Michaelites membership</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-6 px-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex-1 flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-[#c9a227] text-[#0d1b3e]" : "bg-white/20 text-white/50"}`}>
                {s}
              </div>
              <div className={`text-xs ${step >= s ? "text-[#c9a227]" : "text-white/40"}`}>
                {s === 1 ? "Personal" : s === 2 ? "School Info" : "Account"}
              </div>
              {s < 3 && <div className={`h-px flex-1 w-full ${step > s ? "bg-[#c9a227]" : "bg-white/20"}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="font-black text-[#0d1b3e] text-lg mb-4">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">First Name *</label>
                    <input required type="text" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Last Name *</label>
                    <input required type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Country *</label>
                    <input required type="text" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" placeholder="e.g. Sri Lanka" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">City</label>
                    <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" placeholder="e.g. Colombo" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Profession</label>
                  <input type="text" value={form.profession} onChange={(e) => setForm({ ...form, profession: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" placeholder="e.g. Software Engineer" />
                </div>
                <button type="button" onClick={() => setStep(2)}
                  className="w-full bg-[#0d1b3e] text-white font-bold py-3 rounded-xl mt-2 hover:bg-[#1a2d5a] transition-colors">
                  Next →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="font-black text-[#0d1b3e] text-lg mb-4">School Information</h2>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">A/L Stream *</label>
                  <select required value={form.stream} onChange={(e) => setForm({ ...form, stream: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e] text-gray-600">
                    <option value="">Select your stream</option>
                    <option>Science</option>
                    <option>Arts</option>
                    <option>Commerce</option>
                    <option>Technology</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Index Number (optional)</label>
                  <input type="text" value={form.indexNumber} onChange={(e) => setForm({ ...form, indexNumber: e.target.value })}
                    placeholder="Your A/L index number for verification"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-700">
                  ⚠️ Membership is open to A/L 2015 batch students of St. Michael's College, Batticaloa only. Applications are manually verified.
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)}
                    className="flex-1 border border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors">
                    ← Back
                  </button>
                  <button type="button" onClick={() => setStep(3)}
                    className="flex-1 bg-[#0d1b3e] text-white font-bold py-3 rounded-xl hover:bg-[#1a2d5a] transition-colors">
                    Next →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="font-black text-[#0d1b3e] text-lg mb-4">Create Account</h2>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Password *</label>
                  <input required type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="At least 8 characters"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Confirm Password *</label>
                  <input required type="password" value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                    placeholder="Re-enter password"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" required className="mt-1" />
                  <label className="text-xs text-gray-600">I confirm I am a member of St. Michael's College A/L 2015 batch and agree to the community guidelines.</label>
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(2)}
                    className="flex-1 border border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors">
                    ← Back
                  </button>
                  <button type="submit"
                    className="flex-1 bg-[#8b0000] text-white font-bold py-3 rounded-xl hover:bg-[#a31515] transition-colors">
                    Submit Request
                  </button>
                </div>
              </div>
            )}
          </form>

          <p className="text-center text-gray-500 text-xs mt-5">
            Already have an account?{" "}
            <Link href="/login" className="text-[#8b0000] font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
