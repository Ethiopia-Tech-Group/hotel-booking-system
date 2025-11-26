"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { differenceInDays } from "date-fns"

export default function BookingForm({
  room,
  searchParams,
  onSubmit,
  onBack,
}: {
  room: any
  searchParams: any
  onSubmit: (data: any) => void
  onBack: () => void
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const nights = differenceInDays(new Date(searchParams.checkOut), new Date(searchParams.checkIn))

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.includes("@")) newErrors.email = "Valid email is required"
    if (formData.phone.length < 10) newErrors.phone = "Valid phone number is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({
        ...formData,
        room,
        searchParams,
        totalPrice: room.price * nights,
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-accent hover:text-primary smooth-transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Room Details
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl font-light text-foreground mb-2">Complete Your Booking</h1>
              <p className="text-muted-foreground">Please provide your details to reserve your room</p>
            </motion.div>

            {/* Guest Information Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-xl font-light text-foreground">Guest Information</h2>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-muted-foreground mb-2 uppercase tracking-wide">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 smooth-transition ${
                      errors.firstName ? "border-destructive focus:ring-destructive" : "border-border focus:ring-accent"
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-light text-muted-foreground mb-2 uppercase tracking-wide">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 smooth-transition ${
                      errors.lastName ? "border-destructive focus:ring-destructive" : "border-border focus:ring-accent"
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-light text-muted-foreground mb-2 uppercase tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 smooth-transition ${
                      errors.email ? "border-destructive focus:ring-destructive" : "border-border focus:ring-accent"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-light text-muted-foreground mb-2 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 smooth-transition ${
                      errors.phone ? "border-destructive focus:ring-destructive" : "border-border focus:ring-accent"
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>
            </motion.div>

            {/* Special Requests */}
            <motion.div variants={itemVariants} className="space-y-4">
              <label className="block text-sm font-light text-muted-foreground mb-2 uppercase tracking-wide">
                Special Requests (Optional)
              </label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent smooth-transition"
                placeholder="Any special requests for your stay? (e.g., late checkout, high floor, etc.)"
              />
            </motion.div>

            {/* Submit Buttons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-light hover:bg-primary/90 smooth-transition shadow-md hover:shadow-lg"
              >
                Confirm Booking
              </button>
              <button
                type="button"
                onClick={onBack}
                className="flex-1 px-6 py-4 border border-border text-foreground rounded-lg font-light hover:bg-muted smooth-transition"
              >
                Cancel
              </button>
            </motion.div>
          </motion.form>

          {/* Booking Summary Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 bg-card rounded-lg shadow-lg p-8 space-y-6">
              <h3 className="text-lg font-light text-foreground">Booking Summary</h3>

              {/* Room Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-2"
              >
                <p className="text-sm text-muted-foreground">{room.name}</p>
                <p className="font-light text-foreground">
                  {searchParams.checkIn} to {searchParams.checkOut}
                </p>
                <p className="text-sm text-muted-foreground">
                  {nights} {nights === 1 ? "night" : "nights"}
                </p>
              </motion.div>

              <div className="border-t border-b border-border py-6 space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">Room Rate:</span>
                  <span className="text-foreground font-light">${room.price}/night</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="text-foreground font-light">${room.price * nights}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">Taxes:</span>
                  <span className="text-foreground font-light">${Math.round(room.price * nights * 0.15)}</span>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex justify-between text-lg"
              >
                <span className="font-light text-foreground">Total:</span>
                <span className="text-primary font-light text-xl">${Math.round(room.price * nights * 1.15)}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-accent/10 rounded-lg p-4"
              >
                <p className="text-xs text-muted-foreground">
                  You will receive a confirmation email immediately after booking. Check-in is available after 3 PM.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
