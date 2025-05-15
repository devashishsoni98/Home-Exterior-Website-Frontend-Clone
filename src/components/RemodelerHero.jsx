const RemodelerHero = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-100 to-white">
      
      <div className="flex flex-col sm:hidden">
        <div className="w-full h-[200px]">
          <img
            src="/fifth.jpg"
            alt="Beautiful remodeled home exterior"
            className="w-full h-full object-cover"
            draggable="false"
          />
        </div>

        <div className="w-full flex flex-col justify-center px-5 py-8">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-3 leading-tight">
            An Exterior Remodeler That Puts <span className="text-yellow-500">Customers First</span>
          </h1>
          <p className="text-sm text-gray-700 mb-5">
            At Timberland Exteriors, we don't just sell-we educate. We listen to your vision, respect your home, and
            never put profits over your satisfaction.
          </p>
          <a href="#" className="block w-full sm:w-44 bg-black text-white text-base font-normal py-3 text-center">
            LEARN MORE
          </a>
        </div>
      </div>

      
      <div className="hidden sm:flex h-[350px] md:h-[450px] lg:h-[520px]">
        <div className="w-1/2 flex flex-col justify-center px-6 md:px-10 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            An Exterior Remodeler That Puts <span className="text-yellow-500">Customers First</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 md:mb-6 max-w-xl">
            At Timberland Exteriors, we don't just sell-we educate. We listen to your vision, respect your home, and
            never put profits over your satisfaction.
          </p>
          <a
            href="#"
            className="block w-36 sm:w-40 md:w-48 bg-black text-white text-base md:text-lg font-normal py-2.5 md:py-3 text-center mt-2 md:mt-6 hover:bg-gray-800 transition-colors"
          >
            LEARN MORE
          </a>
        </div>
        <div className="w-1/2 h-full">
          <img
            src="/fifth.jpg"
            alt="Beautiful remodeled home exterior"
            className="w-full h-full object-cover block"
            draggable="false"
          />
        </div>
      </div>
    </section>
  )
}

export default RemodelerHero
