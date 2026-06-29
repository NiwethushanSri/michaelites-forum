import Image from "next/image";
import { School, Target, Handshake, Globe, Trophy, Heart } from "lucide-react";

const historysections = [
  {
    title: "A Legacy That Began in 1873",
    body: `St. Michael's College National School, Batticaloa, stands as one of Sri Lanka's oldest and most respected educational institutions. Founded in 1873, the college has spent more than 150 years shaping generations of leaders, scholars, professionals, and sportsmen who have made valuable contributions both in Sri Lanka and across the world.

The journey began when Rev. Fr. Francis Xavier Philip, the first Tamil secular Catholic priest in Ceylon, arrived in Batticaloa in 1868 with a vision to establish quality English education for the youth of the Eastern Province. With determination and dedication, he founded three schools, including St. Mary's English School, which later evolved into St. Michael's College. The school was built on land generously donated by Paschal Mudaliyar, opening its doors with only 57 students, three teachers, and its first principal, Joseph Abraham.`,
  },
  {
    title: "Building a Premier Institution",
    body: `A new chapter began in 1895 when the French Jesuit missionaries assumed responsibility for the Diocese of Trincomalee. Under the leadership of Bishop Charles Lavigne and the vision of Rev. Fr. Ferdinand Bonnel, plans were made to create a first-class educational institution worthy of Batticaloa.

Construction of the present college commenced after land was acquired from numerous local landowners. On 16 July 1912, Governor Sir Henry McCallum laid the foundation stone for the magnificent building that still stands proudly today. The new St. Michael's College officially opened on 3 May 1915, becoming one of the finest educational institutions in the country.`,
  },
  {
    title: "Academic Excellence",
    body: `Throughout its history, St. Michael's College has remained committed to academic excellence, discipline, and character formation. Thousands of Michaelites have excelled in medicine, engineering, law, education, business, public service, and many other professions.

Today, the college serves over 3,000 students from Grades 1 to 13, offering education in both Tamil and English under the Ministry of Education as a National School. The college motto, "Quis ut Deus" ("Who is Like God?"), continues to inspire students to pursue knowledge with humility, faith, and integrity.`,
  },
  {
    title: "Excellence Beyond the Classroom",
    body: `St. Michael's College has earned national recognition not only for academics but also for sporting excellence. Basketball has become synonymous with the college, thanks to the efforts of Jesuit missionaries who introduced the sport to Batticaloa and established one of the region's earliest basketball courts.

Over the decades, Michaelites have won numerous All-Island championships and produced outstanding national players, earning the college the proud reputation as one of Sri Lanka's greatest basketball schools. The college has also maintained strong traditions in cricket, football, athletics, tennis, scouting, music, and leadership activities.`,
  },
  {
    title: "Resilience Through Difficult Times",
    body: `Like many institutions in the Eastern Province, St. Michael's College faced immense challenges during Sri Lanka's civil conflict. The school was temporarily closed in 1990 due to security concerns but reopened in 1992, demonstrating remarkable resilience and the unwavering commitment of its teachers, students, parents, and alumni.`,
  },
  {
    title: "A National School with a Global Family",
    body: `The college became a National School in 1994, strengthening its role as one of the country's leading educational institutions. Today, Michaelites are found across the globe in medicine, engineering, law, education, business, government, technology, research, and entrepreneurship while maintaining a deep connection with their alma mater through active alumni associations worldwide.`,
  },
  {
    title: "Celebrating More Than 150 Years",
    body: `In 2023, St. Michael's College proudly celebrated its 150th Anniversary, marking a century and a half of educational excellence, service, and tradition. The milestone celebrated the vision of its founders and honoured generations of teachers, students, staff, parents, and alumni who have built the college into one of Sri Lanka's most respected schools.`,
  },
];

