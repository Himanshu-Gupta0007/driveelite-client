import { Link, useParams } from "react-router-dom";


const CarDetail = () => {
  const { id } = useParams();

  const cars = [
    {
      id: "1",
      name: "BMW X5",
      price: "₹5,000/day",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
      description: "Luxury SUV with premium comfort, powerful performance, and advanced safety features.",
      type: "SUV",
      year: "2025",
      seats: "5 Seats",
      fuel: "Petrol",
      transmission: "Automatic",
      location: "Delhi",
    },
    {
      id: "2",
      name: "Audi A6",
      price: "₹4,500/day",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
      description: "Executive sedan with smooth drive, classy design, and cutting-edge technology.",
      type: "Sedan",
      year: "2025",
      seats: "5 Seats",
      fuel: "Petrol",
      transmission: "Automatic",
      location: "Delhi",
    },
    {
      id: "3",
      name: "Mercedes C-Class",
      price: "₹6,000/day",
      image: "https://images.unsplash.com/photo-1619025435808-9a65d3ea8a1c",
      description: "Premium luxury sedan with refined elegance and superior driving dynamics.",
      type: "Sedan",
      year: "2025",
      seats: "5 Seats",
      fuel: "Diesel",
      transmission: "Automatic",
      location: "Delhi",
    },
    {
      id: "4",
      name: "Toyota Corolla",
      price: "$130/day",
      image: "https://media.rti.toyota.com/adobe/dynamicmedia/deliver/urn:aaid:aem:a6c3f7c3-38b4-4681-858d-d44579cbe199/image.png?size=1200,663",
      description: "Reliable mid-size sedan known for comfort, fuel efficiency, and long-lasting durability. The 2021 model offers a smooth ride perfect for city and highway driving.",
      type: "Sedan",
      year: "2021",
      seats: "4 Seats",
      fuel: "Diesel",
      transmission: "Automatic",
      location: "Los Angeles",
      features: [
        "360 Camera",
        "Bluetooth Connectivity",
        "GPS Navigation",
        "Heated Seats",
        "Rear View Mirror Camera",
      ],
    },
    {
      id: "5",
      name: "Hyundai Verna",
      price: "₹3,800/day",
      image: "https://images.unsplash.com/photo-1506719040632-7d586470c936",
      description: "Modern sedan with stylish looks, spacious cabin, and great value features.",
      type: "Sedan",
      year: "2025",
      seats: "5 Seats",
      fuel: "Petrol",
      transmission: "Automatic",
      location: "Delhi",
    },
    {
      id: "6",
      name: "BMW 3 Series (2021 Diesel)",
      price: "₹5,500/day",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      description: "Sporty premium sedan with excellent handling and efficient diesel engine.",
      type: "Sedan",
      year: "2021",
      seats: "5 Seats",
      fuel: "Diesel",
      transmission: "Automatic",
      location: "Delhi",
    },
  ];

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return <div className="p-8 text-center text-xl">Car not found</div>;
  }

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto bg-white">
      {/* Back Button */}
      <Link
        to="/cars"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
      >
        
      </Link>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Image & Specs */}
        <div>
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-lg"
          />

          {/* Key Specs with Icons */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-2">
            
              <span>{car.seats}</span>
            </div>
            <div className="flex items-center gap-2">
              
              <span>{car.fuel}</span>
            </div>
            <div className="flex items-center gap-2">
             
              <span>{car.transmission}</span>
            </div>
          </div>

          <p className="mt-4 text-gray-500">{car.location}</p>
        </div>

        {/* Right: Details, Features, Booking */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900">{car.name}</h1>
          <p className="text-3xl font-semibold text-blue-600 mt-2">
            {car.price}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {car.description}
          </p>

          {/* Features */}
          {car.features && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="grid grid-cols-2 gap-3">
                {car.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Booking Form */}
          <div className="mt-10 bg-gray-50 p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-4">Book This Car</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Pickup Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Return Date
                </label>
                <input
                  type="date"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button className="mt-8 w-full bg-green-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition">
              Book Now
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              No credit card required to reserve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;