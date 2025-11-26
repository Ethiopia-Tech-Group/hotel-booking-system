"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+251 91 123 4567", "+251 11 617 0000"],
      link: "tel:+251911234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@luxuryhotel.et", "reservations@luxuryhotel.et"],
      link: "mailto:info@luxuryhotel.et",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Bole Road", "Addis Ababa, Ethiopia"],
      link: null,
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: ["24/7 Available", "Always at your service"],
      link: null,
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
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
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to help and answer any question you might have. 
            We look forward to hearing from you.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground">
                        {item.link && idx === 0 ? (
                          <a
                            href={item.link}
                            className="hover:text-accent transition-colors"
                          >
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map or Additional CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-muted/30 rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-light text-foreground mb-4">
            Visit Us
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Located in the heart of Addis Ababa, our hotel is easily accessible 
            from all major landmarks and transportation hubs. We're just minutes 
            away from the National Museum, Merkato market, and the city's business district.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <MapPin className="w-5 h-5" />
              View on Map
            </a>
            <a
              href="tel:+251911234567"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
