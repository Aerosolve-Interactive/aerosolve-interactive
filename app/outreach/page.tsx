import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Outreach — AeroSolve Interactive",
  description:
    "AeroSolve builds and donates free aerospace STEM kits to underserved schools and after-school programs.",
};

const KIT_TYPES = [
  {
    icon: "✈",
    title: "Paper Glider Kits",
    description:
      "Pre-cut cardstock gliders with experiment guide cards. Students test three designs, collect flight distance data, and connect results to lift and drag. Everything needed for a 45-minute class session for up to 30 students.",
    includes: ["Pre-scored cardstock sheets", "Experiment guide cards", "Data recording sheets", "Teacher instruction guide"],
    color: "#4FC3F7",
  },
  {
    icon: "🚀",
    title: "Straw Rocket Kits",
    description:
      "Complete straw rocket building and launch materials. Students design rockets, add fins and nose cones, and run launch-angle optimization experiments — all in a standard class period.",
    includes: ["Plastic drinking straws", "Cardstock for fins and nose cones", "Launch tube apparatus", "Angle measurement guide"],
    color: "#FF6B5B",
  },
  {
    icon: "🌀",
    title: "Paper Helicopter Kits",
    description:
      "Classic autorotating helicopter builds that demonstrate drag, autorotation, and terminal velocity. Students vary blade width and length, measure drop times, and graph their results.",
    includes: ["Template cards for 4 helicopter designs", "Drop-timing protocol guide", "Graph paper recording sheets", "Extension challenge card"],
    color: "#F4C842",
  },
  {
    icon: "🏗",
    title: "Engineering Challenge Kits",
    description:
      "Open-ended structural engineering challenges using cardboard, tape, and limited materials. Teams compete on bridge efficiency scores — maximum load divided by bridge mass. Teaches iteration, tradeoffs, and failure analysis.",
    includes: ["Pre-cut cardboard sheets (per team)", "Tape allocations", "Loading weights and instructions", "Engineering design worksheet"],
    color: "#4FC3F7",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Kit Design",
    description:
      "Our team develops and tests each kit design through multiple rounds of classroom testing to ensure the activities work reliably with everyday materials and minimal teacher preparation.",
  },
  {
    num: "02",
    title: "Materials Procurement",
    description:
      "We source bulk materials at low cost. Donations fund material purchases directly — every dollar goes toward cardstock, straws, tape, and experiment guides, not overhead.",
  },
  {
    num: "03",
    title: "Kit Assembly",
    description:
      "Volunteer build teams assemble kits during scheduled build events. Each kit is checked, bagged, and labeled with grade-level instructions and curriculum alignment notes.",
  },
  {
    num: "04",
    title: "Partner Identification",
    description:
      "We partner with Title I schools, after-school programs, public libraries, and community centers — prioritizing students who lack access to extracurricular engineering education.",
  },
  {
    num: "05",
    title: "Kit Delivery & Facilitation",
    description:
      "Kits are delivered with optional facilitation support. Our volunteers can lead sessions or provide detailed teacher guides so educators can run activities independently.",
  },
];

const VOLUNTEER_ROLES = [
  {
    title: "Design",
    description:
      "Develop and iterate on kit activities. Background in STEM education, curriculum design, or engineering helpful but not required. Mostly remote work.",
    commitment: "2–4 hrs/week",
    color: "#4FC3F7",
  },
  {
    title: "Build",
    description:
      "Assemble kits at our build events. Show up, follow along, help pack bags. No experience required — just willingness to help.",
    commitment: "Build events: ~3 hrs each",
    color: "#F4C842",
  },
  {
    title: "Outreach",
    description:
      "Identify partner schools and organizations, manage relationships, and help coordinate deliveries. Good for people with a community or education network.",
    commitment: "2–3 hrs/week",
    color: "#FF6B5B",
  },
  {
    title: "Media",
    description:
      "Document build events, create social media content, photograph kit deliveries, and help share the program's impact with potential donors and partners.",
    commitment: "Flexible",
    color: "#4FC3F7",
  },
  {
    title: "Logistics",
    description:
      "Coordinate materials procurement, kit inventory, event scheduling, and delivery logistics. Detail-oriented people who love spreadsheets are strongly encouraged.",
    commitment: "2–4 hrs/week",
    color: "#F4C842",
  },
];

