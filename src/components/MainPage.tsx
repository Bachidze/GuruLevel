import React from "react";
import data from "../data.json";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <main className="flex justify-center flex-col items-center">
        <section className="relative -z-10">
          <div className=" text-white ">
            <div>
              <img src="/MainMainimg.svg" alt="Mainimg" />
            </div>
            <div className="absolute top-48 flex justify-center flex-col items-center">
              <h1 className="text-[14px] leading-5 tracking-[10px] text-center font-normal pb-4 opacity-50">
                NEW PRODUCT
              </h1>
              <h1 className="text-[36px] leading-10 font-bold tracking-[1.29px] text-center pb-6">
                {data[3].name}
              </h1>
              <p className="text-[15px] text-center leading-[25px] font-normal opacity-75 w-[70%] pb-7">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <div className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
                <Link
                  href={""}
                  className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-20 mt-24 text-center -z-20">
          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
            <div className="relative flex justify-center bottom-14">
              <img
                className="w-[79px] h-[104px]"
                src="/HeadPhoneHeader.svg"
                alt="HeadPhone"
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
              <img src="/OrangeImg.svg" alt="Arrow" />
            </div>
          </div>
        </section>

        <section className="bg-[#D87D4A] w-[327px] text-white relative flex justify-center flex-col items-center text-center pt-[55px] pb-[55px] pl-6 pr-6 ml-6 mr-6 rounded-xl mt-32">
          <div>
            <img src="/dinamic.svg" alt="Dinamic" />
          </div>
          <div className="flex justify-center items-center flex-col pt-8">
            <h1 className="pb-6 text-[36px]  leading-10 tracking-[1.29px] font-bold">
              {data[5].name}
            </h1>
            <p className="pb-6 text-[15px] leading-[25px] font-normal opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <div className="bg-[#000000] tracking-[2px]  w-[170px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
              <Link
                href={""}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
          <div className="absolute top-0">
            <img src="/roundedlines.svg" alt="roundedlines" />
          </div>
        </section>

        <section className="  relative flex justify-center flex-col items-center text-center  p-6 rounded-xl ">
          <img
            className="min-w-[327px] h-[320px] relative rounded-xl"
            src="/tableDinamic.svg"
            alt="Table"
          />
          <h1 className="absolute top-36 left-14 text-[28px] leading-[38.42px] font-bold tracking-[2px]">
            {data[4].name}
          </h1>
          <div className="border border-[#000000] absolute left-14 top-56 tracking-[2px]  w-[170px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
            <Link
              href={"/"}
              className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </div>
        </section>
        <section className="pl-6 pr-6 flex flex-col justify-center items-center">
          <div>
            <img
              className="rounded-xl w-[327px] h-[200px]"
              src={data[0].gallery.second.mobile}
              alt="erapod"
            />
          </div>
          <div className="bg-[#F1F1F1] w-[327px] pt-[41px] pb-[41px] rounded-xl pl-6 pr-14 mt-6">
            <h1 className="text-[28px] leading-[38.28px] tracking-[2px] font-bold pb-8">
              YX1 EARPHONES
            </h1>
            <div className="border border-[#000000]   tracking-[2px]  w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
              <Link
                href={"/"}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col mt-[120px]">
          <img className="w-[327px] h-[200px] rounded-xl" src={data[3].gallery.first.mobile} alt="" />
          <div className="text-center mt-10">
            <h1 className="text-[34px] leading-[38.25px] font-bold tracking-[1px] pb-8">Bringing you the <span className="text-[#D87D4A]">best</span> audio gear</h1>
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
  );
}
