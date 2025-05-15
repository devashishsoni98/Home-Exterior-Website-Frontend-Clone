import { useState } from "react"

const SERVICE_CATEGORIES = [
  {
    key: "siding",
    label: "Siding",
    image: "/sliding.jpeg",
    title: "Siding",
    description:
      "Upgrade your home's curb appeal and protection with premium siding solutions. We offer expert installation and a wide range of styles and colors to suit your taste and budget.",
    cta: "Get a Quote",
    learn: "Learn More",
  },
  {
    key: "roofing",
    label: "Roofing",
    image: "/roofing.jpg",
    title: "Roofing",
    description:
      "Protect your home with top-quality roofing systems. Our team specializes in repairs, replacements, and new installations using industry-leading materials for lasting durability.",
    cta: "Get a Quote",
    learn: "Learn More",
  },
  {
    key: "windows",
    label: "Windows",
    image: "/windows.jpg",
    title: "Windows",
    description:
      "Enhance energy efficiency and natural light with our window replacement services. Choose from a variety of styles to complement your home's design.",
    cta: "Get a Quote",
    learn: "Learn More",
  },
  {
    key: "doors",
    label: "Doors",
    image: "/doors.jpg",
    title: "Doors",
    description:
      "Secure and beautify your entryways with our selection of high-quality doors. We offer professional installation for front, patio, and storm doors.",
    cta: "Get a Quote",
    learn: "Learn More",
  },
  {
    key: "storm",
    label: "Storm Restoration",
    image: "/storm.webp",
    title: "Storm Restoration",
    description:
      "When severe storms strike, rely on our expertise to restore damaged roofing, siding, windows, and more. We assist in insurance claims for a stress-free experience.",
    cta: "Get a Quote",
    learn: "Learn More",
  },
]

const ServiceCategories = () => {
  const [active, setActive] = useState("storm")
  const activeCategory = SERVICE_CATEGORIES.find((cat) => cat.key === active)

  return (
    <section className="w-full bg-[#181818] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center md:text-left leading-tight">
          Comprehensive Exterior Remodeling Services
        </h2>
      </div>

      
      <div className="md:hidden max-w-7xl mx-auto">
        <div className="overflow-x-auto pb-4 mb-6">
          <div className="flex gap-4 min-w-max">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`flex items-center gap-1.5 font-bold text-sm sm:text-base whitespace-nowrap transition px-3 py-2 rounded-full
                  ${active === cat.key ? "bg-yellow-400/20 text-white" : "text-yellow-400 hover:text-white"}
                  ${active === cat.key ? "font-extrabold" : ""}
                `}
                onClick={() => setActive(cat.key)}
              >
                <span className="text-yellow-400 text-lg">{active === cat.key ? "➜" : "➔"}</span>
                <span className={active === cat.key ? "underline underline-offset-4" : ""}>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-full">
            <img
              src={activeCategory.image || "/placeholder.svg"}
              alt={activeCategory.title}
              className="w-full h-56 sm:h-64 object-cover rounded shadow-lg"
            />
          </div>

          <div className="w-full">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{activeCategory.title}</h3>
            <p className="mb-6 text-white/90 text-sm sm:text-base leading-relaxed">{activeCategory.description}</p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="bg-yellow-400 text-black font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded shadow hover:bg-yellow-500 transition text-sm sm:text-base">
                {activeCategory.cta}
              </button>
              <button className="border-2 border-white px-5 sm:px-6 py-2.5 sm:py-3 rounded text-white font-bold hover:bg-white hover:text-black transition text-sm sm:text-base">
                {activeCategory.learn}
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div className="hidden md:flex max-w-7xl mx-auto flex-row gap-6 lg:gap-8">
        <div className="md:w-1/4 flex flex-col gap-4 justify-start items-start">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              className={`flex items-center gap-2 font-bold text-base lg:text-lg transition 
                ${active === cat.key ? "text-white" : "text-yellow-400 hover:text-white"}
                ${active === cat.key ? "font-extrabold" : ""}
              `}
              onClick={() => setActive(cat.key)}
            >
              <span className="text-yellow-400 text-xl">{active === cat.key ? "➜" : "➔"}</span>
              <span className={active === cat.key ? "underline underline-offset-4" : ""}>{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="md:w-2/4 flex flex-col justify-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">{activeCategory.title}</h3>
          <p className="mb-6 text-white/90 text-base leading-relaxed">{activeCategory.description}</p>
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded shadow hover:bg-yellow-500 transition">
              {activeCategory.cta}
            </button>
            <button className="border-2 border-white px-6 py-3 rounded text-white font-bold hover:bg-white hover:text-black transition">
              {activeCategory.learn}
            </button>
          </div>
        </div>

        <div className="md:w-1/4 flex items-center justify-center">
          <img
            src={activeCategory.image || "/placeholder.svg"}
            alt={activeCategory.title}
            className="w-full h-64 lg:h-72 object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
