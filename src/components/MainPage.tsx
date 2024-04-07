"use client";
import React from "react";
import data from "../data.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Tranistion from "./transitionEffect/Tranistion";

export default function MainPage() {
  return (
    <>
    <Tranistion />
      <main className="flex justify-center flex-col items-center uppercase">
        <section className="relative">
          <div className=" text-white">
            <div className="md:hidden">
              <Image
                alt="photo"
                src={"/MainMainimg.svg"}
                width={375}
                height={600}
              ></Image>
            </div>
            <div className="hidden md:flex xl:hidden">
              <Image
                alt="photo"
                src={"/tabletmainimg.svg"}
                width={768}
                height={600}
              ></Image>
            </div>
            <div className="hidden xl:flex relative bottom-24">
              <Image
              className=""
                alt="photo"
                src={"/desktopmainimg.svg"}
                width={2560}
                height={600}
              ></Image>
            </div>

            <div className="absolute  flex justify-center flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:left-1/4">
              <motion.h1
                initial={{ y: "200%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 2,
                }}
                className="text-[14px] leading-5 tracking-[10px] text-center font-normal pb-4 opacity-50 md:pb-6 xl:self-start"
              >
                NEW PRODUCT
              </motion.h1>
              <motion.h1
                initial={{ y: "100%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.7,
                }}
                className="text-[36px] leading-10 font-bold tracking-[1.29px] text-center pb-6 md:text-[56px] md:leading-[58px] md:w-[396px] xl:self-start xl:text-start"
              >
                {data[3].name}
              </motion.h1>
              <motion.p
                initial={{ y: "100%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
                className="text-[15px] text-center leading-[25px] font-normal opacity-75 w-[328px] pb-7 md:w-[349px] md:mb-4 xl:self-start xl:text-left"
              >
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </motion.p>
              <motion.div
                initial={{ y: "250%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 2.5,
                }}
                className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer xl:self-start"
              >
                <Link
                  href={"/headphones"}
                  className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
                >
                  SEE PRODUCT
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-20 mt-24 text-center md:flex-row  md:gap-4 md:w-[689px] xl:w-[1090px] xl:gap-6">
          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="relative flex justify-center bottom-14 xl:bottom-24"
            >
              <Image
              className="xl:w-[121px]"
                alt="photo"
                src={"/HeadPhoneHeader.svg"}
                width={79}
                height={104}
              />
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: -10,
              }}
              transition={{
                duration: 1.5,
              }}
              className="pb-[7px] relative bottom-4 text-[#000000] xl:bottom-12"
            >
              <Link
                href={"/headphones"}
                className="text-[15px] font-bold leading-5 tracking-widest  xl:text-[18px] xl:leading-6 xl:tracking-[1.29px]"
              >
                HEADPHONES
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex justify-center relative bottom-4 gap-2 text-[#000000] xl:bottom-10"
            >
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
            </motion.div>
          </div>

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="relative flex justify-center bottom-14 xl:bottom-24"
            >
              <Image
              className="xl:w-[121px]"
                alt="image"
                src={"/SpeakerHeader.svg"}
                width={79}
                height={104}
              />
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: -10,
              }}
              transition={{
                duration: 1.5,
              }}
              className="pb-[7px] relative bottom-4 text-[#000000] xl:bottom-9"
            >
              <Link
                href={"/speakers"}
                className="text-[15px] font-bold leading-5 tracking-widest  xl:text-[18px] xl:leading-6 xl:tracking-[1.29px]"
              >
                SPEAKERS
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex justify-center relative bottom-4 gap-2 text-[#000000] xl:bottom-7"
            >
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
            </motion.div>
          </div>

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl md:w-[223px] md:h-[165px] xl:w-[350px] xl:h-[204px]">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="relative flex justify-center bottom-12 xl:bottom-20"
            >
              <Image
              className="xl:w-[125px]"
                alt="image"
                src={"/earPhoneHeader.svg"}
                width={79}
                height={104}
              />
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="pb-[7px] relative bottom-5 text-[#000000] xl:bottom-8"
            >
              <Link
                href={"/earphones"}
                className="text-[15px] font-bold leading-5 tracking-widest xl:text-[18px] xl:leading-6 xl:tracking-[1.29px]"
              >
                EARPHONES
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="flex justify-center relative bottom-4 gap-2 text-[#000000] xl:bottom-5"
            >
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
            </motion.div>
          </div>
        </section>

        <section className="bg-[#D87D4A] w-[327px] text-white relative flex justify-center flex-col items-center text-center pt-[55px] pb-[55px] pl-6 pr-6 ml-6 mr-6 rounded-xl mt-32 md:w-[689px] md:h-[720px] xl:w-[1090px] xl:flex-row xl:h-[560px]">
          <motion.div
            initial={{ x: "50%" }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 2,
            }}
          >
            <Image className="xl:hidden" alt="image" src={"/dinamic.svg"} width={172} height={207} />
          </motion.div>
          <motion.div
            initial={{ x: "-50%" }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 2,
            }}
          >
            <Image className="hidden xl:flex xl:relative  xl:top-[50px] z-[9999]" alt="image" src={"/desktopdinamic.svg"} width={410} height={493} />
          </motion.div>
          <div className="flex justify-center items-center flex-col pt-8 xl:translate-x-[120px] xl:text-left">
            <motion.h1
              initial={{ x: "-50%" }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="pb-6 text-[36px]  leading-10 tracking-[1.29px] font-bold md:text-[56px] md:leading-[58px] md:tracking-[2px] md:w-[261px] xl:self-start uppercase"
            >
              {data[5].name}
            </motion.h1>
            <motion.p
              initial={{ y: "70%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="pb-6 text-[15px] leading-[25px] font-normal opacity-75 md:w-[349px]"
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </motion.p>
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 2.5,
              }}
              className="bg-[#000000] tracking-[2px]  w-[170px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer xl:self-start"
            >
              <Link
                href={"/speaker1"}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
              >
                SEE PRODUCT
              </Link>
            </motion.div>
          </div>
          <div className="absolute top-0 md:hidden">
            <Image
              alt="round"
              src={"/Group 4 (9).svg"}
              width={600}
              height={558}
            />
          </div>
          <div className="hidden md:flex absolute top-0 xl:hidden">
            <Image
              alt="round"
              src={"/tabletwhiteovals.svg"}
              width={668}
              height={558}
            />
          </div>
          <div className="hidden xl:flex absolute left-0 top-0">
            <Image
              alt="round"
              src={"/roundedlinesdesktop.svg"}
              width={908}
              height={558}
            />
          </div>
          
        </section>

        <section className="  relative flex justify-center flex-col items-center text-center  p-6 rounded-xl md:w-[689px] xl:w-[1110px]">
         <div className="md:hidden">
         <Image
            className="rounded-xl"
            alt="dinamic"
            src={"/tableDinamic.svg"}
            width={327}
            height={320}
          />
         </div>
         <div className="hidden md:flex relative w-[689px] xl:hidden">
         <Image
            className="rounded-xl"
            alt="dinamic"
            src={"/tablet2dinamic.svg"}
            width={689}
            height={320}
          />
         </div>
         <div className="hidden xl:flex relative min-w-[1090px]">
         <Image
            className="rounded-xl"
            alt="dinamic"
            src={"/Bitmap (47).svg"}
            width={1110}
            height={320}
          />
         </div>
          <motion.h1
            initial={{ x: "-20%" }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className="absolute top-36 left-14 text-[28px] leading-[38.42px] font-bold tracking-[2px] xl:left-24"
          >
            {data[4].name}
          </motion.h1>
          <motion.div
            initial={{ x: "-20%" }}
            whileInView={{
              x: 0,
            }}
            transition={{
              duration: 1.5,
            }}
            className="border border-[#000000] absolute left-14 top-56 tracking-[2px]  w-[170px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer xl:ml-11"
          >
            <Link
              href={"/speaker2"}
              className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </motion.div>
        </section>
        <section className="pl-6 pr-6 flex flex-col justify-center items-center md:flex-row md:gap-3">
          <div className="md:hidden">
            <Image
              className="rounded-xl"
              alt="buds"
              src={data[0].gallery.second.mobile}
              width={327}
              height={200}
            />
          </div>
          <div className="hidden md:flex xl:hidden relative w-[339px] h-[320px] top-3">
            <Image
              className="rounded-xl"
              alt="buds"
              src={'/eraphonestabletblack.svg'}
              width={339}
              height={320}
            />
          </div>
          <div className="hidden xl:flex relative top-3">
            <Image
              className="rounded-xl"
              alt="buds"
              src={"/deskrop3ear.svg"}
              width={540}
              height={320}
            />
          </div>
          <div className="bg-[#F1F1F1] w-[327px] pt-[41px] pb-[41px] rounded-xl pl-6 pr-14 mt-6 md:w-[339px] md:h-[320px] md:flex md:flex-col md:justify-center xl:w-[540px] xl:pl-16">
            <motion.h1
              initial={{ x: "25%" }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="text-[28px] leading-[38.28px] tracking-[2px] font-bold pb-8"
            >
              YX1 EARPHONES
            </motion.h1>
            <motion.div
              initial={{ x: "85%" }}
              whileInView={{
                x: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="border border-[#000000]   tracking-[2px]  w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer"
            >
              <Link
                href={"/earphone1"}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
              >
                SEE PRODUCT
              </Link>
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{ y: "20%" }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex justify-center items-center flex-col mt-[120px] xl:flex-row"
        >
          <div className="md:hidden">
          <Image
            className="rounded-xl"
            alt="men"
            src={data[3].gallery.first.mobile}
            width={327}
            height={200}
          />
          </div>
          <div className="hidden md:flex xl:hidden relative w-[689px] h-[300px] object-fill">
          <Image
            className="rounded-xl"
            alt="men"
            src={"/tabletmen.svg"}
            width={689}
            height={300}
          />
          </div>
          <div className="hidden xl:flex relative object-fill order-1">
          <Image
            className="rounded-xl"
            alt="men"
            src={"/desktopmen.svg"}
            width={540}
            height={558}
          />
          </div>
          <div className="text-center mt-10">
            <motion.h1
              initial={{ y: "50%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="text-[34px] leading-[38.25px] font-bold tracking-[1px] pb-8 m-auto md:text-[40px] md:leading-[44px] md:w-[573px] xl:text-left"
            >
              BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span>{" "}
              AUDIO GEAR
            </motion.h1>
            <motion.p
              initial={{ y: "30%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1.5,
              }}
              className="text-[15px] leading-[25px] font-normal w-[80%] m-auto opacity-65 md:w-[573px] xl:text-left xl:w-[445px] xl:relative xl:right-[62px]"
            >
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </motion.p>
          </div>
        </motion.section>
      </main>
    </>
  );
}
