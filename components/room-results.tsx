"use client"

import { motion } from "framer-motion"
import { differenceInDays } from "date-fns"

const mockRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious room with city views and modern Ethiopian decor",
    price: 250,
    image: "/luxury-hotel-room-modern-design.jpg",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Ensuite Bathroom"],
    capacity: 2,
  },
  {
    id: 2,
    name: "Premium Suite",
    description: "Elegant suite with separate living area and panoramic mountain views",
    price: 400,
    image: "/luxury-hotel-suite-mountain-view.jpg",
    amenities: ["Free WiFi", "Air Conditioning", "Living Room", "Work Desk", "Minibar"],
    capacity: 3,
  },
  {
    id: 3,
    name: "Executive Room",
    description: "Premium room with executive lounge access and local art collection",
    price: 350,
    image: "/luxury-hotel-executive-room-elegant.jpg",
    amenities: ["Free WiFi", "Lounge Access", "Bathrobe & Slippers", "Premium Toiletries"],
    capacity: 2,
  },
  {
    id: 4,
    name: "Penthouse",
    description: "Ultimate luxury with 360-degree views of Addis Ababa and the Entoto Mountains",
    price: 600,
    image: "/luxury-penthouse-suite-city-view.jpg",
    amenities: ["Personal Concierge", "Private Elevator", "Infinity View", "Spa Services"],
    capacity: 4,
  },
]

export default function RoomResults({
  searchParams,
  onSelectRoom,
  onBack,
}: {
  searchParams: any
  onSelectRoom: (room: any) => void
  onBack: () => void
}) {
  const nights = differenceInDays(new Date(searchParams.checkOut), new Date(searchParams.checkIn))

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 text-accent hover:text-primary smooth-transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search
          </button>

          <h1 className="text-4xl font-light text-foreground mb-2">Available Rooms</h1>
          <p className="text-muted-foreground">
            {nights} {nights === 1 ? "night" : "nights"} for {searchParams.guests}{" "}
            {searchParams.guests === 1 ? "guest" : "guests"}
          </p>
        </motion.div>

        {/* Room Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {mockRooms.map((room) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group cursor-pointer"
              onClick={() => onSelectRoom(room)}
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl smooth-transition">
                {/* Image */}
                <div className="relative overflow-hidden h-64 bg-muted">
                  <motion.img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-light text-foreground mb-1">{room.name}</h3>
                    <p className="text-sm text-muted-foreground">{room.description}</p>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-muted text-foreground rounded-full">
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="text-xs px-3 py-1 bg-muted text-foreground rounded-full">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-end justify-between pt-4 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">From</p>
                      <p className="text-2xl font-light text-primary">
                        ${room.price}
                        <span className="text-sm text-muted-foreground ml-1">/night</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Total: ${room.price * nights}</p>
                    </div>
                    <motion.div whileHover={{ x: 4 }} className="text-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
