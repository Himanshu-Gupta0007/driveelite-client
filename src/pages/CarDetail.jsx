import { useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams();

  const cars = [
    {
      id: "1",
      name: "BMW X5",
      price: "₹5,000/day",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
      description: "Luxury SUV with premium comfort and performance."
    },
    {
      id: "2",
      name: "Audi A6",
      price: "₹4,500/day",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9",
      description: "Executive sedan with smooth drive and classy design."
    },
    {
      id: "3",
      name: "Mercedes C-Class",
      price: "₹6,000/day",
      image: "https://images.unsplash.com/photo-1617814076668-6d0d5d93a353",
      description: "Premium luxury car with advanced features."
    }
  ];

  const car = cars.find((c) => c.id === id);

  if (!car) {
    return <div className="p-8">Car not found</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-96 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">{car.name}</h1>
      <p className="text-xl text-blue-600 mt-2">{car.price}</p>

      <p className="mt-4 text-gray-700">
        {car.description}
      </p>

      <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg">
        Book Now
      </button>
    </div>
  );
};

export default CarDetail;
