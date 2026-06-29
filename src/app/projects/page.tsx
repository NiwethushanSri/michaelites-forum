import { BookOpen, GraduationCap, Heart, ShoppingBag, Users, TrendingUp, Lightbulb } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "School Library Renovation",
    type: "School Donation",
    icon: BookOpen,
    description: "Renovating and restocking the school library with new books, furniture, and digital resources for current students.",
    goal: 500000,
    raised: 342000,
    donors: 78,
  },
  {
    id: 2,
    title: "A/L Scholarship Fund 2026",
    type: "Scholarship",
    icon: GraduationCap,
    description: "Providing financial support to 5 deserving students from underprivileged backgrounds to complete their A/L education.",
    goal: 300000,
    raised: 195000,
    donors: 45,
  },
  {
    id: 3,
    title: "Medical Aid for Batchmates",
    type: "Medical Aid",
    icon: Heart,
    description: "Emergency medical support fund for batchmates and their immediate family members facing serious health challenges.",
    goal: 400000,
    raised: 400000,
    donors: 102,
    completed: true,
  },
  {
    id: 4,
    title: "School Sports Equipment",
    type: "School Donation",
    icon: ShoppingBag,
    description: "Donating cricket equipment, footballs, and sports gear to support the school's sports programs.",
    goal: 150000,
    raised: 67000,
    donors: 31,
  },
];

const typeColors: Record<string, string> = {
  "School Donation": "bg-blue-50 text-blue-700",
  Scholarship: "bg-purple-50 text-purple-700",
  "Medical Aid": "bg-red-50 text-red-700",
};

function formatLKR(n: number) {
  return "LKR " + n.toLocaleString();
}

export default function ProjectsPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Projects & Charity</h1>
          <p className="text-gray-300 text-lg">Giving back to our school and our community</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: "4", label: "Active Projects", icon: TrendingUp },
            { value: "LKR 10L+", label: "Total Raised", icon: Heart },
            { value: "256", label: "Total Donors", icon: Users },
            { value: "12", label: "Lives Impacted", icon: GraduationCap },
          ].map((s) => (
            <div key={s.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#8b0000]/10 flex items-center justify-center mx-auto mb-2">
                <s.icon className="w-5 h-5 text-[#8b0000]" strokeWidth={1.5} />
              </div>
              <div className="text-xl font-black text-[#8b0000]">{s.value}</div>
              <div className="text-gray-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((p) => {
            const pct = Math.min(100, Math.round((p.raised / p.goal) * 100));
            return (
              <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/8 flex items-center justify-center flex-shrink-0">
                        <p.icon className="w-6 h-6 text-[#0d1b3e]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-black text-[#0d1b3e] text-lg leading-tight">{p.title}</h3>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[p.type] || "bg-gray-100 text-gray-600"}`}>
                          {p.type}
                        </span>
                      </div>
                    </div>
                    {p.completed && (
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
                        Completed
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.description}</p>

                  <div className="mb-5">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-bold text-[#0d1b3e]">{formatLKR(p.raised)}</span>
                      <span className="text-gray-400">of {formatLKR(p.goal)}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${p.completed ? "bg-green-500" : "bg-[#8b0000]"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                      <span>{pct}% reached</span>
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" strokeWidth={1.5} /> {p.donors} donors</span>
                    </div>
                  </div>

                  <button
                    className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      p.completed
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-[#8b0000] hover:bg-[#a31515] text-white"
                    }`}
                    disabled={p.completed}
                  >
                    {p.completed ? "Project Completed" : <><Heart className="w-4 h-4" strokeWidth={1.5} /> Donate to This Project</>}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-[#0d1b3e] text-white rounded-2xl p-8 text-center">
          <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-7 h-7 text-[#c9a227]" strokeWidth={1.5} />
          </div>
          <h3 className="font-black text-2xl mb-3">Propose a Project</h3>
          <p className="text-gray-300 text-sm mb-6 max-w-xl mx-auto">
            Have an idea for a charity project or school improvement initiative? Share it with the committee and we'll evaluate and launch it together.
          </p>
          <a href="/contact" className="inline-block bg-[#c9a227] hover:bg-yellow-400 text-[#0d1b3e] font-bold px-6 py-3 rounded-xl transition-colors">
            Submit Your Idea
          </a>
        </div>
      </div>
    </>
  );
}
