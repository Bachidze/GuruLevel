import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#101010] pt-[52px] pb-[38px] mt-[120px]">
        <section className="text-white flex flex-col justify-center items-center text-center gap-[48px]">
          <div>
            <div className="flex justify-center">
              <img src="/audiophile.svg" alt="Audiophile" />
            </div>
            <div className="flex flex-col gap-4 pt-[48px] text-[13px] font-bold leading-[25px]">
              <Link href={"/"}>HOME</Link>
              <Link href={"/headphones"}>HEADPHONES</Link>
              <Link href={"/speakers"}>SPEAKERS</Link>
              <Link href={"/earphones"}>EARPHONES</Link>
            </div>
          </div>
          <div>
            <div className="flex justify-center pb-[48px]">
              <p className="w-[80%] text-[15px] leading-[25px] font-normal opacity-50">
                Audiophile is an all in one stop to fulfill your audio needs.
                We're a small team of music lovers and sound specialists who are
                devoted to helping you get the most out of personal audio. Come
                and visit our demo facility - we’re open 7 days a week.
              </p>
            </div>
            <div>
              <h2 className="opacity-50 text-[15px] leading-[25px] font-bold">Copyright 2021. All Rights Reserved</h2>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="/faceee.svg" alt="facebook" />
            <img src="/twitte.svg" alt="twitter" />
            <img src="/iinsta.svg" alt="instagram" />
          </div>
        </section>
      </footer>
    </>
  );
}
