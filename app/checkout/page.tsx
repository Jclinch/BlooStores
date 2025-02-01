// "use client";

// import { useCartStore } from "@/store/cartStore";
// import { useState } from "react";
// import CheckoutModal from "@/components/CheckoutModal";

// export default function Checkout() {
//   const { cart, totalPrice } = useCartStore();
//   const [form, setForm] = useState({ name: "", address: "", phone: "", email: "" });
//   const [error, setError] = useState<string | null>(null); // Now used for validation
//   const [success, setSuccess] = useState<boolean>(false);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleOrderSubmit = () => {
//     // Check if any field is empty
//     if (!form.name || !form.address || !form.phone || !form.email) {
//       setError("Please fill in all fields before proceeding.");
//       return;
//     }

//     setError(null); // Clear any previous error
//     setIsModalOpen(true); // Show confirmation modal
//   };

//   const handleConfirmOrder = () => {
//     setIsModalOpen(false);
//     setSuccess(true);
//   };

//   return (
//     <main className="min-h-screen  bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 flex flex-col items-center p-6">
//       <h1 className="text-3xl font-bold mb-6">Checkout</h1>

//       <div className=" p-6 rounded-lg shadow-md w-full max-w-lg  bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
//         <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//         {cart.length === 0 ? (
//           <p className="text-gray-500">Your cart is empty.</p>
//         ) : (
//           <>
//             {cart.map((item) => (
//               <div key={item.id} className="flex justify-between border-b py-2  bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
//                 <p>{item.title} ({item.quantity})</p>
//                 <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
//               </div>
//             ))}
//             <p className="text-lg font-bold mt-4">Total: ${totalPrice.toFixed(2)}</p>
//           </>
//         )}
//       </div>

//       <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mt-6   text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
//         <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">Order placed successfully!</p>}

//         <div className="mb-4">
//           <label className="block font-medium">Name</label>
//           <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium">Address</label>
//           <input type="text" name="address" value={form.address} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium">Phone</label>
//           <input type="text" name="phone" value={form.phone} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
//         </div>

//         <div className="mb-4">
//           <label className="block font-medium">Email</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded mt-1" />
//         </div>

//         <button
//           type="button"
//           onClick={handleOrderSubmit}
//           className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Place Order
//         </button>
//       </form>

//       {/* Checkout Confirmation Modal */}
//       <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onConfirm={handleConfirmOrder} />
//     </main>
//   );
// }

//................

"use client";

import { useCartStore } from "@/store/cartStore";
import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";
import Image from "next/image";

export default function Checkout() {
  const { cart, totalPrice } = useCartStore();
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [error, setError] = useState<string | null>(null); // Now used for validation
  const [success, setSuccess] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = () => {
    // Check if any field is empty
    if (!form.name || !form.address || !form.phone || !form.email) {
      setError("Please fill in all fields before proceeding.");
      return;
    }

    setError(null); // Clear any previous error
    setIsModalOpen(true); // Show confirmation modal
  };

  const handleConfirmOrder = () => {
    setIsModalOpen(false);
    setSuccess(true);
  };

  return (
    <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Flex container for desktop layout */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        {/* Your Cart Section */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 dark:bg-gray-900 dark:text-white transition-colors duration-300 md:max-h-[500px] md:overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b py-2"
                >
                  <div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                    {item.title} ({item.quantity} Pcs)
                  </div>{" "}
                  <p className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <p className="text-lg font-bold mt-4">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </>
          )}
        </div>

        {/* Shipping Details Section */}
        <form className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <h2 className="text-xl font-bold mb-4">Shipping Details</h2>

          {error && <p className="text-red-500">{error}</p>}
          {success && (
            <p className="text-green-500">Order placed successfully!</p>
          )}

          <div className="mb-4">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded mt-1 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="button"
            onClick={handleOrderSubmit}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Checkout Confirmation Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmOrder}
      />
    </main>
  );
}
