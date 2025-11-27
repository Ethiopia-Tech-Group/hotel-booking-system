"use client"

import { motion } from "framer-motion"
import { Dog, Check, X, Heart } from "lucide-react"

export default function PetPolicySection() {
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

  return (
    <section className="py-24 px-4 bg-muted/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
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
                Pet-Friendly Policy
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We understand that pets are part of the family. That's why we welcome 
              well-behaved furry companions at Hotel Booking with our comprehensive pet policy.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Dogs & Cats Welcome</h4>
                  <p className="text-sm text-muted-foreground">
                    We accept dogs and cats up to 25kg (55 lbs) with prior notification
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Pet Amenities Included</h4>
                  <p className="text-sm text-muted-foreground">
                    Complimentary pet bed, bowls, and welcome treats for your furry friend
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Designated Pet Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    Special walking areas and outdoor spaces for your pet's comfort
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <X className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Restrictions Apply</h4>
                  <p className="text-sm text-muted-foreground">
                    Pets must be leashed in public areas and cannot be left unattended in rooms
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 bg-primary/5 border border-primary/10 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-foreground mb-2">Pet Fee</h4>
                  <p className="text-sm text-muted-foreground">
                    A non-refundable fee of $50 per pet, per stay applies. This helps us 
                    maintain our high standards of cleanliness for all guests.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/luxury-hotel-room-modern-design.jpg"
                alt="Pet-Friendly Hotel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-white rounded-lg shadow-lg p-6 max-w-[200px]">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <Dog className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    Pet-Friendly Certified
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your pets are family to us
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Please inform us about your pet when making a reservation. For questions about our pet policy, 
            contact us at{" "}
            <a href="tel:+251911234567" className="text-accent hover:underline">
              +251 91 123 4567
            </a>
            {" "}or{" "}
            <a href="mailto:info@luxuryhotel.et" className="text-accent hover:underline">
              info@luxuryhotel.et
            </a>
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
