import React from 'react';

const OwnerDashboard = () => {
  const stats = [
    { title: 'Total Cars', value: '48', change: '+3' },
    { title: 'Active Bookings', value: '12', change: '+5' },
    { title: 'Monthly Earnings', value: '₹4,85,200', change: '+18%' },
    { title: 'Pending Requests', value: '7', change: '-2' },
  ];

  const recentBookings = [
    { id: '#BK4582', customer: 'Rahul Sharma', car: 'BMW X5', amount: '₹12,500', status: 'Active' },
    { id: '#BK4581', customer: 'Priya Singh', car: 'Mercedes GLC', amount: '₹9,800', status: 'Completed' },
    { id: '#BK4579', customer: 'Aman Verma', car: 'Audi Q7', amount: '₹15,200', status: 'Pending' },
    { id: '#BK4578', customer: 'Neha Kapoor', car: 'Toyota Fortuner', amount: '₹8,900', status: 'Cancelled' },
  ];

  const statusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Completed':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="space-y-8 bg-gray-100 p-6 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Owner Dashboard
          </h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your cars, bookings & earnings • {new Date().toLocaleDateString('en-IN')}
          </p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow">
          + Add New Car
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-sm font-medium text-gray-600">{stat.title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <p className={`text-xs mt-2 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {stat.change} from yesterday
            </p>
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Fleet Status</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-700">
              <span>Available Cars</span>
              <span className="font-semibold text-green-700">29</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Currently Rented</span>
              <span className="font-semibold text-blue-700">12</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Under Maintenance</span>
              <span className="font-semibold text-orange-700">7</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Earnings Snapshot</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xl font-bold text-gray-900">₹1.6L</p>
              <p className="text-xs text-gray-600">This Week</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">₹4.8L</p>
              <p className="text-xs text-gray-600">This Month</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">₹52L</p>
              <p className="text-xs text-gray-600">Lifetime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white p-6 rounded-xl border shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Customer Bookings</h2>
        <table className="w-full text-sm">
          <thead className="border-b text-gray-700">
            <tr>
              <th className="py-3 text-left">ID</th>
              <th className="py-3 text-left">Customer</th>
              <th className="py-3 text-left">Car</th>
              <th className="py-3 text-left">Amount</th>
              <th className="py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((b) => (
              <tr key={b.id} className="border-b hover:bg-gray-50 text-gray-800">
                <td className="py-3">{b.id}</td>
                <td className="py-3">{b.customer}</td>
                <td className="py-3">{b.car}</td>
                <td className="py-3 font-medium">{b.amount}</td>
                <td className="py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(b.status)}`}>
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerDashboard;
