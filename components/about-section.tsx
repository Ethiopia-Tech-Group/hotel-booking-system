"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="py-24 px-4 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/luxury-hotel-room-modern-design.jpg"
              alt="Hotel Booking Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          {/* Right - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "60px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-accent mb-6"
              />
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
                About Us
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Hotel Booking stands as a beacon of Ethiopian hospitality in the heart of Addis Ababa. 
              With stunning views of the historic Entoto Mountains, we offer an unparalleled blend 
              of modern luxury and authentic cultural experiences.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our commitment to excellence is reflected in every detail—from our elegantly appointed 
              rooms and world-class amenities to our dedicated staff who ensure every guest feels 
              at home. Whether you're traveling for business or leisure, we provide a sanctuary 
              of comfort and sophistication.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Premium Accommodations</h4>
                  <p className="text-sm text-muted-foreground">
                    Luxuriously designed rooms with modern amenities and breathtaking views
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Exceptional Service</h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 concierge and personalized attention to every guest's needs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Cultural Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Authentic Ethiopian hospitality with traditional coffee ceremonies and local cuisine
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
