// path :  store/cartStore.ts

import { create } from "zustand";

type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  totalPrice: 0,

  addToCart: (newItem) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      let updatedCart;

      if (existingItem) {
        // Update quantity if item already exists
        updatedCart = state.cart.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item
        );
      } else {
        // Add new item to cart
        updatedCart = [...state.cart, newItem];
      }

      const updatedTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

      return { cart: updatedCart, totalPrice: updatedTotalPrice };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      const updatedTotalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

      return { cart: updatedCart, totalPrice: updatedTotalPrice };
    }),
}));