import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, FolderOpen, ImageIcon, Upload } from "lucide-react";

const years = [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];

// Map years to cover photos — add real paths here as you upload photos
const yearCovers: Record<number, string | null> = {
  2015: null,
  2016: null,
  2017: null,
  2018: null,
  2019: null,
  2020: null,
  2021: null,
  2022: null,
  2023: null,
  2024: null,
};

export default function MikeWalkPage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Gallery
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <FolderOpen className="w-8 h-8 text-[#c9a227]" strokeWidth={1.5} />
            <h1 className="text-3xl md:text-4xl font-black">Mike Walk</h1>
          </div>
          <p className="text-gray-400 text-sm">Annual Mike Walk memories · 2015 – 2024 · 10 year folders</p>
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
              <p className="font-bold text-sm">Have Mike Walk photos?</p>
              <p className="text-gray-400 text-xs">Upload your memories — reviewed by admin before publishing</p>
            </div>
          </div>
          <button className="bg-[#c9a227] hover:bg-yellow-500 text-[#0d1b3e] font-bold px-5 py-2 rounded-xl transition-colors text-sm whitespace-nowrap flex items-center gap-2">
            <Upload className="w-4 h-4" strokeWidth={2} /> Upload Photos
          </button>
        </div>

        {/* Year folders grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {years.map((year) => (
            <Link
              key={year}
              href={`/gallery/mike-walk/${year}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#8b0000]/20 transition-all"
            >
              {/* Folder thumbnail */}
              <div className="h-32 relative overflow-hidden bg-gradient-to-br from-[#0d1b3e]/5 to-[#8b0000]/5 group-hover:from-[#0d1b3e]/10 group-hover:to-[#8b0000]/10 transition-all">
                {yearCovers[year] ? (
                  <Image
                    src={yearCovers[year]!}
                    alt={`Mike Walk ${year}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-2">
                    <FolderOpen className="w-9 h-9 text-[#c9a227]" strokeWidth={1.2} />
                    <span className="text-[#0d1b3e]/40 text-xs font-medium">No photos yet</span>
                  </div>
                )}
              </div>

              {/* Year label */}
              <div className="px-4 py-3">
                <p className="font-black text-[#0d1b3e] text-lg group-hover:text-[#8b0000] transition-colors">{year}</p>
                <p className="text-gray-400 text-xs flex items-center gap-1 mt-0.5">
                  <ImageIcon className="w-3 h-3" strokeWidth={1.5} />
                  Mike Walk {year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
