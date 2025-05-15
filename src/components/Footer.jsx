import React from "react";
const Footer = () => (
    <footer className="bg-black text-white pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 md:gap-12">
        <div className="flex flex-col items-start">
          <img
            src="logo.webp"
            alt="Timberland Exteriors"
            className="w-24 h-24 sm:w-28 sm:h-28 mb-4 border-4 border-white bg-white p-2"
          />
          <div className="mb-2">
            <span className="font-bold">Twin Cities </span>
            <span className="font-bold text-base sm:text-lg">651-439-1760</span>
          </div>
          <div className="mb-2">
            <span className="font-bold">Detroit Lakes </span>
            <span className="font-bold text-base sm:text-lg">218-849-6675</span>
          </div>
          <div className="mb-2">
            <span className="font-bold">Monday - Friday:</span>
            <span className="ml-2">8 AM – 5 PM</span>
          </div>
          <div>
            <span className="font-bold">Saturday:</span>
            <span className="ml-2">By Appointment</span>
          </div>
        </div>
  
       
        <div className="flex-1 flex flex-col items-start">
          <h4 className="font-bold text-lg mb-3 sm:mb-4 border-b border-white w-full pb-1">SERVICES</h4>
          <ul className="space-y-1 sm:space-y-2">
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Roofing</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Siding</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Windows</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Doors</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Storm Restoration</li>
          </ul>
        </div>
  
        <div className="flex-1 flex flex-col items-start">
          <h4 className="font-bold text-lg mb-3 sm:mb-4 border-b border-white w-full pb-1">RESOURCES</h4>
          <ul className="space-y-1 sm:space-y-2">
            <li>
              <span className="text-yellow-400 cursor-pointer">Home</span>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Service Area</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Gallery</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-colors">Financing</li>
          </ul>
        </div>
      </div>
  
      
      <div className="border-t border-gray-700 mt-8 sm:mt-10 mb-4" />
  
     
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm">
        <div className="text-center sm:text-left">© 2025 Timberland Exteriors – All rights reserved.</div>
  
        <div className="order-3 sm:order-2">
          <a href="#" className="underline hover:text-yellow-400 transition-colors">
            Privacy Policy
          </a>
        </div>
  
        <div className="flex items-center gap-4 mt-2 mb-2 sm:mt-0 sm:mb-0 order-2 sm:order-3">
          <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-white hover:fill-yellow-400 transition-colors" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116c.729 0 1.326-.597 1.326-1.326V1.326C24 .597 23.403 0 22.675 0" />
            </svg>
          </a>
          <a href="#" aria-label="Google" className="hover:scale-110 transition-transform">
            <svg className="w-5 h-5 fill-white hover:fill-yellow-400 transition-colors" viewBox="0 0 24 24">
              <path d="M21.805 10.023h-9.765v3.955h5.626c-.243 1.243-1.486 3.649-5.626 3.649-3.386 0-6.145-2.803-6.145-6.256s2.759-6.256 6.145-6.256c1.927 0 3.222.822 3.964 1.53l2.709-2.63C17.071 2.59 14.99 1.5 12.04 1.5 6.477 1.5 2 5.977 2 11.5s4.477 10 10.04 10c5.783 0 9.6-4.062 9.6-9.792 0-.66-.07-1.164-.165-1.685z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
  
  export default Footer
  