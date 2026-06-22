"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessModal } from "@/components/ui/success-modal"
import { Calculator, Briefcase, PieChart, FileText, Landmark, Phone, Mail, MapPin, Menu, X, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CaFirmPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      {/* EDIT DATA HERE: Navigation links and branding */}
      <nav className="fixed w-full z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/ca-firm" className="flex items-center gap-2">
            <Landmark className="w-8 h-8 text-slate-900" />
            <span className="text-2xl font-bold tracking-tight text-slate-900">
              APEX<span className="font-light text-slate-500">&CO.</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-slate-600">
            <Link href="#services" className="hover:text-slate-900 transition-colors">SERVICES</Link>
            <Link href="#about" className="hover:text-slate-900 transition-colors">ABOUT</Link>
            <Link href="#contact" className="hover:text-slate-900 transition-colors">CONTACT</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-slate-900 hover:bg-slate-800 text-white rounded-none px-6 h-10 text-xs tracking-widest font-semibold uppercase">
              Consultation
            </Button>
            <button className="md:hidden p-2 text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 flex flex-col gap-6 shadow-sm absolute w-full top-20 left-0">
            <Link href="#services" className="text-sm font-bold tracking-widest text-slate-900 uppercase" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
            <Link href="#about" className="text-sm font-bold tracking-widest text-slate-900 uppercase" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link>
            <Link href="#contact" className="text-sm font-bold tracking-widest text-slate-900 uppercase" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link>
            <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-none w-full h-12 text-xs tracking-widest font-semibold uppercase mt-2">
              Consultation
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      {/* EDIT DATA HERE: Hero section text and background image */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Clarity in Numbers.<br />
              <span className="text-slate-500 font-light">Confidence in Growth.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl font-light mb-10 border-l-2 border-slate-900 pl-6">
              Premier Chartered Accountants providing strategic financial advisory, audit, and tax solutions for forward-thinking businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#services" className="w-full sm:w-auto">
                <Button className="bg-slate-900 text-white hover:bg-slate-800 rounded-none px-8 h-14 text-sm tracking-widest font-bold uppercase transition-all duration-300 w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
              <Link href="#contact" className="w-full sm:w-auto">
                <Button className="bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 rounded-none px-8 h-14 text-sm tracking-widest font-bold uppercase transition-all duration-300 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Ticker */}
      {/* EDIT DATA HERE: Statistics values and labels */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-8 md:divide-x md:divide-slate-800">
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2">30+</p>
              <p className="text-xs tracking-widest text-slate-400 uppercase">Years Experience</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2">500+</p>
              <p className="text-xs tracking-widest text-slate-400 uppercase">Corporate Clients</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2">₹10K+</p>
              <p className="text-xs tracking-widest text-slate-400 uppercase">Cr. Audited Annually</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold tracking-tight mb-2">50+</p>
              <p className="text-xs tracking-widest text-slate-400 uppercase">Expert Professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {/* EDIT DATA HERE: Service offerings */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm tracking-widest text-slate-500 uppercase font-bold mb-4">Practice Areas</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">COMPREHENSIVE <br /> FINANCIAL SOLUTIONS</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<FileText className="w-8 h-8" />}
              title="Audit & Assurance"
              description="Statutory audits, internal audits, and compliance reviews ensuring transparency and regulatory adherence."
            />
            <ServiceCard
              icon={<PieChart className="w-8 h-8" />}
              title="Tax Advisory"
              description="Strategic tax planning, direct and indirect taxation services, GST compliance, and representation."
            />
            <ServiceCard
              icon={<Briefcase className="w-8 h-8" />}
              title="Business Consulting"
              description="Financial restructuring, M&A advisory, valuation services, and business process optimization."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* EDIT DATA HERE: Contact details and form text */}
      <section id="contact" className="bg-white border-t border-slate-200">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-slate-50 border-r border-slate-200">
            <div className="max-w-md">
              <h2 className="text-sm tracking-widest text-slate-500 uppercase font-bold mb-4">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">SCHEDULE A <br /> CONSULTATION</h3>
              <p className="text-slate-600 text-lg mb-12">
                Partner with us for expert financial guidance. Our team is ready to address your business challenges.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                    <p className="font-medium text-slate-900">+91 22 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="font-medium text-slate-900">contact@apexco.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Office</p>
                    <p className="font-medium text-slate-900">101 Business Park, Nariman Point,<br />Mumbai, Maharashtra 400021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md w-full mx-auto lg:mx-0">
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Full Name</label>
                <Input required className="bg-slate-50 border-slate-200 text-slate-900 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-slate-900" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Email Address</label>
                <Input required type="email" className="bg-slate-50 border-slate-200 text-slate-900 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-slate-900" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">Company Name</label>
                <Input className="bg-slate-50 border-slate-200 text-slate-900 rounded-none h-12 focus-visible:ring-1 focus-visible:ring-slate-900" />
              </div>
              <div>
                <label className="block text-xs font-bold tracking-widest uppercase text-slate-500 mb-2">How can we help?</label>
                <Textarea required className="bg-slate-50 border-slate-200 text-slate-900 rounded-none min-h-[120px] focus-visible:ring-1 focus-visible:ring-slate-900" />
              </div>
              <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-slate-800 rounded-none h-14 text-sm tracking-widest font-bold uppercase transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* EDIT DATA HERE: Footer copyright and branding */}
      <footer className="bg-slate-950 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Landmark className="w-6 h-6 text-slate-600" />
            <span className="text-xl font-bold tracking-tight text-white">APEX<span className="font-light text-slate-500">&CO.</span></span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Apex & Co. Chartered Accountants. All rights reserved.
          </div>
        </div>
      </footer>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent"
        message="Thank you for contacting Apex & Co. Our team will review your inquiry and get back to you shortly."
      />
    </div>
  )
}

function ServiceCard({ icon, title, description }: any) {
  return (
    <div className="border border-slate-200 p-10 bg-white hover:border-slate-400 transition-colors duration-300 group">
      <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-slate-900 mb-8 border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-bold tracking-tight mb-4 text-slate-900">{title}</h4>
      <p className="text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}
