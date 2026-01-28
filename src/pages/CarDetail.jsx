// src/pages/CarDetail.jsx
import { Link, useParams } from "react-router-dom";
import { cars } from "../data/cars"; // ✅ Import unified cars array

const CarDetail = () => {
  const { id } = useParams();

  // Convert id to Number for comparison
  const car = cars.find((c) => c.id === Number(id));

  if (!car) {
    return (
      <div className="p-10 text-center text-2xl font-semibold">
        Car not found 😕
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 max-w-6xl mx-auto">
      {/* Back Button */}
      <Link
        to="/cars"
        className="inline-block mb-8 text-indigo-600 font-semibold"
      >
        ← Back to Cars
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* LEFT: Image & Specs */}
        <div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-96 object-cover rounded-3xl shadow-xl"
          />

          <div className="grid grid-cols-2 gap-4 mt-6 text-gray-700">
            <div>{car.year}</div>
            <div>{car.seats}</div>
            <div>{car.fuel}</div>
            <div>{car.transmission}</div>
          </div>

          <p className="mt-4 text-gray-500">{car.location}</p>
        </div>

        {/* RIGHT: Details, Features, Booking */}
        <div>
          <h1 className="text-4xl font-extrabold">{car.name}</h1>
          <p className="text-3xl text-indigo-600 font-bold mt-2">{car.price}</p>

          <p className="mt-6 text-gray-700 leading-relaxed">{car.description}</p>

          {/* FEATURES */}
          {car.features && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="grid grid-cols-2 gap-3">
                {car.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-green-600">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* BOOKING */}
          <div className="mt-10 bg-gray-50 p-6 rounded-2xl border">
            <h3 className="text-xl font-semibold mb-4">Book This Car</h3>

            <div className="grid grid-cols-2 gap-6">
              <input type="date" className="p-3 border rounded-xl" />
              <input type="date" className="p-3 border rounded-xl" />
            </div>

            <button className="mt-6 w-full bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700">
              Book Now
            </button>

            <p className="mt-3 text-center text-sm text-gray-600">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
