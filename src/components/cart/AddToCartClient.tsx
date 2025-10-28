"use client";

import { useState } from "react";

import QuantitySelector from "@/components/ui/QuantitySelector";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/CartProvider";

type AddToCartClientProps = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

const AddToCartClient = ({ id, name, price, image }: AddToCartClientProps) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAdd = () => {
    addToCart({ id, name, price, image, quantity });
  };

  return (
    <div className="flex items-center gap-4">
      <QuantitySelector initial={1} min={1} onChange={setQuantity} />
      <Button variant="mainOne" size="lg" onClick={handleAdd}>
        Add to cart
      </Button>
    </div>
  );
};

export default AddToCartClient;
