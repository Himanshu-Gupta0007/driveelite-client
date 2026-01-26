import { useState } from "react";

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const luxuryCars = [
    {
      id: 1,
      name: "Mercedes C-Class",
      price: "₹6,000 / day",
      image: "https://images.unsplash.com/photo-1617814076668-6d0d5d93a353",
    },
    {
      id: 2,
      name: "BMW X5",
      price: "₹5,000 / day",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
    },
    {
      id: 3,
      name: "Audi A6",
      price: "₹4,500 / day",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">
        Luxury Car Rent 🚗
      </h1>

      {/* Search Box */}
      <div className="bg-white shadow-lg rounded-xl p-6 grid md:grid-cols-4 gap-4 mb-12">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Pickup Location</label>
          <input
            type="text"
            placeholder="Enter city or location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Pickup Date</label>
          <input
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-end">
          <button className="w-full bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>

      {/* Luxury Cars Section */}
      <h2 className="text-2xl font-bold mb-6">Luxury Cars</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {luxuryCars.map((car) => (
          <div key={car.id} className="border rounded-xl shadow hover:shadow-lg transition">
            <img
              src={car.image}
              alt={car.name}
              className="h-48 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-gray-600 mt-1">Luxury • Automatic • Petrol</p>
              <p className="text-blue-600 font-bold mt-2">{car.price}</p>

              <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
