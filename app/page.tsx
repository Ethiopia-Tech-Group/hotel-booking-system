"use client"

import { useState } from "react"
import { format, addDays } from "date-fns"
import HeroSection from "@/components/hero-section"
import SearchForm from "@/components/search-form"
import RoomResults from "@/components/room-results"
import RoomDetails from "@/components/room-details"
import BookingForm from "@/components/booking-form"
import ConfirmationPage from "@/components/confirmation-page"
import HotelInfo from "@/components/hotel-info"
import RoomListing from "@/components/rooms"
import AboutSection from "@/components/about-section"
import RoomShowcaseSection from "@/components/room-showcase-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  const [currentStep, setCurrentStep] = useState<"home" | "results" | "details" | "booking" | "confirmation">("home")
  const [searchParams, setSearchParams] = useState({
    checkIn: format(new Date(), "yyyy-MM-dd"),
    checkOut: format(addDays(new Date(), 3), "yyyy-MM-dd"),
    guests: 2,
  })
  const [selectedRoom, setSelectedRoom] = useState<any>(null)
  const [bookingData, setBookingData] = useState<any>(null)

  const handleSearch = (params: any) => {
    setSearchParams(params)
    setCurrentStep("results")
  }

  const handleSelectRoom = (room: any) => {
    setSelectedRoom(room)
    setCurrentStep("details")
  }

  const handleBookNow = (room: any) => {
    setSelectedRoom(room)
    setCurrentStep("booking")
  }

  const handleSubmitBooking = (data: any) => {
    setBookingData(data)
    setCurrentStep("confirmation")
  }

  return (
    <main className="min-h-screen bg-background">
      {currentStep === "home" && (
        <>
          <HeroSection />
          <SearchForm onSearch={handleSearch} />
          <AboutSection />
          <RoomShowcaseSection />
          {/* <HotelInfo /> */}
          <ContactSection />
        </>
      )}

      {currentStep === "results" && (
        <RoomResults
          searchParams={searchParams}
          onSelectRoom={handleSelectRoom}
          onBack={() => setCurrentStep("home")}
        />
      )}

      {currentStep === "details" && selectedRoom && (
        <RoomDetails
          room={selectedRoom}
          searchParams={searchParams}
          onBookNow={() => handleBookNow(selectedRoom)}
          onBack={() => setCurrentStep("results")}
        />
      )}

      {currentStep === "booking" && selectedRoom && (
        <BookingForm
          room={selectedRoom}
          searchParams={searchParams}
          onSubmit={handleSubmitBooking}
          onBack={() => setCurrentStep("details")}
        />
      )}

      {currentStep === "confirmation" && bookingData && (
        <ConfirmationPage bookingData={bookingData} room={selectedRoom} onBackToHome={() => setCurrentStep("home")} />
      )}
    </main>
  )
}
