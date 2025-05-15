import EstimateForm from "./EstimateForm";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] lg:min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/first.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32 relative z-20 flex flex-col lg:flex-row items-center justify-center min-h-[90vh] lg:min-h-screen">
        {/* Text Content */}
        <div className="lg:w-3/5 text-white mb-10 lg:mb-0 px-4 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Reliable Siding & Roofing Experts in Afton, MN
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
            James Hardie Siding and Exterior Services in Washington County, MN -
            Built to Last!
          </h2>
        </div>

        {/* Form Container */}
        <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/5 px-4">
          <EstimateForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;