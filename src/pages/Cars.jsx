// src/pages/Cars.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { cars } from "../data/cars"; // ✅ Import unified cars array

const Cars = () => {
  // 🔹 Card Component
  const Card = ({ car }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 12;

    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setTilt({
        x: y * -threshold,
        y: x * threshold,
      });
    };

    return (
      <Link
        to={`/cars/${car.id}`} // ✅ Matches /cars/:id route
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="block bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
      >
        <div className="overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            {car.name}
          </h2>
          <p className="text-lg font-semibold text-indigo-600">
            {car.price}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {car.type || car.details}
          </p>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-12 py-10">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">
        Available Cars
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
