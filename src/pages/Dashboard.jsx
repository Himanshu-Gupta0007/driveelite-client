import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // 🔥 Get bookings from localStorage
    const storedBookings = JSON.parse(
      localStorage.getItem("bookings")
    ) || [];

    setBookings(storedBookings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        📊 My Dashboard
      </h1>

      {/* No booking */}
      {bookings.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-gray-600">
          ❌ No bookings found. Book a car first.
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Car</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">From</th>
                <th className="p-3 text-left">To</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">₹{item.price}</td>
                  <td className="p-3">{item.startDate}</td>
                  <td className="p-3">{item.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
