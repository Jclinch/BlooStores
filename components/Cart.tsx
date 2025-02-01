// path: components/Cart.tsx

"use client";

import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useCartStore();

  return (
    <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-md max-h-[70vh] flex flex-col text-black dark:text-white">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">Your cart is empty.</p>
      ) : (
        <>
          {/* Scrollable Product List */}
          <div className="overflow-y-auto flex-1">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 py-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    ${(item.price * item.quantity).toFixed(2)} ({item.quantity} pcs)
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-500 p-1 ml-auto"
                  aria-label="Remove from Cart"
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
              </div>
            ))}
          </div>

          {/* Total and Checkout Button */}
          <div className="mt-4">
            <p className="font-bold text-lg">Total: ${totalPrice.toFixed(2)}</p>
            <Link href="/checkout">
              <button className="w-full mt-4 bg-green-500 dark:bg-green-600 text-white p-2 rounded hover:bg-green-600 dark:hover:bg-green-700">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
