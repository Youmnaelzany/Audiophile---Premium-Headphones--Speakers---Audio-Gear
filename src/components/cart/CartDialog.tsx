"use client";

import Image from "next/image";
import Link from "next/link";

import { ShoppingCart } from "lucide-react";

import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CartDialog = () => {
  const { items, removeFromCart, clearCart, increaseQty, decreaseQty } =
    useCart();

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label="Open shopping cart"
          className="relative text-white transition-colors hover:text-[#D87D4A]"
        >
          <ShoppingCart className="size-6" />
          {items.length > 0 && (
            <span
              className="absolute -top-1 -right-2 flex size-4 items-center justify-center rounded-full bg-[#D87D4A] text-[10px] font-bold text-white"
              aria-live="polite"
            >
              {items.length}
            </span>
          )}
        </button>
      </DialogTrigger>

      <DialogContent className="w-[95%] max-w-md rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between pt-6">
            <span className="font-bold tracking-widest uppercase">
              Cart ({items.length})
            </span>
            <button
              onClick={clearCart}
              disabled={!items.length}
              className="text-xs text-neutral-500 hover:text-black disabled:opacity-40"
            >
              Remove All
            </button>
          </DialogTitle>
        </DialogHeader>

        {items.length === 0 ? (
          <div className="py-10 text-center text-sm text-neutral-500">
            Your cart is empty.
          </div>
        ) : (
          <div>
            <ul className="mb-6 divide-y divide-neutral-200">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-4"
                >
                  <div className="flex items-center gap-3">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded bg-neutral-100 object-cover"
                      />
                    )}
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-neutral-500">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded bg-neutral-100 px-2 py-1">
                    <button
                      type="button"
                      onClick={() => decreaseQty(item.id)}
                      className="px-2 text-sm text-neutral-500 hover:text-[#D87D4A]"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => increaseQty(item.id)}
                      className="px-2 text-sm text-neutral-500 hover:text-[#D87D4A]"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs text-neutral-500 uppercase">Total</span>
              <span className="text-lg font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <Button asChild variant="mainOne" className="w-full">
              <Link href="/checkout" aria-label="Proceed to checkout">
                Checkout
              </Link>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartDialog;
