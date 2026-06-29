import { Trophy, School, Users, Newspaper, Mail, ChevronRight } from "lucide-react";

const news = [
  {
    id: 1,
    category: "Achievement",
    icon: Trophy,
    title: "Priya Nanthakumar Becomes Consultant Surgeon in UK",
    excerpt: "Our batchmate Dr. Priya Nanthakumar has been appointed as Consultant Surgeon at NHS Trust in London — a proud moment for all Michaelites!",
    date: "June 20, 2026",
    author: "Forum Committee",
  },
  {
    id: 2,
    category: "School News",
    icon: School,
    title: "St. Michael's College Wins Provincial Sports Award",
    excerpt: "Our alma mater has been awarded the Provincial Best School in Sports award for 2025-2026, continuing its proud athletic tradition.",
    date: "June 15, 2026",
    author: "Forum Committee",
  },
  {
    id: 3,
    category: "Batch Update",
    icon: Users,
    title: "Library Renovation Project Reaches 68% Target",
    excerpt: "Thanks to generous contributions from 78 batchmates, we've raised LKR 342,000 of our LKR 500,000 goal. Keep the momentum going!",
    date: "June 10, 2026",
    author: "Forum Committee",
  },
  {
    id: 4,
    category: "Achievement",
    icon: Trophy,
    title: "Ajith Fernando Launches Tech Startup in Sydney",
    excerpt: "Batchmate Ajith Fernando has co-founded a fintech startup in Sydney that recently received seed funding. Congratulations!",
    date: "June 5, 2026",
    author: "Forum Committee",
  },
  {
    id: 5,
    category: "Batch Update",
    icon: Users,
    title: "Annual Reunion 2026 — Early Bird Registration Open",
    excerpt: "RSVP for our biggest reunion yet. Venue confirmed, activities planned. First 50 registrations receive exclusive batch merchandise.",
    date: "May 28, 2026",
    author: "Events Team",
  },
  {
    id: 6,
    category: "School News",
    icon: School,
    title: "New Computer Lab Inauguration — Batch Contribution Featured",
    excerpt: "St. Michael's College inaugurated a new computer lab, with our batch's past donation of 10 computers proudly acknowledged.",
    date: "May 15, 2026",
    author: "Forum Committee",
  },
];

const catStyles: Record<string, { bg: string; text: string; badge: string }> = {
  Achievement:  { bg: "bg-amber-50", text: "text-amber-700", badge: "bg-amber-100 text-amber-700" },
  "School News": { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-700" },
  "Batch Update": { bg: "bg-red-50", text: "text-red-700", badge: "bg-red-100 text-red-700" },
};

export default function NewsPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3">News & Announcements</h1>
          <p className="text-gray-300 text-lg">Batch updates, school news, and member achievements</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Achievement", "School News", "Batch Update"].map((t) => (
            <button key={t} className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-[#0d1b3e] hover:bg-[#0d1b3e] hover:text-white transition-all">
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((n) => {
            const style = catStyles[n.category] || { bg: "bg-gray-50", text: "text-gray-700", badge: "bg-gray-100 text-gray-600" };
            return (
              <article key={n.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer">
                <div className={`${style.bg} h-28 flex items-center justify-center`}>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                    <n.icon className={`w-7 h-7 ${style.text}`} strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${style.badge}`}>{n.category}</span>
                    <span className="text-xs text-gray-400">{n.date}</span>
                  </div>
                  <h3 className="font-black text-[#0d1b3e] leading-tight mb-2 group-hover:text-[#8b0000] transition-colors">{n.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{n.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400">By {n.author}</span>
                    <span className="text-[#8b0000] text-sm font-semibold flex items-center gap-0.5">
                      Read more <ChevronRight className="w-4 h-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <div className="bg-[#f0f2f8] rounded-2xl p-6 inline-block">
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-3 justify-center">
              <Mail className="w-4 h-4" strokeWidth={1.5} /> Get batch updates delivered to your inbox
            </div>
            <div className="flex gap-3 max-w-sm mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#0d1b3e]" />
              <button className="bg-[#0d1b3e] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a2d5a] transition-colors flex items-center gap-1">
                Subscribe <Newspaper className="w-3.5 h-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
