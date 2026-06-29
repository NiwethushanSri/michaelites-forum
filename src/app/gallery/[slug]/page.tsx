import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Lock, Upload, ImageIcon } from "lucide-react";
import { notFound } from "next/navigation";

const albumData: Record<string, {
  title: string;
  tag: string;
  date: string;
  location: string;
  photos: string[];
}> = {
  "reunion-2020": {
    title: "Reunion 2020 – Class A",
    tag: "Events",
    date: "January 02, 2020",
    location: "Batticaloa",
    photos: ["/reunion-2020.jpg"],
  },
  "school-days": {
    title: "School Days 2013–2015",
    tag: "Memories",
    date: "2013 – 2015",
    location: "St. Michael's College, Batticaloa",
    photos: [],
  },
  "al-study-days": {
    title: "A/L Study Days",
    tag: "Memories",
    date: "2013 – 2015",
    location: "St. Michael's College, Batticaloa",
    photos: [],
  },
  "reunion-2022": {
    title: "Reunion 2022",
    tag: "Events",
    date: "2022",
    location: "Batticaloa",
    photos: [],
  },
  "cricket-2023": {
    title: "Cricket Match 2023",
    tag: "Events",
    date: "2023",
    location: "Batticaloa Grounds",
    photos: [],
  },
  "donation-2024": {
    title: "Donation Drive 2024",
    tag: "Charity",
    date: "2024",
    location: "St. Michael's College, Batticaloa",
    photos: [],
  },
  "reunion-2025": {
    title: "Reunion 2025",
    tag: "Events",
    date: "2025",
    location: "Batticaloa",
    photos: [],
  },
};

const tagColors: Record<string, string> = {
  Memories: "bg-blue-100 text-blue-700",
  Events: "bg-purple-100 text-purple-700",
  Charity: "bg-green-100 text-green-700",
};

export function generateStaticParams() {
  return Object.keys(albumData).map((slug) => ({ slug }));
}

export default function AlbumPage({ params }: { params: { slug: string } }) {
  const album = albumData[params.slug];
  if (!album) notFound();

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0d1b3e] to-[#1a2d5a] text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/gallery" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Gallery
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h1 className="text-3xl md:text-4xl font-black">{album.title}</h1>
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${tagColors[album.tag]}`}>{album.tag}</span>
          </div>
          <p className="text-gray-400 text-sm">{album.date} · {album.location} · {album.photos.length} photo{album.photos.length !== 1 ? "s" : ""}</p>
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
              <p className="font-bold text-sm">Have photos from this event?</p>
              <p className="text-gray-400 text-xs">Upload your memories — reviewed by admin before publishing</p>
            </div>
          </div>
          <button className="bg-[#c9a227] hover:bg-yellow-500 text-[#0d1b3e] font-bold px-5 py-2 rounded-xl transition-colors text-sm whitespace-nowrap flex items-center gap-2">
            <Upload className="w-4 h-4" strokeWidth={2} /> Upload Photos
          </button>
        </div>

        {/* Photos grid */}
        {album.photos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {album.photos.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 aspect-video relative group">
                <Image
                  src={src}
                  alt={`${album.title} – photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        ) : (
          /* Empty state — photos locked behind login */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <Lock className="w-7 h-7 text-gray-400" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-[#0d1b3e] mb-2">Photos are private</h3>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              Sign in to view all photos in this album. Access is limited to verified Michaelites members.
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
