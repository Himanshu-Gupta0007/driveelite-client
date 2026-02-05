import { Link, useParams } from "react-router-dom";
import { cars } from "../data/cars";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

/* 🔹 Shimmer UI */
const ShimmerDetail = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 animate-pulse">
      {/* LEFT */}
      <div>
        <div className="w-full h-96 bg-gray-300 rounded-3xl" />
        <div className="grid grid-cols-2 gap-4 mt-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-5 bg-gray-300 rounded w-3/4" />
          ))}
        </div>
        <div className="h-4 bg-gray-300 rounded w-1/2 mt-4" />
      </div>

      {/* RIGHT */}
      <div>
        <div className="h-10 bg-gray-300 rounded w-3/4 mb-4" />
        <div className="h-8 bg-gray-300 rounded w-1/3 mb-6" />

        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-full" />
          <div className="h-4 bg-gray-300 rounded w-2/3" />
        </div>

        <div className="mt-10 bg-white p-8 rounded-3xl shadow-xl border">
          <div className="h-6 bg-gray-300 rounded w-1/2 mb-6" />
          <div className="grid grid-cols-2 gap-6">
            <div className="h-12 bg-gray-300 rounded-2xl" />
            <div className="h-12 bg-gray-300 rounded-2xl" />
          </div>
          <div className="h-14 bg-gray-300 rounded-2xl mt-8" />
        </div>
      </div>
    </div>
  );
};

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === Number(id));

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!car && !loading) {
    return (
      <div className="p-10 text-center text-2xl font-semibold">
        Car not found 😕
      </div>
    );
  }

  // 🔹 Calculations
  const isValidDate =
    pickupDate &&
    returnDate &&
    new Date(returnDate) > new Date(pickupDate);

  const totalDays = isValidDate
    ? Math.ceil(
        (new Date(returnDate) - new Date(pickupDate)) /
          (1000 * 60 * 60 * 24)
      )
    : 0;

  const pricePerDay = car
    ? Number(car.price.replace(/[^0-9]/g, ""))
    : 0;

  const totalPrice = totalDays * pricePerDay;

  const handleBooking = () => {
    if (!pickupDate || !returnDate) {
      toast.error("Please select both dates");
      return;
    }

    if (!isValidDate) {
      toast.error("Return date must be after pick-up date");
      return;
    }

    const newBooking = {
      id: Date.now(),
      car: car.name,
      pickup: pickupDate,
      dropoff: returnDate,
      days: totalDays,
      amount: `₹${totalPrice}`,
      status: "Confirmed",
    };

    const existing =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existing, newBooking])
    );

    toast.success(
      `Booking Confirmed 🚗\n${car.name}\n${totalDays} days\n₹${totalPrice}`,
      { duration: 4000 }
    );

    setPickupDate("");
    setReturnDate("");
  };

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      <Link
        to="/cars"
        className="inline-block mb-8 text-indigo-600 font-semibold"
      >
        ← Back to Cars
      </Link>

      {loading ? (
        <ShimmerDetail />
      ) : (
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div>
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-96 object-cover rounded-3xl shadow-xl"
            />

            <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700 font-medium">
              <div>📅 {car.year}</div>
              <div>🪑 {car.seats}</div>
              <div>⛽ {car.fuel}</div>
              <div>⚙ {car.transmission}</div>
            </div>

            <p className="mt-4 text-gray-500">📍 {car.location}</p>
          </div>

          {/* RIGHT */}
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">
              {car.name}
            </h1>

            <p className="text-3xl text-indigo-600 font-bold mt-2">
              {car.price} / day
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              {car.description}
            </p>

            {/* BOOKING FORM */}
            <div className="mt-10 bg-white p-8 rounded-3xl shadow-xl border">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Book This Car
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="border rounded-2xl px-5 py-4"
                />
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="border rounded-2xl px-5 py-4"
                />
              </div>

              {/* 🔹 Booking Summary INSIDE FORM */}
              {pickupDate && returnDate && (
                <div className="mt-6 bg-gray-50 p-5 rounded-2xl border text-sm space-y-2">
                  <div className="flex justify-between">
                    <span>📅 Pick-up</span>
                    <span className="font-semibold">
                      {pickupDate}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>📅 Return</span>
                    <span className="font-semibold">
                      {returnDate}
                    </span>
                  </div>

                  {isValidDate ? (
                    <>
                      <div className="flex justify-between">
                        <span>🧮 Total Days</span>
                        <span className="font-semibold">
                          {totalDays}
                        </span>
                      </div>

                      <div className="flex justify-between text-green-600 font-bold">
                        <span>💰 Total Amount</span>
                        <span>₹{totalPrice}</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-red-500 text-center">
                      Return date must be after pick-up date
                    </p>
                  )}
                </div>
              )}

              <button
                onClick={handleBooking}
                className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold text-lg disabled:opacity-50"
                disabled={!isValidDate}
              >
                🚘 Book Now
              </button>

              <p className="mt-3 text-center text-sm text-gray-600">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};





export default CarDetail;
