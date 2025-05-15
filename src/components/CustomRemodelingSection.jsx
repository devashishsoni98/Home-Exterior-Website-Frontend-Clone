import React from "react";

const CustomRemodelingSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[60vh] md:min-h-[80vh]">
      {/* Image container - taller on mobile, responsive height */}
      <div className="md:w-1/2 w-full h-72 sm:h-96 md:h-auto relative">
        <img src="/third.jpg" alt="House exterior" className="w-full h-full object-cover absolute inset-0" />
      </div>

      {/* Content container - better padding on all devices */}
      <div className="md:w-1/2 w-full bg-white flex items-center py-8 px-4 sm:py-10 md:py-12">
        <div className="w-full max-w-xl mx-auto py-6 md:py-0 px-4 sm:px-6 md:px-8">
          {/* Subtitle with yellow underline */}
          <div className="mb-3 sm:mb-4">
            <span className="font-bold uppercase text-xs sm:text-sm tracking-wide text-gray-900 relative inline-block">
              Serving Homeowners from the Twin Cities to the Detroit Lakes Region
              <span className="block w-12 sm:w-16 h-1 bg-yellow-400 mt-1 sm:mt-2 rounded"></span>
            </span>
          </div>

          {/* Main heading - responsive text size */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Custom Exterior Remodeling Services
          </h2>

          {/* Description paragraph - responsive text and spacing */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed">
            Founded in 2003, Timberland Exteriors is a leading exterior remodeling company that has built an outstanding
            reputation. We've earned rave reviews and maintained an A+ rating with the Better Business Bureau by never
            compromising or cutting corners. Our services include siding, roofing, windows, doors, and storm damage
            restoration utilizing industry-leading materials like James Hardie siding and Owens Corning roofing. When
            you partner with us, you can expect exceptional results and superior warranties backed by our commitment to
            excellence on every exterior remodeling project. Let's create a home that you can truly be proud of.
          </p>

          {/* CTA button - responsive sizing and better touch target */}
          <a
            href="#"
            className="inline-block border-2 border-gray-900 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            LEARN MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  )
}

export default CustomRemodelingSection;
