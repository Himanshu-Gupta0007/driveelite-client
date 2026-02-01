import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cars } from "../data/cars";
import CarOwnerBanner from "../components/CarOwnerBanner";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const navigate = useNavigate();

  // Navigate to car detail
  const handleCardClick = (carId) => {
    navigate(`/cars/${carId}`);
  };

  // Featured cars
  const featuredCars = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
            Luxury & Sports Cars
            <span className="text-indigo-600"> on Rent</span> 🚗
          </h1>

          <p className="mt-5 text-xl text-gray-700 max-w-3xl mx-auto">
            Chauffeur-driven premium rides • Instant booking • Verified fleet
          </p>
        </div>

        {/* SEARCH SECTION */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Find Your Luxury Ride
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">

            {/* Pickup Location */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-2">
                Pickup Location
              </label>
              <select
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="">Please select location</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Ghaziabad">Ghaziabad</option>
              </select>
            </div>

            {/* Pick-up Date */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-2">
                Pick-up Date
              </label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Return Date */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-600 mb-2">
                Return Date
              </label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="border rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Search Button */}
            <button
              className="bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-2xl font-bold py-4 text-lg shadow-lg"
            >
              🔍 Search
            </button>
          </div>
        </div>

        {/* FEATURED CARS */}
        <h2 className="text-4xl font-bold mb-10">Featured Collection</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              onClick={() => handleCardClick(car.id)}
              className="cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 transition"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{car.name}</h3>
                <p className="text-gray-600">{car.type}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-indigo-600 font-bold text-xl">
                    {car.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    ⭐ {car.rating}
                  </span>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(car.id);
                  }}
                  className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition"
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* EXPLORE ALL */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/cars")}
            className="bg-indigo-700 hover:bg-indigo-800 transition text-white px-10 py-4 rounded-2xl font-bold text-xl"
          >
            Explore All Cars →
          </button>
        </div>
      </div>

      {/* EXTRA SECTIONS */}
      <CarOwnerBanner />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