export default function AboutPage() {
  return (
    <>
      {/* School Image Header */}
      <div className="relative w-full h-72 md:h-[480px] overflow-hidden">
        <Image
          src="/school-v2.jpg"
          alt="St. Michael's College, Batticaloa"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0d1b3e]/90" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 text-white max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-black leading-tight drop-shadow">
            St. Michael's College National School, Batticaloa
          </h1>
          <p className="text-[#c9a227] font-semibold text-base md:text-lg mt-1 italic drop-shadow">
            "A Story of Excellence"
          </p>
        </div>
      </div>

      {/* Page Nav */}
      <div className="bg-[#0d1b3e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap gap-4 text-sm">
          {["School History", "Our Batch", "Mission & Values", "Committee"].map((t) => (
            <a key={t} href={`#${t.toLowerCase().replace(/ /g, "-")}`}
              className="text-gray-300 hover:text-[#c9a227] transition-colors font-medium">
              {t}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* School History */}
        <div id="school-history" className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-10 bg-[#8b0000] rounded-full" />
            <div>
              <p className="text-[#8b0000] text-sm font-bold uppercase tracking-widest">Est. 1873</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0d1b3e]">School History</h2>
            </div>
          </div>

          {/* Motto banner */}
          <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="text-5xl md:text-6xl font-black text-[#c9a227] italic flex-shrink-0">✦</div>
            <div>
              <div className="text-[#c9a227] text-2xl font-black italic">"Quis ut Deus"</div>
              <div className="text-gray-300 text-sm mt-1">"Who is Like God?" — College Motto</div>
              <div className="text-gray-400 text-xs mt-2">150+ years of faith, knowledge, discipline, leadership, and service</div>
            </div>
          </div>

          {/* Timeline sections */}
          <div className="space-y-0">
            {historysections.map((s, i) => (
              <div key={s.title} className="flex gap-6 group">
                {/* Timeline spine */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full border-2 mt-1.5 flex-shrink-0 transition-colors ${i === 0 ? "bg-[#8b0000] border-[#8b0000]" : "bg-white border-[#0d1b3e] group-hover:bg-[#8b0000] group-hover:border-[#8b0000]"}`} />
                  {i < historysections.length - 1 && <div className="w-0.5 bg-gray-200 flex-1 mt-1" />}
                </div>

                {/* Content */}
                <div className="pb-10 flex-1">
                  <h3 className="text-lg font-black text-[#0d1b3e] mb-3 group-hover:text-[#8b0000] transition-colors">
                    {s.title}
                  </h3>
                  <div className="space-y-3">
                    {s.body.split("\n\n").map((para, j) => (
                      <p key={j} className="text-gray-600 leading-relaxed text-sm md:text-base">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing Spirit Box */}
          <div className="bg-[#8b0000] text-white rounded-2xl p-8 text-center mt-4">
            <h3 className="text-2xl font-black mb-3">The Michaelite Spirit</h3>
            <p className="text-red-100 leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
              For more than 150 years, St. Michael's College has stood as a symbol of faith, knowledge, discipline, leadership, and service. Every Michaelite carries forward the enduring values of the college, striving for excellence while serving society with integrity and compassion.
            </p>
            <div className="mt-6 text-[#c9a227] text-lg font-black italic">
              "Quis ut Deus" — Who is Like God?
            </div>
            <p className="text-red-200 text-sm mt-2">
              This timeless motto continues to guide generations of Michaelites, reminding them that true greatness is achieved through humility, service, and unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Our Batch */}
        <div id="our-batch" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/8 flex items-center justify-center mb-5">
              <School className="w-6 h-6 text-[#0d1b3e]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-black text-[#0d1b3e] mb-4">Our Batch History</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The A/L 2015 batch of St. Michael's College — fondly known as the <strong className="text-[#8b0000]">Michaelites</strong> — sat for their Advanced Level examinations in 2015 as one of the most vibrant and talented batches in the school's history.
              </p>
              <p>
                Today, our batchmates are spread across Sri Lanka and over 12 countries worldwide, working in fields ranging from medicine, engineering, and law to business, arts, and public service.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/8 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#0d1b3e]" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-black text-[#0d1b3e] mb-4">Purpose of the Forum</h2>
            <ul className="space-y-3 text-gray-600">
              {[
                "Reconnect with old classmates and friends",
                "Share achievements and milestones",
                "Organise reunions and batch events",
                "Support each other professionally and personally",
                "Give back to our beloved alma mater",
                "Preserve our school memories digitally",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8b0000]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8b0000]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mission & Values */}
        <div id="mission-&-values" className="mb-16">
          <h2 className="text-3xl font-black text-[#0d1b3e] mb-8 text-center">Mission & Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Handshake, title: "Unity", desc: "Bridging distances to keep our batch as one strong family." },
              { icon: Globe, title: "Inclusivity", desc: "Welcoming every Michaelite regardless of location or background." },
              { icon: Heart, title: "Giving Back", desc: "Supporting our school and those in need through charity and scholarships." },
              { icon: Trophy, title: "Excellence", desc: "Celebrating achievements and inspiring each other to reach new heights." },
            ].map((v) => (
              <div key={v.title} className="bg-[#0d1b3e] text-white rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-[#c9a227]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#c9a227]">{v.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Committee */}
        <div id="committee" className="bg-[#f0f2f8] rounded-2xl p-8">
          <h2 className="text-3xl font-black text-[#0d1b3e] mb-8 text-center">Forum Committee</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: "President", name: "TBD", stream: "Science" },
              { role: "Secretary", name: "TBD", stream: "Arts" },
              { role: "Treasurer", name: "TBD", stream: "Commerce" },
              { role: "Events Director", name: "TBD", stream: "Science" },
              { role: "Tech Director", name: "TBD", stream: "Science" },
              { role: "Charity Director", name: "TBD", stream: "Arts" },
            ].map((m) => (
              <div key={m.role} className="bg-white rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#0d1b3e] flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                  {m.name === "TBD" ? "?" : m.name[0]}
                </div>
                <div>
                  <div className="font-bold text-[#0d1b3e]">{m.name}</div>
                  <div className="text-[#8b0000] text-sm font-semibold">{m.role}</div>
                  <div className="text-gray-400 text-xs">{m.stream} Stream</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Committee positions to be filled by elected batch representatives.</p>
        </div>
      </div>
    </>
  );
}
