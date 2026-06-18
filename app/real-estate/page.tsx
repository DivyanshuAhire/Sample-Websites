"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SuccessModal } from "@/components/ui/success-modal"
import { Search, MapPin, Bed, Bath, Square, Building, MessageSquare } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function RealEstatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#1f2937] font-roboto selection:bg-[#1e3a8a] selection:text-white pb-24">
      {/* Navigation */}
      <nav className="bg-white border-b border-[#e5e7eb] sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/real-estate" className="flex items-center gap-2">
              <Building className="w-6 h-6 text-[#1e3a8a]" />
              <span className="text-xl font-bold text-[#111827]">Horizon Estates</span>
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium text-[#4b5563]">
              <Link href="#" className="hover:text-[#111827]">Buy</Link>
              <Link href="#" className="hover:text-[#111827]">Rent</Link>
              <Link href="#" className="hover:text-[#111827]">Sell</Link>
              <Link href="#" className="hover:text-[#111827]">Agents</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#1e3a8a] hover:text-[#1e40af] bg-[#eff6ff] px-4 py-2 rounded-md"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Support
            </a>
            <Button className="bg-[#111827] text-white hover:bg-[#374151]">Sign In</Button>
          </div>
        </div>
      </nav>

      {/* Filter Bar */}
      <div className="bg-white border-b border-[#e5e7eb] shadow-sm mb-8 relative md:sticky md:top-16 z-40">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]" />
              <input
                type="text"
                placeholder="City, Neighborhood, or Zip"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f9fafb] border border-[#d1d5db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
              />
            </div>
            <select className="md:w-48 px-4 py-2.5 bg-[#f9fafb] border border-[#d1d5db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]">
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
            <select className="md:w-48 px-4 py-2.5 bg-[#f9fafb] border border-[#d1d5db] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]">
              <option value="">Price Range</option>
              <option value="0-500k">₹0 - ₹500k</option>
              <option value="500k-1m">₹500k - ₹1M</option>
              <option value="1m-plus">₹1M+</option>
            </select>
            <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 h-[46px] rounded-md gap-2 flex-shrink-0">
              <Search className="w-4 h-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header Status */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-[#111827]">Properties for Sale</h1>
            <p className="text-sm text-[#6b7280] mt-1">Showing 1-12 of 145 results</p>
          </div>
          <select className="hidden sm:block px-3 py-1.5 bg-white border border-[#d1d5db] rounded text-sm text-[#4b5563]">
            <option>Sort by: Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* Listing Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <PropertyCard
            image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
            price="₹1,250,000"
            address="123 Oakwood Ave, Maplewood, NJ 07040"
            beds={4} baths={3} sqft={2800} type="Single Family"
            tag="New Listing"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
            price="₹850,000"
            address="450 West End Ave #4B, New York, NY 10024"
            beds={2} baths={2} sqft={1200} type="Apartment"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
            price="₹3,400,000"
            address="88 Seaside Drive, Malibu, CA 90265"
            beds={5} baths={4.5} sqft={4500} type="Villa"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800"
            price="₹420,000"
            address="710 Riverside Dr, Austin, TX 78704"
            beds={3} baths={2} sqft={1600} type="Townhouse"
            tag="Price Cut"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
            price="₹2,100,000"
            address="900 Pine Lane, Aspen, CO 81611"
            beds={4} baths={4} sqft={3200} type="Single Family"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=800"
            price="₹675,000"
            address="334 Brickell Ave #1205, Miami, FL 33131"
            beds={2} baths={2} sqft={1150} type="Condo"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800"
            price="₹950,000"
            address="1225 Elm Street, Chicago, IL 60610"
            beds={3} baths={2.5} sqft={2100} type="Townhouse"
          />
          <PropertyCard
            image="https://images.unsplash.com/photo-1600585154526-990dced4ea0d?auto=format&fit=crop&q=80&w=800"
            price="₹1,850,000"
            address="400 Broad St, Seattle, WA 98109"
            beds={4} baths={3} sqft={3600} type="Single Family"
          />
        </div>

        {/* Featured Property Banner */}
        <section className="bg-white border border-[#e5e7eb] overflow-hidden my-16">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-sm font-bold tracking-wider text-[#1e3a8a] uppercase mb-4">Featured Listing</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111827] mb-4">The Penthouse at Grandview</h2>
              <p className="text-[#6b7280] mb-8 text-lg">
                Experience unparalleled luxury with 360-degree city views. This exclusive penthouse features custom finishes, a private rooftop terrace, and full-service amenities.
              </p>
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <span className="block text-2xl font-bold text-[#111827]">₹5,250,000</span>
                  <span className="text-sm text-[#6b7280]">Asking Price</span>
                </div>
                <div className="h-12 w-px bg-[#e5e7eb]"></div>
                <div>
                  <span className="block text-2xl font-bold text-[#111827]">3</span>
                  <span className="text-sm text-[#6b7280]">Beds</span>
                </div>
                <div className="h-12 w-px bg-[#e5e7eb]"></div>
                <div>
                  <span className="block text-2xl font-bold text-[#111827]">3.5</span>
                  <span className="text-sm text-[#6b7280]">Baths</span>
                </div>
              </div>
              <Button className="bg-[#111827] text-white hover:bg-[#374151] w-fit px-8 py-6 text-lg">
                View Full Details
              </Button>
            </div>
            <div className="relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200"
                alt="Luxury Penthouse"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contact Agent Form */}
        <section className="bg-[#111827] text-white p-8 md:p-16 rounded-xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Need help finding the right property?</h2>
            <p className="text-[#9ca3af] text-lg mb-8">
              Our expert agents are here to guide you through the buying process. Get in touch to schedule viewings or discuss your requirements.
            </p>
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
                alt="Agent Profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-[#1e3a8a]"
              />
              <div>
                <h4 className="font-bold">Robert Chen</h4>
                <p className="text-sm text-[#9ca3af]">Senior Real Estate Advisor</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white text-[#111827] p-8 rounded-lg space-y-4">
            <h3 className="text-xl font-bold mb-6">Contact an Agent</h3>
            <div className="grid grid-cols-2 gap-4">
              <Input required placeholder="First Name" className="bg-[#f9fafb] border-[#d1d5db]" />
              <Input required placeholder="Last Name" className="bg-[#f9fafb] border-[#d1d5db]" />
            </div>
            <Input required type="email" placeholder="Email Address" className="bg-[#f9fafb] border-[#d1d5db]" />
            <Input required type="tel" placeholder="Phone Number" className="bg-[#f9fafb] border-[#d1d5db]" />
            <Textarea required placeholder="I am interested in..." className="bg-[#f9fafb] border-[#d1d5db]" />
            <Button type="submit" className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] text-white py-6 text-lg font-bold">
              Send Message
            </Button>
          </form>
        </section>
      </main>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent"
        message="An agent will be in touch with you shortly to discuss your real estate needs."
      />
    </div>
  )
}

