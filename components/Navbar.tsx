import Link from "next/link";

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/projects", label: "Projects" },
  { href: "/outreach", label: "Outreach" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1C2A3E] bg-[#080C12]/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="w-7 h-7 rounded bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 flex items-center justify-center text-[#4FC3F7] text-xs font-mono group-hover:bg-[#4FC3F7]/20 transition-colors">
            ✈
          </span>
          <span
            className="font-display font-bold text-white tracking-[-0.03em] text-lg leading-none"
          >
            AeroSolve Interactive
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-sans font-medium text-[#8FA3BC] hover:text-white hover:bg-[#1C2A3E] transition-colors duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/learn"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 text-[#4FC3F7] text-sm font-mono hover:bg-[#4FC3F7]/20 transition-colors"
        >
          Start Learning
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
