import { useState } from "react";
import { useNavigate } from "react-router-dom";  // <-- Yeh import add kiya
import CarOwnerBanner from "../components/CarOwnerBanner";



const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const navigate = useNavigate();  // <-- Navigation hook

  const luxuryCars = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      price: "₹12,500 / day",
      image: "https://images.pexels.com/photos/20123633/pexels-photo-20123633/free-photo-of-new-mercedes-benz-s-class-in-showroom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tag: "Most Premium",
      available: true,
      type: "Luxury Sedan • 2024",
      rating: "4.9 • 142 trips",
    },
    {
      id: 2,
      name: "BMW M4 Competition",
      price: "₹18,000 / day",
      image: "https://images.pexels.com/photos/30166138/pexels-photo-30166138/free-photo-of-high-end-bmw-m4-in-london-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tag: "Available Now",
      available: true,
      type: "Sports Coupe • 2023",
      rating: "4.8 • 89 trips",
    },
    {
      id: 3,
      name: "Rolls-Royce Ghost",
      price: "₹38,000 / day",
      image: "https://wallpapercat.com/w/full/2/8/0/1748767-2000x1334-desktop-hd-rolls-royce-ghost-wallpaper.jpg",
      tag: "Ultra Luxury",
      available: true,
      type: "Limousine • 2023",
      rating: "5.0 • 56 trips",
    },
    {
      id: 4,
      name: "Audi RS7 Sportback",
      price: "₹22,000 / day",
      image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&q=80&w=1970",
      tag: "Performance",
      available: true,
      type: "Sportback • 2022",
      rating: "4.7 • 104 trips",
    },
  ];

  // Card click handler (poora card clickable)
  const handleCardClick = (carId) => {
    navigate(`/car/${carId}`);  // Example: /car/1, /car/2 etc.
    // Agar query params chahiye to: navigate(`/car/${carId}?pickup=${pickupDate}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <div className="p-6 md:p-10 lg:p-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Luxury & Sports Cars
            <span className="text-indigo-600"> on Rent</span> 🚗
          </h1>
          <p className="mt-5 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-light">
            Chauffeur-driven premium rides across India • Instant booking • Verified fleet
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 lg:p-10 border border-gray-200/50 mb-20 transform transition-all hover:shadow-3xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 tracking-wide">Pickup Location</label>
              <input
                type="text"
                placeholder="City, Airport or Area"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="border border-gray-300 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 tracking-wide">Pickup Date</label>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="border border-gray-300 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition shadow-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 tracking-wide">Return Date</label>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="border border-gray-300 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition shadow-sm"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl px-8 py-4 font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Search Premium Rides
              </button>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center md:text-left">
          Featured Collection
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryCars.map((car) => (
            <div
              key={car.id}
              onClick={() => handleCardClick(car.id)}  // <-- Poora card clickable
              className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-200 bg-white cursor-pointer"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-95"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold shadow-lg ${
                    car.available ? "bg-green-600 text-white" : "bg-red-600 text-white"
                  }`}>
                    {car.available ? "Available Now" : "Booked"}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {car.tag}
                </div>
              </div>

              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {car.name}
                  </h3>
                  <span className="text-2xl md:text-3xl font-bold text-indigo-600">
                    {car.price}
                  </span>
                </div>

                <p className="text-base mb-4 text-gray-600">
                  {car.type} • Automatic
                </p>

                <div className="flex items-center gap-2 mb-6 text-sm">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-600">{car.rating}</span>
                </div>

                {/* Rent Now button – propagation stop kiya taaki card click na trigger ho jab button pe click */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();  // <-- Important: Card click ko rokta hai
                    handleCardClick(car.id);  // Same navigation
                  }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md"
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Cars Button */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/cars")}  // Ya jo bhi route bana raha hai all cars ke liye
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:from-indigo-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Explore All Cars →
          </button>
        </div>

        
      </div>
      {/* Car Owner Banner */}
<div className="mt-24">
  <CarOwnerBanner />
</div>

    </div>
  );
};

export default Home;