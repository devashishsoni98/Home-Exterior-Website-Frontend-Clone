import React from "react";
const FinancingOptions = () => (
    <section
      className="relative bg-yellow-400 py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: "url(/bg.jpeg)",
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <div className="relative max-w-7xl mx-auto bg-white border border-black shadow-lg flex flex-col md:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-12 md:py-16">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
            Convenient Financing Options
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            <span className="text-yellow-500 font-bold">We Make Quality Exterior Remodeling Affordable</span>
          </p>
        </div>
  
        <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0 w-full md:w-auto">
          <a
            href="#"
            className="block w-full md:w-auto bg-yellow-400 text-black font-normal px-6 py-3 text-base md:text-lg border border-yellow-400 hover:bg-yellow-500 transition text-center shadow-md hover:shadow-lg"
            aria-label="View our financing offers"
          >
            FINANCING OFFERS
          </a>
        </div>
      </div>
    </section>
  )
  
  export default FinancingOptions
  