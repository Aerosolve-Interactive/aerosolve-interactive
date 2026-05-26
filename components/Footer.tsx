import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1C2A3E] bg-[#080C12] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 flex items-center justify-center text-[#4FC3F7] text-xs">
                ✈
              </span>
              <span className="font-display font-bold text-white tracking-[-0.03em] text-lg">
                AEROSOLVE
              </span>
            </Link>
            <p className="text-[#536B84] text-sm font-sans leading-relaxed max-w-xs">
              Aerospace engineering education for the next generation of
              engineers, scientists, and explorers. Free. Always.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-4">
              Learn
            </p>
            <ul className="space-y-2.5">
              {[
                ["Flight Fundamentals", "/learn/flight-fundamentals"],
                ["Forces & Motion", "/learn/forces-and-motion"],
                ["Wings & Lift", "/learn/wings-and-lift"],
                ["Stability & Control", "/learn/stability-and-control"],
                ["Rockets & Propulsion", "/learn/rockets-and-propulsion"],
                ["Structures & Materials", "/learn/structures-and-materials"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#536B84] hover:text-[#8FA3BC] transition-colors font-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-4">
              Program
            </p>
            <ul className="space-y-2.5">
              {[
                ["Projects", "/projects"],
                ["Outreach", "/outreach"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#536B84] hover:text-[#8FA3BC] transition-colors font-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1C2A3E] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[#536B84]">
            © {new Date().getFullYear()} AeroSolve Interactive. Built for students, by people who care.
          </p>
          <p className="font-mono text-[11px] text-[#536B84]">
            Free forever — no ads, no paywalls.
          </p>
        </div>
      </div>
    </footer>
  );
}
