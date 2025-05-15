import React from "react";
const beforeAfterData = [
    {
      before: "before1.avif",
      after: "before11.avif",
      alt: "House transformation 1",
    },
    {
      before: "before2.png",
      after: "after2.png",
      alt: "House transformation 2",
    },
  ]
  
  const BeforeAfter = () => (
    <div className="bg-white py-8 md:py-12 px-4 md:px-6">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-base md:text-lg font-semibold text-gray-700 tracking-wide uppercase mb-2">
          SEE THE DIFFERENCE
        </h2>
        <div className="flex justify-center mb-2">
          <div className="h-1 w-12 md:w-16 bg-yellow-400 rounded" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Before &amp; After</h1>
      </div>
  
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        {beforeAfterData.map((item, idx) => (
          <div
            key={idx}
            className="relative flex flex-row w-full max-w-[500px] h-[250px] sm:h-[300px] md:h-[350px] bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <div className="w-1/2 h-full relative">
              <img
                src={item.before || "/placeholder.svg"}
                alt={`Before ${item.alt}`}
                className="object-cover w-full h-full"
                draggable={false}
              />
              <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-black bg-opacity-70 text-white px-2 py-1 md:px-4 md:py-2 rounded text-sm md:text-base font-medium shadow">
                Before
              </span>
            </div>
            <div className="w-1/2 h-full relative">
              <img
                src={item.after || "/placeholder.svg"}
                alt={`After ${item.alt}`}
                className="object-cover w-full h-full"
                draggable={false}
              />
              <span className="absolute bottom-2 md:bottom-4 left-2 md:left-4 bg-black bg-opacity-70 text-white px-2 py-1 md:px-4 md:py-2 rounded text-sm md:text-base font-medium shadow">
                After
              </span>
            </div>
            <div
              className="absolute top-0 bottom-0 left-1/2 w-0.5 md:w-1 bg-white z-10 shadow"
              style={{ transform: "translateX(-50%)" }}
            />
            <div className="absolute top-1/2 left-1/2 z-20" style={{ transform: "translate(-50%, -50%)" }}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white border-4 border-gray-300 rounded-full flex items-center justify-center shadow-md">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                  <polygon points="14,8 8,12 14,16" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
  
  export default BeforeAfter
  