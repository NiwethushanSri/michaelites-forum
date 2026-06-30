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

      {/* Batch Business Promotions – Scrolling Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto mb-8 text-center">
          <span className="inline-block bg-[#8b0000]/10 text-[#8b0000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Our Batch Businesses
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-[#0d1b3e]">
            Michaelites <span className="text-[#c9a227]">Entrepreneurs</span>
          </h2>
          <p className="text-gray-500 text-sm mt-2">Support your batchmates — click a banner to learn more</p>
        </div>

        {/* Scrolling strip */}
        <div className="overflow-hidden relative">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="flex animate-marquee" style={{ width: "max-content" }}>
            {/* Duplicate banners so the scroll is seamless */}
            {[...Array(2)].map((_, dupIdx) => (
              <div key={dupIdx} className="flex gap-6 pr-6">

                {/* ── Doctor Siddha ── */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                  style={{ height: 160 }}
                >
                  <Image
                    src="/banners/doctor-siddha.jpg"
                    alt="Doctor Siddha – Amukkara Chooranam"
                    width={480}
                    height={160}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: 160 }}
                  />
                </a>

                {/* ── Oothal Decoration ── */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                  style={{ height: 160 }}
                >
                  <Image
                    src="/banners/oothal-decoration.jpg"
                    alt="Oothal Decoration – Event Planner & Decoration"
                    width={480}
                    height={160}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: 160 }}
                  />
                </a>

                {/* ── Forge9x ── */}
                <a
                  href="https://forge9x.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                  style={{ height: 160 }}
                >
                  <Image
                    src="/banners/forge9x.jpg"
                    alt="Forge9x – Web, AI & Mobile Development"
                    width={480}
                    height={160}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: 160 }}
                  />
                </a>

                {/* ── Studio Echo Mirrors ── */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                  style={{ height: 160 }}
                >
                  <Image
                    src="/banners/studio-echo-mirrors.jpg"
                    alt="Studio Echo Mirrors – Professional Photography Services"
                    width={480}
                    height={160}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: 160 }}
                  />
                </a>

                {/* ── Mangala Matrimony ── */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                  style={{ height: 160 }}
                >
                  <Image
                    src="/banners/mangala-matrimony.jpg"
                    alt="Mangala – Sri Lankan Matrimony"
                    width={480}
                    height={160}
                    className="h-full w-auto object-contain"
                    style={{ maxHeight: 160 }}
                  />
                </a>

                {/* ── Placeholder slot ── */}
                <div
                  className="flex-shrink-0 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 text-center"
                  style={{ width: 320, height: 160 }}
                >
                  <Globe className="w-7 h-7 text-gray-300" strokeWidth={1.5} />
                  <p className="text-xs text-gray-400 font-semibold">Your Business Here</p>
                  <p className="text-xs text-gray-400">Contact the committee to advertise</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aathallers Vlog Promo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1b3e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#c9a227]/20 text-[#c9a227] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Michaelites on YouTube
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
              Aathallers <span className="text-[#c9a227]">Vlog</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Our 2015 batch friends doing what they do best, entertainment, fun challenges, travel &amp; adventure.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {[
              { id: "BUWgp61glYU", title: "Aathallers Vlog – Episode 1" },
              { id: "dacD2_Lq4ps", title: "Aathallers Vlog – Episode 2" },
              { id: "knhql0vJT-M", title: "Aathallers Vlog – Episode 3" },
            ].map((video) => (
              <div key={video.id} className="rounded-2xl overflow-hidden shadow-2xl border border-[#c9a227]/20 bg-black aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@AathallersvlogOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
              Subscribe on YouTube
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold px-7 py-3.5 rounded-xl transition-all text-base shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
              Follow on Facebook
            </a>
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
