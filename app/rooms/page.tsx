"use client"

import { motion } from "framer-motion"
import { differenceInDays, format } from "date-fns"
import { useState } from "react"
import HeroSection from "@/components/hero-section"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const mockRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious room with city views and modern Ethiopian decor",
    price: 250,
    image: "/luxury-hotel-room-modern-design.jpg",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Ensuite Bathroom"],
    capacity: 2,
    bedrooms: 1,
    available: true,
  },
  {
    id: 2,
    name: "Premium Suite",
    description: "Elegant suite with separate living area and panoramic mountain views",
    price: 400,
    image: "/luxury-hotel-suite-mountain-view.jpg",
    amenities: ["Free WiFi", "Air Conditioning", "Living Room", "Work Desk", "Minibar"],
    capacity: 3,
    bedrooms: 1,
    available: true,
  },
  {
    id: 3,
    name: "Executive Room",
    description: "Premium room with executive lounge access and local art collection",
    price: 350,
    image: "/luxury-hotel-executive-room-elegant.jpg",
    amenities: ["Free WiFi", "Lounge Access", "Bathrobe & Slippers", "Premium Toiletries"],
    capacity: 2,
    bedrooms: 1,
    available: true,
  },
  {
    id: 4,
    name: "Penthouse",
    description: "Ultimate luxury with 360-degree views of Addis Ababa and the Entoto Mountains",
    price: 600,
    image: "/luxury-penthouse-suite-city-view.jpg",
    amenities: ["Personal Concierge", "Private Elevator", "Infinity View", "Spa Services"],
    capacity: 4,
    bedrooms: 2,
    available: true,
  },
  {
    id: 5,
    name: "Family Suite",
    description: "Perfect for families with connecting rooms and child-friendly amenities",
    price: 450,
    image: "/room.jpg",
    amenities: ["Free WiFi", "Connecting Rooms", "Children's Amenities", "Kitchenette"],
    capacity: 5,
    bedrooms: 2,
    available: true,
  },
]

