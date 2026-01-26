import { Link } from "react-router-dom";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "BMW X5",
      price: "₹5,000/day",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a"
    },
    {
      id: 2,
      name: "Audi A6",
      price: "₹4,500/day",
      image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9"
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      price: "₹6,000/day",
      image: "https://images.unsplash.com/photo-1617814076668-6d0d5d93a353"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Available Cars</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="border rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-48 w-full object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-gray-600">{car.price}</p>

              <Link to={`/cars/${car.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cars;
