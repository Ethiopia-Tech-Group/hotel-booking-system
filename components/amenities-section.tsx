"use client"

import { motion } from "framer-motion"
import { Wifi, Coffee, Car, Utensils, Dumbbell, Waves, Sparkles, Shield } from "lucide-react"

export default function AmenitiesSection() {
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

  const amenities = [
    {
      icon: Wifi,
      title: "Free High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the property",
    },
    {
      icon: Utensils,
      title: "Fine Dining Restaurant",
      description: "Experience authentic Ethiopian and international cuisine in our award-winning restaurant",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art gym equipment available 24/7 for your wellness routine",
    },
    {
      icon: Waves,
      title: "Spa & Wellness",
      description: "Rejuvenate with our full-service spa offering traditional and modern treatments",
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary valet parking service for all hotel guests",
    },
    {
      icon: Coffee,
      title: "Coffee Ceremony",
      description: "Traditional Ethiopian coffee ceremony daily in our lounge",
    },
    {
      icon: Sparkles,
      title: "Concierge Service",
      description: "24/7 dedicated concierge to assist with tours, reservations, and recommendations",
    },
    {
      icon: Shield,
      title: "Business Center",
      description: "Fully equipped business facilities with meeting rooms and conference spaces",
    },
  ]

  return (
    <section id="amenities" className="py-24 px-4 bg-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-accent mb-6 mx-auto"
          />
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Hotel Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enjoy world-class facilities and services designed to make your stay exceptional
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <amenity.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">{amenity.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-8 md:p-12 text-center border border-primary/10"
        >
          <h3 className="text-2xl font-light text-foreground mb-4">
            More Than Just a Stay
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            From our rooftop terrace with panoramic city views to our curated art collection 
            featuring renowned Ethiopian artists, every detail is designed to create an unforgettable experience.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
