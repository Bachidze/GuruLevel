'use client'
import React, { useState } from "react";
import Link from "next/link";

export default function Pay() {
  const [multiplier, setMultiplier] = useState(1);
  const [pay, setPay] = useState(2999);

  const increase = () => {
    setMultiplier(multiplier * 2);
  };

  const decrease = () => {
    if (multiplier > 1) {
      setMultiplier(multiplier / 2);
    }
  };

  return (
    <>
      <main className="flex flex-col m-auto w-[327px]">
        <div className="mb-[31px]">
          <h1 className="text-[18px] leading-[24.59px] tracking-[1.29px] font-bold">
            {pay * multiplier}
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-[21px] bg-[#F1F1F1] pl-[15.5px] pr-[15.5px]">
            <h1
              className="text-[15px] font-bold leading-[18px] opacity-25"
              onClick={increase}
            >
              +
            </h1>
            <h1>{multiplier}</h1>
            <h1
              className="text-[15px] font-bold leading-[18px] opacity-25"
              onClick={decrease}
            >
              -
            </h1>
          </div>
          <div className="bg-[#D87D4A] tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
            <Link
              href={"/producthead"}
              className="text-[13px] leading-[17.76px] font-bold tracking-[1px] text-white"
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
