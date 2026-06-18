"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessModal } from "@/components/ui/success-modal"
import { PhoneCall, CalendarDays, Clock, MapPin, Activity } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function ClinicPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-[#1e293b] font-outfit selection:bg-[#0f172a] selection:text-white overflow-x-hidden">
      {/* Top Banner - Emergency / Contact */}
      <div className="bg-[#0f172a] text-white py-2 px-6 text-sm font-medium flex justify-between items-center max-w-7xl mx-auto md:px-8">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2"><PhoneCall className="w-4 h-4 text-[#10b981]" /> +1 (800) 123-4567</span>
          <span className="hidden md:flex items-center gap-2"><MapPin className="w-4 h-4 text-[#10b981]" /> 450 Medical Plaza, NY</span>
        </div>
        <div>
          <span className="text-[#10b981] font-bold">24/7 Emergency Care Available</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-[#e2e8f0] sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Activity className="w-8 h-8 text-[#0f172a]" />
            <span className="text-2xl font-bold tracking-tight text-[#0f172a]">Apex Health</span>
          </div>
          <div className="hidden lg:flex gap-8 text-base font-medium text-[#475569]">
            <Link href="#services" className="hover:text-[#0f172a] transition-colors">Specialties</Link>
            <Link href="#doctors" className="hover:text-[#0f172a] transition-colors">Our Doctors</Link>
            <Link href="#patient-info" className="hover:text-[#0f172a] transition-colors">Patient Information</Link>
          </div>
          <a 
            href="#book"
            className="bg-[#0f172a] text-white px-6 py-3 font-semibold rounded-md hover:bg-[#1e293b] transition-colors shadow-sm"
          >
            Request Appointment
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-[#d1fae5] text-[#065f46] text-sm font-semibold rounded-full mb-6">Excellence in Healthcare</span>
            <h1 className="text-5xl lg:text-6xl font-bold text-[#0f172a] leading-[1.1] tracking-tight mb-6">
              Advanced medical care with a compassionate approach.
            </h1>
            <p className="text-xl text-[#475569] mb-10 leading-relaxed">
              Apex Health provides comprehensive medical services tailored to your individual needs. Our board-certified specialists are dedicated to your long-term well-being.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#book" className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 font-semibold rounded-md transition-colors shadow-sm flex items-center gap-2">
                <CalendarDays className="w-5 h-5" /> Schedule Visit
              </a>
              <a href="#services" className="bg-white border border-[#cbd5e1] text-[#0f172a] hover:bg-[#f1f5f9] px-8 py-4 font-semibold rounded-md transition-colors">
                View Services
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[#e2e8f0] rounded-xl -rotate-3 transform z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=1200" 
              alt="Doctor consulting with patient"
              className="relative z-10 w-full rounded-xl shadow-lg border border-[#e2e8f0]"
            />
          </div>
        </div>
      </header>

      {/* Services List - Structured */}
      <section id="services" className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Clinical Specialties</h2>
          <p className="text-[#475569] text-lg">Comprehensive care across multiple disciplines, utilizing evidence-based practices and state-of-the-art technology.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          <ServiceItem 
            title="Primary Care & Internal Medicine" 
            desc="Comprehensive adult medicine, preventative care, routine check-ups, and management of chronic conditions such as diabetes and hypertension."
          />
          <ServiceItem 
            title="Cardiology" 
            desc="Advanced cardiovascular diagnostics, interventional cardiology, heart failure management, and comprehensive cardiac rehabilitation programs."
          />
          <ServiceItem 
            title="Orthopedics & Sports Medicine" 
            desc="Surgical and non-surgical treatment of musculoskeletal conditions, joint replacement, sports injuries, and dedicated physical therapy."
          />
          <ServiceItem 
            title="Neurology" 
            desc="Diagnosis and treatment of nervous system disorders including migraines, epilepsy, stroke recovery, and neurodegenerative diseases."
          />
          <ServiceItem 
            title="Pediatrics" 
            desc="Compassionate healthcare for infants, children, and adolescents. Covering immunizations, developmental screenings, and acute illness care."
          />
          <ServiceItem 
            title="Diagnostic Imaging" 
            desc="On-site state-of-the-art radiology department featuring high-resolution MRI, CT scanning, ultrasound, and digital X-ray services."
          />
        </div>
      </section>

      {/* Patient Info & Timings - Table Layout */}
      <section id="patient-info" className="py-24 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Patient Information & Policies</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-[#475569] text-lg mb-6">
                We strive to make your visit as efficient and comfortable as possible. Please review our policies regarding appointments, insurance, and billing.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#0f172a] text-lg mb-2">Insurance Accepted</h4>
                  <p className="text-[#475569]">We accept Medicare, Medicaid, and most major commercial insurance providers. Please contact our billing department to verify your specific coverage before your appointment.</p>
                </div>
                <hr className="border-[#e2e8f0]" />
                <div>
                  <h4 className="font-semibold text-[#0f172a] text-lg mb-2">New Patients</h4>
                  <p className="text-[#475569]">Please arrive 15 minutes prior to your scheduled appointment time to complete necessary registration paperwork. Bring a valid ID, insurance card, and a list of current medications.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="bg-white border border-[#e2e8f0] rounded-xl shadow-sm p-8">
              <h3 className="flex items-center gap-3 text-2xl font-bold text-[#0f172a] mb-6">
                <Clock className="w-6 h-6 text-[#10b981]" /> Operating Hours
              </h3>
              <table className="w-full text-left border-collapse">
                <tbody>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-4 font-medium text-[#0f172a]">Monday - Friday</td>
                    <td className="py-4 text-[#475569] text-right">8:00 AM - 6:00 PM</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-4 font-medium text-[#0f172a]">Saturday</td>
                    <td className="py-4 text-[#475569] text-right">9:00 AM - 2:00 PM</td>
                  </tr>
                  <tr className="border-b border-[#e2e8f0]">
                    <td className="py-4 font-medium text-[#0f172a]">Sunday</td>
                    <td className="py-4 text-[#475569] text-right">Closed</td>
                  </tr>
                  <tr>
                    <td className="py-4 font-medium text-[#0f172a]">Emergency Dept</td>
                    <td className="py-4 text-[#10b981] font-bold text-right">24/7 Open</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking & Testimonials */}
      <section id="book" className="py-24 max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Request an Appointment</h2>
            <p className="text-[#475569]">Complete the form below and our scheduling team will contact you within one business day to confirm your appointment time.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0f172a]">First Name *</label>
                <Input required className="border-[#cbd5e1] focus-visible:ring-[#0f172a] rounded-md h-12" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0f172a]">Last Name *</label>
                <Input required className="border-[#cbd5e1] focus-visible:ring-[#0f172a] rounded-md h-12" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0f172a]">Phone Number *</label>
                <Input required type="tel" className="border-[#cbd5e1] focus-visible:ring-[#0f172a] rounded-md h-12" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0f172a]">Email Address</label>
                <Input type="email" className="border-[#cbd5e1] focus-visible:ring-[#0f172a] rounded-md h-12" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-[#0f172a]">Department / Reason for Visit *</label>
              <select required className="flex w-full bg-white border border-[#cbd5e1] px-3 py-2 text-sm h-12 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0f172a]">
                <option value="">Select a department...</option>
                <option value="primary">Primary Care</option>
                <option value="cardio">Cardiology</option>
                <option value="ortho">Orthopedics</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Button type="submit" className="w-full h-14 bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold rounded-md mt-4">
              Submit Request
            </Button>
            <p className="text-xs text-[#64748b] text-center mt-4">
              If you are experiencing a medical emergency, please call 911 or proceed to the nearest emergency room immediately.
            </p>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#0f172a] mb-8">Patient Perspectives</h2>
          <div className="space-y-8">
            <blockquote className="border-l-4 border-[#10b981] pl-6 py-2">
              <p className="text-lg text-[#334155] leading-relaxed mb-4">
                "The level of care I received at Apex Health was exceptional. Dr. Reynolds took the time to explain my diagnosis thoroughly and answer every question I had without rushing. A truly professional and compassionate environment."
              </p>
              <footer className="text-[#64748b] font-medium">— Michael T., Cardiology Patient</footer>
            </blockquote>
            <blockquote className="border-l-4 border-[#10b981] pl-6 py-2">
              <p className="text-lg text-[#334155] leading-relaxed mb-4">
                "From the front desk staff to the nursing team and the attending physicians, the entire clinic operates with impressive efficiency. I was seen promptly and my follow-up care was coordinated seamlessly."
              </p>
              <footer className="text-[#64748b] font-medium">— Sarah W., Primary Care Patient</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-[#94a3b8] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-6 h-6 text-white" />
              <span className="text-xl font-bold text-white">Apex Health</span>
            </div>
            <p className="text-sm">Providing exceptional healthcare services with a commitment to clinical excellence and patient-centered care.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Important Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Patient Portal Login</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Pay Your Bill Online</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Medical Records Request</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy (HIPAA)</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact & Location</h4>
            <ul className="space-y-3 text-sm">
              <li>450 Medical Plaza<br/>New York, NY 10001</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Fax: +1 (800) 123-4568</li>
              <li>Email: contact@apexhealth.demo</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-[#1e293b] text-sm text-center">
          © 2026 Apex Health System. All rights reserved. This is a demo website.
        </div>
      </footer>

      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Request Submitted"
        message="Your appointment request has been securely submitted. Our scheduling team will contact you shortly."
        className="rounded-xl border border-[#e2e8f0]"
      />
    </div>
  )
}

function ServiceItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="border-t border-[#e2e8f0] pt-6">
      <h3 className="text-xl font-bold text-[#0f172a] mb-3">{title}</h3>
      <p className="text-[#475569] leading-relaxed">{desc}</p>
    </div>
  )
}
