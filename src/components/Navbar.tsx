"use client";
import Link from "next/link";
import React, { useState } from "react";
import data from "../data.json";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <section className=" text-white flex items-center justify-between w-[90%] m-auto pt-8 pb-8 rounded-xl cursor-pointer">
          <div>
            <Image
              onClick={handleShow}
              alt="brgr"
              src={show ? X : BurgeMenu}
              width={18}
              height={3}
            />
          </div>
          <div>
            <Link href={"/"}>
              <Image
                alt="tittle"
                src={"/audiophile.svg"}
                width={143}
                height={25}
              />
            </Link>
          </div>
          <div>
            <Image alt="product" src={AddProductIcon} width={22} height={6} />
          </div>
        </section>
        <section className="flex bg-white  justify-center items-center  m-auto">
          {show ? (
          
              <motion.div
                animate={{
                  y: show ? 380 : "-200%",
                  opacity: show ? 1 : 0,
                }}
                transition={{
                  duration: 1,
                  type: "spring",
                }}
                initial={{ opacity: 0, y: "-200%" }}
                whileInView={{ opacity: 1 }}
                className="flex flex-col justify-center items-center absolute bottom-20 text-white pt-20 bg-white gap-24 text-center rounded-xl pb-7 w-full"
              >
                <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
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

                <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
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

                <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
                  <div className="relative flex justify-center bottom-12">
                    <Image
                      alt="image"
                      src={"/earPhoneHeader.svg"}
                      width={79}
                      height={104}
                    />
                  </div>
                  <div className="pb-[7px] relative bottom-5 text-[#000000]">
                    <Link
                      href={"/earphones"}
                      className="text-[15px] font-bold leading-5 tracking-widest"
                    >
                      EARPHONES
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
                {show ? <section className="w-[375px] m-auto absolute opacity-40 z-50 -left-6">
                       <motion.div
                        animate={{
                         y: show ? 390 : "-200%",
                       }}
                       transition={{
                         duration: 1,
                         type: "spring",
                       }}
                       initial={{ opacity: 0, y: "-200%" }}
                       whileInView={{ opacity: 1 }}
                       className="bg-black z-50 h-[545vh] flex justify-start sm:h-[480vh] ">
                       </motion.div>
                 </section>: null}
                </div>
              </motion.div>
          ) : null}
        </section>
      </header>
    </>
  );
}
