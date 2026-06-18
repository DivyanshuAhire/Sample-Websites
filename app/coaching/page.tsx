"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessModal } from "@/components/ui/success-modal"
import { TrendingUp, GraduationCap, Users, Trophy, ChevronRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function CoachingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-black font-montserrat selection:bg-[#fbd34d] selection:text-black">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 bg-[#fbd34d] text-black flex items-center justify-center rounded-sm">A</div>
            Ascend Institute
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold tracking-wide">
            <Link href="#results" className="hover:text-[#fbd34d] transition-colors">Our Results</Link>
            <Link href="#courses" className="hover:text-[#fbd34d] transition-colors">Programs</Link>
            <Link href="#testimonials" className="hover:text-[#fbd34d] transition-colors">Success Stories</Link>
          </div>
          <a 
            href="#enroll"
            className="bg-[#fbd34d] text-black px-6 py-2.5 text-sm font-bold hover:bg-[#f59e0b] transition-colors rounded-sm"
          >
            Apply Now
          </a>
        </div>
      </nav>

      {/* Hero (Results-First) */}
      <header className="bg-black text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fbd34d]/10 -skew-x-12 transform translate-x-32 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fbd34d] text-black px-4 py-1.5 font-bold text-sm mb-8 rounded-sm">
              <Trophy className="w-4 h-4" /> 2025 Admissions Open
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-8 text-balance">
              Top 1% Results. <br />
              <span className="text-[#fbd34d]">No Exceptions.</span>
            </h1>
            <p className="text-xl text-neutral-400 font-medium mb-10 leading-relaxed max-w-xl text-balance">
              We don't just teach. We engineer success. Join the institute that produced 500+ top-tier placements last year alone.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#enroll" className="bg-[#fbd34d] text-black px-8 py-4 font-bold rounded-sm hover:bg-white transition-colors flex items-center gap-2">
                Start Your Journey <ChevronRight className="w-5 h-5" />
              </a>
              <a href="#courses" className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 font-bold rounded-sm transition-colors">
                View Programs
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <div className="text-[#fbd34d] mb-4"><GraduationCap className="w-10 h-10" /></div>
              <div className="text-5xl font-black mb-2">94%</div>
              <div className="text-neutral-400 font-medium text-sm">Placement Rate</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm translate-y-8">
              <div className="text-[#fbd34d] mb-4"><TrendingUp className="w-10 h-10" /></div>
              <div className="text-5xl font-black mb-2">120K+</div>
              <div className="text-neutral-400 font-medium text-sm">Average Starting Salary</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-sm">
              <div className="text-[#fbd34d] mb-4"><Users className="w-10 h-10" /></div>
              <div className="text-5xl font-black mb-2">15:1</div>
              <div className="text-neutral-400 font-medium text-sm">Student-to-Mentor Ratio</div>
            </div>
            <div className="bg-[#fbd34d] text-black p-8 rounded-sm translate-y-8">
              <div className="text-black mb-4"><Trophy className="w-10 h-10" /></div>
              <div className="text-5xl font-black mb-2">#1</div>
              <div className="font-bold text-sm">Ranked Institute 2025</div>
            </div>
          </div>
        </div>
      </header>

      {/* Courses List - Structured */}
      <section id="courses" className="py-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Rigorous Programs.</h2>
          <p className="text-lg text-neutral-600 font-medium">Curriculums designed backward from industry requirements, not textbooks.</p>
        </div>

        <div className="space-y-8">
          {/* Course 1 */}
          <div className="border-l-4 border-[#fbd34d] pl-6 md:pl-8 py-2">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-black mb-2">Full-Stack Engineering Immersive</h3>
                <p className="text-neutral-600 font-medium">6 Months • Full-Time • On-Campus</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block bg-black text-white px-4 py-1 text-sm font-bold rounded-sm">Admissions Open</span>
              </div>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Master modern web development, algorithms, and system design. This program is notorious for its intensity. You will code for 10 hours a day, build 4 production-grade projects, and emerge ready for mid-level engineering roles.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-[#fbd34d]" /> React & Next.js ecosystem</li>
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-[#fbd34d]" /> Node.js & Distributed Systems</li>
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-[#fbd34d]" /> Advanced DSA & Leetcode prep</li>
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-[#fbd34d]" /> Dedicated Placement Support</li>
            </ul>
          </div>

          <hr className="border-neutral-200" />

          {/* Course 2 */}
          <div className="border-l-4 border-black pl-6 md:pl-8 py-2">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-black mb-2">Data Science & AI Specialization</h3>
                <p className="text-neutral-600 font-medium">8 Months • Part-Time • Hybrid</p>
              </div>
              <div className="shrink-0">
                <span className="inline-block bg-neutral-200 text-neutral-600 px-4 py-1 text-sm font-bold rounded-sm">Waitlist</span>
              </div>
            </div>
            <p className="text-neutral-700 leading-relaxed mb-6">
              A mathematically rigorous dive into machine learning, deep neural networks, and generative AI. Built for professionals looking to transition into senior data roles without quitting their day jobs.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-black" /> Python & Core Math</li>
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-black" /> PyTorch & TensorFlow</li>
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-black" /> NLP & LLM Fine-Tuning</li>
              <li className="flex items-center gap-2 text-sm font-bold text-neutral-800"><CheckCircle2 className="w-4 h-4 text-black" /> Real-world Datasets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials (Quote Heavy) */}
      <section id="testimonials" className="bg-neutral-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center">Don't take our word for it.</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 shadow-sm">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 italic">
                "I was stuck in a low-paying QA job for 3 years. The immersive program broke me down and rebuilt my foundational knowledge from scratch. Within 3 weeks of graduation, I had three offers from top product companies."
              </p>
              <div>
                <p className="font-black">Sarah Jenkins</p>
                <p className="text-sm font-bold text-[#d97706]">Software Engineer @ TechCorp</p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 italic">
                "The mentors here don't spoon-feed you. They point you to the documentation and demand excellence. It was the hardest 6 months of my life, but the ROI is simply unmatched. The curriculum is perfectly aligned with what interviews actually test."
              </p>
              <div>
                <p className="font-black">David Park</p>
                <p className="text-sm font-bold text-[#d97706]">Backend Developer @ StartupX</p>
              </div>
            </div>
            <div className="bg-white p-8 shadow-sm">
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 italic">
                "I had a non-CS background and was terrified of algorithms. The structured approach and the daily mock interviews completely changed my mindset. Ascend didn't just teach me how to code, they taught me how to think like an engineer."
              </p>
              <div>
                <p className="font-black">Elena Rodriguez</p>
                <p className="text-sm font-bold text-[#d97706]">Data Analyst @ GlobalFin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Form & CTA */}
      <section id="enroll" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6">Take the first step.</h2>
          <p className="text-lg text-neutral-600 font-medium mb-10">
            Admissions are highly selective. We look for grit, determination, and a willingness to put in the hours. If that's you, let's talk.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-bold text-sm">Full Name</label>
                <Input required className="border-neutral-300 focus-visible:ring-black h-12 rounded-sm bg-neutral-50" />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-sm">Phone Number</label>
                <Input required type="tel" className="border-neutral-300 focus-visible:ring-black h-12 rounded-sm bg-neutral-50" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="font-bold text-sm">Select Program</label>
              <select required className="flex w-full border border-neutral-300 px-3 py-2 text-sm h-12 rounded-sm bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
                <option value="">Select...</option>
                <option value="fs">Full-Stack Engineering Immersive</option>
                <option value="ds">Data Science & AI Specialization</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="font-bold text-sm">Why do you want to join? (Brief)</label>
              <Textarea required className="border-neutral-300 focus-visible:ring-black rounded-sm bg-neutral-50" />
            </div>

            <Button type="submit" className="w-full bg-[#fbd34d] hover:bg-[#f59e0b] text-black font-black text-lg py-6 rounded-sm h-14">
              Submit Application
            </Button>
          </form>
        </div>
        
        <div className="bg-black text-white p-12 rounded-sm relative overflow-hidden">
          <div className="absolute -top-24 -right-24 text-white/5">
            <TrendingUp className="w-64 h-64" />
          </div>
          <h3 className="text-3xl font-black mb-8 relative z-10">Application Process</h3>
          <ul className="space-y-8 relative z-10">
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#fbd34d] text-black font-black flex items-center justify-center shrink-0">1</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Submit Application</h4>
                <p className="text-neutral-400 text-sm font-medium">Fill out the basic details above.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white font-black flex items-center justify-center shrink-0">2</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Aptitude Test</h4>
                <p className="text-neutral-400 text-sm font-medium">A 45-minute logical reasoning assessment.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white font-black flex items-center justify-center shrink-0">3</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Mentor Interview</h4>
                <p className="text-neutral-400 text-sm font-medium">A quick chat to ensure mutual fit and dedication.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white font-black flex items-center justify-center shrink-0">4</div>
              <div>
                <h4 className="font-bold text-lg mb-1">Enrollment</h4>
                <p className="text-neutral-400 text-sm font-medium">Secure your seat and start your pre-course work.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="bg-[#fbd34d] text-black py-16 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Your future starts now.</h2>
        <a href="#enroll" className="inline-block bg-black text-white px-10 py-4 font-bold rounded-sm hover:bg-neutral-800 transition-colors">
          Enroll Now
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 text-center px-6">
        <div className="text-2xl font-black tracking-tight flex items-center justify-center gap-2 mb-4">
          <div className="w-6 h-6 bg-[#fbd34d] text-black flex items-center justify-center rounded-sm text-sm">A</div>
          Ascend Institute
        </div>
        <p className="text-neutral-500 font-medium text-sm">© 2026 Ascend Educational Institute. All rights reserved.</p>
      </footer>

      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Application Received"
        message="Your application is under review. Check your email for the next steps regarding the aptitude test."
      />
    </div>
  )
}
