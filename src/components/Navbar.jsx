import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-4">
        
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-blue-600">
            PrimeDrive
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/cars">Car</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/booking">My Booking</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        {/* Search Input (Desktop) */}
        <input
          type="text"
          placeholder="Search cars..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="hidden md:block border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Login Button */}
        <Link to="/login">
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-4 font-medium">

            {/* Search Input (Mobile) */}
            <input
              type="text"
              placeholder="Search cars..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-11/12 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <li>
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/cars" onClick={() => setOpen(false)}>Car</Link>
            </li>
            <li>
              <Link to="/booking" onClick={() => setOpen(false)}>My Booking</Link>
            </li>
            <li>
              <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
            </li>

            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