export default function OutreachPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 grid-texture">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 border-b border-[#1C2A3E]">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
            Community Program
          </p>
          <h1 className="font-display font-extrabold text-white text-4xl md:text-6xl tracking-[-0.04em] leading-tight mb-6 max-w-3xl">
            Engineering education
            <br />
            should be free.
          </h1>
          <p className="font-sans text-[#8FA3BC] text-lg leading-relaxed max-w-2xl mb-8">
            AeroSolve Outreach builds and donates aerospace STEM kits to
            underserved schools, after-school programs, and community
            organizations — at no cost to the students or teachers who receive
            them. Every kit is designed to make real engineering accessible
            with materials found in any classroom.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#volunteer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4FC3F7] text-[#080C12] font-mono font-bold text-sm hover:bg-[#7dd9ff] transition-colors"
            >
              Volunteer With Us
              <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#partner"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#1C2A3E] text-[#8FA3BC] font-mono text-sm hover:border-[#4FC3F7]/40 hover:text-[#e2ecf4] transition-colors"
            >
              Request Kits for Your School
            </a>
          </div>
        </section>

        {/* Impact stats */}
        <section className="border-b border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-6">
              Program Impact
            </p>
            {/* UPDATE THESE NUMBERS after each build event */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "0", label: "Kits Built", sub: "Across all events" },
                { value: "0", label: "Students Reached", sub: "Direct program beneficiaries" },
                { value: "0", label: "Partner Schools", sub: "Active partnerships" },
                { value: "0", label: "Volunteers", sub: "Total contributors" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6">
                  <p className="font-display font-extrabold text-4xl text-white tracking-[-0.04em] leading-none mb-1">
                    {value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#4FC3F7] mb-1">
                    {label}
                  </p>
                  <p className="font-sans text-xs text-[#536B84]">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kit types */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
            What We Build
          </p>
          <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] mb-10">
            Four kit types, one mission.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {KIT_TYPES.map((kit) => (
              <div
                key={kit.title}
                className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-[#080C12] border border-[#1C2A3E] flex items-center justify-center text-xl">
                    {kit.icon}
                  </span>
                  <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em]">
                    {kit.title}
                  </h3>
                </div>
                <p className="font-sans text-sm text-[#8FA3BC] leading-relaxed mb-4">
                  {kit.description}
                </p>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[#536B84] mb-2">
                    Includes
                  </p>
                  <ul className="space-y-1">
                    {kit.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-sans text-xs text-[#536B84]">
                        <span
                          className="w-1 h-1 rounded-full inline-block shrink-0"
                          style={{ backgroundColor: kit.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              How It Works
            </p>
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] mb-10">
              From design to delivery.
            </h2>
            <div className="space-y-3">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.num}
                  className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5 flex gap-5 items-start"
                >
                  <span className="shrink-0 font-mono text-2xl font-bold text-[#4FC3F7]/40 w-10">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-white text-base tracking-[-0.02em] mb-1">
                      {step.title}
                    </h3>
                    <p className="font-sans text-sm text-[#536B84] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer roles */}
        <section id="volunteer" className="border-t border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-2">
              Get Involved
            </p>
            <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] mb-3">
              Five ways to contribute.
            </h2>
            <p className="font-sans text-[#8FA3BC] mb-10 max-w-xl">
              No aerospace background required. We need organizers, builders,
              communicators, and logistics people as much as we need engineers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {VOLUNTEER_ROLES.map((role) => (
                <div
                  key={role.title}
                  className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-5 card-hover"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-white text-base tracking-[-0.02em]">
                      {role.title}
                    </h3>
                    <span
                      className="font-mono text-[10px] px-2 py-0.5 rounded"
                      style={{ color: role.color, backgroundColor: `${role.color}15` }}
                    >
                      {role.commitment}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-[#536B84] leading-relaxed">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Volunteer CTA */}
            <div className="rounded-xl border border-[#4FC3F7]/20 bg-[#4FC3F7]/5 p-8 text-center">
              <h3 className="font-display font-bold text-white text-xl tracking-[-0.03em] mb-3">
                Ready to volunteer?
              </h3>
              <p className="font-sans text-[#8FA3BC] mb-6 max-w-md mx-auto text-sm">
                Fill out our volunteer interest form and we'll reach out with upcoming build
                events and openings that match your availability.
              </p>
              {/* PASTE YOUR GOOGLE FORM LINK HERE */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4FC3F7] text-[#080C12] font-mono font-bold text-sm hover:bg-[#7dd9ff] transition-colors"
              >
                Volunteer Sign-Up Form
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* School partnership */}
        <section id="partner" className="border-t border-[#1C2A3E]">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-[#536B84] mb-4">
                  For Educators
                </p>
                <h2 className="font-display font-bold text-white text-2xl md:text-3xl tracking-[-0.03em] leading-tight mb-4">
                  Request kits for your school or program.
                </h2>
                <p className="font-sans text-[#8FA3BC] leading-relaxed mb-4">
                  We prioritize Title I schools, under-resourced after-school programs,
                  and public libraries. All kits are provided at no cost. We ask only
                  that you share a brief impact report after running the activity.
                </p>
                <p className="font-sans text-[#536B84] text-sm leading-relaxed">
                  We&apos;re currently expanding our partner network. Early partners will
                  receive facilitation support and priority kit allocation.
                </p>
              </div>
              <div className="rounded-xl border border-[#1C2A3E] bg-[#0E1520] p-8">
                <h3 className="font-display font-bold text-white text-lg tracking-[-0.02em] mb-2">
                  Get in touch
                </h3>
                <p className="font-sans text-[#536B84] text-sm mb-6">
                  Use our contact form to request kits, ask about our program, or
                  discuss a partnership for your organization.
                </p>
                {/* PASTE YOUR NONPROFIT CONTACT FORM LINK HERE */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#F4C842]/30 text-[#F4C842] font-mono text-sm hover:bg-[#F4C842]/10 transition-colors w-full justify-center"
                >
                  Contact Us
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
