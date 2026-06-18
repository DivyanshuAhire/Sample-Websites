"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SuccessModal } from "@/components/ui/success-modal"
import { ArrowRight, ChevronRight, Check } from "lucide-react"
import { useState } from "react"

export default function GymPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-3xl font-oswald font-bold tracking-tighter uppercase">IronCore</div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-neutral-400">
            <a href="#plans" className="hover:text-white transition-colors">Plans</a>
            <a href="#trainers" className="hover:text-white transition-colors">Trainers</a>
            <a href="#gallery" className="hover:text-white transition-colors">Results</a>
          </div>
          <a
            href="#join"
            className="bg-red-600 text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors"
          >
            Join Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative pt-20 h-screen flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000"
            alt="Gym intense workout"
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="font-oswald text-7xl md:text-[9rem] leading-[0.85] tracking-tighter uppercase mb-6 drop-shadow-2xl text-white">
            Forge<br />
            <span className="text-red-600">Your</span> Legacy
          </h1>
          <p className="text-xl md:text-2xl font-medium text-neutral-300 max-w-xl mb-10 border-l-4 border-red-600 pl-4">
            No excuses. No shortcuts. Just pure, unadulterated hard work.
            Join the most elite training facility in the city.
          </p>
          <a
            href="#plans"
            className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 text-lg font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
          >
            View Memberships <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </header>

      {/* Plans Section (Table/Stark layout) */}
      <section id="plans" className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-oswald text-5xl md:text-7xl uppercase tracking-tighter text-white">Choose Your Weapon</h2>
          <div className="w-24 h-2 bg-red-600 mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-white/20">
          <PlanColumn
            title="Standard"
            price="₹700"
            features={["Full Gym Access", "Locker Room", "Free Weights Zone"]}
          />
          <PlanColumn
            title="Elite"
            price="₹1200"
            features={["Full Gym Access", "Group Classes", "Recovery Zone", "Monthly Assessment"]}
            isPopular
          />
          <PlanColumn
            title="Beast"
            price="₹2000"
            features={["Everything in Elite", "Personal Training (4x/mo)", "Nutrition Plan", "Private Locker"]}
          />
        </div>
      </section>

      {/* Trainers */}
      <section id="trainers" className="py-32 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-oswald text-5xl md:text-7xl uppercase tracking-tighter mb-20 text-center">The Vanguard</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TrainerCard name="Marcus Vance" role="Head Strength Coach" img="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800" />
            <TrainerCard name="Sarah Chen" role="Powerlifting Spec." img="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800" />
            <TrainerCard name="David Knox" role="Endurance Lead" img="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800" />
            <TrainerCard name="Elena Rostova" role="Mobility & Rehab" img="https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800" />
          </div>
        </div>
      </section>

      {/* Transformation Gallery */}
      <section id="gallery" className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="font-oswald text-5xl md:text-7xl uppercase tracking-tighter mb-20">Proof in Iron</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="group relative overflow-hidden bg-neutral-900 border border-white/10 aspect-video flex items-center justify-center">
            <span className="font-oswald text-3xl text-neutral-600 uppercase">Transformation 1 Placeholder</span>
          </div>
          <div className="group relative overflow-hidden bg-neutral-900 border border-white/10 aspect-video flex items-center justify-center">
            <span className="font-oswald text-3xl text-neutral-600 uppercase">Transformation 2 Placeholder</span>
          </div>
          <div className="group relative overflow-hidden bg-neutral-900 border border-white/10 aspect-video flex items-center justify-center">
            <span className="font-oswald text-3xl text-neutral-600 uppercase">Transformation 3 Placeholder</span>
          </div>
          <div className="group relative overflow-hidden bg-neutral-900 border border-white/10 aspect-video flex items-center justify-center">
            <span className="font-oswald text-3xl text-neutral-600 uppercase">Transformation 4 Placeholder</span>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="join" className="border-t border-b border-white/10 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center bg-fixed relative">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <div className="relative py-32 max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-5xl md:text-7xl uppercase tracking-tighter text-white mb-4">Start Your Trial</h2>
            <p className="text-neutral-400 text-lg">Leave your details and a coach will contact you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input required placeholder="FULL NAME" className="border-white/20 bg-white/5 text-white h-14 font-bold uppercase tracking-wider focus-visible:ring-red-600" />
              <Input required type="tel" placeholder="PHONE NUMBER" className="border-white/20 bg-white/5 text-white h-14 font-bold uppercase tracking-wider focus-visible:ring-red-600" />
            </div>
            <select required className="flex w-full bg-white/5 border border-white/20 px-3 py-2 text-sm h-14 font-bold uppercase tracking-wider text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600">
              <option value="" className="text-black">SELECT GOAL</option>
              <option value="strength" className="text-black">Strength & Muscle</option>
              <option value="weightloss" className="text-black">Fat Loss</option>
              <option value="endurance" className="text-black">Endurance</option>
            </select>
            <Button type="submit" className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-oswald text-2xl uppercase tracking-widest border-none">
              Submit Request
            </Button>
          </form>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="bg-red-600 py-12 flex justify-center">
        <h2 className="font-oswald text-4xl md:text-6xl text-white uppercase tracking-tighter flex items-center gap-4">
          No Excuses <ChevronRight className="w-12 h-12" /> Just Results
        </h2>
      </div>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10 text-center">
        <p className="font-oswald text-3xl uppercase tracking-tighter mb-4">IronCore Gym</p>
        <p className="text-neutral-600 font-bold uppercase tracking-widest text-sm">© 2026 IronCore Fitness. All Rights Reserved.</p>
      </footer>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Received"
        message="Your trial request is in. A coach will contact you shortly."
        className="bg-neutral-900 border border-white/20 text-white"
      />
    </div>
  )
}

function PlanColumn({ title, price, features, isPopular }: { title: string, price: string, features: string[], isPopular?: boolean }) {
  return (
    <div className={`p-10 flex flex-col ${isPopular ? 'bg-red-600 relative shadow-2xl scale-105' : 'bg-transparent border-r border-white/10 last:border-r-0'} transition-all duration-300`}
    >
      {isPopular && (
        <span className="absolute top-0 right-0 bg-white text-black font-bold uppercase tracking-widest text-xs px-4 py-1">
          Most Popular
        </span>
      )}
      <h3 className="font-oswald text-3xl uppercase tracking-tight mb-2 text-white">{title}</h3>
      <div className="font-oswald text-6xl tracking-tighter mb-8 text-white">{price}<span className="text-2xl text-white/60 tracking-normal">/mo</span></div>

      <ul className="space-y-4 mb-12 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-center gap-3 font-medium text-white/80">
            <Check className={`w-5 h-5 ${isPopular ? 'text-white' : 'text-red-600'}`} /> {feat}
          </li>
        ))}
      </ul>

      <Button className={`w-full h-14 font-bold uppercase tracking-widest ${isPopular ? 'bg-black text-white hover:bg-neutral-900' : 'bg-white text-black hover:bg-neutral-200'}`} onClick={() => { document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' }); }}>Select Plan</Button>
    </div>
  )
}

function TrainerCard({ name, role, img }: { name: string, role: string, img: string }) {
  return (
    <div className="group relative overflow-hidden bg-neutral-900 aspect-[3/4]">
      <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h4 className="font-oswald text-3xl uppercase tracking-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform">{name}</h4>
        <p className="text-red-500 font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">{role}</p>
      </div>
    </div>
  )
}
