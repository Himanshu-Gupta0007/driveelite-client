import React, { useEffect, useState } from "react";
import { cars } from "../data/cars";

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const stored =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(stored);
  }, []);

  if (bookings.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        No bookings yet 🚗
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        My Bookings
      </h1>

      <div className="space-y-6">
        {bookings.map((booking) => {
          const car = cars.find(
            (c) => c.name === booking.car
          );

          if (!car) return null;

          return (
            <div
              key={booking.id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6"
            >
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full md:w-60 h-40 object-cover rounded-lg"
              />

              {/* Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {car.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {booking.pickup} → {booking.dropoff}
                </p>

                <p className="mt-2 font-medium text-gray-700">
                  {booking.amount}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {car.type || "Luxury Car"}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                    ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : booking.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }
                  `}
                >
                  {booking.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyBooking;
