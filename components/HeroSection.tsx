// // "use client";

// // import { useState, useEffect } from "react";
// // import Image from "next/image";

// // const images = [
// //   "/images/hero1.png",
// //   "/images/hero2.png",
// //   "/images/hero3.png",
// //   "/images/hero4.png",
// //   "/images/hero5.png",
// //   "/images/hero6.png",
// //   "/images/hero7.png",
// //   "/images/hero8.png",
// // ];

// // export default function HeroSection() {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative w-full overflow-hidden bg-white text-black px-4 py-10 flex flex-col items-center">
// //       {/* Hero Text */}
// //       <div className="text-center">
// //         <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
// //           Express <span className="text-orange-500">—</span> Yourself
// //         </h1>
// //         <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
// //           Through <span className="text-black">Style</span>
// //           <span className="text-orange-500">.</span>
// //         </h1>
// //         <p className="text-gray-600 max-w-md mt-2 text-sm sm:text-base mx-auto">
// //           Discover the latest trends and elevate your wardrobe with our curated collection.
// //         </p>
// //       </div>

// //       {/* Carousel Container */}
// //       <div className="relative mt-8 w-full max-w-4xl overflow-hidden">
// //         <div
// //           className="flex transition-transform ease-out duration-500"
// //           style={{ transform: `translateX(-${currentIndex * 100}%)` }}
// //         >
// //           {images.map((src, index) => (
// //             <div key={index} className="w-full flex-shrink-0">
// //               <Image
// //                 src={src}
// //                 alt={`Carousel ${index}`}
// //                 width={1200} // Adjust width for better responsiveness
// //                 height={600} // Adjust height for better responsiveness
// //                 className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Dot Pagination */}
// //       <div className="mt-4 flex space-x-2">
// //         {images.map((_, index) => (
// //           <div
// //             key={index}
// //             className={`h-3 w-3 rounded-full transition-colors ${
// //               index === currentIndex ? "bg-orange-500" : "bg-gray-300"
// //             }`}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// //..............

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";

// const desktopImages = [
//   "/images/hero1.png",
//   "/images/hero2.png",
//   "/images/hero3.png",
//   "/images/hero4.png",
//   "/images/hero5.png",
//   "/images/hero6.png",
//   "/images/hero7.png",
//   "/images/hero8.png",
// ];

// const mobileImages = [
//   "/images/mhero1.png",
//   "/images/mhero2.png",
//   "/images/mhero3.png",
//   "/images/mhero4.png",
//   "/images/mhero5.png",
//   "/images/mhero6.png",
//   "/images/mhero7.png",
//   "/images/mhero8.png",
// ];

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDesktop, setIsDesktop] = useState(false);

//   useEffect(() => {
//     setIsDesktop(window.innerWidth >= 768);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full h-screen overflow-hidden bg-white text-black">
//       {/* Carousel Container */}
//       <div className="absolute inset-0 w-full h-full">
//         {/* Desktop Images */}
//         <div className="hidden md:flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {desktopImages.map((src, index) => (
//             <div key={index} className="w-full flex-shrink-0 h-screen">
//               <Image
//                 src={src}
//                 alt={`Carousel ${index}`}
//                 width={1920} // High resolution for large screens
//                 height={1080} // High resolution for large screens
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Mobile Images */}
//         <div className="flex md:hidden transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//           {mobileImages.map((src, index) => (
//             <div key={index} className="w-full flex-shrink-0 h-screen">
//               <Image
//                 src={src}
//                 alt={`Carousel ${index}`}
//                 width={800} // Adjusted for mobile screens
//                 height={1200} // Adjusted for mobile screens
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Overlay Text */}
//       <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-24 lg:px-32 bg-black bg-opacity-30">
//         <div className="text-white max-w-lg">
//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
//             Express <span className="text-orange-500">—</span> Yourself
//           </h1>
//           <h1 className="text-4xl sm:text-5xl font-bold leading-tight mt-2">
//             Through <span className="text-white">Style</span>
//             <span className="text-orange-500">.</span>
//           </h1>
//           <p className="text-gray-200 mt-4 text-sm sm:text-base">
//             Discover the latest trends and elevate your wardrobe with our curated collection.
//           </p>
//           <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Dot Pagination */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//       {(isDesktop ? desktopImages : mobileImages).map((_, index) => (          <div
//             key={index}
//             className={`h-3 w-3 rounded-full transition-colors ${
//               index === currentIndex ? "bg-orange-500" : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

//..............

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component

const desktopImages = [
  "/images/hero1.png",
  "/images/hero2.png",
  "/images/hero3.png",
  "/images/hero4.png",
  "/images/hero5.png",
  "/images/hero6.png",
  "/images/hero7.png",
  "/images/hero8.png",
];

const mobileImages = [
  "/images/mhero1.png",
  "/images/mhero2.png",
  "/images/mhero3.png",
  "/images/mhero4.png",
  "/images/mhero5.png",
  "/images/mhero6.png",
  "/images/mhero7.png",
  "/images/mhero8.png",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % desktopImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-white text-black">
      {/* Carousel Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Desktop Images */}
        <div
          className="hidden md:flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {desktopImages.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 h-screen">
              <Image
                src={src}
                alt={`Carousel ${index}`}
                width={1920} // High resolution for large screens
                height={1080} // High resolution for large screens
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile Images */}
        <div
          className="flex md:hidden transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {mobileImages.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0 h-screen">
              <Image
                src={src}
                alt={`Carousel ${index}`}
                width={800} // Adjusted for mobile screens
                height={1200} // Adjusted for mobile screens
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-24 lg:px-32 bg-black bg-opacity-30">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Express <span className="text-orange-500">—</span> Yourself
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mt-2">
            Through <span className="text-white">Style</span>
            <span className="text-orange-500">.</span>
          </h1>
          <p className="text-gray-200 mt-4 text-sm sm:text-base">
            Discover the latest trends and elevate your wardrobe with our
            curated collection.
          </p>
          {/* Wrap the button with Link */}
          <Link href="#productList" passHref>
  <button className="mt-6 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
    Shop Now
  </button>
</Link>


        </div>
      </div>

      {/* Dot Pagination */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {(isDesktop ? desktopImages : mobileImages).map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
