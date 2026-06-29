import Link from "next/link";
import { Globe, MessageSquare, MapPin, Mail, ChevronRight, Users } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b3e] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-white font-bold text-lg mb-1">Michaelites A/L 2015 Forum</div>
            <div className="text-[#c9a227] text-sm mb-3 italic">"United by School, Connected for Life."</div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The official online community for St. Michael's College, National School, Batticaloa — A/L 2015 batch.
            </p>
            <div className="flex gap-3 mt-4">
              {[
                { icon: Globe, label: "Facebook" },
                { icon: MessageSquare, label: "WhatsApp" },
                { icon: Users, label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" title={s.label}>
                  <s.icon className="w-4 h-4 text-gray-300" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/members", label: "Members Directory" },
                { href: "/events", label: "Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/projects", label: "Projects & Charity" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                <span>St. Michael's College<br />National School, Batticaloa<br />Sri Lanka</span>
              </li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#c9a227] hover:text-yellow-300 transition-colors flex items-center gap-1.5 text-sm font-medium">
                  <Mail className="w-3.5 h-3.5" strokeWidth={1.5} /> Contact Committee
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Michaelites A/L 2015 Forum. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Developed by{" "}
            <a href="https://niwethushan.com" target="_blank" rel="noopener noreferrer" className="text-[#c9a227] font-semibold hover:text-yellow-400 transition-colors">
              Niwethushan
            </a>{" "}
            · <span className="text-gray-400">Forge9x</span>
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
