// path: components/ProductList.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { useFavoriteStore } from "@/store/favoriteStore";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity?: number; 
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCartStore();
  const { addToFavorites, removeFromFavorites, favorites } = useFavoriteStore(); // Fix: Import favorites store
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const updateQuantity = (id: number, amount: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + amount, 1),
    }));
  };

  // Toggle favorite function
  const handleFavoriteToggle = (product: Product) => {
    const isFavorite = favorites.some((fav) => fav.id === product.id);
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    addToCart({ ...product, quantity });
  };
  

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p className="text-center text-gray-500">Loading products...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6" >
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded-lg w-full max-w-md dark:bg-gray-800 dark:text-white"
          id="productList"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">All Products  <span className="text-orange-500">—</span></h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isFavorite = favorites.some((fav) => fav.id === product.id);
            return (
              <div key={product.id} className="relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  width={200} 
                  height={200} 
                  className="md:w-full md:h-40 w-[50%] h-20 object-contain"
                />

                <h3 className="text-lg font-semibold mt-3 text-center">{product.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">${product.price.toFixed(2)}</p>

                <div className="flex justify-between items-center w-full mt-3 bottom-0">
                  <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                    <button onClick={() => updateQuantity(product.id, -1)} className="p-1">
                      <FiMinus className="text-gray-700 dark:text-white" />
                    </button>
                    <span className="text-lg font-semibold">{quantities[product.id] || 1}</span>
                    <button onClick={() => updateQuantity(product.id, 1)} className="p-1">
                      <FiPlus className="text-gray-700 dark:text-white" />
                    </button>
                  </div>

                  <div className="flex space-x-3">
                    {/* Favorite Button - Fixed */}
                    <button onClick={() => handleFavoriteToggle(product)} className="p-2">
                      {isFavorite ? (
                        <AiFillHeart className="text-red-500 text-xl" />
                      ) : (
                        <AiOutlineHeart className="text-gray-500 text-xl" />
                      )}
                    </button>

                    {/* Add to Cart Button */}
                    <button 
                      className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600"
                      onClick={() => handleAddToCart(product)}
                    >
                      <AiOutlineShoppingCart className="text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </div>
    </div>
  );
}
