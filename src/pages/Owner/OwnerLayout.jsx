import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

const OwnerLayout = () => {
  const [profileImage, setProfileImage] = useState(() => {
    return (
      localStorage.getItem("ownerProfileImage") ||
      "https://via.placeholder.com/150/000000/FFFFFF?text=Owner"
    );
  });

  useEffect(() => {
    localStorage.setItem("ownerProfileImage", profileImage);
  }, [profileImage]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      {/* Sidebar - sexy dark premium look */}
      <aside className="w-72 bg-gradient-to-b from-gray-900 to-black border-r border-gray-800/50 shadow-2xl flex flex-col backdrop-blur-sm">
        {/* Profile Section - bigger, glowing, premium */}
        <div className="p-8 pb-6 flex flex-col items-center relative">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 opacity-70 blur-xl group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative">
              <img
                src={profileImage}
                alt="Owner Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-gray-700/80 shadow-2xl ring-2 ring-purple-500/30 transition-all duration-300 group-hover:ring-purple-500/70 group-hover:scale-105"
              />

              {/* Change overlay - more stylish */}
              <label
                htmlFor="profile-upload"
                className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-sm"
              >
                <div className="text-center">
                  <span className="block text-white text-sm font-semibold tracking-wide">CHANGE</span>
                  <span className="text-xs text-gray-300">Profile Pic</span>
                </div>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          <h3 className="mt-5 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Owner Dashboard
          </h3>
          <p className="text-sm text-gray-400 mt-1">Himanshu</p> {/* yaha real name daal sakte ho */}
        </div>

        {/* Logo / Title */}
        <div className="px-8 pb-6">
          <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            CARHUB
          </h2>
        </div>

        {/* Navigation - modern, gradient active */}
        <nav className="flex-1 px-4 space-y-2">
          {[
            { to: "/owner", label: "Dashboard", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
            { to: "/owner/add-car", label: "Add Car", icon: "M12 4v16m8-8H4" },
            { to: "/owner/manage-cars", label: "Manage Cars", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
            { to: "/owner/manage-bookings", label: "Bookings", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/owner"}
              className={({ isActive }) =>
                `group flex items-center px-6 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600/30 to-pink-600/20 text-white border-l-4 border-purple-500 shadow-lg shadow-purple-900/20"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-white hover:border-l-4 hover:border-purple-500/50"
                }`
              }
            >
              <svg
                className="w-5 h-5 mr-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
              </svg>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-6 mt-auto border-t border-gray-800/50">
          <button
            onClick={() => {
              localStorage.removeItem("ownerProfileImage");
              setProfileImage("https://via.placeholder.com/150/000000/FFFFFF?text=Owner");
            }}
            className="w-full flex items-center justify-center px-4 py-3 bg-gray-800/70 hover:bg-gray-700 rounded-xl text-gray-300 hover:text-white transition-all duration-300 border border-gray-700/50"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Reset Profile
          </button>

          {/* Logout - sexy red accent */}
          <button className="mt-4 w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-red-600/20 to-red-900/20 hover:from-red-600/40 hover:to-red-900/40 rounded-xl text-red-400 hover:text-red-300 transition-all duration-300 border border-red-900/30">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto bg-gradient-to-br from-gray-950/90 to-black/90">
        <Outlet />
      </main>
    </div>













  );
};

export default OwnerLayout;