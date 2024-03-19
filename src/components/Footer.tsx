"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#101010] pt-[52px] pb-[38px] mt-[120px]">
        <section className="text-white flex flex-col justify-center items-center text-center gap-[48px] md:self-start md:items-start md:w-[85%] md:m-auto md:text-left">
          <div>
            <motion.div
              initial={{ y: "150%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex justify-center md:w-[143px]"
            >
              <Link href={"/"}>
                <Image
                  alt="tittle"
                  src={"/audiophile.svg"}
                  width={143}
                  height={25}
                />
              </Link>
            </motion.div>
            <div className="flex flex-col gap-4 pt-[48px] text-[13px] font-bold leading-[25px] md:flex-row md:tracking-[2px] md:gap-[34px]">
              <motion.div
                initial={{ y: "150%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                }}
              >
                <Link href={"/"}>HOME</Link>
              </motion.div>
              <motion.div
                initial={{ y: "150%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.1,
                }}
              >
                <Link href={"/headphones"}>HEADPHONES</Link>
              </motion.div>
              <motion.div
                initial={{ y: "150%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.3,
                }}
              >
                <Link href={"/speakers"}>SPEAKERS</Link>
              </motion.div>
              <motion.div
                initial={{ y: "150%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                <Link href={"/earphones"}>EARPHONES</Link>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="flex justify-center pb-[48px]">
              <motion.p
                initial={{ y: "70%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="w-[80%] text-[15px] leading-[25px] font-normal opacity-50 md:w-[689px]"
              >
                Audiophile is an all in one stop to fulfill your audio needs.
                We&apos;re a small team of music lovers and sound specialists
                who are devoted to helping you get the most out of personal
                audio. Come and visit our demo facility - we&apos;re open 7 days
                a week.
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-between md:w-[100%]">
            <div>
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="opacity-50 text-[15px] leading-[25px] font-bold"
              >
                Copyright 2021. All Rights Reserved
              </motion.h2>
            </div>
            <div className="flex gap-4">
              <motion.div
                initial={{ x: "-200%" }}
                whileInView={{
                  x: 0,
                }}
                transition={{
                  duration: 2,
                }}
              >
                <Image
                  alt="facebook"
                  src={"/faceee.svg"}
                  width={24}
                  height={24}
                />
              </motion.div>
              <motion.div
                initial={{ x: "-150%" }}
                whileInView={{
                  x: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                <Image
                  alt="facebook"
                  src={"/twitte.svg"}
                  width={24}
                  height={24}
                />
              </motion.div>
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                <Image
                  alt="facebook"
                  src={"/iinsta.svg"}
                  width={24}
                  height={24}
                />
              </motion.div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
