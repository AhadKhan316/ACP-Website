import React, { useEffect, useState } from "react";

// Component to display upcoming events
const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  // Fetch events on component mount and periodically check for updates
  // useEffect(() => {
  //   const fetchEvents = () => {
  //     fetch("http://10.10.10.231:5000/get_events")
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error(`HTTP error! Status: ${response.status}`);
  //         }
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setEvents(data);
  //       })
  //       .catch((error) => console.error("Error fetching events:", error));
  //   };

  //   // Initial fetch and polling for real-time updates every 10 seconds
  //   const intervalId = setInterval(fetchEvents, 10000);
  //   fetchEvents();

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    // <section className="py-10 bg-[#111827] text-center">
    //   <div className="mx-4 px-4 bg-[#1F2937] rounded-lg sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-3 gap-8 py-4 px-2">
    //       <div className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
    //         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
    //         <p className="text-gray-400">
    //           Stay updated with our latest events. Participate in workshops,
    //           enjoy cultural festivals, and more. Be part of our vibrant
    //           community!
    //         </p>
    //       </div>
    //       <div className="col-span-4 md:col-span-2 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
    //         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
    //         <p className="text-gray-400">
    //           Stay updated with our latest events. Participate in workshops,
    //           enjoy cultural festivals, and more. Be part of our vibrant
    //           community!
    //         </p>
    //       </div>
    //       <div className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg text-[#F5F1E1]">
    //         <h2 className="text-4xl font-bold mb-4">Upcoming Events</h2>
    //         <p className="text-gray-400">
    //           Stay updated with our latest events. Participate in workshops,
    //           enjoy cultural festivals, and more. Be part of our vibrant
    //           community!
    //         </p>
    //       </div>

    //       {/* {events.length > 0 ? (
    //         events.slice(0, 2).map((event, index) => (
    //           <div
    //             key={event.id}
    //             className="col-span-4 md:col-span-1 bg-[#111827] p-10 rounded-lg"
    //           >
    //             <h3 className="text-[#F5F1E1] text-xl font-semibold mb-4">
    //               {index === 0 ? "Nearest Event" : "Next Event"}
    //             </h3>
    //             <div className="bg-black w-full h-40 mb-4 flex items-center justify-center text-[#F5F1E1]">
    //               <img
    //                 src={event.poster}
    //                 alt={event.eventName}
    //                 className="w-full h-full object-cover rounded"
    //               />
    //             </div>
    //             <h4 className="text-lg font-bold text-[#F5F1E1] mb-2">
    //               {event.eventName}
    //             </h4>
    //             <p className="text-gray-400 mb-1">
    //               <strong>Date:</strong>{" "}
    //               {new Date(event.startDate).toDateString()}
    //             </p>
    //             <p className="text-gray-400 mb-4">
    //               <strong>Venue:</strong> {event.venue}
    //             </p>
    //             <button
    //               className={`w-full py-2 rounded-lg ${
    //                 event.eventType === "Free"
    //                   ? "bg-green-600 text-[#F5F1E1] hover:bg-green-700"
    //                   : "bg-red-600 text-[#F5F1E1] hover:bg-red-700"
    //               } transition`}
    //             >
    //               {event.eventType === "Free" ? "Register Now" : "Buy Ticket"}
    //             </button>
    //           </div>
    //         ))
    //       ) : (
    //         <div className="col-span-4 text-[#F5F1E1]">
    //           <p>No upcoming events available.</p>
    //         </div>
    //       )} */}

    //       <div className="hidden md:block md:col-span-1"></div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-10 bg-[#0F172A]">
      <div className="mx-4 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E293B] rounded-2xl shadow-2xl overflow-hidden py-12 px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Header Section */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-[#F5F1E1] mb-4 text-center">
                Upcoming Events
              </h2>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed text-center">
                Stay updated with our latest events. Participate in workshops,
                enjoy cultural festivals, and more. Be part of our vibrant
                community!
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Main Event Image (Full Width) */}
              <div className="md:col-span-2 rounded-xl overflow-hidden relative flex justify-center">
                <img
                  src="./src/assets/post-img/sukkur-chapter-2.png"
                  alt="Main Event Image"
                  className="w-full h-full max-w-[1000px] object-cover rounded-lg"
                />
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition duration-300 shadow-md">
                  Register
                </button>
              </div>

              {/* Two Images Below the Main Image */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Image 1 */}
                <div className="rounded-xl overflow-hidden relative">
                  <img
                    src="./src/assets/post-img/sukkur-chapter-2.png"
                    alt="Event Image 1"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition duration-300 shadow-md">
                    Register
                  </button>
                </div>

                {/* Image 2 */}
                <div className="rounded-xl overflow-hidden relative">
                  <img
                    src="./src/assets/post-img/sukkur-chapter-2.png"
                    alt="Event Image 2"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg transition duration-300 shadow-md">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
