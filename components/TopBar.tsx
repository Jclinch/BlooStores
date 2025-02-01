// // path : components/TopBar.tsx
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
// import { useCartStore } from "@/store/cartStore";
// import { useFavoriteStore } from "@/store/favoriteStore";
// import Cart from "@/components/Cart";
// import FavoriteProducts from "@/components/FavoriteProducts";
// import axios from "axios";

// export default function TopBar() {
//   const [categories, setCategories] = useState<string[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
//   const { cart } = useCartStore();
//   const { favorites } = useFavoriteStore(); // Get favorites from store

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products/categories");
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <>
//       {/* TopBar */}
//       <div className="fixed top-0 left-0 right-0 bg-transparent/50 z-50 p-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <span className="text-xl font-bold text-black">BlooStores</span>
//           </Link>
//         </div>

//         {/* Category Dropdown */}
//         <div className="hidden md:flex items-center space-x-4">
//           <div className="relative">
//             <select className="bg-gray-100 p-2 rounded-lg focus:outline-none">
//               <option value="">Select Category</option>
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Favorites Button */}
//           <button className="text-gray-100 hover:text-gray-300 relative" onClick={() => setIsFavoritesOpen(true)}>
//             <FaHeart className="text-xl" />
//             {favorites.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
//                 {favorites.length}
//               </span>
//             )}
//           </button>

//           {/* User Button */}
//           <button className="text-gray-100 hover:text-gray-300">
//             <FaUser className="text-xl" />
//           </button>

//           {/* Cart Button */}
//           <button className="text-gray-100 hover:text-gray-300 relative" onClick={() => setIsCartOpen(true)}>
//             <FaShoppingCart className="text-xl" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
//                 {cart.length}
//               </span>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Favorites Modal */}
//       {isFavoritesOpen && <FavoriteProducts onClose={() => setIsFavoritesOpen(false)} />}

//       {/* Cart Modal */}
//       {isCartOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg w-full max-w-md">
//             <Cart />
//             <button onClick={() => setIsCartOpen(false)} className="mt-4 w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

//...................

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
// import { useCartStore } from "@/store/cartStore";
// import { useFavoriteStore } from "@/store/favoriteStore";
// import Cart from "@/components/Cart";
// import FavoriteProducts from "@/components/FavoriteProducts";
// import ThemeToggle from "@/components/ThemeToggle";
// import axios from "axios";

// export default function TopBar() {
//   const [categories, setCategories] = useState<string[]>([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
//   const { cart } = useCartStore();
//   const { favorites } = useFavoriteStore();

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products/categories");
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };
//     fetchCategories();
//   }, []);

//   return (
//     <>
//       {/* TopBar */}
//       <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 p-4 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <span className="text-xl font-bold text-orange-500 dark:text-orange-500">BlooStores</span>
//           </Link>
//         </div>

//         {/* Category Dropdown */}
//         <div className="hidden md:flex items-center space-x-4">
//           <div className="relative">
//             <select className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg focus:outline-none">
//               <option value="">Select Category</option>
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Icons */}
//         <div className="flex items-center space-x-4">
//           {/* Favorites Button */}
//           <button className="text-black dark:text-white relative" onClick={() => setIsFavoritesOpen(true)}>
//             <FaHeart className="text-xl" />
//             {favorites.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
//                 {favorites.length}
//               </span>
//             )}
//           </button>

//           {/* User Button */}
//           <button className="text-black dark:text-white">
//             <FaUser className="text-xl" />
//           </button>

//           {/* Cart Button */}
//           <button className="text-black dark:text-white relative" onClick={() => setIsCartOpen(true)}>
//             <FaShoppingCart className="text-xl" />
//             {cart.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
//                 {cart.length}
//               </span>
//             )}
//           </button>

//           {/* Theme Toggle Button */}
//           <ThemeToggle />
//         </div>
//       </div>

//       {/* Favorites Modal */}
//       {isFavoritesOpen && <FavoriteProducts onClose={() => setIsFavoritesOpen(false)} />}

//       {/* Cart Modal */}
//       {isCartOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
//             <Cart />
//             <button
//               onClick={() => setIsCartOpen(false)}
//               className="mt-4 w-full bg-gray-500 dark:bg-gray-700 text-white p-2 rounded hover:bg-gray-600 dark:hover:bg-gray-600"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

//

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";
import { useFavoriteStore } from "@/store/favoriteStore";
import Cart from "@/components/Cart";
import FavoriteProducts from "@/components/FavoriteProducts";
import ThemeToggle from "@/components/ThemeToggle";
import axios from "axios";

export default function TopBar() {
  const [categories, setCategories] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const { cart } = useCartStore();
  const { favorites } = useFavoriteStore();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* TopBar */}
      <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="text-xl font-bold text-orange-500 dark:text-orange-500">
              BlooStores
            </span>
          </Link>
        </div>

        {/* Category Dropdown */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <select className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-2 rounded-lg focus:outline-none">
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Favorites Button */}
          <button
            className="text-black dark:text-white relative"
            onClick={() => setIsFavoritesOpen(true)}
          >
            <FaHeart className="text-xl" />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {favorites.length}
              </span>
            )}
          </button>

          {/* User Button */}
          <button className="text-black dark:text-white">
            <FaUser className="text-xl" />
          </button>

          {/* Cart Button */}
          <button
            className="text-black dark:text-white relative"
            onClick={() => setIsCartOpen(true)}
          >
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cart.length}
              </span>
            )}
          </button>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>

      {/* Favorites Modal */}
      {isFavoritesOpen && (
        <FavoriteProducts onClose={() => setIsFavoritesOpen(false)} />
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md">
            <Cart />
            <button
              onClick={() => setIsCartOpen(false)}
              className="mt-4 w-full bg-gray-500 dark:bg-gray-700 text-white p-2 rounded hover:bg-gray-600 dark:hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
