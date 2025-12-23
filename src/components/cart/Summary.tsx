"use client";

import { formatPrice } from "@/lib/utils";

import { useCart } from "./CartProvider";

const Summary = () => {
  const { items } = useCart();

  // Calculate totals
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 50; // Fixed shipping cost
  const vat = Math.round(total * 0.2); // 20% VAT
  const grandTotal = total + shipping;

  return (
    <div className="rounded-lg bg-white p-6">
      <h2 className="mb-6 text-lg font-bold uppercase">Summary</h2>

      {/* Cart Items */}
      <div className="mb-8 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-gray-100">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full rounded-lg object-cover"
                  />
                )}
              </div>
              <div>
                <p className="text-sm font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {formatPrice(item.price)}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500">x{item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mb-6 space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 uppercase">Total</span>
          <span className="font-bold">{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 uppercase">Shipping</span>
          <span className="font-bold">{formatPrice(shipping)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-500 uppercase">
            VAT (Included)
          </span>
          <span className="font-bold">{formatPrice(vat)}</span>
        </div>
      </div>

      {/* Grand Total */}
      <div className="mb-6 flex justify-between">
        <span className="text-sm text-gray-500 uppercase">Grand Total</span>
        <span className="font-bold text-orange-500">
          {formatPrice(grandTotal)}
        </span>
      </div>

      {/* Continue Button */}
      <button
        className="w-full bg-orange-500 px-4 py-3 text-sm font-bold tracking-wider text-white uppercase transition-colors hover:bg-orange-400"
        disabled={items.length === 0}
      >
        Continue & Pay
      </button>
    </div>
  );
};

export default Summary;
