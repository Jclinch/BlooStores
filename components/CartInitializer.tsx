// path: components/CartInitializer.tsx
"use client"; 
import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

export default function CartInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      const storedTotalPrice = localStorage.getItem("totalPrice");

      if (storedCart) {
        useCartStore.setState({ cart: JSON.parse(storedCart) });
      }
      if (storedTotalPrice) {
        useCartStore.setState({ totalPrice: JSON.parse(storedTotalPrice) });
      }
    }
  }, []);

  return null; 
}
