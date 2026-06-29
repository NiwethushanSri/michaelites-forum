import Link from "next/link";
import Image from "next/image";
import {
  Users, Calendar, Image as ImageIcon, Heart, Newspaper, MessageSquare,
  Globe, ChevronRight, MapPin, Star,
} from "lucide-react";

const stats = [
  { value: "350+", label: "Members" },
  { value: "12+", label: "Countries" },
  { value: "10", label: "Years Connected" },
  { value: "5+", label: "Charity Projects" },
];

const features = [
  { icon: Users, title: "Members Directory", desc: "Find your batchmates worldwide. Filter by country, profession, or A/L stream.", href: "/members" },
  { icon: Calendar, title: "Events", desc: "Reunions, cricket matches, family gatherings and school support events.", href: "/events" },
  { icon: ImageIcon, title: "Gallery", desc: "Relive school memories, old photos, and event albums with your batch.", href: "/gallery" },
  { icon: Heart, title: "Projects & Charity", desc: "School donations, student scholarships, and medical helping projects.", href: "/projects" },
  { icon: Newspaper, title: "News & Updates", desc: "Batch updates, school news, and member achievements.", href: "/news" },
  { icon: MessageSquare, title: "Forum", desc: "Career support, school memories, event planning and general discussions.", href: "/forum" },
];

const upcomingEvents = [
  { date: "Aug 15, 2026", title: "Annual Reunion 2026", location: "Batticaloa", type: "Reunion" },
  { date: "Sep 7, 2026", title: "Michaelites Cricket Cup", location: "Batticaloa Grounds", type: "Cricket" },
  { date: "Oct 20, 2026", title: "School Donation Drive", location: "St. Michael's College", type: "Charity" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0d1b3e] via-[#1a2d5a] to-[#0d1b3e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <div className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden mb-8 shadow-2xl border-4 border-[#c9a227] bg-white">
              <Image src="/logo.png" alt="Michaelites A/L 2015 Forum" width={112} height={112} className="w-full h-full object-cover" priority />
            </div>

            <div className="inline-flex items-center gap-2 bg-white/10 text-[#c9a227] text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-[#c9a227]/30">
              <Star className="w-3.5 h-3.5" />
              ST. MICHAEL'S COLLEGE, BATTICALOA
              <Star className="w-3.5 h-3.5" />
            </div>

            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Michaelites <span className="text-[#c9a227]">A/L 2015</span><br />Forum
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 italic mb-8 font-light">
              "United by School, Connected for Life."
            </p>
            <p className="text-gray-400 max-w-xl mb-10 text-lg leading-relaxed">
              Connecting the A/L 2015 Michaelites worldwide. Stay in touch with your batchmates, celebrate achievements, and give back to your alma mater.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-[#8b0000] hover:bg-[#a31515] text-white font-bold px-8 py-3.5 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl">
                Join the Forum
              </Link>
              <Link href="/about" className="border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#8b0000] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-[#ffd700]">{s.value}</div>
                <div className="text-sm text-red-100 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#0d1b3e] mb-3">Everything in One Place</h2>
          <p className="text-gray-500 text-lg">Your complete alumni community platform</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#8b0000]/20 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/8 flex items-center justify-center mb-4 group-hover:bg-[#8b0000]/10 transition-colors">
                <f.icon className="w-6 h-6 text-[#0d1b3e] group-hover:text-[#8b0000] transition-colors" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#0d1b3e] mb-2 group-hover:text-[#8b0000] transition-colors">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              <div className="mt-4 text-[#8b0000] text-sm font-semibold flex items-center gap-1">
                Explore <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[#f0f2f8] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-black text-[#0d1b3e] mb-1">Upcoming Events</h2>
              <p className="text-gray-500">Don't miss out — RSVP today</p>
            </div>
            <Link href="/events" className="text-[#8b0000] font-semibold hover:underline hidden sm:flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-[#0d1b3e] text-white px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 opacity-70" strokeWidth={1.5} />
                    <span className="text-sm font-medium">{e.date}</span>
                  </div>
                  <span className="text-xs bg-[#c9a227] text-[#0d1b3e] font-bold px-2 py-0.5 rounded-full">{e.type}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#0d1b3e] text-lg mb-1">{e.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} /> {e.location}
                  </p>
                  <Link href="/events" className="inline-block bg-[#8b0000] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#a31515] transition-colors">
                    RSVP Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#8b0000] to-[#a31515] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Reconnect?</h2>
          <p className="text-red-100 text-lg mb-8">
            Join hundreds of your batchmates already on the platform. Registration requires admin approval to keep our community private and safe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-white text-[#8b0000] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-all text-lg">
              Request to Join
            </Link>
            <Link href="/contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all text-lg">
              Contact Committee
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