function PropertyCard({ image, price, address, beds, baths, sqft, type, tag }: any) {
  return (
    <div className="bg-white border border-[#e5e7eb] rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative aspect-[4/3] overflow-hidden">
        {tag && (
          <span className="absolute top-4 left-4 z-10 bg-white text-[#111827] text-xs font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wider">
            {tag}
          </span>
        )}
        <img
          src={image}
          alt={address}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
          {type}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-bold text-[#111827] mb-2">{price}</h3>
        <p className="text-sm text-[#6b7280] mb-4 truncate" title={address}>
          <MapPin className="inline w-4 h-4 mr-1 text-[#9ca3af]" />
          {address}
        </p>
        <div className="flex items-center justify-between text-sm text-[#4b5563] pt-4 border-t border-[#e5e7eb]">
          <div className="flex items-center gap-1"><Bed className="w-4 h-4 text-[#9ca3af]" /> {beds} <span className="hidden sm:inline">Beds</span></div>
          <div className="flex items-center gap-1"><Bath className="w-4 h-4 text-[#9ca3af]" /> {baths} <span className="hidden sm:inline">Baths</span></div>
          <div className="flex items-center gap-1"><Square className="w-4 h-4 text-[#9ca3af]" /> {sqft} <span className="hidden sm:inline">Sq Ft</span></div>
        </div>
      </div>
    </div>
  )
}
