import React, { useState } from "react";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: "#BK4582",
      customer: "Rahul Sharma",
      car: "BMW X5",
      pickup: "30 Jan 2026, 10:00 AM",
      dropoff: "05 Feb 2026, 06:00 PM",
      amount: "₹42,500",
      status: "Active",
      phone: "+91 98765 43210",
    },
    {
      id: "#BK4581",
      customer: "Priya Singh",
      car: "Mercedes GLC",
      pickup: "28 Jan 2026, 09:00 AM",
      dropoff: "02 Feb 2026, 08:00 PM",
      amount: "₹28,900",
      status: "Completed",
      phone: "+91 87654 32109",
    },
    {
      id: "#BK4579",
      customer: "Aman Verma",
      car: "Audi Q7",
      pickup: "01 Feb 2026, 11:00 AM",
      dropoff: "07 Feb 2026, 07:00 PM",
      amount: "₹65,000",
      status: "Pending",
      phone: "+91 76543 21098",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.car.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter = filterStatus === "All" || b.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const updateStatus = (id, newStatus) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: newStatus } : b
      )
    );
  };

  return (
    <div className="space-y-8 bg-gray-50 p-6 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Manage Bookings
          </h1>
          <p className="text-gray-500 mt-1">
            Total: {bookings.length} • Pending:{" "}
            {bookings.filter((b) => b.status === "Pending").length}
          </p>
        </div>

        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow">
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          placeholder="Search by ID, customer or car"
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
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Active</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm hidden md:table">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Customer</th>
              <th className="p-4 text-left">Car</th>
              <th className="p-4 text-left">Pickup → Drop</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredBookings.map((b) => (
              <tr key={b.id} className="border-t hover:bg-gray-50">
                <td className="p-4 font-medium">{b.id}</td>

                <td className="p-4">
                  <div>{b.customer}</div>
                  <div className="text-xs text-gray-500">{b.phone}</div>
                </td>

                <td className="p-4">{b.car}</td>

                <td className="p-4">
                  <div>{b.pickup}</div>
                  <div className="text-xs text-gray-500">
                    → {b.dropoff}
                  </div>
                </td>

                <td className="p-4 font-medium">{b.amount}</td>

                <td className="p-4">
                  <StatusBadge status={b.status} />
                </td>

                {/* ✅ ACTION = STATUS SELECT */}
                <td className="p-4">
                  <select
                    value={b.status}
                    onChange={(e) =>
                      updateStatus(b.id, e.target.value)
                    }
                    className="px-3 py-2 border rounded-lg text-sm
                               focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  >
                    <option>Pending</option>
                    <option>Confirmed</option>
                    <option>Active</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredBookings.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            No bookings found
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------- Reusable ---------- */

const StatusBadge = ({ status }) => {
  const styles = {
    Active: "bg-green-100 text-green-700",
    Completed: "bg-blue-100 text-blue-700",
    Pending: "bg-orange-100 text-orange-700",
    Confirmed: "bg-indigo-100 text-indigo-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
};

export default ManageBookings;
