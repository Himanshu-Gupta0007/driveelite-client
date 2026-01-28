import { Link } from "react-router-dom";
import React, { useState } from "react";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "BMW X5",
      price: "₹5,000/day",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
      details: "2025 • 5 Seats • Petrol • Automatic",
    },
    {
      id: 2,
      name: "Audi A6",
      price: "₹4,500/day",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
      details: "2025 • 5 Seats • Petrol • Automatic",
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      price: "₹6,000/day",
      image: "https://images.unsplash.com/photo-1619025435808-9a65d3ea8a1c",
      details: "2025 • 5 Seats • Diesel • Automatic",
    },
    {
      id: 4,
      name: "Toyota Camry",
      price: "₹4,200/day",
      image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c",
      details: "2025 • 5 Seats • Hybrid Petrol • Automatic",
    },
    {
      id: 5,
      name: "Hyundai Verna",
      price: "₹3,800/day",
      image: "https://images.unsplash.com/photo-1506719040632-7d586470c936",
      details: "2025 • 5 Seats • Petrol • Automatic",
    },
    {
      id: 6,
      name: "BMW 3 Series (2021 Diesel)",
      price: "₹5,500/day",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      details: "2021 • 5 Seats • Diesel • Automatic",
    },
  ];

  const Card = ({ car }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const threshold = 12; // adjust for stronger/weaker tilt

    const handleMove = (e) => {
      const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      setTilt({ x: y * -threshold, y: x * threshold });
    };

    return (
      <Link
        to={`/cars/${car.id}`}
        className="block rounded-2xl shadow-xl overflow-hidden transition-all duration-200 ease-out cursor-pointer bg-white max-w-sm"
        onMouseMove={handleMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="overflow-hidden">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900 mb-1">{car.name}</h2>
          <p className="text-lg font-semibold text-blue-600">{car.price}</p>
          <p className="text-sm text-gray-600 mt-2">{car.details}</p>
        </div>
      </Link>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Available Cars</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;