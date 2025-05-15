import React from "react";
const Icon1 = () => (
    <svg
      className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
  
  const Icon2 = () => (
    <svg
      className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  )
  
  const Icon3 = () => (
    <svg
      className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 2v20m10-10H2" />
    </svg>
  )
  
  const Icon4 = () => (
    <svg
      className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 mb-2"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8" />
    </svg>
  )
  
  const badges = ["/b1.webp", "/b2.webp", "/b3.webp", "/b4.webp", "/b5.webp"]
  
  const features = [
    {
      icon: <Icon1 />,
      title: "Locally-Owned and Operated",
      desc: "As a proud locally-owned and operated roofing company, we are committed to serving our community with integrity and personalized care.",
    },
    {
      icon: <Icon2 />,
      title: "One-Stop Shop",
      desc: "From inspections and repairs to full roof replacements, we're your one-stop shop for all your roofing needs.",
    },
    {
      icon: <Icon3 />,
      title: "Customer Support",
      desc: "Our dedicated customer support team is here to guide you every step of the way, ensuring a seamless and stress-free roofing experience.",
    },
    {
      icon: <Icon4 />,
      title: "Quality of Services",
      desc: "We take pride in delivering top-tier craftsmanship and using high-quality materials to ensure your roof stands the test of time.",
    },
  ]
  
  const WhyChooseTimberland = () => (
    <section className="bg-white py-8 sm:py-10 md:py-14 px-4">
      {/* Badges Section - Made responsive with flex-wrap and proper spacing */}
      <div className="flex flex-wrap justify-center sm:justify-between items-center w-full max-w-7xl mx-auto mb-8 sm:mb-12 md:mb-16 gap-3 sm:gap-2">
        {badges.map((src, i) => (
          <img
            key={i}
            src={src || "/placeholder.svg"}
            alt={`Badge ${i + 1}`}
            className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain max-w-[80px] sm:max-w-[100px] md:max-w-[120px] mx-2 sm:mx-0"
            draggable="false"
          />
        ))}
      </div>
  
      {/* Heading Section - Responsive text sizes and spacing */}
      <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 sm:mb-3 relative inline-block">
          Why Choose Timberland Exteriors?
          <span className="block h-1 w-16 sm:w-20 md:w-24 bg-yellow-400 mx-auto mt-1 sm:mt-2 rounded"></span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg mt-4">
          Leveraging decades of experience, Timberland Exteriors has cemented a reputation as an exterior remodeling
          leader among Minnesota homeowners. We put customers first, and the pride we take in the work we provide in our
          community shows in every project.
        </p>
      </div>
  
      {/* Features Grid - Responsive grid with appropriate spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto mb-8 sm:mb-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 shadow-md rounded-md p-4 sm:p-5 md:p-6 flex flex-col items-start hover:shadow-lg transition"
          >
            {f.icon}
            <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">{f.title}</h3>
            <p className="text-gray-700 text-xs sm:text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
  
      {/* CTA Buttons - Responsive layout and sizing */}
      <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
        <a
          href="#"
          className="w-32 xs:w-36 text-center bg-black text-white text-xs sm:text-sm font-normal py-2 sm:py-2.5 rounded transition hover:bg-gray-900 mx-auto xs:mx-0"
        >
          CONTACT US
        </a>
        <a
          href="#"
          className="w-32 xs:w-36 text-center border-2 border-black text-black text-xs sm:text-sm font-normal py-2 sm:py-2.5 rounded transition hover:bg-black hover:text-white mx-auto xs:mx-0"
        >
          LEARN MORE
        </a>
      </div>
    </section>
  )
  
  export default WhyChooseTimberland
  