"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/projects", label: "Projects" },
  { href: "/news", label: "News" },
  { href: "/forum", label: "Forum" },
  { href: "/principals", label: "Tribute" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0d1b3e] sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex-shrink-0">
              <Image src="/logo.png" alt="Michaelites Logo" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm leading-tight">Michaelites A/L 2015</div>
              <div className="text-[#c9a227] text-xs">Forum</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Sign In
            </Link>
            <Link
              href="/register"
              className="bg-[#8b0000] hover:bg-[#a31515] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all"
            >
              Join Forum
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button
            className="lg:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#1a2d5a] border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex gap-3">
              <Link href="/login" className="flex-1 text-center text-gray-300 border border-white/30 px-4 py-2 rounded-lg text-sm">
                Sign In
              </Link>
              <Link href="/register" className="flex-1 text-center bg-[#8b0000] text-white px-4 py-2 rounded-lg text-sm font-semibold">
                Join Forum
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
