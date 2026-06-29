"use client";
import { useState } from "react";
import { Calendar, MapPin, Users, CheckCircle, MessageSquare } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Annual Reunion 2026",
    type: "Reunion",
    date: "August 15, 2026",
    time: "6:00 PM",
    location: "Grand Ballroom, Batticaloa",
    description: "Our grand annual reunion — meet old friends, share stories, and celebrate a decade of memories. Families welcome!",
    rsvp: 87,
    capacity: 200,
    color: "bg-[#0d1b3e]",
  },
  {
    id: 2,
    title: "Michaelites Cricket Cup 2026",
    type: "Cricket",
    date: "September 7, 2026",
    time: "8:00 AM",
    location: "Batticaloa Grounds",
    description: "A full-day cricket tournament among batch teams. Register your team and compete for the Michaelites Trophy!",
    rsvp: 45,
    capacity: 100,
    color: "bg-[#8b0000]",
  },
  {
    id: 3,
    title: "School Donation Drive",
    type: "Charity",
    date: "October 20, 2026",
    time: "9:00 AM",
    location: "St. Michael's College",
    description: "Donate school supplies, books, and equipment to support current students. Every contribution makes a difference.",
    rsvp: 32,
    capacity: 150,
    color: "bg-emerald-700",
  },
  {
    id: 4,
    title: "Family Picnic Day",
    type: "Family",
    date: "November 14, 2026",
    time: "10:00 AM",
    location: "Pasikudah Beach, Batticaloa",
    description: "A relaxed family gathering at the beach. Bring the kids, pack lunch, and enjoy a day with your batch family.",
    rsvp: 63,
    capacity: 300,
    color: "bg-amber-700",
  },
];

const typeColors: Record<string, string> = {
  Reunion: "bg-blue-100 text-blue-800",
  Cricket: "bg-red-100 text-red-800",
  Charity: "bg-green-100 text-green-800",
  Family: "bg-amber-100 text-amber-800",
};

export default function EventsPage() {
  const [rsvped, setRsvped] = useState<number[]>([]);
  const [filter, setFilter] = useState("All");

  const toggle = (id: number) =>
    setRsvped((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const filtered = filter === "All" ? events : events.filter((e) => e.type === filter);

  return (
    <>
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Events</h1>
          <p className="text-gray-300 text-lg">Reunions, cricket, family gatherings, and more</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          {["All", "Reunion", "Cricket", "Charity", "Family"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${filter === t ? "bg-[#0d1b3e] border-[#0d1b3e] text-white" : "border-gray-200 hover:border-[#0d1b3e] hover:bg-[#0d1b3e] hover:text-white"}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filtered.map((e) => (
            <div key={e.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className={`${e.color} text-white px-6 py-4 flex items-center justify-between`}>
                <div>
                  <div className="font-black text-xl">{e.title}</div>
                  <div className="text-white/70 text-sm mt-0.5 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
                    {e.date} · {e.time}
                  </div>
                </div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${typeColors[e.type]}`}>{e.type}</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} /> {e.location}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 mt-3">{e.description}</p>

                <div className="mb-5">
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
                      {e.rsvp + (rsvped.includes(e.id) ? 1 : 0)} attending
                    </span>
                    <span>Capacity: {e.capacity}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#8b0000] rounded-full transition-all"
                      style={{ width: `${Math.min(100, ((e.rsvp + (rsvped.includes(e.id) ? 1 : 0)) / e.capacity) * 100)}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => toggle(e.id)}
                  className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    rsvped.includes(e.id)
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-[#0d1b3e] text-white hover:bg-[#1a2d5a]"
                  }`}
                >
                  {rsvped.includes(e.id)
                    ? <><CheckCircle className="w-4 h-4" strokeWidth={1.5} /> RSVP'd — Click to Cancel</>
                    : <><Calendar className="w-4 h-4" strokeWidth={1.5} /> RSVP for This Event</>
                  }
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#f0f2f8] rounded-2xl p-6 text-center">
          <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/10 flex items-center justify-center mx-auto mb-3">
            <MessageSquare className="w-6 h-6 text-[#0d1b3e]" strokeWidth={1.5} />
          </div>
          <h3 className="font-black text-[#0d1b3e] text-xl mb-2">Want to Suggest an Event?</h3>
          <p className="text-gray-500 text-sm mb-4">Reach out to the committee and we'll organise it together.</p>
          <a href="/contact" className="inline-block bg-[#8b0000] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-[#a31515] transition-colors text-sm">
            Contact Committee
          </a>
        </div>
      </div>
    </>
  );
}
