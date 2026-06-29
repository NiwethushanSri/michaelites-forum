import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b3e] text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-white font-bold text-lg mb-1">Michaelites A/L 2015 Forum</div>
            <div className="text-[#c9a227] text-sm mb-3 italic">"United by School, Connected for Life."</div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              The official online community for St. Michael's College, National School, Batticaloa — A/L 2015 batch.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">WhatsApp</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
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
                  <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Contact</div>
            <ul className="space-y-2 text-sm">
              <li>St. Michael's College</li>
              <li>National School, Batticaloa</li>
              <li>Sri Lanka</li>
              <li className="pt-2">
                <Link href="/contact" className="text-[#c9a227] hover:text-yellow-300 transition-colors">
                  Contact Committee →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Michaelites A/L 2015 Forum. All rights reserved.
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
