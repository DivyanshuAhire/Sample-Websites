"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessModal } from "@/components/ui/success-modal"
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function RestaurantPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c1e16] font-sans selection:bg-[#8a2e2e] selection:text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-playfair font-bold tracking-tight">The Local.</div>
        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-[#5c4b41]">
          <Link href="#menu" className="hover:text-[#8a2e2e] transition-colors">Menu</Link>
          <Link href="#story" className="hover:text-[#8a2e2e] transition-colors">Our Story</Link>
          <Link href="#visit" className="hover:text-[#8a2e2e] transition-colors">Visit</Link>
        </div>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8a2e2e] text-[#fdfbf7] px-6 py-2 text-sm font-medium uppercase tracking-widest hover:bg-[#6b2222] transition-colors"
        >
          Order Now
        </a>
      </nav>

      {/* Hero */}
      <header className="grid md:grid-cols-2 min-h-[85vh]">
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-[#f4ece3]">
          <h1 className="font-playfair text-6xl md:text-8xl leading-none tracking-tight text-[#2c1e16] mb-8">
            Honest food,<br />
            <span className="italic text-[#8a2e2e]">properly</span> done.
          </h1>
          <p className="text-lg md:text-xl text-[#5c4b41] max-w-md font-light leading-relaxed mb-12">
            A neighborhood dining room serving wood-fired plates and natural wines in a space that feels like home.
          </p>
          <div>
            <a
              href="#menu"
              className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest border-b-2 border-[#2c1e16] pb-2 hover:text-[#8a2e2e] hover:border-[#8a2e2e] transition-colors"
            >
              View Menu <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="relative h-[50vh] md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1631452180539-96aca7d48617?auto=format&fit=crop&q=80&w=1600"
            alt="Paneer Masala"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </header>

      {/* About Section - Split Layout */}
      <section id="story" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 relative aspect-[3/4]">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000"
            alt="Restaurant interior"
            className="absolute inset-0 w-full h-full object-cover shadow-2xl"
          />
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-playfair text-4xl md:text-5xl mb-8">Rooted in tradition, open to the world.</h2>
          <div className="space-y-6 text-[#5c4b41] text-lg leading-relaxed font-light">
            <p>
              We opened The Local with a simple premise: create the kind of place we wanted to eat at on our days off. No fuss, no tweezers, just exceptionally good ingredients treated with respect.
            </p>
            <p>
              Our kitchen centers around the hearth. Fire dictates our menu, which changes almost daily based on what our farmers bring to the back door.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section - Editorial Layout */}
      <section id="menu" className="py-24 bg-[#2c1e16] text-[#fdfbf7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-playfair text-5xl italic text-[#e6d5c3]">Provisions</h2>
            <p className="mt-4 text-[#a39589] tracking-widest uppercase text-sm">Sample Menu — Subject to change</p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="font-playfair text-2xl mb-8 pb-4 border-b border-[#4a3b32] text-[#8a2e2e]">All Time Favorites</h3>
              <div className="space-y-8">
                <MenuItem title="Paneer Masala" price="240" desc="India's Most Famous Curry" />
                <MenuItem title="Manchurian " price="80" desc="Chinese Starter" />
                <MenuItem title="Naan" price="12" desc="Bread" />
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-2xl mb-8 pb-4 border-b border-[#4a3b32] text-[#8a2e2e]">Must Try</h3>
              <div className="space-y-8">
                <MenuItem title="Ice Cream" price="40" desc="Delicious Dessert" />
                <MenuItem title="Rice" price="80" desc="White Rice " />
                <MenuItem title="Dal Fry" price="100" desc="Desi Tadka Dal Fry" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit / Contact */}
      <section id="visit" className="py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-playfair text-4xl mb-12">Drop by or drop a line.</h2>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#8a2e2e] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1">Location</h4>
                <p className="text-[#5c4b41]">123 Heritage Row, Historic District<br />Cityville, ST 12345</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#8a2e2e] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1">Hours</h4>
                <p className="text-[#5c4b41]">Wed - Sun: 5pm - 10pm<br />Closed Mon & Tue</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#8a2e2e] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1">Contact</h4>
                <p className="text-[#5c4b41]">+91 9999999999<br />hello@thelocal.com</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-[#f4ece3] p-8">
            <h3 className="font-playfair text-2xl mb-4">Send an Inquiry</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Input required placeholder="Your Name" className="border-[#d4c6b8] focus-visible:ring-[#8a2e2e]" />
              <Input required type="email" placeholder="Email Address" className="border-[#d4c6b8] focus-visible:ring-[#8a2e2e]" />
            </div>
            <Textarea required placeholder="Your Message" className="border-[#d4c6b8] focus-visible:ring-[#8a2e2e]" />
            <Button type="submit" className="w-full bg-[#2c1e16] hover:bg-[#1a110d] text-white py-6 text-sm uppercase tracking-widest">
              Send Message
            </Button>
          </form>
        </div>

        <div className="h-full min-h-[400px] bg-neutral-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528094582!2d-74.14448744573138!3d40.6976684025902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1691234567890!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-90 mix-blend-multiply"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a110d] text-[#fdfbf7] py-12 text-center">
        <p className="font-playfair italic text-xl mb-4">The Local.</p>
        <p className="text-sm text-[#8a7b71] uppercase tracking-widest">© 2026 The Local Restaurant</p>
      </footer>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent"
        message="Thank you for reaching out. We will get back to you shortly."
      />
    </div>
  )
}

function MenuItem({ title, price, desc }: { title: string, price: string, desc: string }) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
      <div className="flex-1">
        <div className="flex justify-between items-baseline mb-1">
          <h4 className="font-bold text-lg">{title}</h4>
          <span className="md:hidden font-playfair italic text-[#a39589]">₹{price}</span>
        </div>
        <p className="text-[#a39589] font-light text-sm">{desc}</p>
      </div>
      <div className="hidden md:block font-playfair text-xl italic text-[#e6d5c3] shrink-0">
        ₹{price}
      </div>
    </div>
  )
}