export default function RoomListing() {
  const [searchParams, setSearchParams] = useState({
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    guests: 2,
    bedrooms: 1,
  })
  
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingFormData, setBookingFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const nights = differenceInDays(new Date(searchParams.checkOut), new Date(searchParams.checkIn))
  const filteredRooms = mockRooms.filter(room => 
    room.capacity >= searchParams.guests && 
    room.bedrooms >= searchParams.bedrooms
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would fetch available rooms based on search params
    console.log('Searching with params:', searchParams)
  }

  const handleBookRoom = (room: any) => {
    setSelectedRoom(room)
    setShowBookingForm(false)
  }

  const handleProceedToBooking = () => {
    setShowBookingForm(true)
  }

  const handleBackToDetails = () => {
    setShowBookingForm(false)
  }

  const handleBackToRooms = () => {
    setSelectedRoom(null)
    setShowBookingForm(false)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!bookingFormData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!bookingFormData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!bookingFormData.email.includes("@")) newErrors.email = "Valid email is required"
    if (bookingFormData.phone.length < 10) newErrors.phone = "Valid phone number is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle booking submission
      alert(`Booking confirmed for ${bookingFormData.firstName} ${bookingFormData.lastName}!`)
      // Reset form
      setBookingFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specialRequests: "",
      })
      handleBackToRooms()
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBookingFormData((prev) => ({ ...prev, [name]: value }))
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
      transition: { duration: 0.6 },
    },
  }

  // If a room is selected and showing booking form, render booking form
  if (selectedRoom && showBookingForm) {
    return (
      <section className="min-h-screen bg-background py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleBackToDetails}
            className="mb-8 inline-flex items-center gap-2 text-accent hover:text-primary smooth-transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Room Details
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleBookingSubmit}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h1 className="text-4xl font-light text-foreground mb-2">Complete Your Booking</h1>
                <p className="text-muted-foreground">Please provide your details to reserve your room</p>
              </div>

              {/* Guest Information */}
              <div className="space-y-6">
                <h2 className="text-xl font-light text-foreground">Guest Information</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={bookingFormData.firstName}
                      onChange={handleFormChange}
                      placeholder="John"
                      className={errors.firstName ? "border-destructive" : ""}
                    />
                    {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={bookingFormData.lastName}
                      onChange={handleFormChange}
                      placeholder="Doe"
                      className={errors.lastName ? "border-destructive" : ""}
                    />
                    {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={bookingFormData.email}
                      onChange={handleFormChange}
                      placeholder="john@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={bookingFormData.phone}
                      onChange={handleFormChange}
                      placeholder="+1 (555) 000-0000"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={bookingFormData.specialRequests}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Any special requests for your stay?"
                  />
                </div>
              </div>

              {/* Booking Details Section */}
              <div className="space-y-4 bg-muted/30 rounded-lg p-6">
                <h2 className="text-xl font-light text-foreground">Booking Details</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Check-in</p>
                    <p className="text-foreground font-medium">{searchParams.checkIn}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Check-out</p>
                    <p className="text-foreground font-medium">{searchParams.checkOut}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Guests</p>
                    <p className="text-foreground font-medium">{searchParams.guests}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Nights</p>
                    <p className="text-foreground font-medium">{nights}</p>
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={handleBackToDetails}
                  className="flex-1 px-6 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.form>

            {/* Booking Summary Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-card rounded-lg shadow-lg p-8 space-y-6 border border-border">
                <h3 className="text-lg font-medium text-foreground">Booking Summary</h3>

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{selectedRoom.name}</p>
                  <p className="font-medium text-foreground">
                    {searchParams.checkIn} to {searchParams.checkOut}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {nights} {nights === 1 ? "night" : "nights"}
                  </p>
                </div>

                <div className="border-t border-b border-border py-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Room Rate:</span>
                    <span className="text-foreground font-medium">${selectedRoom.price}/night</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="text-foreground font-medium">${selectedRoom.price * nights}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxes:</span>
                    <span className="text-foreground font-medium">${Math.round(selectedRoom.price * nights * 0.15)}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="font-medium text-foreground">Total:</span>
                  <span className="text-primary font-medium text-xl">${Math.round(selectedRoom.price * nights * 1.15)}</span>
                </div>

                <div className="bg-accent/10 rounded-lg p-4">
                  <p className="text-xs text-muted-foreground">
                    You will receive a confirmation email immediately after booking. Check-in is available after 3 PM.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  // If a room is selected, show room details
  if (selectedRoom) {
    const allAmenities = [
      "Free High-Speed WiFi",
      "Air Conditioning & Heating",
      "Flat-screen Smart TV",
      "Ensuite Marble Bathroom",
      "Rainfall Shower",
      "Premium Toiletries",
      "Work Desk",
      "Room Service Available",
      "Minibar",
      "Safe Deposit Box",
      "Wake-up Call Service",
      "Daily Housekeeping",
    ]

    return (
      <section className="min-h-screen bg-background py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleBackToRooms}
            className="mb-8 inline-flex items-center gap-2 text-accent hover:text-primary smooth-transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Rooms
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Room Images and Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Main Image */}
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                <motion.img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
              </div>

              {/* Room Information */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-light text-foreground mb-2">{selectedRoom.name}</h1>
                  <p className="text-lg text-muted-foreground">{selectedRoom.description}</p>
                </div>

                {/* Room Features */}
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span>{selectedRoom.capacity} Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    <span>{selectedRoom.bedrooms} {selectedRoom.bedrooms === 1 ? "Bedroom" : "Bedrooms"}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-2xl font-light text-foreground mb-4">Room Amenities</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {allAmenities.map((amenity, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Ethiopian Context */}
                <div className="bg-accent/5 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-2">Ethiopian Hospitality</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Located in the heart of Addis Ababa with views of the historic Entoto Mountains. Our rooms blend
                    modern luxury with Ethiopian cultural elements. Experience authentic Ethiopian coffee ceremonies and
                    local art throughout your stay.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Booking Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-card rounded-lg shadow-lg p-8 space-y-6 border border-border">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">Booking Summary</h3>
                </div>

                <div className="space-y-3 border-b border-border pb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Check-In:</span>
                    <span className="text-foreground font-medium">{searchParams.checkIn}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Check-Out:</span>
                    <span className="text-foreground font-medium">{searchParams.checkOut}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {nights} {nights === 1 ? "night" : "nights"}:
                    </span>
                    <span className="text-foreground font-medium">${selectedRoom.price * nights}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="font-medium text-foreground">Total:</span>
                  <span className="text-primary font-medium text-xl">${selectedRoom.price * nights}</span>
                </div>

                <button
                  onClick={handleProceedToBooking}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                >
                  Proceed to Booking
                </button>

                <button
                  onClick={handleBackToRooms}
                  className="w-full px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                >
                  View Other Rooms
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }

  // Default: Show room listing
  return (
    <>
      <section className="relative pt-20 w-full overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/hero.jpg)",
          opacity: 0.3,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light tracking-tight text-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Explore Rooms
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Experience luxury hospitality with stunning Entoto Mountain views in Ethiopia's vibrant capital
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-sm text-accent">
              <div className="w-8 h-px bg-accent" />
              <span>Premier Luxury Hotel</span>
              <div className="w-8 h-px bg-accent" />
            </div>
          </motion.div>
        </motion.div>

      
      </div>
    </section>

    <section className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Search Filters */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-lg shadow-lg p-6 mb-12 border border-border"
        >
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Check-in */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Check-in</label>
              <input
                type="date"
                value={searchParams.checkIn}
                onChange={(e) => setSearchParams(prev => ({ ...prev, checkIn: e.target.value }))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Check-out */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Check-out</label>
              <input
                type="date"
                value={searchParams.checkOut}
                onChange={(e) => setSearchParams(prev => ({ ...prev, checkOut: e.target.value }))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                min={searchParams.checkIn}
              />
            </div>

            {/* Guests */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Guests</label>
              <select
                value={searchParams.guests}
                onChange={(e) => setSearchParams(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Bedrooms</label>
              <select
                value={searchParams.bedrooms}
                onChange={(e) => setSearchParams(prev => ({ ...prev, bedrooms: parseInt(e.target.value) }))}
                className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-2 px-6 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
              >
                Check Availability
              </button>
            </div>
          </form>

          {/* Search Summary */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>
              {nights} {nights === 1 ? 'night' : 'nights'} • {searchParams.guests} {searchParams.guests === 1 ? 'guest' : 'guests'} • {searchParams.bedrooms} {searchParams.bedrooms === 1 ? 'bedroom' : 'bedrooms'}
            </span>
            <span className="text-accent">
              {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'} available
            </span>
          </div>
        </motion.div>

        {/* Results Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-light text-foreground mb-2">Available Rooms</h1>
          <p className="text-muted-foreground">
            Discover our luxurious accommodations in the heart of Addis Ababa
          </p>
        </motion.div>

        {/* Room Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"
        >
          {filteredRooms.map((room) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64 bg-muted">
                <motion.img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Availability Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    room.available 
                      ? 'bg-green-500/20 text-green-600 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-600 border border-red-500/30'
                  }`}>
                    {room.available ? 'Available' : 'Booked'}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-light text-foreground">{room.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span>{room.capacity}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{room.description}</p>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                  {room.amenities.slice(0, 3).map((amenity, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-3 py-1 bg-muted text-foreground rounded-full border border-border"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="text-xs px-3 py-1 bg-muted text-foreground rounded-full border border-border">
                      +{room.amenities.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price & Book Button */}
                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">From</p>
                    <p className="text-2xl font-light text-primary">
                      ${room.price}
                      <span className="text-sm text-muted-foreground ml-1">/night</span>
                    </p>
                    {nights > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Total: ${room.price * nights}
                      </p>
                    )}
                  </div>
                  
                  <button
                    onClick={() => handleBookRoom(room)}
                    disabled={!room.available}
                    className="bg-accent text-accent-foreground px-6 py-2 rounded-md hover:bg-accent/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
                  >
                    {room.available ? 'View Detail' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredRooms.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="text-muted-foreground mb-4">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-foreground mb-2">No rooms available</h3>
            <p className="text-muted-foreground mb-6">
              We couldn't find any rooms matching your criteria. Try adjusting your search filters.
            </p>
            <button
              onClick={() => setSearchParams({
                checkIn: new Date().toISOString().split('T')[0],
                checkOut: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                guests: 2,
                bedrooms: 1,
              })}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors duration-300"
            >
              Reset Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
    </>
  )
}