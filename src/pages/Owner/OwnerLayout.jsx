import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const OwnerLayout = () => {
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("ownerProfileImage") ||
      "https://via.placeholder.com/150?text=Owner"
  );

  useEffect(() => {
    localStorage.setItem("ownerProfileImage", profileImage);
  }, [profileImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be under 2MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col">
        {/* Profile */}
        <div className="p-8 flex flex-col items-center border-b">
          <div className="relative group">
            <img
              src={profileImage}
              alt="Owner"
              className="w-24 h-24 rounded-full object-cover border shadow-sm"
            />

            <label
              htmlFor="profile-upload"
              className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition"
            >
              <span className="text-xs text-white font-semibold">Change</span>
              <input
                id="profile-upload"
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </label>
          </div>

          <h3 className="mt-4 text-lg font-bold">Owner Panel</h3>
          <p className="text-sm text-gray-500">Himanshu</p>
        </div>

        {/* Brand */}
        <div className="px-8 py-6">
          <h2 className="text-2xl font-extrabold text-blue-600">CARHUB</h2>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 space-y-2">
          {[
            { to: "/owner", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7" },
            { to: "/owner/add-car", label: "Add Car", icon: "M12 4v16m8-8H4" },
            { to: "/owner/manage-cars", label: "Manage Cars", icon: "M5 11h14" },
            { to: "/owner/manage-bookings", label: "Bookings", icon: "M8 7V3m8 4V3" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/owner"}
              className={({ isActive }) =>
                `flex items-center px-5 py-3 rounded-lg font-medium transition ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <svg
                className="w-5 h-5 mr-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={item.icon}
                />
              </svg>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-6 border-t space-y-3">
          <button
            onClick={() => {
              localStorage.removeItem("ownerProfileImage");
              setProfileImage("https://via.placeholder.com/150?text=Owner");
            }}
            className="w-full px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-lg transition"
          >
            Reset Profile
          </button>

          <button className="w-full px-4 py-2 text-sm bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerLayout;
