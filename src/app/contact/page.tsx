"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ChevronDown, Globe } from "lucide-react";

const committee = [
  { role: "President", name: "To Be Elected", email: "president@michaelites2015.com" },
  { role: "Secretary", name: "To Be Elected", email: "secretary@michaelites2015.com" },
  { role: "Events Director", name: "To Be Elected", email: "events@michaelites2015.com" },
  { role: "Charity Director", name: "To Be Elected", email: "charity@michaelites2015.com" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <>
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Contact</h1>
          <p className="text-gray-300 text-lg">Get in touch with the Forum Committee</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-black text-[#0d1b3e] mb-6">Send a Message</h2>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-[#0d1b3e] mb-2">Message Sent!</h3>
                <p className="text-gray-500">The committee will get back to you within 2–3 business days.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-[#8b0000] font-semibold hover:underline text-sm">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Your Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={1.5} />
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                  <div className="relative">
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" strokeWidth={1.5} />
                    <select required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e] text-gray-600 appearance-none">
                      <option value="">Select a subject</option>
                      <option>Membership Registration</option>
                      <option>Event Inquiry</option>
                      <option>Donation / Charity</option>
                      <option>Technical Issue</option>
                      <option>General Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e] resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#8b0000] hover:bg-[#a31515] text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" strokeWidth={2} /> Send Message
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#0d1b3e] mb-5">Forum Committee</h2>
              <div className="space-y-3">
                {committee.map((m) => (
                  <div key={m.role} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl">
                    <div className="w-10 h-10 rounded-full bg-[#0d1b3e] flex items-center justify-center text-white font-black flex-shrink-0">
                      {m.role[0]}
                    </div>
                    <div>
                      <div className="font-bold text-[#0d1b3e] text-sm">{m.name}</div>
                      <div className="text-[#8b0000] text-xs font-semibold">{m.role}</div>
                      <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                        <Mail className="w-3 h-3" strokeWidth={1.5} /> {m.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-black text-[#0d1b3e] mb-4">Connect on Social</h2>
              <div className="space-y-3">
                {[
                  { icon: Globe, label: "Facebook Group", handle: "Michaelites A/L 2015", color: "bg-blue-50 text-blue-700", iconColor: "text-blue-600" },
                  { icon: Phone, label: "WhatsApp Group", handle: "Request via form", color: "bg-green-50 text-green-700", iconColor: "text-green-600" },
                  { icon: Mail, label: "Instagram", handle: "@michaelites2015", color: "bg-pink-50 text-pink-700", iconColor: "text-pink-600" },
                ].map((s) => (
                  <div key={s.label} className={`flex items-center gap-3 p-3 rounded-xl ${s.color}`}>
                    <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <s.icon className={`w-4.5 h-4.5 ${s.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{s.label}</div>
                      <div className="text-xs opacity-70">{s.handle}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f0f2f8] rounded-2xl p-6">
              <h3 className="font-black text-[#0d1b3e] mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#8b0000]" strokeWidth={1.5} /> Our School
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                St. Michael's College<br />
                National School, Batticaloa<br />
                Est. 1890 · Eastern Province<br />
                Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
