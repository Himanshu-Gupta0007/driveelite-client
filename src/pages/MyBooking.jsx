import React from "react";
import { cars } from "../data/cars";

const myBookings = [
  {
    bookingId: 101,
    carId: 1,
    from: "28 Jan 2026",
    to: "30 Jan 2026",
    status: "Confirmed",
  },
  {
    bookingId: 102,
    carId: 5,
    from: "02 Feb 2026",
    to: "03 Feb 2026",
    status: "Pending",
  },
];

const MyBooking = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-24 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">
        My Bookings
      </h1>

      <div className="space-y-6">
        {myBookings.map((booking) => {
          const car = cars.find((c) => c.id === booking.carId);

          return (
            <div
              key={booking.bookingId}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6"
            >
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-full md:w-60 h-40 object-cover rounded-lg"
              />

              {/* Car Details */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-800">
                  {car.name}
                </h2>

                <p className="text-gray-500 mt-1">
                  {booking.from} → {booking.to}
                </p>

                <p className="mt-2 font-medium text-gray-700">
                  {car.price}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  {car.type}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold
                    ${
                      booking.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
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
