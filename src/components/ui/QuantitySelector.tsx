"use client";

import { useState } from "react";

type QuantitySelectorProps = {
  initial?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
};

const QuantitySelector = ({
  initial = 1,
  min = 1,
  max,
  onChange,
}: QuantitySelectorProps) => {
  const [value, setValue] = useState<number>(Math.max(initial, min));

  const update = (next: number) => {
    const clamped = Math.max(min, max ? Math.min(next, max) : next);
    setValue(clamped);
    onChange?.(clamped);
  };

  return (
    <div className="flex items-center">
      <div className="flex w-[120px] items-center justify-between bg-[#F1F1F1] px-4 py-3">
        <button
          type="button"
          aria-label="Decrease quantity"
          className="text-black/50 hover:text-[#D87D4A]"
          onClick={() => update(value - 1)}
        >
          -
        </button>
        <span className="text-[13px] leading-[auto] font-bold tracking-normal text-black">
          {value}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          className="text-black/50 hover:text-[#D87D4A]"
          onClick={() => update(value + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
