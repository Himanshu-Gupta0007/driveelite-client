import React, { useState } from 'react';

const ManageBookings = () => {
  // Dummy data – real mein API se fetch kar lena (useEffect + axios/fetch)
  const [bookings, setBookings] = useState([
    {
      id: '#BK4582',
      customer: 'Rahul Sharma',
      car: 'BMW X5',
      pickup: '30 Jan 2026, 10:00 AM',
      dropoff: '05 Feb 2026, 06:00 PM',
      amount: '₹42,500',
      status: 'Active',
      phone: '+91 98765 43210',
    },
    {
      id: '#BK4581',
      customer: 'Priya Singh',
      car: 'Mercedes GLC',
      pickup: '28 Jan 2026, 09:00 AM',
      dropoff: '02 Feb 2026, 08:00 PM',
      amount: '₹28,900',
      status: 'Completed',
      phone: '+91 87654 32109',
    },
    {
      id: '#BK4579',
      customer: 'Aman Verma',
      car: 'Audi Q7',
      pickup: '01 Feb 2026, 11:00 AM',
      dropoff: '07 Feb 2026, 07:00 PM',
      amount: '₹65,000',
      status: 'Pending',
      phone: '+91 76543 21098',
    },
    {
      id: '#BK4578',
      customer: 'Neha Kapoor',
      car: 'Toyota Fortuner',
      pickup: '29 Jan 2026, 02:00 PM',
      dropoff: '31 Jan 2026, 05:00 PM',
      amount: '₹18,500',
      status: 'Cancelled',
      phone: '+91 65432 10987',
    },
    {
      id: '#BK4577',
      customer: 'Vikram Malhotra',
      car: 'Hyundai Creta',
      pickup: '05 Feb 2026, 08:00 AM',
      dropoff: '10 Feb 2026, 09:00 PM',
      amount: '₹22,000',
      status: 'Confirmed',
      phone: '+91 54321 09876',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.car.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Manage Bookings
          </h1>
          <p className="text-gray-400 mt-1">
            Total Bookings: {bookings.length} • Pending: {bookings.filter(b => b.status === 'Pending').length}
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-medium shadow-lg shadow-purple-900/30 transition-all duration-300">
          Export to CSV
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Total Revenue</h3>
          <p className="text-4xl font-bold text-green-400 mt-2">₹1,76,900</p>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Active Bookings</h3>
          <p className="text-4xl font-bold text-purple-400 mt-2">
            {bookings.filter((b) => b.status === 'Active').length}
          </p>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Pending</h3>
          <p className="text-4xl font-bold text-orange-400 mt-2">
            {bookings.filter((b) => b.status === 'Pending').length}
          </p>
        </div>
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-medium text-gray-300">Cancelled</h3>
          <p className="text-4xl font-bold text-red-400 mt-2">
            {bookings.filter((b) => b.status === 'Cancelled').length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <input
          type="text"
          placeholder="Search by ID, customer or car..."
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
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Bookings List */}
      <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-purple-400">All Bookings</h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 bg-gray-800/50">
                <th className="py-4 px-6 text-left font-medium">ID</th>
                <th className="py-4 px-6 text-left font-medium">Customer</th>
                <th className="py-4 px-6 text-left font-medium">Car</th>
                <th className="py-4 px-6 text-left font-medium">Pickup → Dropoff</th>
                <th className="py-4 px-6 text-left font-medium">Amount</th>
                <th className="py-4 px-6 text-left font-medium">Status</th>
                <th className="py-4 px-6 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition">
                  <td className="py-4 px-6 font-medium">{booking.id}</td>
                  <td className="py-4 px-6">
                    <div>{booking.customer}</div>
                    <div className="text-xs text-gray-500">{booking.phone}</div>
                  </td>
                  <td className="py-4 px-6">{booking.car}</td>
                  <td className="py-4 px-6">
                    <div>{booking.pickup}</div>
                    <div className="text-xs text-gray-500">→ {booking.dropoff}</div>
                  </td>
                  <td className="py-4 px-6 font-medium">{booking.amount}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Active'
                          ? 'bg-green-500/20 text-green-400'
                          : booking.status === 'Completed'
                          ? 'bg-blue-500/20 text-blue-400'
                          : booking.status === 'Pending'
                          ? 'bg-orange-500/20 text-orange-400'
                          : booking.status === 'Confirmed'
                          ? 'bg-indigo-500/20 text-indigo-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3 text-sm">
                      <button className="text-blue-400 hover:text-blue-300 transition">View</button>
                      {booking.status === 'Pending' && (
                        <button
                          onClick={() => updateStatus(booking.id, 'Confirmed')}
                          className="text-green-400 hover:text-green-300 transition"
                        >
                          Confirm
                        </button>
                      )}
                      {booking.status !== 'Cancelled' && booking.status !== 'Completed' && (
                        <button
                          onClick={() => updateStatus(booking.id, 'Cancelled')}
                          className="text-red-400 hover:text-red-300 transition"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 p-6">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-purple-500/50 transition">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{booking.id} • {booking.car}</h3>
                  <p className="text-sm text-gray-400">{booking.customer}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    booking.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    booking.status === 'Completed' ? 'bg-blue-500/20 text-blue-400' :
                    booking.status === 'Pending' ? 'bg-orange-500/20 text-orange-400' :
                    booking.status === 'Confirmed' ? 'bg-indigo-500/20 text-indigo-400' :
                    'bg-red-500/20 text-red-400'
                  }`}
                >
                  {booking.status}
                </span>
              </div>
              <div className="mt-3 text-sm">
                <p><strong>Pickup:</strong> {booking.pickup}</p>
                <p><strong>Dropoff:</strong> {booking.dropoff}</p>
                <p className="font-medium mt-1">{booking.amount}</p>
              </div>
              <div className="mt-4 flex space-x-4 text-sm">
                <button className="text-blue-400">View Details</button>
                <button className="text-red-400">Cancel</button>
              </div>
            </div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No bookings found. Try changing search or filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageBookings;