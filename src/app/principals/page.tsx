import { BookOpen, Star, Heart, Award, Clock, Users, Flame, MessageSquare, Image as ImageIcon } from "lucide-react";
import Link from "next/link";

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
        {/* Decorative circles */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full border-2 border-white" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-2 border-white" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#c9a227]/20 text-[#c9a227] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 border border-[#c9a227]/30">
            <Star className="w-3.5 h-3.5" />
            St. Michael's College National School, Batticaloa
            <Star className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-5 leading-tight">
            Tribute to Our<br />
            <span className="text-[#c9a227]">Past Principals</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 italic mb-10 font-light">
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

      {/* Main tribute content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-700 text-lg leading-relaxed">

          <p>
            This page is dedicated to honouring all our Past Principals, especially those who are no longer with us. Their commitment, wisdom, sacrifice, and unwavering belief in the potential of every student have left an everlasting mark on our school and the thousands of Michaelites who proudly call this institution their alma mater.
          </p>

          <blockquote className="border-l-4 border-[#c9a227] pl-6 py-2 bg-[#fdf8ec] rounded-r-xl">
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
        </div>
      </section>

      {/* What this page includes */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f2f8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0d1b3e] mb-3">What This Tribute Includes</h2>
            <p className="text-gray-500 text-lg">A comprehensive memorial for each distinguished Principal</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {sections.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md hover:border-[#c9a227]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0d1b3e]/5 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-[#c9a227]" strokeWidth={1.5} />
                </div>
                <p className="font-bold text-[#0d1b3e] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full tribute text */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-10 text-gray-700 text-lg leading-relaxed">

          <p>
            We invite every Michaelite around the world to join us in remembering these remarkable leaders. Whether you studied under their guidance, worked alongside them, or simply benefited from the strong foundation they helped establish, your memories form an important part of our shared history.
          </p>

          <blockquote className="border-l-4 border-[#8b0000] pl-6 py-2 bg-red-50 rounded-r-xl">
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

      {/* Candle of Remembrance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1b3e] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-6">🕯️</div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Candle of <span className="text-[#c9a227]">Remembrance</span>
          </h2>
          <p className="text-gray-300 text-lg italic mb-8">
            "A Principal plants seeds of knowledge, nurtures character with wisdom, leads with courage, and leaves behind a legacy that continues to inspire long after their time has passed."
          </p>
          <div className="w-20 h-1 bg-[#c9a227] mx-auto rounded-full mb-10" />
          <p className="text-gray-400 text-base leading-relaxed">
            May Almighty God grant eternal peace to those who have departed and bless all who have served our beloved St. Michael's College with dedication and distinction. Their memory shall forever remain in the hearts of Michaelites around the world.
          </p>
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
