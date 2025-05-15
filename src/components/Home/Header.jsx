// import { useState } from "react"
// import { IoCall } from "react-icons/io5";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <header className="w-full">
      
//       <div className="flex justify-end bg-black text-white">
//         <div className="container mx-auto pr-20 flex justify-end gap-12 text-xl">
//           <a href="/" className="mr-4 self-center fin">
//             Financing
//           </a>
//           <a href="#" className="bg-yellow-400 text-black px-6 py-2 cont-a">
//             Contact Us
//           </a>
//         </div>
//       </div>

      
//       <div className="container mx-auto px-16 py-4 flex flex-col md:flex-row items-center justify-between">
      
//         <div className="flex items-center">
//           <img src="./logo.webp" alt="logo" />
//         </div>

       
//         <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          
//           <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center pr-4">
//             <a href="tel:6514391760" className="flex items-center text-black mb-2 md:mb-0 md:mr-6">
//               <span className="text-yellow-400 mr-2">
//                 <IoCall />
//               </span>
//               Twin Cities 651-439-1760
//             </a>
//             <a href="tel:2188496675" className="flex items-center text-black">
//               <span className="text-yellow-400 mr-2">
//                 <IoCall />
//               </span>
//               Detroit Lakes 218-849-6675
//             </a>
//           </div>

//           <nav className="w-full md:w-auto mt-2 border-gray-200">
//             <div className="hidden md:flex">
//               <NavLinks />
//             </div>
//             <div className="md:hidden flex items-center justify-between py-4">
//               <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//             <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
//               <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <NavLinks mobile={true} />
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   )
// }

// const NavLinks = ({ mobile = false }) => {
//   const links = [
//     { name: "HOME", href: "#" },
//     { name: "ROOFING", href: "#" },
//     { name: "SIDING", href: "#" },
//     { name: "WINDOWS", href: "#" },
//     { name: "DOORS", href: "#" },
//     { name: "STORM RESTORATION", href: "#" },
//     { name: "ABOUT US", href: "#" },
//   ]

//   return (
//     <>
//       {links.map((link) => (
//         <a
//           key={link.name}
//           href={link.href}
//           className={`${
//             mobile
//             ? "block px-3 py-2 text-base font-medium"
//             : "px-4 py-4 text-sm font-medium hover-underline-animation"
//         } text-black hover:text-yellow-400`}
//         >
//           {link.name}
//         </a>
//       ))}
//     </>
//   )
// }

// export default Header


import { useState } from "react";
import { IoCall } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top black bar */}
      <div className="bg-black text-white w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-end items-center">
          <a href="/" className="text-sm sm:text-base mr-2 sm:mr-4 hover:text-yellow-400 transition-colors">
            Financing
          </a>
          <a 
            href="#" 
            className="bg-yellow-400 text-black text-sm sm:text-base px-3 py-1 sm:px-6 sm:py-2 hover:bg-yellow-500 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center mb-4 sm:mb-0">
            <img src="./logo.webp" alt="logo" className="h-12 sm:h-16 w-auto" />
          </div>

          {/* Right side content */}
          <div className="flex flex-col items-center sm:items-end w-full sm:w-auto">
            {/* Phone numbers */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-2 sm:gap-4 mb-3">
              <a href="tel:6514391760" className="flex items-center text-black text-sm sm:text-base">
                <span className="text-yellow-400 mr-2">
                  <IoCall />
                </span>
                Twin Cities 651-439-1760
              </a>
              <a href="tel:2188496675" className="flex items-center text-black text-sm sm:text-base">
                <span className="text-yellow-400 mr-2">
                  <IoCall />
                </span>
                Detroit Lakes 218-849-6675
              </a>
            </div>

            {/* Navigation */}
            <nav className="w-full sm:w-auto">
              {/* Desktop navigation */}
              <div className="hidden sm:flex flex-wrap justify-center sm:justify-end">
                <NavLinks />
              </div>
              
              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center justify-center w-full py-2">
                <button 
                  onClick={() => setIsOpen(!isOpen)} 
                  className="text-black focus:outline-none p-2"
                  aria-label="Toggle menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* Mobile menu */}
              <div 
                className={`${isOpen ? "block" : "hidden"} sm:hidden w-full transition-all duration-300 ease-in-out`}
              >
                <div className="flex flex-col items-center py-2">
                  <NavLinks mobile={true} />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false }) => {
  const links = [
    { name: "HOME", href: "#" },
    { name: "ROOFING", href: "#" },
    { name: "SIDING", href: "#" },
    { name: "WINDOWS", href: "#" },
    { name: "DOORS", href: "#" },
    { name: "STORM RESTORATION", href: "#" },
    { name: "ABOUT US", href: "#" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`${
            mobile
              ? "block w-full text-center py-3 border-b border-gray-200 last:border-b-0"
              : "px-2 sm:px-3 md:px-4 py-2 text-sm font-medium relative group"
          } text-black hover:text-yellow-400 transition-colors`}
        >
          {link.name}
          {!mobile && (
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
          )}
        </a>
      ))}
    </>
  );
};

export default Header;