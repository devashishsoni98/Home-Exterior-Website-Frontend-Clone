import React from "react";
const logos = [
  {
    src: "logo1.webp",
    alt: "Pink Panther",
  },
  {
    src: "logo2.webp",
    alt: "Owens Corning Preferred Contractor",
  },
  {
    src: "logo3.webp",
    alt: "Malarkey Roofing Products",
  },
  {
    src: "logo4.webp",
    alt: "James Hardie",
  },
  {
    src: "logo5.webp",
    alt: "James Hardie Alliance Elite Contractor",
  },
  {
    src: "logo6.webp",
    alt: "ProVia",
  },
  {
    src: "logo7.webp",
    alt: "Pella",
  },
];

const PartnerLogos = () => (
  <div className="bg-gray-100 py-10">
    <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
      {logos.map((logo, idx) => (
        <div key={idx} className="flex items-center justify-center h-24 w-48">
          <img
            src={logo.src}
            alt={logo.alt}
            className="max-h-20 max-w-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

export default PartnerLogos;
