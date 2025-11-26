"use client"

import { motion } from "framer-motion"
import { differenceInDays } from "date-fns"

export default function ConfirmationPage({
  bookingData,
  room,
  onBackToHome,
}: {
  bookingData: any
  room: any
  onBackToHome: () => void
}) {
  const nights = differenceInDays(
    new Date(bookingData.searchParams.checkOut),
    new Date(bookingData.searchParams.checkIn),
  )
  const confirmationNumber = `HYA${Math.random().toString(36).substring(2, 9).toUpperCase()}`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section className="min-h-screen bg-background py-16 px-4 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl w-full space-y-8"
      >
        {/* Success Icon */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            animate={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
              <motion.svg
                className="w-12 h-12 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="bg-card rounded-lg shadow-lg p-8 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-light text-foreground">Booking Confirmed!</h1>
            <p className="text-lg text-muted-foreground">Your reservation has been successfully completed</p>
          </div>

          {/* Confirmation Number */}
          <motion.div variants={itemVariants} className="bg-accent/5 rounded-lg p-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Confirmation Number</p>
            <p className="text-3xl font-light text-primary tracking-wider">{confirmationNumber}</p>
            <p className="text-xs text-muted-foreground">Save this number for your records</p>
          </motion.div>

          {/* Booking Details */}
          <motion.div variants={itemVariants} className="space-y-4 border-t border-b border-border py-6">
            <h2 className="text-lg font-light text-foreground">Booking Details</h2>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-1"
              >
                <p className="text-sm text-muted-foreground">Room Type</p>
                <p className="font-light text-foreground">{room.name}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="space-y-1"
              >
                <p className="text-sm text-muted-foreground">Check-In</p>
                <p className="font-light text-foreground">{bookingData.searchParams.checkIn}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-1"
              >
                <p className="text-sm text-muted-foreground">Check-Out</p>
                <p className="font-light text-foreground">{bookingData.searchParams.checkOut}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="space-y-1"
              >
                <p className="text-sm text-muted-foreground">Number of Guests</p>
                <p className="font-light text-foreground">
                  {bookingData.searchParams.guests} {bookingData.searchParams.guests === 1 ? "guest" : "guests"}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Guest Information */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-light text-foreground">Guest Information</h2>

            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-1"
              >
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-light text-foreground">
                  {bookingData.firstName} {bookingData.lastName}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="space-y-1"
              >
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-light text-foreground text-sm">{bookingData.email}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-1 col-span-2"
              >
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-light text-foreground">{bookingData.phone}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Price Summary */}
          <motion.div variants={itemVariants} className="bg-muted/30 rounded-lg p-6 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                Room Rate ({nights} {nights === 1 ? "night" : "nights"}):
              </span>
              <span className="text-foreground font-light">${room.price * nights}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Taxes & Fees:</span>
              <span className="text-foreground font-light">${Math.round(room.price * nights * 0.15)}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-light text-foreground">Total Amount:</span>
              <span className="text-primary font-light text-lg">${Math.round(room.price * nights * 1.15)}</span>
            </div>
          </motion.div>

          {/* Important Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-2 text-sm text-muted-foreground bg-accent/5 rounded-lg p-4"
          >
            <p className="font-light">
              <span className="font-semibold">Check-in:</span> Available from 3:00 PM. Early check-in available upon
              request subject to availability.
            </p>
            <p className="font-light">
              <span className="font-semibold">Check-out:</span> 11:00 AM. Late checkout available for an additional fee.
            </p>
            <p className="font-light">
              <span className="font-semibold">Cancellation:</span> Free cancellation up to 24 hours before arrival.
            </p>
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBackToHome}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-light hover:bg-primary/90 smooth-transition shadow-md hover:shadow-lg"
          >
            Back to Home
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-3 border border-border text-foreground rounded-lg font-light hover:bg-muted smooth-transition"
          >
            Print Confirmation
          </button>
        </motion.div>

        {/* Additional Info */}
        <motion.div variants={itemVariants} className="text-center text-sm text-muted-foreground space-y-2">
          <p>
            A confirmation email has been sent to{" "}
            <span className="font-light text-foreground">{bookingData.email}</span>
          </p>
          <p>Questions? Contact our reservations team: +251-116-17-0000</p>
        </motion.div>
      </motion.div>
    </section>
  )
}
