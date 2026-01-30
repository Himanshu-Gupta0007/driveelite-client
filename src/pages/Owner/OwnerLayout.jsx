import { NavLink, Outlet } from "react-router-dom";

const OwnerLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-2xl font-bold mb-10">Owner Panel</h2>

        <nav className="space-y-4">
          <NavLink
            to="/owner"
            end
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-white text-black" : "hover:bg-gray-800"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/owner/add-car"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-white text-black" : "hover:bg-gray-800"
              }`
            }
          >
            Add Car
          </NavLink>

          <NavLink
            to="/owner/manage-cars"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-white text-black" : "hover:bg-gray-800"
              }`
            }
          >
            Manage Cars
          </NavLink>

          <NavLink
            to="/owner/manage-bookings"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive ? "bg-white text-black" : "hover:bg-gray-800"
              }`
            }
          >
            Manage Bookings
          </NavLink>
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default OwnerLayout;
