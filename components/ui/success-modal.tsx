"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle2, X } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  message?: string
  className?: string
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Success!",
  message = "Your submission has been received. We will get back to you shortly.",
  className
}: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className={cn(
          "relative w-full max-w-md bg-white p-6 shadow-xl animate-in fade-in zoom-in-95 duration-200",
          className
        )}
      >
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <X className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </button>

        <div className="flex flex-col items-center text-center space-y-4 pt-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
            <p className="text-sm text-neutral-500">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="mt-6 px-6 py-2 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors w-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
