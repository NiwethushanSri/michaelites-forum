import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Lock, Upload } from "lucide-react";
import { notFound } from "next/navigation";

const validYears = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

// Add photo paths here per year as you upload them
// e.g. 2020: ["/mike-walk/2020/photo1.jpg", "/mike-walk/2020/photo2.jpg"]
const yearPhotos: Record<number, string[]> = {
  2015: [],
  2016: [],
  2017: [],
  2018: [],
  2019: [],
  2020: [],
  2021: [],
  2022: [],
  2023: [],
  2024: [],
};

export function generateStaticParams() {
  return validYears.map((year) => ({ year: String(year) }));
}

export default async function MikeWalkYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearStr } = await params;
  const year = Number(yearStr);
  if (!validYears.includes(year)) notFound();

  const photos = yearPhotos[year] ?? [];

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/gallery/mike-walk" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Mike Walk
          </Link>
          <h1 className="text-3xl md:text-4xl font-black mb-1">Mike Walk <span className="text-[#c9a227]">{year}</span></h1>
          <p className="text-gray-400 text-sm">{photos.length} photo{photos.length !== 1 ? "s" : ""} · St. Michael's College, Batticaloa</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upload bar */}
        <div className="bg-[#0d1b3e] text-white rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Upload className="w-5 h-5 text-[#c9a227]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-bold text-sm">Have photos from Mike Walk {year}?</p>
              <p className="text-gray-400 text-xs">Upload your memories — reviewed by admin before publishing</p>
            </div>
          </div>
          <button className="bg-[#c9a227] hover:bg-yellow-500 text-[#0d1b3e] font-bold px-5 py-2 rounded-xl transition-colors text-sm whitespace-nowrap flex items-center gap-2">
            <Upload className="w-4 h-4" strokeWidth={2} /> Upload Photos
          </button>
        </div>

        {/* Photos */}
        {photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-video relative group">
                <Image
                  src={src}
                  alt={`Mike Walk ${year} – photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Lock className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#0d1b3e] mb-2">No photos yet for {year}</h3>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              Be the first to upload memories from Mike Walk {year}! Or sign in to view private photos.
            </p>
            <div className="flex gap-3">
              <Link href="/login" className="bg-[#8b0000] text-white font-bold px-6 py-2.5 rounded-xl hover:bg-[#a31515] transition-colors text-sm">
                Sign In
              </Link>
              <Link href="/register" className="border-2 border-[#0d1b3e] text-[#0d1b3e] font-bold px-6 py-2.5 rounded-xl hover:bg-[#0d1b3e] hover:text-white transition-colors text-sm">
                Request Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
