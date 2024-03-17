"use client";
import React from "react";
import data from "../data.json";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MainPage() {
  return (
    <>
      <main className="flex justify-center flex-col items-center">
        <section className="relative">
          <div className=" text-white ">
            <div>
              <Image
                alt="photo"
                src={"/MainMainimg.svg"}
                width={375}
                height={600}
              ></Image>
            </div>
            <div className="absolute top-48 flex justify-center flex-col items-center">
              <motion.h1
                initial={{ y: "200%" }}
                whileInView={{
                  y: 0,
                }}
                transition={{
                  duration: 2,
                }}
                className="text-[14px] leading-5 tracking-[10px] text-center font-normal pb-4 opacity-50"
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
                className="text-[36px] leading-10 font-bold tracking-[1.29px] text-center pb-6"
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
                className="text-[15px] text-center leading-[25px] font-normal opacity-75 w-[70%] pb-7"
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
                className="bg-[#D87D4A]  tracking-[2px] w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer"
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
        <section className="flex flex-col gap-20 mt-24 text-center">
          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
            <motion.div
              initial={{ y: "100%" }}
              whileInView={{
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="relative flex justify-center bottom-14"
            >
              <Image
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
              className="pb-[7px] relative bottom-4 text-[#000000]"
            >
              <Link
                href={"/headphones"}
                className="text-[15px] font-bold leading-5 tracking-widest"
              >
                HEADPHONES
              </Link>
            </motion.div>
            <motion.div
              initial={{y:'100%'}}
              whileInView={{
                y:0
              }}
              transition={{
                duration:1.5
              }}
            className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
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

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
            <motion.div
              initial={{y:'100%'}}
               whileInView={{
                 y:0
               }}
               transition={{
                 duration:1.5
               }}
            className="relative flex justify-center bottom-14">
              <Image
                alt="image"
                src={"/SpeakerHeader.svg"}
                width={79}
                height={104}
              />
            </motion.div>
            <motion.div
              initial={{y:'100%'}}
               whileInView={{
                 y:-10
               }}
               transition={{
                 duration:1.5
               }}
            className="pb-[7px] relative bottom-4 text-[#000000]">
              <Link
                href={"/speakers"}
                className="text-[15px] font-bold leading-5 tracking-widest"
              >
                SPEAKERS
              </Link>
            </motion.div>
            <motion.div
              initial={{y:'100%'}}
               whileInView={{
                 y:0
               }}
               transition={{
                 duration:1.5
               }}
            className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
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

          <div className="relative w-[327px] h-[165px] bg-[#F1F1F1] flex  flex-col justify-between pb-[22px] rounded-xl">
            <motion.div
              initial={{y:'100%'}}
              whileInView={{
                y:0
              }}
              transition={{
                duration:1.5
              }} className="relative flex justify-center bottom-12">
              <Image
                alt="image"
                src={"/earPhoneHeader.svg"}
                width={79}
                height={104}
              />
            </motion.div>
            <motion.div
              initial={{y:'100%'}}
              whileInView={{
                y:0
              }}
              transition={{
                duration:1.5
              }}
            className="pb-[7px] relative bottom-5 text-[#000000]">
              <Link
                href={"/earphones"}
                className="text-[15px] font-bold leading-5 tracking-widest"
              >
                EARPHONES
              </Link>
            </motion.div>
            <motion.div
              initial={{y:'100%'}}
              whileInView={{
                y:0
              }}
              transition={{
                duration:1.5
              }}
            className="flex justify-center relative bottom-4 gap-2 text-[#000000]">
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

        <section className="bg-[#D87D4A] w-[327px] text-white relative flex justify-center flex-col items-center text-center pt-[55px] pb-[55px] pl-6 pr-6 ml-6 mr-6 rounded-xl mt-32">
          <motion.div
            initial={{x:'50%'}}
            whileInView={{
              x:0
            }}
            transition={{
              duration:2
            }}
          >
            <Image alt="image" src={"/dinamic.svg"} width={172} height={207} />
          </motion.div>
          <div className="flex justify-center items-center flex-col pt-8">
            <motion.h1
              initial={{x:'-50%'}}
              whileInView={{
                x:0
              }}
              transition={{
                duration:1.5
              }}
            className="pb-6 text-[36px]  leading-10 tracking-[1.29px] font-bold">
              {data[5].name}
            </motion.h1>
            <motion.p
              initial={{y:'70%'}}
              whileInView={{
                y:0
              }}
              transition={{
                duration:1.5
              }}
            className="pb-6 text-[15px] leading-[25px] font-normal opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </motion.p>
            <motion.div 
              initial={{y:'100%'}}
              whileInView={{
                y:0
              }}
              transition={{
                duration:2.5
              }}
            className="bg-[#000000] tracking-[2px]  w-[170px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
              <Link
                href={""}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
              >
                SEE PRODUCT
              </Link>
            </motion.div>
          </div>
          <div className="absolute top-0">
            <Image
              alt="round"
              src={"/roundedlines.svg"}
              width={558}
              height={558}
            />
          </div>
        </section>

        <section className="  relative flex justify-center flex-col items-center text-center  p-6 rounded-xl ">
          <Image
            className="rounded-xl"
            alt="dinamic"
            src={"/tableDinamic.svg"}
            width={327}
            height={320}
          />
          <motion.h1
            initial={{x:'-20%'}}
            whileInView={{
              x:0
            }}
            transition={{
              duration:1.5
            }}
          className="absolute top-36 left-14 text-[28px] leading-[38.42px] font-bold tracking-[2px]">
            {data[4].name}
          </motion.h1>
          <motion.div
            initial={{x:'-20%'}}
            whileInView={{
              x:0
            }}
            transition={{
              duration:1.5
            }}
          className="border border-[#000000] absolute left-14 top-56 tracking-[2px]  w-[170px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
            <Link
              href={"/"}
              className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
            >
              SEE PRODUCT
            </Link>
          </motion.div>
        </section>
        <section className="pl-6 pr-6 flex flex-col justify-center items-center">
          <div>
            <Image
              className="rounded-xl"
              alt="buds"
              src={data[0].gallery.second.mobile}
              width={327}
              height={200}
            />
          </div>
          <div className="bg-[#F1F1F1] w-[327px] pt-[41px] pb-[41px] rounded-xl pl-6 pr-14 mt-6">
            <motion.h1
              initial={{x:'25%'}}
              whileInView={{
                x:0
              }}
              transition={{
                duration:1.5
              }}
            className="text-[28px] leading-[38.28px] tracking-[2px] font-bold pb-8">
              YX1 EARPHONES
            </motion.h1>
            <motion.div
              initial={{x:'85%'}}
              whileInView={{
                x:0
              }}
              transition={{
                duration:1.5
              }}
            className="border border-[#000000]   tracking-[2px]  w-[160px] flex items-center justify-center pt-[15px] pb-[15px] cursor-pointer">
              <Link
                href={"/"}
                className="text-[13px] leading-[17.76px] font-bold tracking-[1px]"
              >
                SEE PRODUCT
              </Link>
            </motion.div>
          </div>
        </section>
        <motion.section
          initial={{y:'20%'}}
          whileInView={{
            y:0
          }}
          transition={{
            duration:1.5
          }}
        className="flex justify-center items-center flex-col mt-[120px]">
          <Image
            className="rounded-xl"
            alt="men"
            src={data[3].gallery.first.mobile}
            width={327}
            height={200}
          />
          <div className="text-center mt-10">
            <motion.h1
              initial={{y:'50%'}}
              whileInView={{
                y:0
              }}
              transition={{
                duration:1.5
              }}
            className="text-[34px] leading-[38.25px] font-bold tracking-[1px] pb-8">
              Bringing you the <span className="text-[#D87D4A]">best</span>{" "}
              audio gear
            </motion.h1>
            <motion.p
            initial={{y:'30%'}}
            whileInView={{
              y:0
            }}
            transition={{
              duration:1.5
            }}
            className="text-[15px] leading-[25px] font-normal w-[80%] m-auto opacity-65">
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
