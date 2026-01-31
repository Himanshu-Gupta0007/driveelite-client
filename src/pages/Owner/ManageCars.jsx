import React, { useState } from "react";

const ManageCars = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      make: "BMW",
      model: "X5",
      year: 2023,
      license: "DL 7C AA 4567",
      dailyPrice: 8500,
      status: "Available",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      make: "Mercedes",
      model: "GLC 300",
      year: 2024,
      license: "DL 3B BB 8912",
      dailyPrice: 7200,
      status: "Booked",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      make: "Audi",
      model: "Q7",
      year: 2022,
      license: "DL 9R CC 2345",
      dailyPrice: 9500,
      status: "Maintenance",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e3a6052c0?auto=format&fit=crop&w=400&q=80",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.license.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterStatus === "All" || car.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const toggleAvailability = (id) => {
    setCars((prev) =>
      prev.map((car) =>
        car.id === id
          ? {
              ...car,
              status:
                car.status === "Available" ? "Unavailable" : "Available",
            }
          : car
      )
    );
  };

  const deleteCar = (id) => {
    if (window.confirm("Delete this car?")) {
      setCars((prev) => prev.filter((car) => car.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Cars
          </h1>
          <p className="text-gray-500 mt-1">
            Total Cars: {cars.length}
          </p>
        </div>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
          + Add New Car
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Stat title="Total Cars" value={cars.length} />
        <Stat
          title="Available"
          value={cars.filter((c) => c.status === "Available").length}
          color="text-green-600"
        />
        <Stat
          title="Booked"
          value={cars.filter((c) => c.status === "Booked").length}
          color="text-blue-600"
        />
        <Stat
          title="Maintenance"
          value={cars.filter((c) => c.status === "Maintenance").length}
          color="text-orange-600"
        />
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by make, model or license"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option>All</option>
          <option>Available</option>
          <option>Booked</option>
          <option>Maintenance</option>
          <option>Unavailable</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-sm hidden md:table">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Car</th>
              <th className="p-4 text-left">Details</th>
              <th className="p-4 text-left">Price / Day</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCars.map((car) => (
              <tr key={car.id} className="border-t">
                <td className="p-4">
                  <img
                    src={car.image}
                    alt=""
                    className="w-20 h-14 rounded-lg object-cover"
                  />
                </td>
                <td className="p-4">
                  <div className="font-medium">
                    {car.make} {car.model}
                  </div>
                  <div className="text-xs text-gray-500">
                    {car.year} • {car.license}
                  </div>
                </td>
                <td className="p-4 font-medium">
                  ₹{car.dailyPrice.toLocaleString()}
                </td>
                <td className="p-4">
                  <StatusBadge status={car.status} />
                </td>
                <td className="p-4 space-x-3">
                  <button className="text-blue-600">Edit</button>
                  <button
                    onClick={() => toggleAvailability(car.id)}
                    className="text-indigo-600"
                  >
                    {car.status === "Available" ? "Disable" : "Enable"}
                  </button>
                  <button
                    onClick={() => deleteCar(car.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile Cards */}
        <div className="md:hidden p-4 space-y-4">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="border rounded-xl p-4 space-y-3"
            >
              <div className="flex gap-4">
                <img
                  src={car.image}
                  className="w-24 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-bold">
                    {car.make} {car.model}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {car.year} • {car.license}
                  </p>
                  <p className="font-medium mt-1">
                    ₹{car.dailyPrice}/day
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <StatusBadge status={car.status} />
                <div className="space-x-3 text-sm">
                  <button className="text-blue-600">Edit</button>
                  <button
                    onClick={() => deleteCar(car.id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No cars found
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------- Reusable ---------- */

const Stat = ({ title, value, color = "text-gray-800" }) => (
  <div className="bg-white border rounded-xl p-6 shadow-sm">
    <p className="text-sm text-gray-500">{title}</p>
    <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
  </div>
);

const StatusBadge = ({ status }) => {
  const styles = {
    Available: "bg-green-100 text-green-700",
    Booked: "bg-blue-100 text-blue-700",
    Maintenance: "bg-orange-100 text-orange-700",
    Unavailable: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
};

export default ManageCars;
