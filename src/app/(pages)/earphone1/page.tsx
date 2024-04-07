'use client'
import React from 'react'
import data from "../../../data.json";
import Link from "next/link";
import Image from "next/image";
import Pay from "@/components/pay/Pay";
export default function Earphone1() {

  
  const cartObj = {
    name: data[0].name,
    id: data[0].id,
    price: Number(data[0].price)
  }

  return (
    <>
     <main className="flex justify-center flex-col items-center">
        <section className="-translate-x-28 mt-4 mb-6">
          <Link className="text-[15px] leading-[25px] opacity-50" href={"/"}>
            GO TO BACK
          </Link>
        </section>
        <section className="pl-6 pr-6  flex flex-col justify-center items-center">
          <div>
            <Image
              className="rounded-xl"
              alt="headphone"
              src={data[0].categoryImage.mobile}
              width={327}
              height={353}
            />
          </div>

          <div className="mt-8">
            <div className=" flex justify-start flex-col items-strat">
              <h1 className="text-[14px] leading-[19px] tracking-[10px] text-left font-normal pb-4 opacity-50 text-[#D87D4A] w-[320px] m-auto -z-10">
                NEW PRODUCT
              </h1>
              <h1 className="text-[28px] leading-[38.25px] font-bold tracking-[1px] text-left pb-6 w-[327px] m-auto">
                {data[0].name}
              </h1>
              <p className="text-[15px] text-left leading-[25px] font-normal opacity-50  pb-7 w-[327px] -z-10">
                {data[0].description}
              </p>
              <Pay 
              cartObj={cartObj} 
              />
            </div>
          </div>
        </section>

        <section className="flex justify-center flex-col mt-16 mb-20">
          <div className="w-[327px]">
            <h1 className="mb-6 text-[24px] leading-9 tracking-[0.86px] font-bold">
              FEATURES
            </h1>
            <p className=" text-[15px] leading-[25px] opacity-50 tracking-[1.2px]">
              {data[0].features}
            </p>
          </div>
          <div className="mt-[60px]">
            <h1 className="mb-6 text-[24px] leading-9 tracking-[0.86px] font-bold">
              in the box
            </h1>
            <div className="flex flex-col gap-2">
              <h2 className="text-[#999090]  text-[15px] leading-[25px]">
                <span className="pr-6 text-[#D87D4A] font-bold text-[15px] leading-[25px] ">
                  1x
                </span>
                Earphone Unit
              </h2>
              <h2 className="text-[#999090]  text-[15px] leading-[25px]">
                <span className="pr-6 text-[#D87D4A] font-bold text-[15px] leading-[25px]">
                  6x
                </span>
                Multi-size Earplugs
              </h2>
              <h2 className="text-[#999090]  text-[15px] leading-[25px]">
                <span className="pr-6 text-[#D87D4A] font-bold text-[15px] leading-[25px]">
                  1x
                </span>
                User Manual
              </h2>
              <h2 className="text-[#999090]  text-[15px] leading-[25px]">
                <span className="pr-6 text-[#D87D4A] font-bold text-[15px] leading-[25px]">
                  1x
                </span>
                USB-C Charging Cable
              </h2>
              <h2 className="text-[#999090]  text-[15px] leading-[25px]">
                <span className="pr-6 text-[#D87D4A] font-bold text-[15px] leading-[25px]">
                  1x
                </span>
                Travel Pouch
              </h2>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-5">
          <div>
            <Image
              className="rounded-xl"
              alt="shadow"
              src={data[0].gallery.first.mobile}
              width={327}
              height={200}
            />
          </div>
          <div>
            <Image
              className="rounded-xl"
              alt="shadow"
              src={data[0].gallery.second.mobile}
              width={327}
              height={200}
            />
          </div>
          <div>
            <Image
              className="rounded-xl"
              alt="shadow"
              src={data[0].gallery.third.mobile}
              width={327}
              height={200}
            />
          </div>
        </section>

        <section className="flex flex-col gap-20 mt-24 text-center">
          <div>
            <h1 className="text-[24px] leading-9 tracking-[0.86px] font-bold">
              YOU MAY ALSO LIKE
            </h1>
          </div>
          <div>
            <div className="relative flex justify-center bg-[#F1F1F1] pt-[19px] pb-[19px] rounded-xl">
              <Image
                alt="image"
                src={"/dinamic.svg"}
                width={79}
                height={104}
              />
            </div>
            <h1 className="mt-8 text-[24px] leading-9 tracking-[0.86px] font-bold">
              {data[5].name}
            </h1>
            <div className="bg-[#D87D4A] w-[160px] pt-[15px] pb-[15px] m-auto mt-8">
              <Link
                href={"/speaker1"}
                className="text-white font-bold tracking-[1px] text-[13px] leading-[17.79px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center bg-[#F1F1F1] pt-[19px] pb-[19px] rounded-xl">
              <Image
                alt="image"
                src={"/HeadPhoneHeader.svg"}
                width={79}
                height={104}
              />
            </div>
            <h1 className="mt-8 text-[24px] leading-9 tracking-[0.86px] font-bold">
              {data[2].name}
            </h1>
            <div className="bg-[#D87D4A] w-[160px] pt-[15px] pb-[15px] m-auto mt-8">
              <Link
                href={"/producthead2"}
                className="text-white font-bold tracking-[1px] text-[13px] leading-[17.79px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
          <div>
            <div className="relative flex justify-center bg-[#F1F1F1] pt-[17px] pb-[17px] rounded-xl">
              <Image
                alt="image"
                src={"/whiteheadphone.svg"}
                width={79}
                height={104}
              />
            </div>
            <h1 className="mt-8 text-[24px] leading-9 tracking-[0.86px] font-bold">
              {data[1].name}
            </h1>
            <div className="bg-[#D87D4A] w-[160px] pt-[15px] pb-[15px] m-auto mt-8">
              <Link
                href={"/producthead3"}
                className="text-white font-bold tracking-[1px] text-[13px] leading-[17.79px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
            <div className="relative flex justify-center bottom-14">
              <Image
                alt="photo"
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
                alt="image"
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
          </div>
        </section>
        <section className="flex justify-center items-center flex-col mt-[120px]">
          <Image
            className="rounded-xl"
            alt="men"
            src={data[3].gallery.first.mobile}
            width={327}
            height={200}
          />
          <div className="text-center mt-10">
            <h1 className="text-[34px] leading-[38.25px] font-bold tracking-[1px] pb-8">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h1>
            <p className="text-[15px] leading-[25px] font-normal w-[80%] m-auto opacity-65">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
