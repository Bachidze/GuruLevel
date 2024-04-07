import React from "react";
import data from "../../../data.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Tranistion from "@/components/transitionEffect/Tranistion";

export default function headphone() {
  return (
    <>
    <Tranistion />
      <main className="flex justify-center flex-col items-center ">
        <section className="bg-[#000000] w-full">
          <div className="flex justify-center pt-8 pb-8">
            <h1 className="text-white text-[28px] leading-[38.25px] font-bold tracking-[2px]">
              HEADPHONES
            </h1>
          </div>
        </section>
        <section className="pl-6 pr-6 mt-16 flex flex-col justify-center items-center maingrid xl:max-w-[1110px]">
          <div>
            <Image
              className="rounded-xl md:hidden"
              alt="headphone"
              src={data[3].categoryImage.mobile}
              width={327}
              height={353}
            />
          </div>

          <div>
            <Image
              className="hidden md:flex rounded-xl xl:hidden"
              alt="headphone"
              src={data[3].categoryImage.tablet}
              width={689}
              height={353}
            />
          </div>
          <div className="pirveli">
            <Image
              className="hidden xl:flex rounded-xl"
              alt="headphone"
              src={data[3].categoryImage.desktop}
              width={540}
              height={560}
            />
          </div>

          <div className="mt-8 meore">
            <div className=" flex justify-center flex-col items-center xl:items-start">
              <h1 className="text-[14px] leading-[19px] tracking-[10px] text-center font-normal pb-4 opacity-50 text-[#D87D4A] xl:font-bold">
                NEW PRODUCT
              </h1>
              <h1 className="text-[28px] leading-[38.25px] font-bold tracking-[1px] text-center pb-6 md:text-[40px] md:leading-[44px] md:tracking-[1.43px] xl:text-left xl:text-[40px] xl:leading-[44px]">
                {data[3].name}
              </h1>
              <p className="text-[15px] text-center leading-[25px] font-normal opacity-50 w-[99%] pb-7 xl:text-left">
                {data[3].description}
              </p>
              <div className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
                <Link
                  href={"/producthead"}
                  className="text-[13px] leading-[17.76px] font-bold tracking-[1px] text-white"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-[120px]">
            <Image
              className="rounded-xl md:hidden"
              alt="headphone"
              src={data[2].categoryImage.mobile}
              width={327}
              height={353}
            />
          </div>

          <div>
            <Image
              className="hidden md:flex rounded-xl xl:hidden"
              alt="headphone"
              src={data[2].categoryImage.tablet}
              width={689}
              height={353}
            />
          </div>
          <div className="mesame">
            <Image
              className="hidden xl:flex rounded-xl"
              alt="headphone"
              src={data[2].categoryImage.desktop}
              width={540}
              height={560}
            />
          </div>

          <div className="mt-8 meotxe">
            <div className=" flex justify-center flex-col items-center xl:items-start">
              <h1 className="text-[14px] leading-[19px] tracking-[10px] text-center font-normal pb-4 opacity-50 text-[#D87D4A]">
                NEW PRODUCT
              </h1>
              <h1 className="text-[28px] leading-[38.25px] font-bold tracking-[1px] text-center pb-6 md:text-[40px] md:leading-[44px] md:tracking-[1.43px] xl:text-left">
                {data[2].name}
              </h1>
              <p className="text-[15px] text-center leading-[25px] font-normal opacity-50 w-[99%] pb-7 xl:text-left">
                {data[2].description}
              </p>
              <div className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
                <Link
                  href={"/producthead2"}
                  className="text-[13px] leading-[17.76px] font-bold tracking-[1px] text-white"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-[120px] xl:mt-0">
            <Image
              className="rounded-xl md:hidden"
              alt="headphone"
              src={data[1].categoryImage.mobile}
              width={327}
              height={353}
            />
          </div>

          <div>
            <Image
              className="hidden md:flex rounded-xl xl:hidden"
              alt="headphone"
              src={data[1].categoryImage.tablet}
              width={689}
              height={353}
            />
          </div>

          <div className="mexute">
            <Image
              className="hidden xl:flex rounded-xl"
              alt="headphone"
              src={data[1].categoryImage.desktop}
              width={540}
              height={560}
            />
          </div>

          <div className="mt-8 meeqvse">
            <div className=" flex justify-center flex-col items-center xl:items-start">
              <h1 className="text-[14px] leading-[19px] tracking-[10px] text-center font-normal pb-4 opacity-50 text-[#D87D4A]">
                NEW PRODUCT
              </h1>
              <h1 className="text-[28px] leading-[38.25px] font-bold tracking-[1px] text-center pb-6 md:text-[40px] md:leading-[44px] md:tracking-[1.43px] xl:text-left">
                {data[1].name}
              </h1>
              <p className="text-[15px] text-center leading-[25px] font-normal opacity-50 w-[99%] pb-7 xl:text-left">
                {data[1].description}
              </p>
              <div className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer mb-[100px]">
                <Link
                  href={"/producthead3"}
                  className="text-[13px] leading-[17.76px] font-bold tracking-[1px] text-white"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-20 mt-24 text-center md:flex-row md:gap-3 md:w-[689px] xl:-mt-[300px] xl:w-[1050px] xl:m-auto">
          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]">
            <div className="relative flex justify-center bottom-14">
              <Image
                className="xl:hidden"
                alt="photo"
                src={"/HeadPhoneHeader.svg"}
                width={79}
                height={104}
              />
              <Image
                className="hidden xl:flex relative bottom-7"
                alt="photo"
                src={"/HeadPhoneHeader.svg"}
                width={121}
                height={104}
              />
            </div>
            <div className="pb-[7px] relative bottom-4 text-[#000000] xl:bottom-12">
              <Link
                href={"/headphones"}
                className="text-[15px] font-bold leading-5 tracking-widest xl:text-[18px] xl:leading-[24px] xl:tracking-[2px]"
              >
                HEADPHONES
              </Link>
            </div>
            <div className="flex justify-center relative bottom-4 gap-2 text-[#000000] xl:bottom-6">
              <Link
                href={"/producthead2"}
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

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px]  xl:w-[350px] xl:h-[204px]">
            <div className="relative flex justify-center bottom-14">
              <Image
                className="xl:hidden"
                alt="image"
                src={"/SpeakerHeader.svg"}
                width={79}
                height={104}
              />
              <Image
                className="hidden xl:flex relative bottom-7"
                alt="image"
                src={"/SpeakerHeader.svg"}
                width={122}
                height={104}
              />
            </div>
            <div className="pb-[7px] relative bottom-4 text-[#000000] xl:bottom-9">
              <Link
                href={"/speakers"}
                className="text-[15px] font-bold leading-5 tracking-widest xl:text-[18px] xl:leading-[24px] xl:tracking-[2px]"
              >
                SPEAKERS
              </Link>
            </div>
            <div className="flex justify-center relative bottom-4 gap-2 text-[#000000] xl:bottom-3">
              <Link
                href={"/speaker1"}
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

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px]  xl:w-[350px] xl:h-[204px]">
            <div className="relative flex justify-center bottom-12">
              <Image
                className="xl:hidden"
                alt="image"
                src={"/earPhoneHeader.svg"}
                width={79}
                height={104}
              />
              <Image
                className=" hidden xl:flex relative bottom-7"
                alt="image"
                src={"/earPhoneHeader.svg"}
                width={125}
                height={104}
              />
            </div>
            <div className="pb-[7px] relative bottom-5 text-[#000000] xl:bottom-6">
              <Link
                href={"/earphones"}
                className="text-[15px] font-bold leading-5 tracking-widest xl:text-[18px] xl:leading-[24px] xl:tracking-[2px]"
              >
                EARPHONES
              </Link>
            </div>
            <div className="flex justify-center relative bottom-4 gap-2 text-[#000000] xl:bottom-1">
              <Link
                href={"/earphone1"}
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
        <section className="flex justify-center items-center flex-col mt-[120px] xl:flex-row xl:max-w-[1050px] ">
          <Image
            className="rounded-xl md:hidden"
            alt="men"
            src={data[3].gallery.first.mobile}
            width={327}
            height={200}
          />
          <Image
            className="hidden md:flex rounded-xl xl:hidden"
            alt="men"
            src={"/tabletmen.svg"}
            width={689}
            height={200}
          />
          <Image
            className="hidden xl:flex rounded-xl order-2"
            alt="men"
            src={"/desktopmen.svg"}
            width={689}
            height={200}
          />
          <div className="text-center mt-10">
            <h1 className="text-[34px] leading-[38.25px] font-bold tracking-[1px] pb-8 md:text-[40px] md:leading-[44px] md:tracking-[1.43px] xl:text-left xl:w-[440px] uppercase">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </h1>
            <p className="text-[15px] leading-[25px] font-normal w-[80%] m-auto opacity-65 xl:text-left xl:-translate-x-12">
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
  );
}
