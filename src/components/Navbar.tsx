"use client";
import Link from "next/link";
import React, { useState } from "react";
import data from "../data.json";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const BurgeMenu = "/Burger_Menu.svg";
  const X = "/Burger_Menu_X (1).svg";
  const AddProductIcon = "/AddProduct.svg";
  const dataJson = data;
  console.log(dataJson);
  return (
    <>
      <header className="bg-[#191919] w-[100%]">
        <section className=" text-white flex items-center justify-between w-[90%] m-auto pt-8 pb-4 rounded-xl">
          <div>
            <img onClick={handleShow} src={show ? X : BurgeMenu} alt="Menu" />
          </div>
          <div>
            <Link href={"/"}><img src="/audiophile.svg" alt="title" /></Link>
          </div>
          <div>
            <img src={AddProductIcon} alt="prdouct" />
          </div>
        </section>
        <section className="flex bg-white  justify-center items-center">
          {show ? (


            <motion.div
            animate={{
                y: show ? 380 : '-200%',
                opacity: show ? 1 : 0,
              }}
              transition={{
                duration: 1, 
                type: 'spring',
              }}
              initial={{ opacity: 0, y: '-200%' }}
              whileInView={{ opacity: 1 }}
            className="flex flex-col absolute bottom-20 text-white  pt-20  bg-white gap-24 text-center rounded-xl pb-7">
              <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
                <div className="relative flex justify-center bottom-14">
                  <img
                    className="w-[79px] h-[104px]"
                    src="/HeadPhoneHeader.svg"
                    alt="HeadPhone"
                  />
                </div>
                <div className="pb-[7px] relative bottom-4 text-[#000000]">
                  <Link href={"/headphones"} className="text-[15px] font-bold leading-5 tracking-widest">HEADPHONES</Link>
                </div>
                <div className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
                  <Link href={"/headphones"} className="opacity-50 text-[13px] tracking-widest font-bold leading-[17px]">SHOP</Link>
                  <img src="/OrangeImg.svg" alt="Arrow" />
                </div>
              </div>


              <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
                <div className="relative flex justify-center bottom-14">
                  <img
                    className="w-[79px] h-[104px]"
                    src="/SpeakerHeader.svg"
                    alt="HeadPhone"
                  />
                </div>
                <div className="pb-[7px] relative bottom-4 text-[#000000]">
                  <Link href={"/speakers"} className="text-[15px] font-bold leading-5 tracking-widest">SPEAKERS</Link>
                </div>
                <div className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
                  <Link href={"/headphones"} className="opacity-50 text-[13px] tracking-widest font-bold leading-[17px]">SHOP</Link>
                  <img src="/OrangeImg.svg" alt="Arrow" />
                </div>
              </div>


              <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
                <div className="relative flex justify-center bottom-12">
                  <img
                    className="w-[79px] h-[104px]"
                    src="/earPhoneHeader.svg"
                    alt="HeadPhone"
                  />
                </div>
                <div className="pb-[7px] relative bottom-5 text-[#000000]">
                  <Link href={"/earphones"} className="text-[15px] font-bold leading-5 tracking-widest">EARPHONES</Link>
                </div>
                <div className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
                  <Link href={"/headphones"} className="opacity-50 text-[13px] tracking-widest font-bold leading-[17px]">SHOP</Link>
                  <img src="/OrangeImg.svg" alt="Arrow" />
                </div>
              </div>


            </motion.div>
          ) : null}
        </section>
      </header>
    </>
  );
}
