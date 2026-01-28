// src/pages/Home.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cars } from "../data/cars"; // ✅ Import unified cars array
import CarOwnerBanner from "../components/CarOwnerBanner";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const navigate = useNavigate();

  // ✅ Navigate to car details page
  const handleCardClick = (carId) => {
    navigate(`/cars/${carId}`);
  };

  // Optional: Featured cars (first 6 cars or based on tag)
  const featuredCars = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-12">

        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
            Luxury & Sports Cars
            <span className="text-indigo-600"> on Rent</span> 🚗
          </h1>
          <p className="mt-5 text-xl text-gray-700 max-w-3xl mx-auto">
            Chauffeur-driven premium rides • Instant booking • Verified fleet
          </p>
        </div>

        {/* SEARCH */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <input
              type="text"
              placeholder="Pickup Location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="border rounded-2xl px-5 py-4"
            />
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
            <button className="bg-indigo-600 text-white rounded-2xl font-bold">
              Search
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
                  className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold"
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ALL CARS */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/cars")}
            className="bg-indigo-700 text-white px-10 py-4 rounded-2xl font-bold text-xl"
          >
            Explore All Cars →
          </button>
        </div>
      </div>

      {/* SECTIONS */}
      <CarOwnerBanner />
      <Testimonial />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
