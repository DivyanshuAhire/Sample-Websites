import Link from "next/link";
import { ArrowRight, UtensilsCrossed, Dumbbell, Stethoscope, Building2, BookOpen, HardHat, Calculator } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#f4f4f0] font-sans">
      {/* Navbar */}
      <nav className="p-6 border-b border-[#222]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">COSMIQ STUDIO</span>
          <a href="mailto:divyanshuahire7@gmail.com" className="text-sm text-[#a8a8a8] hover:text-[#e05d3a] transition-colors">Contact Us</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl text-balance">
          We build digital experiences that refuse to be ignored.
        </h1>
        <p className="mt-6 text-xl text-[#a8a8a8] max-w-2xl font-light">
          Explore our collection of industry-specific demo websites. No generic templates, no cookie-cutter layouts. Just pure, targeted design.
        </p>
      </header>

      {/* Demo Projects Grid */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#333]">
          <ProjectCard
            title="The Local"
            industry="Restaurant & Dining"
            href="/restaurant"
            icon={<UtensilsCrossed className="w-8 h-8" />}
            hoverBg="hover:bg-[#4a2e2b]"
            hoverText="group-hover:text-[#f4f4f0]"
            hoverIcon="group-hover:text-[#e05d3a]"
          />
          <ProjectCard
            title="IRONCORE"
            industry="Fitness & Gym"
            href="/gym"
            icon={<Dumbbell className="w-8 h-8" />}
            hoverBg="hover:bg-[#df2020]"
            hoverText="group-hover:text-white"
            hoverIcon="group-hover:text-white"
          />
          <ProjectCard
            title="Apex Health"
            industry="Medical Clinic"
            href="/clinic"
            icon={<Stethoscope className="w-8 h-8" />}
            hoverBg="hover:bg-[#eef2f6]"
            hoverText="group-hover:text-[#0f172a]"
            hoverIcon="group-hover:text-[#0ea5e9]"
          />
          <ProjectCard
            title="Horizon Estates"
            industry="Real Estate"
            href="/real-estate"
            icon={<Building2 className="w-8 h-8" />}
            hoverBg="hover:bg-[#ffffff]"
            hoverText="group-hover:text-[#000000]"
            hoverIcon="group-hover:text-[#3b82f6]"
          />
          <ProjectCard
            title="Ascend Institute"
            industry="Coaching & Education"
            href="/coaching"
            icon={<BookOpen className="w-8 h-8" />}
            hoverBg="hover:bg-[#fbd34d]"
            hoverText="group-hover:text-[#000000]"
            hoverIcon="group-hover:text-[#000000]"
          />
          <ProjectCard
            title="Vanguard Construct"
            industry="Real Estate Builder"
            href="/builder"
            icon={<HardHat className="w-8 h-8" />}
            hoverBg="hover:bg-[#18181b]"
            hoverText="group-hover:text-white"
            hoverIcon="group-hover:text-[#d4d4d8]"
          />
          <ProjectCard
            title="Apex & Co."
            industry="CA & Financial Services"
            href="/ca-firm"
            icon={<Calculator className="w-8 h-8" />}
            hoverBg="hover:bg-[#0f172a]"
            hoverText="group-hover:text-white"
            hoverIcon="group-hover:text-[#94a3b8]"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#222] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-2xl font-bold tracking-tight">COSMIQ</span>
            <p className="text-[#a8a8a8] mt-2">Helping Buisnesses Grow.</p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:divyanshuahire7@gmail.com" className="text-sm font-medium hover:text-[#e05d3a] transition-colors border-b border-transparent hover:border-[#e05d3a] pb-1">
              divyanshuahire7@gmail.com
            </a>
            <a href="https://wa.me/917559269282" target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-[#e05d3a] transition-colors border-b border-transparent hover:border-[#e05d3a] pb-1">
              WhatsApp: +91 7559269282
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProjectCard({
  title,
  industry,
  href,
  icon,
  hoverBg,
  hoverText,
  hoverIcon
}: {
  title: string,
  industry: string,
  href: string,
  icon: React.ReactNode,
  hoverBg: string,
  hoverText: string,
  hoverIcon: string
}) {
  return (
    <Link
      href={href}
      className={`group block p-10 border-r border-b border-[#333] bg-[#111] transition-all duration-300 ₹{hoverBg} ₹{hoverText}`}
    >
      <div className={`mb-16 text-[#555] transition-colors duration-300 ₹{hoverIcon}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold tracking-tight mb-3">{title}</h3>
        <p className="text-sm uppercase tracking-wider opacity-60 font-semibold flex items-center gap-2">
          {industry} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </p>
      </div>
    </Link>
  )
}
