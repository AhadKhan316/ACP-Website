import React, { useEffect, useState } from "react"
import { Calendar, MapPin, Loader2 } from 'lucide-react'

const UpcomingEvents = () => {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://10.10.10.231:5000/get_events")
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setEvents(data)
        setError(null)
      } catch (error) {
        setError("Failed to fetch events. Please try again later.")
        console.error("Error fetching events:", error)
      } finally {
        setIsLoading(false)
      }
    }

    const intervalId = setInterval(fetchEvents, 10000)
    fetchEvents()

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="py-10 bg-[#111827]">
      <div className="mx-15 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1F2937] rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 sm:p-8 lg:p-10">
            {/* Header Section */}
            <div className="lg:col-span-1">
              <div className="h-full bg-[#111827] rounded-xl p-6 sm:p-8 flex flex-col justify-center">
                <h2 className="lg-text-3xl sm:text-3xl font-bold text-[#F5F1E1] mb-4">
                  Upcoming Events
                </h2>
                <p className="text-gray-400 text-base sm:text-lg">
                  Stay updated with our latest events. Participate in workshops,
                  enjoy cultural festivals, and more. Be part of our vibrant
                  community!
                </p>
              </div>
            </div>

            {/* Events Display */}
            {isLoading ? (
              <div className="lg:col-span-2 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#F5F1E1]" />
              </div>
            ) : error ? (
              <div className="lg:col-span-2 flex items-center justify-center text-[#F5F1E1]">
                <p>{error}</p>
              </div>
            ) : events.length > 0 ? (
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.slice(0, 2).map((event, index) => (
                  <div
                    key={event.id}
                    className="bg-[#111827] rounded-xl overflow-hidden transition-transform hover:scale-[1.02] duration-300"
                  >
                    <div className="relative aspect-video">
                      <img
                        src={event.poster || "/placeholder.svg"}
                        alt={event.eventName}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full">
                        <p className="text-[#F5F1E1] text-sm font-medium">
                          {index === 0 ? "Nearest Event" : "Next Event"}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#F5F1E1] mb-4 line-clamp-2">
                        {event.eventName}
                      </h3>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          <p className="text-sm">
                            {new Date(event.startDate).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="flex items-center text-gray-400">
                          <MapPin className="h-4 w-4 mr-2" />
                          <p className="text-sm">{event.venue}</p>
                        </div>
                      </div>
                      <button
                        className={`w-full py-3 rounded-lg font-medium transition-colors ${event.eventType === "Free"
                            ? "bg-green-600 hover:bg-green-700 text-[#F5F1E1]"
                            : "bg-red-600 hover:bg-red-700 text-[#F5F1E1]"
                          }`}
                      >
                        {event.eventType === "Free" ? "Register Now" : "Buy Ticket"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="lg:col-span-2 flex items-center justify-center">
                <p className="text-[#F5F1E1] text-lg">
                  No upcoming events available.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents