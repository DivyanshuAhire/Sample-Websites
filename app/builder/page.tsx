"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessModal } from "@/components/ui/success-modal"
import { ArrowRight, Building2, ChevronRight, HardHat, Home, MapPin, Phone, Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function BuilderPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/builder" className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-zinc-900" />
            <span className="text-2xl font-bold tracking-tighter">VANGUARD<span className="text-zinc-500 font-light">CONSTRUCT</span></span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-zinc-600">
            <Link href="#projects" className="hover:text-zinc-900 transition-colors">PROJECTS</Link>
            <Link href="#expertise" className="hover:text-zinc-900 transition-colors">EXPERTISE</Link>
            <Link href="#about" className="hover:text-zinc-900 transition-colors">ABOUT</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-zinc-900 hover:bg-zinc-800 text-white rounded-none px-6 h-12 text-xs tracking-widest font-semibold uppercase">
              Enquiry
            </Button>
            <button className="md:hidden p-2 text-zinc-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-6 flex flex-col gap-6 shadow-lg absolute w-full top-20 left-0">
            <Link href="#projects" className="text-sm font-bold tracking-widest text-zinc-900 uppercase" onClick={() => setIsMobileMenuOpen(false)}>PROJECTS</Link>
            <Link href="#expertise" className="text-sm font-bold tracking-widest text-zinc-900 uppercase" onClick={() => setIsMobileMenuOpen(false)}>EXPERTISE</Link>
            <Link href="#about" className="text-sm font-bold tracking-widest text-zinc-900 uppercase" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
            <Button className="bg-zinc-900 hover:bg-zinc-800 text-white rounded-none w-full h-12 text-xs tracking-widest font-semibold uppercase mt-2">
              Enquiry
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Architecture"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
              CRAFTING <br />
              <span className="text-zinc-400">TOMORROW'S</span> <br />
              LANDMARKS
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 max-w-xl font-light mb-10 border-l-2 border-white pl-6">
              We are a premium real estate development and construction firm, transforming visionary concepts into structural masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-zinc-900 hover:bg-zinc-200 rounded-none px-8 h-14 text-sm tracking-widest font-bold uppercase transition-all duration-300 w-full sm:w-auto">
                View Portfolio
              </Button>
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-zinc-900 rounded-none px-8 h-14 text-sm tracking-widest font-bold uppercase transition-all duration-300 w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Ticker */}
      <section className="bg-zinc-900 text-white border-y border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-8 md:divide-x md:divide-zinc-800">
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">25+</p>
              <p className="text-xs tracking-widest text-zinc-500 uppercase">Years of Excellence</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">150</p>
              <p className="text-xs tracking-widest text-zinc-500 uppercase">Projects Completed</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">$2B+</p>
              <p className="text-xs tracking-widest text-zinc-500 uppercase">Asset Value Delivered</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">14</p>
              <p className="text-xs tracking-widest text-zinc-500 uppercase">Industry Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-sm tracking-widest text-zinc-500 uppercase font-bold mb-4">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">FEATURED <br /> DEVELOPMENTS</h3>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest uppercase hover:text-zinc-500 transition-colors">
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
              title="The Horizon Residence"
              location="Beverly Hills, CA"
              category="Luxury Residential"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
              title="Apex Corporate Center"
              location="Downtown Manhattan, NY"
              category="Commercial Tower"
              className="md:mt-16"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200"
              title="Oasis Villas"
              location="Miami Beach, FL"
              category="Boutique Community"
            />
            <ProjectCard
              image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200"
              title="Lumina Arts Hub"
              location="Chicago, IL"
              category="Cultural & Public"
              className="md:mt-16"
            />
          </div>
        </div>
      </section>

      {/* Expertise / Services */}
      <section id="expertise" className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm tracking-widest text-zinc-500 uppercase font-bold mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">INTEGRATED DEVELOPMENT SOLUTIONS</h3>
            <p className="text-zinc-600 text-lg">From site acquisition to final handover, we provide end-to-end capabilities that ensure absolute quality control and visionary execution.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <ServiceCard
              icon={<MapPin className="w-8 h-8" />}
              title="Land Acquisition & Planning"
              description="Strategic site selection, feasibility studies, and master planning to maximize asset potential."
            />
            <ServiceCard
              icon={<Home className="w-8 h-8" />}
              title="Architectural Design"
              description="Collaborating with world-renowned architects to create iconic, functional, and sustainable structures."
            />
            <ServiceCard
              icon={<HardHat className="w-8 h-8" />}
              title="Construction Management"
              description="Rigorous project oversight, advanced engineering, and meticulous craftsmanship."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-zinc-900 text-white">
        <div className="grid lg:grid-cols-2">
          <div className="p-6 md:p-12 lg:p-24 flex flex-col justify-center items-center">
            <div className="max-w-md w-full">
              <h2 className="text-sm tracking-widest text-zinc-500 uppercase font-bold mb-4">Start a Conversation</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">LET'S BUILD <br /> SOMETHING <br /> EXTRAORDINARY</h3>
              <p className="text-zinc-400 text-lg mb-12">
              Ready to bring your vision to life? Our team of experts is ready to discuss your next landmark project.
            </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center rounded-full shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-widest">Call Us</p>
                    <p className="font-bold text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center rounded-full shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-widest">Headquarters</p>
                    <p className="font-bold text-lg">100 Vanguard Tower, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 p-6 md:p-12 lg:p-24 flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md w-full">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-2">Name</label>
                <Input required className="bg-zinc-900 border-zinc-700 text-white rounded-none h-12 focus-visible:ring-1 focus-visible:ring-white" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-2">Email</label>
                <Input required type="email" className="bg-zinc-900 border-zinc-700 text-white rounded-none h-12 focus-visible:ring-1 focus-visible:ring-white" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-zinc-400 mb-2">Project Details</label>
                <Textarea required className="bg-zinc-900 border-zinc-700 text-white rounded-none min-h-[150px] focus-visible:ring-1 focus-visible:ring-white" />
              </div>
              <Button type="submit" className="w-full bg-white text-zinc-900 hover:bg-zinc-200 rounded-none h-14 text-sm tracking-widest font-bold uppercase transition-all duration-300">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 text-zinc-500 py-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-6 h-6 text-zinc-700" />
            <span className="text-xl font-bold tracking-tighter text-white">VANGUARD<span className="text-zinc-600 font-light">CONSTRUCT</span></span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Vanguard Construction Group. All rights reserved.
          </div>
        </div>
      </footer>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Inquiry Received"
        message="Thank you for reaching out to Vanguard Construct. A member of our executive team will contact you within 24 hours."
      />
    </div>
  )
}

function ProjectCard({ image, title, location, category, className = "" }: any) {
  return (
    <Link href="#" className={`group block ${className}`}>
      <div className="relative overflow-hidden mb-6 aspect-[4/3]">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">{category}</p>
          <h4 className="text-2xl font-bold tracking-tighter text-zinc-900 mb-1">{title}</h4>
          <p className="text-zinc-600">{location}</p>
        </div>
        <div className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-all duration-300">
          <ChevronRight className="w-5 h-5" />
        </div>
      </div>
    </Link>
  )
}

function ServiceCard({ icon, title, description }: any) {
  return (
    <div className="border border-zinc-200 p-10 hover:border-zinc-900 transition-colors duration-300 bg-white">
      <div className="w-16 h-16 bg-zinc-50 flex items-center justify-center text-zinc-900 mb-8 rounded-none border border-zinc-100">
        {icon}
      </div>
      <h4 className="text-xl font-bold tracking-tighter mb-4 text-zinc-900">{title}</h4>
      <p className="text-zinc-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
