"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Jewelries() {
  const [jewelries, setJewelries] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchJewelries = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        setJewelries(response.data);
      } catch {
        setError("Failed to fetch jewelries.");
      } finally {
        setLoading(false);
      }
    };

    fetchJewelries();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading jewelries...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-4  ">
      <h2 className="text-xl font-bold mb-4">Jewelries  <span className="text-orange-500">—</span></h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {jewelries.map((product) => (
          <div
            key={product.id}
            className="jewelry-card bg-gray-100 p-2 rounded-2xl relative  here text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
            style={{
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.6), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Title at Top Left */}
            <h3 className="text-[10px] font-semibold absolute top-1 left-2 truncate max-w-[80%]  ">
              {product.title}
            </h3>

            {/* Circular Background with Image */}
            <div className="w-20 h-20 mx-auto rounded-full shadow-sm flex items-center justify-center mt-4  bg-white  ">
              <Image
                src={product.image}
                alt={product.title}
                width={60}
                height={60}
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Price and Add to Cart Button at Bottom */}
            <div className="flex justify-between items-center mt-2  ">
              <p className="text-gray-700 dark:text-gray-200 text-[12px]">${product.price.toFixed(2)}</p>
              <button
                className="bg-orange-500 text-white px-2 py-1 rounded text-[10px] hover:bg-orange-600"
                onClick={() => addToCart({ ...product, quantity: 1 })}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}







