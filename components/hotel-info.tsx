"use client"

import { motion } from "framer-motion"

export default function HotelInfo() {
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
    <section className="bg-gradient-to-b from-background to-muted py-24 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto space-y-16"
      >
        {/* Main Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h2 className="text-4xl font-light text-foreground">Welcome to Hyatt Addis Ababa</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Nestled in the heart of Ethiopia's vibrant capital city, Hyatt Addis Ababa offers an unparalleled blend of
            luxury hospitality and authentic Ethiopian hospitality. With commanding views of the Entoto Mountains and
            easy access to historic landmarks, our hotel is your gateway to discovering the rich culture and heritage of
            Addis Ababa.
          </p>
        </motion.div>

        {/* Grid of Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg smooth-transition space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Premium location in central Addis Ababa with views of Entoto Mountains. Walking distance to National
                Museum and Merkato market.
              </p>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg smooth-transition space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-2">Contact Us</h3>
              <p className="text-muted-foreground text-sm space-y-1">
                <div>Phone: +251-116-17-0000</div>
                <div>Email: reservations@hyattaddisababa.et</div>
                <div>Hours: 24/7 Reservations</div>
              </p>
            </div>
          </motion.div>

          {/* Amenities Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg smooth-transition space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-light text-foreground mb-2">Hotel Amenities</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fine dining restaurant, spa & wellness center, business facilities, 24/7 room service, concierge, and
                conference rooms.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Ethiopia Highlights */}
        <motion.div variants={itemVariants} className="bg-card rounded-lg p-8 md:p-12 space-y-6 border border-border">
          <h3 className="text-2xl font-light text-foreground">Experience Ethiopia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <h4 className="font-light text-foreground mb-1">Ethiopian Coffee Ceremony</h4>
                <p className="text-sm text-muted-foreground">
                  Traditional coffee service available daily in our lounge
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <h4 className="font-light text-foreground mb-1">Local Art Collection</h4>
                <p className="text-sm text-muted-foreground">Featuring works from renowned Ethiopian artists</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <h4 className="font-light text-foreground mb-1">Culinary Excellence</h4>
                <p className="text-sm text-muted-foreground">Authentic Ethiopian cuisine with modern techniques</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              <div>
                <h4 className="font-light text-foreground mb-1">City Tours</h4>
                <p className="text-sm text-muted-foreground">
                  Guided excursions to historic landmarks and cultural sites
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
