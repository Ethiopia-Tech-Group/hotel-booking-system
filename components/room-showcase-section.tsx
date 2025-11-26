"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function RoomShowcaseSection() {
  const roomImages = [
    "/luxury-hotel-room-modern-design.jpg",
    "/luxury-hotel-suite-mountain-view.jpg",
    "/luxury-hotel-executive-room-elegant.jpg",
    "/luxury-penthouse-suite-city-view.jpg",
  ]

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Room Images Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {roomImages.map((image, index) => (
              <motion.div
                key={index}
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden rounded-lg shadow-lg ${
                  index === 0 ? "col-span-2 h-80" : "h-64"
                }`}
              >
                <img
                  src={image}
                  alt={`Room ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-accent mb-6"
              />
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                Discover Our Rooms
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Each of our thoughtfully designed rooms offers a unique blend of comfort, 
              elegance, and modern amenities. From spacious deluxe rooms to luxurious 
              penthouse suites, we have the perfect accommodation for every traveler.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground">Premium bedding and linens</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground">Stunning mountain and city views</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground">Modern amenities and smart technology</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-foreground">24/7 room service and concierge</p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
              >
                Explore Rooms
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
