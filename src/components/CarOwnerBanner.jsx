import { useNavigate } from "react-router-dom";

const CarOwnerBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      
      {/* Soft background glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-indigo-300/20 blur-[120px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold tracking-wide">
            💎 Become a Car Owner Partner
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Own a <span className="text-indigo-600">Luxury Car?</span>
            <br />
            Earn <span className="text-yellow-500">Passive Income</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            List your premium vehicle on{" "}
            <span className="font-semibold text-indigo-600">CarRental</span> and earn
            effortlessly. We manage insurance, drivers and secure payments.
          </p>

          {/* FEATURES */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-gray-700 text-sm">
            <p>✔ Full Insurance Coverage</p>
            <p>✔ Verified Chauffeurs</p>
            <p>✔ Zero Maintenance Stress</p>
            <p>✔ Weekly Payouts</p>
          </div>

          {/* STATS */}
          <div className="mt-10 flex gap-10">
            <div>
              <p className="text-3xl font-bold text-indigo-600">₹1.2L+</p>
              <p className="text-sm text-gray-500">Avg Monthly Earnings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-yellow-500">5,000+</p>
              <p className="text-sm text-gray-500">Successful Rentals</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex gap-6 flex-wrap">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl"
            >
              List Your Car 🚘
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-gray-300 px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="absolute -inset-6 bg-indigo-200/40 blur-3xl rounded-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
            alt="Luxury Car"
            className="relative rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CarOwnerBanner;
