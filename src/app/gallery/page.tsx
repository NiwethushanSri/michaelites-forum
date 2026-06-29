import { Lock, Upload, Image as ImageIcon, Star, Heart, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const albums = [
  { title: "Reunion 2020 – Class A", count: 1, tag: "Events", cover: "/reunion-2020.jpg" },
  { title: "School Days 2013–2015", count: 48, tag: "Memories", cover: null },
  { title: "A/L Study Days", count: 22, tag: "Memories", cover: null },
  { title: "Reunion 2022", count: 120, tag: "Events", cover: null },
  { title: "Cricket Match 2023", count: 67, tag: "Events", cover: null },
  { title: "Donation Drive 2024", count: 34, tag: "Charity", cover: null },
  { title: "Reunion 2025", count: 95, tag: "Events", cover: null },
];

const tagColors: Record<string, string> = {
  Memories: "bg-blue-100 text-blue-700",
  Events: "bg-purple-100 text-purple-700",
  Charity: "bg-green-100 text-green-700",
};

export default function GalleryPage() {
  return (
    <>
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-3">Gallery</h1>
          <p className="text-gray-300 text-lg">School memories, old photos, and event albums</p>
          <div className="mt-6 inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-sm px-4 py-2 rounded-full">
            <Lock className="w-4 h-4" strokeWidth={1.5} />
            Full gallery access requires login — photos stay private
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#0d1b3e] text-white rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Upload className="w-6 h-6 text-[#c9a227]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Share Your Photos</h3>
              <p className="text-gray-300 text-sm">Upload memories — all photos reviewed by admin before publishing</p>
            </div>
          </div>
          <button className="bg-[#c9a227] hover:bg-yellow-500 text-[#0d1b3e] font-bold px-6 py-2.5 rounded-xl transition-colors text-sm whitespace-nowrap flex items-center gap-2">
            <Upload className="w-4 h-4" strokeWidth={2} /> Upload Photos
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {["All Albums", "Memories", "Events", "Charity"].map((t) => (
            <button key={t} className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-[#0d1b3e] hover:bg-[#0d1b3e] hover:text-white transition-all">
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((a) => (
            <div key={a.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all cursor-pointer group">
              <div className="h-44 overflow-hidden relative">
                {a.cover ? (
                  <Image
                    src={a.cover}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-[#0d1b3e]/5 to-[#8b0000]/5 h-full flex items-center justify-center group-hover:from-[#0d1b3e]/10 group-hover:to-[#8b0000]/10 transition-all">
                    <ImageIcon className="w-10 h-10 text-[#0d1b3e]/40" strokeWidth={1} />
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-[#0d1b3e] leading-tight">{a.title}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${tagColors[a.tag]}`}>{a.tag}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1 flex items-center gap-1">
                  <ImageIcon className="w-3.5 h-3.5" strokeWidth={1.5} /> {a.count} photos
                </p>
                <button className="mt-4 w-full text-sm font-semibold text-[#8b0000] border border-[#8b0000]/20 py-2 rounded-lg hover:bg-[#8b0000] hover:text-white transition-all">
                  View Album
                </button>
              </div>
            </div>
          ))}

          <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-8 text-center min-h-[200px]">
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
            </div>
            <p className="text-gray-500 text-sm mb-4">Login to view <strong>all 12 albums</strong> and upload your photos</p>
            <Link href="/login" className="bg-[#0d1b3e] text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-[#1a2d5a] transition-colors">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
