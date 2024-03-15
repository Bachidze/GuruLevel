import React from "react";
import data from "../../../data.json";
import Link from "next/link";
import Image from "next/image";

export default function headphone() {
  return (
    <main className="flex justify-center flex-col items-center">
      <section className="bg-[#000000] w-full">
        <div className="flex justify-center pt-8 pb-8">
          <h1 className="text-white text-[28px] leading-[38.25px] font-bold tracking-[2px]">
            HEADPHONES
          </h1>
        </div>
      </section>
      <section className="pl-6 pr-6 mt-16 flex flex-col justify-center items-center">
        <div>
          <Image className="rounded-xl" alt="headphone" src={data[3].categoryImage.mobile} width={327} height={353} />
        </div>

        <div className="mt-8">
          <div className=" flex justify-center flex-col items-center">
            <h1 className="text-[14px] leading-[19px] tracking-[10px] text-center font-normal pb-4 opacity-50 text-[#D87D4A]">
              NEW PRODUCT
            </h1>
            <h1 className="text-[28px] leading-[38.25px] font-bold tracking-[1px] text-center pb-6">
              {data[3].name}
            </h1>
            <p className="text-[15px] text-center leading-[25px] font-normal opacity-50 w-[99%] pb-7">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
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
          <Image className="rounded-xl" alt="headphone" src={data[2].categoryImage.mobile} width={327} height={353} />
        </div>

        <div className="mt-8">
          <div className=" flex justify-center flex-col items-center">
            <h1 className="text-[14px] leading-[19px] tracking-[10px] text-center font-normal pb-4 opacity-50 text-[#D87D4A]">
              NEW PRODUCT
            </h1>
            <h1 className="text-[28px] leading-[38.25px] font-bold tracking-[1px] text-center pb-6">
              {data[2].name}
            </h1>
            <p className="text-[15px] text-center leading-[25px] font-normal opacity-50 w-[99%] pb-7">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <div className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
              <Link
                href={""}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px] text-white"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[120px]">
        <Image className="rounded-xl" alt="headphone" src={data[1].categoryImage.mobile} width={327} height={353} />
        </div>

        <div className="mt-8">
          <div className=" flex justify-center flex-col items-center">
            <h1 className="text-[14px] leading-[19px] tracking-[10px] text-center font-normal pb-4 opacity-50 text-[#D87D4A]">
              NEW PRODUCT
            </h1>
            <h1 className="text-[28px] leading-[38.25px] font-bold tracking-[1px] text-center pb-6">
              {data[1].name}
            </h1>
            <p className="text-[15px] text-center leading-[25px] font-normal opacity-50 w-[99%] pb-7">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <div className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer mb-[100px]">
              <Link
                href={""}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px] text-white"
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
            <Image alt="photo" src={"/HeadPhoneHeader.svg"} width={79} height={104}/>
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
              <Image alt="Arrow" src={"/OrangeImg.svg"} width={6.5} height={10} />
            </div>
          </div>

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
            <div className="relative flex justify-center bottom-14">
            <Image alt="image" src={"/SpeakerHeader.svg"} width={79} height={104} />
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
              <Image alt="Arrow" src={"/OrangeImg.svg"} width={6.5} height={10} />
            </div>
          </div>

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
            <div className="relative flex justify-center bottom-12">
            <Image alt="image" src={"/earPhoneHeader.svg"} width={79} height={104} />
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
              <Image alt="Arrow" src={"/OrangeImg.svg"} width={6.5} height={10} />
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center flex-col mt-[120px]">
          <Image className="rounded-xl" alt="men" src={data[3].gallery.first.mobile} width={327} height={200} />
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
  );
}
