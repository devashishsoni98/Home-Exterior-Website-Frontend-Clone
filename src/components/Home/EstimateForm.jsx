// import { useState } from "react"

// const EstimateForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     zipCode: "",
//     streetAddress: "",
//     city: "",
//     service: "",
//     consent: false,
//   })

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log("Form submitted:", formData)
//   }

//   return (
//     <div className="bg-black bg-opacity-90 p-8 rounded-xl shadow-xl max-w-2xl mx-auto">
//       <div className="text-center mb-6">
//         <h3 className="text-yellow-400 text-lg font-semibold tracking-wide uppercase">Schedule Your</h3>
//         <h2 className="text-white text-3xl md:text-4xl font-extrabold mt-1">Free Estimate</h2>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone"
//             className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="zipCode"
//             placeholder="Zip Code"
//             className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.zipCode}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <input
//             type="text"
//             name="streetAddress"
//             placeholder="Street Address"
//             className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.streetAddress}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="text"
//             name="city"
//             placeholder="City"
//             className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.city}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <select
//             name="service"
//             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
//             value={formData.service}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>
//               Select a Service
//             </option>
//             <option value="roofing">Roofing</option>
//             <option value="siding">Siding</option>
//             <option value="windows">Windows</option>
//             <option value="doors">Doors</option>
//             <option value="storm">Storm Restoration</option>
//           </select>
//         </div>

//         <div className="mb-4">
//           <label className="flex items-start text-white text-sm gap-2">
//             <input
//               type="checkbox"
//               name="consent"
//               className="mt-1 accent-yellow-400"
//               checked={formData.consent}
//               onChange={handleChange}
//               required
//             />
//             <span className="leading-tight">
//               By submitting your personal information into this web form, you are providing consent for Timberland
//               Exteriors to communicate with you via phone, email, or text, so Timberland Exteriors can coordinate
//               estimates, appointments, and projects, and answer all questions that you may have. Message frequency may
//               vary. You can opt out at any time by texting STOP. Your consent is not a condition of purchase, and you
//               can opt out at any time. Standard message and data rates may apply.
//             </span>
//           </label>
//         </div>

//         <div className="mb-6">
//           {/* This would be replaced with an actual reCAPTCHA component */}
//           <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-500 border border-gray-200">reCAPTCHA</div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-yellow-400 text-black font-extrabold py-3 rounded-lg hover:bg-yellow-500 transition duration-300 shadow-md text-lg tracking-wide"
//         >
//           GET A FREE QUOTE NOW!
//         </button>
//       </form>
//     </div>
//   )
// }

// export default EstimateForm


import { useState } from "react"

const EstimateForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    streetAddress: "",
    city: "",
    service: "",
    consent: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="bg-black bg-opacity-90 p-4 sm:p-6 md:p-8 rounded-xl shadow-xl max-w-2xl mx-auto w-full">
      <div className="text-center mb-4 md:mb-6">
        <h3 className="text-yellow-400 text-base sm:text-lg font-semibold tracking-wide uppercase">Schedule Your</h3>
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold mt-1">Free Estimate</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition w-full"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition w-full"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition w-full"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="Zip Code"
            className="px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition w-full"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          <input
            type="text"
            name="streetAddress"
            placeholder="Street Address"
            className="px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition w-full"
            value={formData.streetAddress}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition w-full"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <select
            name="service"
            className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white text-black transition"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a Service
            </option>
            <option value="roofing">Roofing</option>
            <option value="siding">Siding</option>
            <option value="windows">Windows</option>
            <option value="doors">Doors</option>
            <option value="storm">Storm Restoration</option>
          </select>
        </div>

        <div>
          <label className="flex items-start text-white text-xs sm:text-sm gap-2">
            <input
              type="checkbox"
              name="consent"
              className="mt-1 accent-yellow-400 min-w-[16px]"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <span className="leading-tight">
              By submitting your personal information into this web form, you are providing consent for Timberland
              Exteriors to communicate with you via phone, email, or text, so Timberland Exteriors can coordinate
              estimates, appointments, and projects, and answer all questions that you may have. Message frequency may
              vary. You can opt out at any time by texting STOP. Your consent is not a condition of purchase, and you
              can opt out at any time. Standard message and data rates may apply.
            </span>
          </label>
        </div>

        <div>
          {/* This would be replaced with an actual reCAPTCHA component */}
          <div className="bg-gray-100 p-3 md:p-4 rounded-lg text-center text-gray-500 border border-gray-200">reCAPTCHA</div>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-extrabold py-2 md:py-3 rounded-lg hover:bg-yellow-500 transition duration-300 shadow-md text-base md:text-lg tracking-wide"
        >
          GET A FREE QUOTE NOW!
        </button>
      </form>
    </div>
  )
}

export default EstimateForm