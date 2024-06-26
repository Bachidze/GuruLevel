"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import data from "../data.json";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Globalcontext } from "@/app/Context";
import Pay from "./pay/Pay";
interface CartItem {
  id: number;
  name: string;
  price: number;
}



export default function Navbar() {
  const [show, setShow] = useState(false);
  const [shop, setshop] = useState(false);
  const handleShow = () => {
    setShow(!show);
    setshop(false);
  };
  const handleShop = () => {
    setshop(!shop);
    setShow(false);
  };
  const context = useContext(Globalcontext);

  if (!context) return null;

  const { cart, setCart } = context;
  const deleteId = (id: number) => {
    const cleared = cart.filter((el: CartItem) => el.id !== id);
    setCart(cleared);
  };

  const BurgeMenu = "/Burger_Menu.svg";
  const X = "/Burger_Menu_X (1).svg";
  const AddProductIcon = "/AddProduct.svg";
  const dataJson = data;
  console.log(dataJson);
  return (
    <>
      <header className="bg-[#191919] w-[100%] max-w-[1920px] m-auto">
        <section className=" text-white flex items-center justify-between w-[90%] m-auto pt-8 pb-8 rounded-xl cursor-pointer xl:w-[76%]">
          <div className="z-[99999] xl:hidden">
            <Image
              onClick={handleShow}
              alt="brgr"
              src={show ? X : BurgeMenu}
              width={18}
              height={3}
            />
          </div>
          <div className="z-[99999]">
            <Link href={"/"}>
              <Image
                alt="tittle"
                src={"/audiophile.svg"}
                width={143}
                height={25}
              />
            </Link>
          </div>
          <div className="hidden xl:flex text-[13px] leading-[25px] tracking-[2px] gap-10 z-[9999]">
            <Link href={"/"}>HOME</Link>
            <Link href={"/headphones"}>HEADPHONES</Link>
            <Link href={"/speakers"}>SPEAKERS</Link>
            <Link href={"/earphones"}>EARPHONES</Link>
          </div>
          <motion.div onClick={handleShop} className="z-[99999]">
            <Image alt="product" src={AddProductIcon} width={22} height={6} />
          </motion.div>
        </section>
        <AnimatePresence>
          {shop ? (
            <motion.section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 z-[999] xl:translate-x-[250px] xl:-translate-y-1/2">
              <motion.div
                initial={{ opacity: 0, y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100%" }}
                transition={{ type: "tween", duration: 0.2 }}
                className="w-[327px] min-h-[448px] bg-white flex flex-col justify-center items-center rounded-xl"
              >
                {cart?.map((el) => (
                  <div
                    className="flex flex-col text-start justify-center items-center mb-24"
                    key={el.id}
                  >
                    <div className="flex gap-5 justify-between self-start bottom-1">
                      <div className="flex self-start absolute left-6 ">
                        <Image
                        className="rounded-[8px]"
                          alt="mappedimg"
                          src={el.image}
                          width={70}
                          height={70}
                        />
                      </div>
                      <div className="flex flex-col justify-between absolute left-28 pt-2 pb-2">
                        <h4 className="text-[15px] font-bold leading-[25px]">{el.name}</h4>
                        <h4 className="text-[14px] font-bold leading-[25px] opacity-50">{`$ ${el.price}`}</h4>
                      </div>
                      <div className="absolute right-10">
                      </div>
                    </div>
                    <div className="absolute top-[31px] right-6">
                      <button onClick={() => deleteId(el.id)}>Delete</button>
                    </div>
                <div className="absolute bottom-12">
                  <h1>Go to Checkout</h1>
                </div>
                  </div>
                ))}

              </motion.div>
            </motion.section>
          ) : null}
        </AnimatePresence>
        {shop ? (
          <motion.section
            onClick={handleShop}
            className="w-full h-[620vh] bg-[#000000] absolute top-0 z-[99] opacity-30 xl:h-[500vh]"
          ></motion.section>
        ) : null}
        <section className="flex bg-white  justify-center items-center  m-auto z-50 xl:hidden">
          <AnimatePresence>
            {show ? (
              <motion.div
                initial={{ opacity: 0, y: "-200%" }}
                animate={{ opacity: 1, y: 380 }}
                exit={{ opacity: 0, y: "-200%" }}
                transition={{ type: "spring", duration: 2 }}
                className="flex flex-col justify-center items-center absolute  text-white pt-20 bg-white gap-24 text-center rounded-xl pb-7 w-full z-[99999] md:flex-row md:-top-72 md:gap-8 md:pl-8 md:pr-8 md:pb-[67px] md:pt-[100px]"
              >
                <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px]">
                  <div className="relative flex justify-center bottom-14">
                    <Image
                      alt="imgage"
                      src={"/HeadPhoneHeader.svg"}
                      width={79}
                      height={104}
                    />
                  </div>
                  <div className="pb-[7px] relative bottom-4 text-[#000000]">
                    <Link
                      href={"/headphones"}
                      className="text-[15px] font-bold leading-5 tracking-widest"
                    >
                      HEADPHONES
                    </Link>
                  </div>
                  <div className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
                    <Link
                      href={"/producthead"}
                      className="opacity-50 text-[13px] tracking-widest font-bold leading-[17px]"
                    >
                      SHOP
                    </Link>
                    <Image
                      alt="Arrow"
                      src={"/OrangeImg.svg"}
                      width={6.5}
                      height={10}
                    />
                  </div>
                </div>

                <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px]">
                  <div className="relative flex justify-center bottom-14">
                    <Image
                      alt="imgage"
                      src={"/SpeakerHeader.svg"}
                      width={79}
                      height={104}
                    />
                  </div>
                  <div className="pb-[7px] relative bottom-4 text-[#000000]">
                    <Link
                      href={"/speakers"}
                      className="text-[15px] font-bold leading-5 tracking-widest"
                    >
                      SPEAKERS
                    </Link>
                  </div>
                  <div className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
                    <Link
                      href={"/headphones"}
                      className="opacity-50 text-[13px] tracking-widest font-bold leading-[17px]"
                    >
                      SHOP
                    </Link>
                    <Image
                      alt="Arrow"
                      src={"/OrangeImg.svg"}
                      width={6.5}
                      height={10}
                    />
                  </div>
                </div>

                <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px]">
                  <div className="relative flex justify-center bottom-12">
                    <Image
                      alt="image"
                      src={"/earPhoneHeader.svg"}
                      width={79}
                      height={104}
                    />
                  </div>
                  <div className="pb-[7px] relative bottom-5 text-[#000000] ">
                    <Link
                      href={"/earphones"}
                      className="text-[15px] font-bold leading-5 tracking-widest"
                    >
                      EARPHONES
                    </Link>
                  </div>
                  <div className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
                    <Link
                      href={"/earphones"}
                      className="opacity-50 text-[13px] tracking-widest font-bold leading-[17px]"
                    >
                      SHOP
                    </Link>
                    <Image
                      alt="Arrow"
                      src={"/OrangeImg.svg"}
                      width={6.5}
                      height={10}
                    />
                  </div>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </section>
        {show ? (
          <section
            onClick={handleShow}
            className="w-full h-[620vh] bg-[#000000] absolute top-0 z-[99] opacity-30"
          ></section>
        ) : null}
      </header>
    </>
  );
}
