"use client"

import { motion } from "framer-motion"
import { differenceInDays, format } from "date-fns"
import { useState } from "react"

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
    image: "/luxury-family-suite-hotel.jpg",
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
    // In a real app, you would navigate to booking page or show booking modal
    console.log('Booking room:', room)
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

  return (
    <section className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
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
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
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
                    {room.available ? 'Book Now' : 'Unavailable'}
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
  )
}