import { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed Email:", email);
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 px-4 py-12">
      <h1 className="md:text-4xl text-2xl font-semibold text-gray-900">
        Never Miss a Deal!
      </h1>

      <p className="md:text-lg text-sm text-gray-500 pb-6 max-w-xl">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-2xl h-12 md:h-14 bg-white shadow-sm rounded-md overflow-hidden"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 px-4 text-gray-700 outline-none border border-gray-300 border-r-0 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400"
        />

        <button
          type="submit"
          className="px-6 md:px-10 bg-indigo-500 text-white font-medium hover:bg-indigo-600 active:scale-95 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
