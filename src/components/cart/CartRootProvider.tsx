"use client";

import { CartProvider } from "@/components/cart/CartProvider";

const CartRootProvider = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default CartRootProvider;
