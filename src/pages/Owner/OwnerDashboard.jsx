import React from 'react';

const OwnerDashboard = () => {
  const stats = [
    { title: 'Total Cars', value: '48', change: '+3', color: 'from-blue-600 to-cyan-500' },
    { title: 'Active Bookings', value: '12', change: '+5', color: 'from-purple-600 to-pink-500' },
    { title: 'Monthly Earnings', value: '₹4,85,200', change: '+18%', color: 'from-green-600 to-emerald-500' },
    { title: 'Pending Requests', value: '7', change: '-2', color: 'from-orange-600 to-amber-500' },
  ];

  const recentBookings = [
    { id: '#BK4582', customer: 'Rahul Sharma', car: 'BMW X5', date: '28 Jan 2026', amount: '₹12,500', status: 'Active' },
    { id: '#BK4581', customer: 'Priya Singh', car: 'Mercedes GLC', date: '27 Jan 2026', amount: '₹9,800', status: 'Completed' },
    { id: '#BK4579', customer: 'Aman Verma', car: 'Audi Q7', date: '25 Jan 2026', amount: '₹15,200', status: 'Pending' },
    { id: '#BK4578', customer: 'Neha Kapoor', car: 'Toyota Fortuner', date: '24 Jan 2026', amount: '₹8,900', status: 'Cancelled' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Owner Dashboard
          </h1>
          <p className="text-gray-400 mt-1">
            Manage your cars, bookings & earnings • {new Date().toLocaleDateString('en-IN')}
          </p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium shadow-lg">
          + Add New Car
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl text-white shadow-xl`}
          >
            <h3 className="text-sm opacity-90">{stat.title}</h3>
            <p className="text-4xl font-bold mt-2">{stat.value}</p>
            <p className="text-xs mt-2 opacity-80">{stat.change} from last day</p>
          </div>
        ))}
      </div>

      {/* Owner Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Fleet Status */}
        <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Fleet Status</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Available Cars</span>
              <span className="font-bold text-green-400">29</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Currently Rented</span>
              <span className="font-bold text-blue-400">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Under Maintenance</span>
              <span className="font-bold text-orange-400">7</span>
            </div>
          </div>
        </div>

        {/* Earnings Snapshot */}
        <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">Owner Earnings Snapshot</h2>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-400">₹1.6L</p>
              <p className="text-xs text-gray-400">This Week</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-400">₹4.8L</p>
              <p className="text-xs text-gray-400">This Month</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-pink-400">₹52L</p>
              <p className="text-xs text-gray-400">Lifetime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <div className="bg-gray-900/70 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-6">Recent Customer Bookings</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="py-3 text-left">ID</th>
                <th className="py-3 text-left">Customer</th>
                <th className="py-3 text-left">Car</th>
                <th className="py-3 text-left">Amount</th>
                <th className="py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b) => (
                <tr key={b.id} className="border-b border-gray-800/40">
                  <td className="py-3">{b.id}</td>
                  <td className="py-3">{b.customer}</td>
                  <td className="py-3">{b.car}</td>
                  <td className="py-3 font-medium">{b.amount}</td>
                  <td className="py-3">
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400">
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
