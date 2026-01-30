import React, { useState } from 'react';

const ManageCars = () => {
  // Dummy data – real app mein backend se fetch karna
  const [cars, setCars] = useState([
    {
      id: 1,
      make: 'BMW',
      model: 'X5',
      year: 2023,
      license: 'DL 7C AA 4567',
      dailyPrice: 8500,
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      make: 'Mercedes',
      model: 'GLC 300',
      year: 2024,
      license: 'DL 3B BB 8912',
      dailyPrice: 7200,
      status: 'Booked',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      make: 'Audi',
      model: 'Q7',
      year: 2022,
      license: 'DL 9R CC 2345',
      dailyPrice: 9500,
      status: 'Maintenance',
      image: 'https://images.unsplash.com/photo-1502877338535-766e3a6052c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      make: 'Toyota',
      model: 'Fortuner',
      year: 2023,
      license: 'DL 1A DD 6789',
      dailyPrice: 5500,
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1502489597346-9e8e0a9d0e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.license.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || car.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const toggleAvailability = (id) => {
    setCars((prev) =>
      prev.map((car) =>
        car.id === id
          ? { ...car, status: car.status === 'Available' ? 'Unavailable' : 'Available' }
          : car
      )
    );
  };

  const deleteCar = (id) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      setCars((prev) => prev.filter((car) => car.id !== id));
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Manage Your Fleet
          </h1>
          <p className="text-gray-400 mt-1">Total Cars: {cars.length} • Updated {new Date().toLocaleDateString('en-IN')}</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-medium shadow-lg shadow-purple-900/30 transition-all duration-300">
          + Add New Car
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Total Cars</h3>
          <p className="text-4xl font-bold text-white mt-2">{cars.length}</p>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Available</h3>
          <p className="text-4xl font-bold text-green-400 mt-2">
            {cars.filter((c) => c.status === 'Available').length}
          </p>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Booked</h3>
          <p className="text-4xl font-bold text-purple-400 mt-2">
            {cars.filter((c) => c.status === 'Booked').length}
          </p>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Maintenance</h3>
          <p className="text-4xl font-bold text-orange-400 mt-2">
            {cars.filter((c) => c.status === 'Maintenance').length}
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <input
          type="text"
          placeholder="Search by make, model or license..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-5 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        >
          <option>All</option>
          <option>Available</option>
          <option>Booked</option>
          <option>Maintenance</option>
          <option>Unavailable</option>
        </select>
      </div>

      {/* Cars List - Table for desktop, Cards for mobile */}
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-purple-400">Your Vehicles</h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-800/50">
                <th className="py-4 px-6 text-left font-medium">Car</th>
                <th className="py-4 px-6 text-left font-medium">Details</th>
                <th className="py-4 px-6 text-left font-medium">Price/Day</th>
                <th className="py-4 px-6 text-left font-medium">Status</th>
                <th className="py-4 px-6 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((car) => (
                <tr key={car.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition">
                  <td className="py-4 px-6">
                    <img src={car.image} alt={`${car.make} ${car.model}`} className="w-16 h-12 object-cover rounded-lg" />
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-medium">{car.make} {car.model}</div>
                    <div className="text-xs text-gray-500">{car.year} • {car.license}</div>
                  </td>
                  <td className="py-4 px-6 font-medium">₹{car.dailyPrice.toLocaleString()}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        car.status === 'Available'
                          ? 'bg-green-500/20 text-green-400'
                          : car.status === 'Booked'
                          ? 'bg-purple-500/20 text-purple-400'
                          : car.status === 'Maintenance'
                          ? 'bg-orange-500/20 text-orange-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {car.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <button className="text-blue-400 hover:text-blue-300 transition">Edit</button>
                      <button className="text-purple-400 hover:text-purple-300 transition">Bookings</button>
                      <button
                        onClick={() => toggleAvailability(car.id)}
                        className="text-cyan-400 hover:text-cyan-300 transition"
                      >
                        {car.status === 'Available' ? 'Disable' : 'Enable'}
                      </button>
                      <button
                        onClick={() => deleteCar(car.id)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View */}
        <div className="md:hidden space-y-4 p-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 hover:border-purple-500/50 transition">
              <div className="flex items-center gap-4">
                <img src={car.image} alt={`${car.make} ${car.model}`} className="w-20 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-bold">{car.make} {car.model}</h3>
                  <p className="text-xs text-gray-400">{car.year} • {car.license}</p>
                  <p className="text-sm font-medium mt-1">₹{car.dailyPrice.toLocaleString()}/day</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between items-center">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    car.status === 'Available'
                      ? 'bg-green-500/20 text-green-400'
                      : car.status === 'Booked'
                      ? 'bg-purple-500/20 text-purple-400'
                      : car.status === 'Maintenance'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {car.status}
                </span>
                <div className="flex space-x-3 text-sm">
                  <button className="text-blue-400">Edit</button>
                  <button className="text-red-400">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No cars found matching your search/filter
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCars;