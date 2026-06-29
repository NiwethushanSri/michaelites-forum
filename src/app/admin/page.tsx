import { Users, Clock, Calendar, Heart, CheckCircle, XCircle, Eye, Image as ImageIcon, Plus, Newspaper, BarChart2 } from "lucide-react";

const pendingMembers = [
  { name: "Rajan Krishnamoorthy", email: "rajan@gmail.com", stream: "Science", country: "Singapore", applied: "2 days ago" },
  { name: "Anitha Selvakumar", email: "anitha@gmail.com", stream: "Arts", country: "UK", applied: "3 days ago" },
  { name: "Vikram Nathaniel", email: "vikram@gmail.com", stream: "Commerce", country: "Australia", applied: "4 days ago" },
];

const pendingPhotos = [
  { uploader: "K. Selvam", album: "School Days 2014", count: 12, submitted: "1 day ago" },
  { uploader: "A. Fernando", album: "Cricket 2023", count: 5, submitted: "2 days ago" },
];

const stats = [
  { label: "Total Members", value: "347", icon: Users, delta: "+12 this month", color: "bg-blue-50 text-blue-600" },
  { label: "Pending Approvals", value: "3", icon: Clock, delta: "Need action", color: "bg-amber-50 text-amber-600" },
  { label: "Events This Month", value: "2", icon: Calendar, delta: "2 upcoming", color: "bg-purple-50 text-purple-600" },
  { label: "Total Donations", value: "LKR 10.4L", icon: Heart, delta: "+LKR 45K today", color: "bg-red-50 text-red-600" },
];

const quickActions = [
  { icon: Plus, label: "Create Event", color: "text-purple-600" },
  { icon: Newspaper, label: "Post Announcement", color: "text-blue-600" },
  { icon: Users, label: "Manage Members", color: "text-green-600" },
  { icon: BarChart2, label: "Donation Report", color: "text-amber-600" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <div className="bg-[#0d1b3e] text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">Admin Dashboard</h1>
            <p className="text-gray-400 text-sm">Michaelites A/L 2015 Forum</p>
          </div>
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Admin</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
                <s.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="font-black text-2xl text-[#0d1b3e]">{s.value}</div>
              <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
              <div className="text-[#8b0000] text-xs mt-1 font-medium">{s.delta}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-black text-[#0d1b3e] flex items-center gap-2">
                <Users className="w-4 h-4 text-[#8b0000]" strokeWidth={1.5} /> Pending Member Requests
              </h2>
              <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">{pendingMembers.length} pending</span>
            </div>
            <div className="divide-y divide-gray-50">
              {pendingMembers.map((m) => (
                <div key={m.name} className="p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0d1b3e] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {m.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-bold text-[#0d1b3e] text-sm">{m.name}</div>
                      <div className="text-gray-400 text-xs">{m.email} · {m.stream} · {m.country}</div>
                      <div className="text-gray-300 text-xs flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" strokeWidth={1.5} /> Applied {m.applied}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5" strokeWidth={2} /> Approve
                    </button>
                    <button className="flex items-center gap-1 bg-red-50 text-red-600 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">
                      <XCircle className="w-3.5 h-3.5" strokeWidth={2} /> Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-black text-[#0d1b3e] flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-[#8b0000]" strokeWidth={1.5} /> Pending Photo Uploads
              </h2>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">{pendingPhotos.length} pending</span>
            </div>
            <div className="divide-y divide-gray-50">
              {pendingPhotos.map((p) => (
                <div key={p.uploader} className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-[#0d1b3e] text-sm">{p.album}</div>
                    <div className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                      <ImageIcon className="w-3 h-3" strokeWidth={1.5} /> {p.count} photos by {p.uploader} · {p.submitted}
                    </div>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button className="flex items-center gap-1 bg-[#0d1b3e] text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-[#1a2d5a] transition-colors">
                      <Eye className="w-3.5 h-3.5" strokeWidth={2} /> Review
                    </button>
                    <button className="flex items-center gap-1 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors">
                      <CheckCircle className="w-3.5 h-3.5" strokeWidth={2} /> Publish
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h2 className="font-black text-[#0d1b3e] mb-5">Quick Actions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickActions.map((a) => (
              <button key={a.label} className="flex flex-col items-center gap-3 p-5 bg-[#f0f2f8] rounded-xl hover:bg-[#0d1b3e] hover:text-white transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:bg-white/10 transition-colors">
                  <a.icon className={`w-5 h-5 ${a.color} group-hover:text-white transition-colors`} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors text-center">{a.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
