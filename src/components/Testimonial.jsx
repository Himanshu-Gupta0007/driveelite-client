import React from "react";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center text-center py-20 px-4 bg-gray-50">
      <h1 className="text-4xl font-bold max-w-[760px] mb-16 text-gray-900">
        Trusted by <span className="text-indigo-600">30,000+</span> happy riders
        across India with <span className="text-green-600">PrimeDrive</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white px-6 py-8 rounded-2xl border shadow-sm max-w-[300px] text-sm text-gray-600 hover:shadow-lg transition">
          <img
            className="h-16 w-16 rounded-full mb-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
            alt="Rahul Mehta"
          />

          <p>
            “PrimeDrive made my business trip effortless. The car was spotless,
            pickup was smooth, and pricing was transparent. Highly recommended!”
          </p>

          <p className="text-lg text-gray-900 font-semibold mt-5">
            Rahul Mehta
          </p>
          <p className="text-xs text-gray-500">Startup Founder • Delhi</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white px-6 py-8 rounded-2xl border shadow-sm max-w-[300px] text-sm text-gray-600 hover:shadow-lg transition">
          <img
            className="h-16 w-16 rounded-full mb-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png"
            alt="Anjali Verma"
          />

          <p>
            “Booked a luxury car for a wedding via PrimeDrive. No hidden charges,
            premium cars, and excellent support!”
          </p>

          <p className="text-lg text-gray-900 font-semibold mt-5">
            Anjali Verma
          </p>
          <p className="text-xs text-gray-500">Event Planner • Jaipur</p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white px-6 py-8 rounded-2xl border shadow-sm max-w-[300px] text-sm text-gray-600 hover:shadow-lg transition">
          <img
            className="h-16 w-16 rounded-full mb-4"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png"
            alt="Aman Khanna"
          />

          <p>
            “Best self-drive experience I’ve had so far. Easy booking, fair
            pricing per day, and the car felt brand new.”
          </p>

          <p className="text-lg text-gray-900 font-semibold mt-5">
            Aman Khanna
          </p>
          <p className="text-xs text-gray-500">Software Engineer • Bengaluru</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
