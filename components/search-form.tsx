"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { format, addDays } from "date-fns"

export default function SearchForm({ onSearch }: { onSearch: (params: any) => void }) {
  const [checkIn, setCheckIn] = useState(format(new Date(), "yyyy-MM-dd"))
  const [checkOut, setCheckOut] = useState(format(addDays(new Date(), 3), "yyyy-MM-dd"))
  const [guests, setGuests] = useState(2)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch({ checkIn, checkOut, guests })
  }

  return (
    <section className="relative -mt-24 z-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <form onSubmit={handleSubmit} className="bg-card rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-light text-foreground mb-8">Find Your Perfect Room</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Check-in Date */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-light text-muted-foreground uppercase tracking-wide">Check-In Date</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
              />
            </motion.div>

            {/* Check-out Date */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-light text-muted-foreground uppercase tracking-wide">Check-Out Date</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
              />
            </motion.div>

            {/* Number of Guests */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-light text-muted-foreground uppercase tracking-wide">
                Number of Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Search Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col justify-end"
            >
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-light hover:bg-primary/90 smooth-transition shadow-md hover:shadow-lg"
              >
                Search Rooms
              </button>
            </motion.div>
          </div>
        </form>
      </motion.div>
    </section>
  )
}
