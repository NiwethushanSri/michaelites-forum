import { BookOpen, Star, Heart, Award, Clock, Flame, MessageSquare, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const principals = [
  { name: "Mr. Joseph Abraham", period: "Head Master 1876 – 1924", role: "Head Master", quote: "Labour of love, unswervingly given, for nearly fifty years…", rip: false },
  { name: "Fr. Charles Royer S.J.", period: "Superior of Mission 1896 – 1903", role: "Superior", quote: "Behold the dreamer cometh", rip: false },
  { name: "Fr. Gaston Robichez S.J.", period: "Principal 1903 – 1916", role: "Principal", quote: "The heart that gave the impulse and direction to the dream", rip: false },
  { name: "Fr. Ferdinand Bonnel S.J.", period: "Principal 1914–1917 · Rector 1927–1930 · 1932–1938", role: "Principal & Rector", quote: "The hand that made the dream materialise", rip: false },
  { name: "Fr. Charles Reichard S.J.", period: "Principal 1917 – 1925", role: "Principal", quote: "I looked into the sky… and the sons of the Eastern Sun shone more brightly all over the Island.", rip: false },
  { name: "Fr. Maurice Bourey S.J.", period: "Rector 1930–1932 · Principal 1927–1932", role: "Principal & Rector", quote: "Be so short a while he achieved long life", rip: false },
  { name: "Fr. Santiago Marian S.J.", period: "Principal 1933 – 1940", role: "Principal", quote: "My son, I am proud of you", rip: false },
  { name: "Fr. J. Aloysius Mary S.J.", period: "R.I.P.", role: "Principal", quote: "", rip: true },
  { name: "Fr. A. Emmanuel Crowther S.J.", period: "Rector 1938–1948 · Principal 1948–1957", role: "Rector & Principal", quote: "St. Michael's cross for the best", rip: false },
  { name: "Fr. Joseph V. Semmons S.J.", period: "Rector 1948 – 1955", role: "Rector", quote: "The witness that withstood the highest education wind", rip: false },
  { name: "Fr. Geo. H. Raymond S.J.", period: "Rector 1955–1959 · Principal 1957–1959", role: "Rector & Principal", quote: "Great things happened", rip: false },
  { name: "Fr. B. Harry Miller S.J.", period: "Rector 1959–1960 · Principal 1959–1960", role: "Rector & Principal", quote: "I worked, struggled, and squeezed for you", rip: false },
  { name: "Fr. J.W. Lange S.J.", period: "Teacher & Superior of Jesuits", role: "Teacher & Superior", quote: "", rip: false },
  { name: "Fr. Vincent de Paul Gnanapragasam S.J.", period: "Principal 1961 – 1962", role: "Principal", quote: "The whisper that awakens memories of zest", rip: false },
  { name: "Fr. Paul N. Peiris S.J.", period: "Principal 1963 – 1976", role: "Principal", quote: "The mighty River that gave greater glory", rip: false },
  { name: "Fr. Frederick J. Leon S.J.", period: "Rector 1970", role: "Rector", quote: "Too late have I loved thee", rip: false },
  { name: "Mr. K.M.T. Somander B.Sc", period: "Performing Principal", role: "Performing Principal", quote: "The Good Samaritan", rip: false },
  { name: "Br. A.M. Thomas S.J.", period: "Principal – Centennial Year", role: "Principal", quote: "The spirit, that set the flame of centennial affairs", rip: false },
  { name: "Mr. T. Selvasargam", period: "Performing Principal – Centennial Year", role: "Performing Principal", quote: "Nothing but duty matters", rip: false },
  { name: "Mr. S. Emmanuel B.A.", period: "Performing Principal – Centennial Year", role: "Performing Principal", quote: "", rip: false },
  { name: "Fr. P.N. Peiris S.J.", period: "", role: "Principal", quote: "", rip: false },
  { name: "Fr. Alphonse Thiagarajah", period: "", role: "Principal", quote: "", rip: false },
  { name: "Fr. Peter Thurairatnam", period: "R.I.P.", role: "Principal", quote: "", rip: true },
  { name: "Fr. Rex Schomolai", period: "", role: "Principal", quote: "", rip: false },
  { name: "Fr. Santiago Marian S.J.", period: "R.I.P.", role: "Principal", quote: "", rip: true },
  { name: "Mgr. Jerome D'Su", period: "", role: "Superior", quote: "", rip: false },
  { name: "Fr. J.L. Daoud S.J.", period: "", role: "Principal", quote: "", rip: false },
  { name: "Fr. Lessen A. Seller", period: "", role: "Teacher", quote: "", rip: false },
  { name: "Fr. Francis M. Seller", period: "R.I.P.", role: "Teacher", quote: "", rip: true },
  { name: "Fr. Raymond Arulanandam", period: "", role: "Principal", quote: "", rip: false },
  { name: "Fr. A. Lameras", period: "R.I.P.", role: "Principal", quote: "", rip: true },
  { name: "Fr. Juvence Queste S.J.", period: "Teacher at St. Michael's", role: "Teacher", quote: "", rip: false },
  { name: "Fr. J.L. Clarkson S.J.", period: "Prefect of Discipline, 1953", role: "Prefect", quote: "", rip: false },
  { name: "Fr. W.H. Macnair S.J.", period: "Prefect of Discipline, 1953", role: "Prefect & Bursar", quote: "", rip: false },
  { name: "Fr. J.J. Heaney S.J.", period: "Teacher & Bursar", role: "Teacher & Bursar", quote: "", rip: false },
  { name: "Sr. Celina F.M.M.", period: "", role: "Sister", quote: "", rip: false },
  { name: "Sr. M. Angelina F.M.M.", period: "", role: "Sister", quote: "", rip: false },
  { name: "Sr. M. Mangalam F.M.M.", period: "", role: "Sister", quote: "", rip: false },
];

const sections = [
  { icon: BookOpen, label: "Biography" },
  { icon: Award, label: "Achievements" },
  { icon: Clock, label: "Legacy Timeline" },
  { icon: MessageSquare, label: "Alumni Messages" },
  { icon: ImageIcon, label: "Historical Gallery" },
  { icon: Heart, label: "Memories & Testimonials" },
  { icon: Star, label: "Awards & Recognition" },
  { icon: Flame, label: "Tribute Wall" },
];

export default function PrincipalsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#0d1b3e] via-[#1a2d5a] to-[#0d1b3e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 border border-[#c9a227]/30">
            <Star className="w-3.5 h-3.5" />
            St. Michael's College National School, Batticaloa
            <Star className="w-3.5 h-3.5" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            Tribute to Our<br />
            <span className="text-[#c9a227]">Past Principals</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 italic mb-8 font-light">
            "Honouring the Visionaries Who Built Our Legacy."
          </p>
          <div className="w-20 h-1 bg-[#c9a227] mx-auto rounded-full mb-10" />
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            For over a century, St. Michael's College National School, Batticaloa, has stood as a symbol of excellence in education, discipline, leadership, faith, and service. Behind every milestone achieved, every generation inspired, and every success celebrated stands the dedication and vision of the distinguished Principals who have led this great institution.
          </p>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-1.5 bg-gradient-to-r from-[#8b0000] via-[#c9a227] to-[#8b0000]" />

      {/* Full Composite Board */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#f9f6ef]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-[#0d1b3e] mb-2">The Principals Board</h2>
            <p className="text-gray-500">St. Michael's College National School, Batticaloa</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#c9a227]/40">
            <Image src="/principals-board.jpg" alt="St. Michael's College Past Principals Board" width={1400} height={800} className="w-full h-auto object-cover" />
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 italic">All old images reconstructed by Niwethushan.</p>
        </div>
      </section>

      {/* Principals Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#8b0000]/10 text-[#8b0000] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Our Distinguished Leaders
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1b3e] mb-3">
              Every Principal, <span className="text-[#8b0000]">Honoured</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Each name represents a life dedicated to shaping the future of Michaelites.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead>
                <tr className="bg-[#0d1b3e] text-white">
                  <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider w-10">#</th>
                  <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Name</th>
                  <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Role</th>
                  <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Period / Years</th>
                  <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Quote</th>
                </tr>
              </thead>
              <tbody>
                {principals.map((p, i) => (
                  <tr key={`${p.name}-${i}`} className={`border-t border-gray-100 transition-colors ${p.rip ? "bg-gray-50 hover:bg-[#fdf8ec]" : i % 2 === 0 ? "bg-white hover:bg-[#f0f2f8]" : "bg-[#f9fafc] hover:bg-[#f0f2f8]"}`}>
                    <td className="px-5 py-4 text-gray-400 font-medium">{i + 1}</td>
                    <td className="px-5 py-4 font-bold text-[#0d1b3e]">{p.name}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${p.role.includes("Principal") ? "bg-[#8b0000]/10 text-[#8b0000]" : p.role.includes("Rector") ? "bg-[#0d1b3e]/10 text-[#0d1b3e]" : p.role.includes("Sister") ? "bg-pink-100 text-pink-700" : p.role.includes("Prefect") ? "bg-purple-100 text-purple-700" : "bg-amber-100 text-amber-700"}`}>{p.role}</span>
                    </td>
                    <td className="px-5 py-4 text-[#c9a227] font-semibold text-xs">{p.period || "—"}</td>
                    <td className="px-5 py-4 text-gray-400 italic text-xs">{p.quote ? `"${p.quote}"` : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tribute text */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f2f8]">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-700 text-lg leading-relaxed">
          <p>
            This page is dedicated to honouring all our Past Principals, especially those who are no longer with us. Their commitment, wisdom, sacrifice, and unwavering belief in the potential of every student have left an everlasting mark on our school and the thousands of Michaelites who proudly call this institution their alma mater.
          </p>
          <blockquote className="border-l-4 border-[#c9a227] pl-6 py-2 bg-white rounded-r-xl shadow-sm">
            <p className="italic text-[#0d1b3e] font-medium text-xl">
              "A Principal is far more than an administrator. A Principal is a mentor, a guardian, a guide, a visionary, and an architect of the future."
            </p>
          </blockquote>
          <p>
            Through years of faithful service, our Principals nurtured young minds, strengthened character, upheld traditions, embraced innovation, and ensured that St. Michael's College remained a place where excellence was not merely expected, but achieved.
          </p>
          <p>
            Each Principal brought unique qualities, ideas, and leadership styles that enriched the life of the school. Some guided the College through periods of rapid growth and development. Others strengthened academic excellence, expanded sporting achievements, promoted cultural activities, enhanced spiritual life, or introduced significant improvements to infrastructure and student welfare. Regardless of the era in which they served, each one contributed to the remarkable story of St. Michael's College.
          </p>
          <p>
            Their leadership extended far beyond the walls of the classroom. They inspired confidence, encouraged integrity, cultivated compassion, and instilled values that continue to guide Michaelites throughout their lives. Their influence can be seen not only in the achievements of the institution but also in the countless doctors, engineers, teachers, lawyers, entrepreneurs, scientists, public servants, clergy, artists, athletes, and community leaders who once walked the corridors of this College.
          </p>
          <p>
            Many of our Past Principals dedicated decades of their lives to ensuring that every student received an education founded upon knowledge, discipline, faith, respect, and service to humanity. Their decisions shaped the traditions that continue to define our school today. Their unwavering commitment helped build an institution respected not only within Sri Lanka but by Michaelites living across the world.
          </p>
          <p>
            Although some of these remarkable leaders are no longer physically with us, their legacy lives on in every classroom, every school bell, every sporting victory, every academic achievement, every cultural celebration, every act of kindness, and every student who proudly wears the College colours. Their memories remain deeply woven into the identity of St. Michael's College.
          </p>
          <p>
            This tribute page serves as a digital memorial where present and future generations can learn about these extraordinary educators who dedicated their lives to shaping ours. Through photographs, biographies, historical records, achievements, and personal memories shared by alumni, staff, and families, we preserve their stories so that they may continue to inspire generations yet to come.
          </p>
          <p>
            We invite every Michaelite around the world to join us in remembering these remarkable leaders. Whether you studied under their guidance, worked alongside them, or simply benefited from the strong foundation they helped establish, your memories form an important part of our shared history.
          </p>
          <blockquote className="border-l-4 border-[#8b0000] pl-6 py-2 bg-white rounded-r-xl shadow-sm">
            <p className="italic text-[#8b0000] font-medium text-xl">
              "Leadership is measured not merely by years served, but by lives transformed. The influence of a great Principal extends beyond examinations and classrooms, it shapes communities, inspires generations, and leaves a legacy that time can never erase."
            </p>
          </blockquote>
          <p>
            Today, we bow our heads in gratitude and remember every Principal who has faithfully served St. Michael's College National School, Batticaloa. We honour their dedication, celebrate their achievements, and thank them for the immeasurable contributions they made to our beloved institution.
          </p>
          <p>
            Their names will forever remain written in the proud history of St. Michael's College. Their vision continues to guide us. Their values continue to inspire us. Their legacy continues to live through every Michaelite.
          </p>
        </div>
      </section>

      {/* What this page includes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1b3e] mb-3">What This Tribute Includes</h2>
            <p className="text-gray-500 text-lg">A comprehensive memorial for each distinguished Principal</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {sections.map((s) => (
              <div key={s.label} className="bg-[#f0f2f8] rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:shadow-md hover:bg-white transition-all border border-transparent hover:border-[#c9a227]/30">
                <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/5 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-[#c9a227]" strokeWidth={1.5} />
                </div>
                <p className="font-bold text-[#0d1b3e] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Closing quote & CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#8b0000] to-[#a31515] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-black italic mb-8 leading-snug">
            "A school's greatest legacy is not its buildings, but the leaders who inspire generations to dream, learn, and serve."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#8b0000] font-bold px-8 py-3.5 rounded-xl hover:bg-gray-100 transition-all text-base">
              Share Your Memory
            </Link>
            <Link href="/about" className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-xl transition-all text-base">
              About Our School
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
