import React from 'react';

const OwnerDashboard = () => {
  // Yeh dummy data hai – real mein API se fetch kar lena
  const stats = [
    { title: 'Total Cars', value: '48', change: '+3', color: 'from-blue-600 to-cyan-500' },
    { title: 'Active Bookings', value: '12', change: '+5', color: 'from-purple-600 to-pink-500' },
    { title: 'Total Revenue', value: '₹4,85,200', change: '+18%', color: 'from-green-600 to-emerald-500' },
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
      {/* Header / Welcome */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome back, Himanshu
          </h1>
          <p className="text-gray-400 mt-1">Here's what's happening with your fleet today • {new Date().toLocaleDateString('en-IN')}</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-xl text-white font-medium shadow-lg shadow-purple-900/30 transition-all duration-300">
          + Add New Car
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} p-6 rounded-2xl shadow-xl shadow-black/40 text-white transform hover:scale-105 transition-all duration-300`}
          >
            <h3 className="text-lg font-medium opacity-90">{stat.title}</h3>
            <p className="text-4xl font-bold mt-3">{stat.value}</p>
            <p className={`mt-2 text-sm ${stat.change.startsWith('+') ? 'text-green-200' : 'text-red-200'}`}>
              {stat.change} from yesterday
            </p>
          </div>
        ))}
      </div>

      {/* Charts + Overview Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart (placeholder - real mein recharts ya chart.js use kar sakte ho) */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
            Revenue Overview
            <span className="text-sm font-medium text-purple-400">This Month</span>
          </h2>
          <div className="h-64 bg-gray-950/50 rounded-xl flex items-center justify-center">
            <p className="text-gray-500">Revenue Line Chart Placeholder (Use Recharts / ApexCharts here)</p>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-400">₹2.8L</p>
              <p className="text-xs text-gray-400">This Month</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-400">142</p>
              <p className="text-xs text-gray-400">Bookings</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-pink-400">92%</p>
              <p className="text-xs text-gray-400">Utilization</p>
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-2xl overflow-hidden">
          <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
            Recent Bookings
            <button className="text-sm text-purple-400 hover:text-purple-300 transition">View All →</button>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 text-left font-medium">ID</th>
                  <th className="py-4 text-left font-medium">Customer</th>
                  <th className="py-4 text-left font-medium">Car</th>
                  <th className="py-4 text-left font-medium">Date</th>
                  <th className="py-4 text-left font-medium">Amount</th>
                  <th className="py-4 text-left font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition">
                    <td className="py-4 font-medium">{booking.id}</td>
                    <td className="py-4">{booking.customer}</td>
                    <td className="py-4">{booking.car}</td>
                    <td className="py-4">{booking.date}</td>
                    <td className="py-4 font-medium">{booking.amount}</td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === 'Active'
                            ? 'bg-green-500/20 text-green-400'
                            : booking.status === 'Completed'
                            ? 'bg-blue-500/20 text-blue-400'
                            : booking.status === 'Pending'
                            ? 'bg-orange-500/20 text-orange-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer">
          <h3 className="text-lg font-bold mb-2">Add New Car</h3>
          <p className="text-gray-400 text-sm">Expand your fleet quickly</p>
        </div>













        

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 cursor-pointer">
          <h3 className="text-lg font-bold mb-2">Manage Availability</h3>
          <p className="text-gray-400 text-sm">Update car status & pricing</p>
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer">
          <h3 className="text-lg font-bold mb-2">View Reports</h3>
          <p className="text-gray-400 text-sm">Detailed analytics & earnings</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;