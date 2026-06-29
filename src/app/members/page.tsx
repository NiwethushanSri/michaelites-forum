import Link from "next/link";
import { Search, MapPin, Briefcase, GraduationCap, Lock, UserPlus, Filter } from "lucide-react";

const members = [
  { name: "Ajith Fernando", country: "Australia", city: "Sydney", profession: "Software Engineer", stream: "Science" },
  { name: "Priya Nanthakumar", country: "United Kingdom", city: "London", profession: "Medical Doctor", stream: "Science" },
  { name: "Dinesh Rajah", country: "Sri Lanka", city: "Colombo", profession: "Lawyer", stream: "Arts" },
  { name: "Kavitha Selvam", country: "Canada", city: "Toronto", profession: "Civil Engineer", stream: "Science" },
  { name: "Suresh Balasingham", country: "Germany", city: "Berlin", profession: "Business Analyst", stream: "Commerce" },
  { name: "Malar Krishnan", country: "Sri Lanka", city: "Batticaloa", profession: "Teacher", stream: "Arts" },
];

const countries = ["All Countries", "Sri Lanka", "Australia", "United Kingdom", "Canada", "Germany"];
const professions = ["All Professions", "Engineering", "Medicine", "Law", "Education", "Business", "IT"];
const streams = ["All Streams", "Science", "Arts", "Commerce"];

const streamColors: Record<string, string> = {
  Science: "bg-blue-50 text-blue-700",
  Arts: "bg-purple-50 text-purple-700",
  Commerce: "bg-amber-50 text-amber-700",
};

export default function MembersPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Members Directory</h1>
          <p className="text-gray-300 text-lg">Find your batchmates around the world</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-sm px-4 py-2 rounded-full">
            <Lock className="w-4 h-4" strokeWidth={1.5} />
            Full directory visible to logged-in members only
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={1.5} />
              <input type="text" placeholder="Search by name..." className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e]" />
            </div>
            {[countries, professions, streams].map((opts, i) => (
              <div key={i} className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" strokeWidth={1.5} />
                <select className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#0d1b3e] text-gray-600 appearance-none">
                  {opts.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0d1b3e] to-[#1a2d5a] flex items-center justify-center text-white font-black text-xl flex-shrink-0">
                  {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#0d1b3e] truncate">{m.name}</h3>
                  <p className="text-[#8b0000] text-sm font-medium flex items-center gap-1 mt-0.5">
                    <Briefcase className="w-3.5 h-3.5" strokeWidth={1.5} /> {m.profession}
                  </p>
                  <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" strokeWidth={1.5} /> {m.country} · {m.city}
                  </p>
                  <span className={`inline-flex items-center gap-1 mt-2 text-xs px-2 py-0.5 rounded-full font-medium ${streamColors[m.stream]}`}>
                    <GraduationCap className="w-3 h-3" strokeWidth={1.5} /> {m.stream}
                  </span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-50 flex gap-2">
                <button className="flex-1 text-xs border border-[#0d1b3e]/20 text-[#0d1b3e] py-1.5 rounded-lg hover:bg-[#0d1b3e] hover:text-white transition-all font-medium">
                  View Profile
                </button>
                <button className="flex-1 text-xs border border-[#8b0000]/20 text-[#8b0000] py-1.5 rounded-lg hover:bg-[#8b0000] hover:text-white transition-all font-medium">
                  Connect
                </button>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center min-h-[180px]">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            </div>
            <p className="text-gray-500 text-sm mb-4"><strong>340+ more members</strong> visible after login</p>
            <Link href="/login" className="bg-[#0d1b3e] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#1a2d5a] transition-colors flex items-center gap-2">
              <UserPlus className="w-4 h-4" strokeWidth={1.5} /> Sign In to See All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
