import Link from "next/link";
import {
  MessageSquare, Briefcase, Image as ImageIcon, Calendar,
  Globe, HelpCircle, Lock, LogIn, UserPlus, MessageCircle,
  ChevronRight,
} from "lucide-react";

const categories = [
  { icon: MessageSquare, title: "General Chat", desc: "Casual conversations and batch banter", posts: 234, color: "bg-blue-50 border-blue-200" },
  { icon: Briefcase, title: "Career Support", desc: "Job opportunities, mentorship, and professional advice", posts: 89, color: "bg-green-50 border-green-200" },
  { icon: ImageIcon, title: "School Memories", desc: "Share your favourite school stories and moments", posts: 156, color: "bg-yellow-50 border-yellow-200" },
  { icon: Calendar, title: "Event Planning", desc: "Discuss and plan upcoming batch events", posts: 45, color: "bg-purple-50 border-purple-200" },
  { icon: Globe, title: "Life Abroad", desc: "For Michaelites living and working overseas", posts: 67, color: "bg-cyan-50 border-cyan-200" },
  { icon: HelpCircle, title: "Help & Support", desc: "Ask for help from your batch community", posts: 23, color: "bg-orange-50 border-orange-200" },
];

const recentPosts = [
  { category: "Career Support", title: "Anyone hiring in Singapore? Looking for referrals in Finance", author: "K. Selvam", time: "2 hours ago", replies: 8 },
  { category: "General Chat", title: "Happy to connect with old friends after 10 years!", author: "D. Rajah", time: "5 hours ago", replies: 23 },
  { category: "School Memories", title: "Does anyone remember our 2014 inter-batch cricket final??", author: "A. Fernando", time: "1 day ago", replies: 45 },
  { category: "Event Planning", title: "Proposal: Family beach picnic in November — thoughts?", author: "M. Krishnan", time: "2 days ago", replies: 17 },
];

const catBadge: Record<string, string> = {
  "Career Support": "bg-green-100 text-green-700",
  "General Chat": "bg-blue-100 text-blue-700",
  "School Memories": "bg-yellow-100 text-yellow-700",
  "Event Planning": "bg-purple-100 text-purple-700",
};

const catIconColor: Record<string, string> = {
  "General Chat": "text-blue-500",
  "Career Support": "text-green-600",
  "School Memories": "text-amber-600",
  "Event Planning": "text-purple-500",
  "Life Abroad": "text-cyan-600",
  "Help & Support": "text-orange-500",
};

export default function ForumPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Discussion Forum</h1>
          <p className="text-gray-300 text-lg">Connect, share, and support each other</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-sm px-4 py-2 rounded-full">
            <Lock className="w-4 h-4" strokeWidth={1.5} />
            Full forum access requires login — private for Michaelites only
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-black text-[#0d1b3e] mb-5">Forum Categories</h2>
            <div className="space-y-3">
              {categories.map((c) => (
                <Link
                  key={c.title}
                  href="/login"
                  className={`flex items-center gap-4 p-4 rounded-xl border ${c.color} hover:shadow-sm transition-all group`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <c.icon className={`w-5 h-5 ${catIconColor[c.title]}`} strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-[#0d1b3e] group-hover:text-[#8b0000] transition-colors">{c.title}</div>
                    <div className="text-gray-500 text-sm">{c.desc}</div>
                  </div>
                  <div className="text-right flex-shrink-0 flex items-center gap-2">
                    <div>
                      <div className="font-bold text-[#0d1b3e]">{c.posts}</div>
                      <div className="text-gray-400 text-xs">posts</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#8b0000] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0d1b3e] text-white rounded-2xl p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-[#c9a227]" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-lg mb-2">Join the Conversation</h3>
              <p className="text-gray-300 text-sm mb-5">Login to post, reply, and connect with your batchmates.</p>
              <Link href="/login" className="flex items-center justify-center gap-2 bg-white text-[#0d1b3e] font-bold py-2.5 rounded-xl mb-3 hover:bg-gray-100 transition-colors text-sm">
                <LogIn className="w-4 h-4" strokeWidth={2} /> Sign In
              </Link>
              <Link href="/register" className="flex items-center justify-center gap-2 border border-white/30 text-white py-2.5 rounded-xl hover:bg-white/10 transition-colors text-sm">
                <UserPlus className="w-4 h-4" strokeWidth={1.5} /> Request to Join
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#0d1b3e] mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#8b0000]" strokeWidth={1.5} /> Recent Discussions
              </h3>
              <div className="space-y-4">
                {recentPosts.map((p) => (
                  <div key={p.title} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${catBadge[p.category] || "bg-gray-100 text-gray-600"}`}>
                      {p.category}
                    </span>
                    <p className="font-medium text-sm text-[#0d1b3e] mt-1.5 leading-tight line-clamp-2">{p.title}</p>
                    <div className="flex items-center justify-between mt-1.5 text-xs text-gray-400">
                      <span>{p.author}</span>
                      <span>{p.replies} replies · {p.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 text-center">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-green-600" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-green-800 mb-1">WhatsApp Group</h3>
              <p className="text-green-600 text-sm mb-4">Request access to the official batch WhatsApp group</p>
              <button className="bg-green-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Request Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
