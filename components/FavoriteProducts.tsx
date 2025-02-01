// "use client";

// import { useFavoriteStore } from "@/store/favoriteStore";
// import Image from "next/image";

// export default function FavoriteProducts({ onClose }: { onClose: () => void }) {
//   const { favorites, removeFromFavorites } = useFavoriteStore();

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg w-full max-w-md p-4 max-h-[70vh] flex flex-col">
//         <h2 className="text-lg font-bold mb-4">Favorite Products</h2>

//         {favorites.length === 0 ? (
//           <p className="text-gray-500">No favorite products yet.</p>
//         ) : (
//           <ul className="space-y-4 overflow-y-auto flex-1 max-h-[50vh] pr-2">
//             {favorites.map((product) => (
//               <li
//                 key={product.id}
//                 className="flex items-center justify-between border p-2 rounded"
//               >
//                 <div className="flex items-center space-x-2">
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     width={40}
//                     height={40}
//                   />
//                   <span className="text-sm font-medium text-black">
//                     {product.title}
//                   </span>
//                 </div>

//                 {/* 'X' Icon Button */}
//                 <button
//                   onClick={() => removeFromFavorites(product.id)}
//                   className="text-red-500 hover:text-red-700 p-1"
//                   aria-label="Remove from favorites"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth="2"
//                     stroke="currentColor"
//                     className="w-5 h-5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}

//         <button
//           onClick={onClose}
//           className="mt-4 w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }



//..........



// path: components/FavoriteProducts.tsx
"use client";

import { useFavoriteStore } from "@/store/favoriteStore";
import Image from "next/image";

export default function FavoriteProducts({ onClose }: { onClose: () => void }) {
  const { favorites, removeFromFavorites } = useFavoriteStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg w-full max-w-md p-4 max-h-[70vh] flex flex-col text-black dark:text-white">
        <h2 className="text-lg font-bold mb-4">Favorite Products</h2>

        {favorites.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No favorite products yet.</p>
        ) : (
          <ul className="space-y-4 overflow-y-auto flex-1 max-h-[50vh] pr-2">
            {favorites.map((product) => (
              <li key={product.id} className="flex items-center justify-between border border-gray-200 dark:border-gray-700 p-2 rounded">
                <div className="flex items-center space-x-2">
                  <Image src={product.image} alt={product.title} width={40} height={40} />
                  <span className="text-sm font-medium">{product.title}</span>
                </div>

                <button
                  onClick={() => removeFromFavorites(product.id)}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 p-1"
                  aria-label="Remove from favorites"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-500 dark:bg-gray-600 text-white p-2 rounded hover:bg-gray-600 dark:hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
