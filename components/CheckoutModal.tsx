// path: components/CheckoutModal.tsx
"use client";

type CheckoutModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export default function CheckoutModal({ isOpen, onClose, onConfirm }: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center text-black dark:text-white">
        <h2 className="text-xl font-bold mb-4">Confirm Your Order</h2>
        <p className="text-gray-600 dark:text-gray-300">Are you sure you want to place this order?</p>
        <div className="mt-6 flex justify-between">
          <button
            className="px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded hover:bg-red-600 dark:hover:bg-red-700"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded hover:bg-green-600 dark:hover:bg-green-700"
            onClick={onConfirm}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
