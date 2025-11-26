"use client"

import { motion } from "framer-motion"
import { differenceInDays } from "date-fns"

export default function RoomDetails({
  room,
  searchParams,
  onBookNow,
  onBack,
}: {
  room: any
  searchParams: any
  onBookNow: () => void
  onBack: () => void
}) {
  const nights = differenceInDays(new Date(searchParams.checkOut), new Date(searchParams.checkIn))

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
        {/* Header Navigation */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-accent hover:text-primary smooth-transition"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Rooms
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Image and Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <motion.img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>

            {/* Room Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-4xl font-light text-foreground mb-2">{room.name}</h1>
                <p className="text-lg text-muted-foreground">{room.description}</p>
              </div>

              {/* Room Amenities */}
              <div>
                <h2 className="text-xl font-light text-foreground mb-4">Room Amenities</h2>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {allAmenities.map((amenity, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + idx * 0.05 }}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
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
                </motion.div>
              </div>

              {/* Ethiopian Context */}
              <div className="bg-accent/5 rounded-lg p-6">
                <h3 className="text-lg font-light text-foreground mb-2">Ethiopian Hospitality</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Located in the heart of Addis Ababa with views of the historic Entoto Mountains. Our rooms blend
                  modern luxury with Ethiopian cultural elements. Experience authentic Ethiopian coffee ceremonies and
                  local art throughout your stay.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 bg-card rounded-lg shadow-lg p-8 space-y-6">
              <div>
                <h3 className="text-lg font-light text-foreground mb-4">Booking Summary</h3>
              </div>

              {/* Details */}
              <div className="space-y-3 border-b border-border pb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">Check-In:</span>
                  <span className="text-foreground font-light">{searchParams.checkIn}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">Check-Out:</span>
                  <span className="text-foreground font-light">{searchParams.checkOut}</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex justify-between text-sm"
                >
                  <span className="text-muted-foreground">
                    {nights} {nights === 1 ? "night" : "nights"}:
                  </span>
                  <span className="text-foreground font-light">${room.price * nights}</span>
                </motion.div>
              </div>

              {/* Total */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex justify-between text-lg"
              >
                <span className="font-light text-foreground">Total:</span>
                <span className="text-primary font-light text-xl">${room.price * nights}</span>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={onBookNow}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-light hover:bg-primary/90 smooth-transition shadow-md hover:shadow-lg"
              >
                Proceed to Booking
              </motion.button>

              <button
                onClick={onBack}
                className="w-full px-6 py-3 border border-border text-foreground rounded-lg font-light hover:bg-muted smooth-transition"
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
