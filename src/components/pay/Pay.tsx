"use client";
import React, { useContext, useState } from "react";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { Globalcontext } from "@/app/Context";
import { color } from "framer-motion";

type PropType = {
  id:number;
  prev: never[];
}

export default function Pay({ cartObj }: any) {
  const [multiplier, setMultiplier] = useState(1);
  const [pay, setPay] = useState(cartObj.price);

  const context = useContext(Globalcontext);
  console.log(cartObj, "cartObj in paty")

  if (!context) return null;

  const { giorgi, setGiorgi,chasetva,setChasetva, setCart, cart } = context;

  const price = pay * multiplier;
  const addToCart = (item:any) => {
    const newObj = {...cartObj, price: price}
    console.log(cart.find(el => el.id === newObj.id), "condition")
    if(cart.find(el => el.id === newObj.id)) return 


    setCart(prev => [...prev, newObj])
    
  }

  const increase = () => {
    setMultiplier(multiplier + 1);
  };

  const decrease = () => {
    if (multiplier > 1) {
      setMultiplier(multiplier - 1);
    }
  };


  const notify = () => toast.success('Item Added', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  return (
    <>
      <h1>Count:{giorgi}</h1>
      <button onClick={() => setGiorgi(giorgi + 1)}>increase</button>
      <main className="flex flex-col m-auto w-[327px]">
        <div className="mb-[31px]">
          <h1 className="text-[18px] leading-[24.59px] tracking-[1.29px] font-bold">
            $ {pay * multiplier}
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-[21px] bg-[#959393] pl-[15.5px] pr-[15.5px]">
            <h1
              className="text-[15px] font-bold leading-[18px] opacity-25 text-[#F1F1F1] cursor-pointer"
              onClick={increase}
            >
              +
            </h1>
            <h1>{multiplier}</h1>
            <h1
              className="text-[15px] font-bold leading-[18px] opacity-25 text-[#F1F1F1] cursor-pointer"
              onClick={decrease}
            >
              -
            </h1>
          </div>
          <div onClick={addToCart} className="bg-[#D87D4A] tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
            <h1 onClick={notify} className="text-[13px] w-[100%] flex justify-center leading-[17.76px] font-bold tracking-[1px] text-white">
              ADD TO CART
            </h1>
            <ToastContainer
            limit={1}
            />
          </div>
        </div>
      </main>
    </>
  );
}
