"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">H</span>
              </div>
              <span className="ml-2 text-xl font-light text-foreground">
                Hotel Booking
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Rooms
            </Link>
            <Link
              href="/#amenities"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Amenities
            </Link>
            <Link
              href="/#about"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/rooms"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 space-y-3 border-t border-border"
          >
            <Link
              href="/"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/rooms"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link
              href="/#amenities"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Amenities
            </Link>
            <Link
              href="/#about"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/rooms"
              className="block px-2 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium text-center hover:bg-primary/90 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  )
}
