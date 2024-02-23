"use client";
import React from "react";
import { FaNetworkWired } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdCurrencyExchange } from "react-icons/md";
import { LiaBuromobelexperte } from "react-icons/lia";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function About() {
  return (
    <section className=" bg-grayHard py-16 space-y-8 flex flex-col justify-center">
      <div className=" space-y-4">
        <div className="flex justify-center items-center gap-4 uppercase font-PBold tracking-wider text-lg text-bleu">
          <div className=" bg-orange h-[3px] w-[5%]"></div>
          <p>a propos</p>
          <div className=" bg-orange h-[3px] w-[5%]"></div>
        </div>
        <h2 className=" text-5xl font-PBold text-bleu text-center">
          Pourquoi rejoindre le Kluba ?
        </h2>
      </div>

      <div className=" ml-[20%]">
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={16}
          modules={[Autoplay]}
          className=" h-[18%]"
        >
          <SwiperSlide>
            <div className=" bg-bleu w-[18rem] h-[18rem] rounded-2xl flex flex-col py-8 px-8 gap-4 group hover:bg-orange transition duration-300 hover:scale-110 hover:cursor-pointer">
              <div className="bg-orange flex justify-center items-center w-1/3 h-20 rounded-md group-hover:bg-white transition duration-300">
                <FaNetworkWired className=" text-white w-10 h-10 group-hover:text-bleu transition duration-300" />
              </div>
              <div className="text-white space-y-4">
                <p className=" font-PRegular text-xs group-hover:text-bleu group-hover:font-PMedium transition duration-300">
                  01
                </p>
                <p className=" font-PMedium text-xl">
                  Développer son réseau professionnel et son chiffre
                  d&apos;affaires
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-bleu w-[18rem] h-[18rem] rounded-2xl flex flex-col py-8 px-8 gap-4 group hover:bg-orange transition duration-300 hover:scale-110 hover:cursor-pointer">
              <div className="bg-orange flex justify-center items-center w-1/3 h-20 rounded-md group-hover:bg-white transition duration-300">
                <IoBusinessOutline className=" text-white w-10 h-10 group-hover:text-bleu transition duration-300" />
              </div>
              <div className="text-white space-y-4">
                <p className=" font-PRegular text-xs group-hover:text-bleu group-hover:font-PMedium transition duration-300">
                  02
                </p>
                <p className=" font-PMedium text-xl">
                  Faire connaître son activité
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-bleu w-[18rem] h-[18rem] rounded-2xl flex flex-col py-8 px-8 gap-4 group hover:bg-orange transition duration-300 hover:scale-110 hover:cursor-pointer">
              <div className="bg-orange flex justify-center items-center w-1/3 h-20 rounded-md group-hover:bg-white transition duration-300">
                <HiOutlineUserGroup className=" text-white w-10 h-10 group-hover:text-bleu transition duration-300" />
              </div>
              <div className="text-white space-y-4">
                <p className=" font-PRegular text-xs group-hover:text-bleu group-hover:font-PMedium transition duration-300">
                  03
                </p>
                <p className=" font-PMedium text-xl">
                  Être recommandé par ses membres
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-bleu w-[18rem] h-[18rem] rounded-2xl flex flex-col py-8 px-8 gap-4 group hover:bg-orange transition duration-300 hover:scale-110 hover:cursor-pointer">
              <div className="bg-orange flex justify-center items-center w-1/3 h-20 rounded-md group-hover:bg-white transition duration-300">
                <MdCurrencyExchange className=" text-white w-10 h-10 group-hover:text-bleu transition duration-300" />
              </div>
              <div className="text-white space-y-4">
                <p className=" font-PRegular text-xs group-hover:text-bleu group-hover:font-PMedium transition duration-300">
                  04
                </p>
                <p className=" font-PMedium text-xl">
                  Échanger des opportunités d&apos;affaires qualifiées
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" bg-bleu w-[18rem] h-[18rem] rounded-2xl flex flex-col py-8 px-8 gap-4 group hover:bg-orange transition duration-300 hover:scale-110 hover:cursor-pointer">
              <div className="bg-orange flex justify-center items-center w-1/3 h-20 rounded-md group-hover:bg-white transition duration-300">
                <LiaBuromobelexperte className=" text-white w-10 h-10 group-hover:text-bleu transition duration-300" />
              </div>
              <div className="text-white space-y-4">
                <p className=" font-PRegular text-xs group-hover:text-bleu group-hover:font-PMedium transition duration-300">
                  05
                </p>
                <p className=" font-PMedium text-xl">
                  Capitaliser sur le retour d’expérience des membres du club
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className=" text-bleu font-PMedium text-lg mb-4">
          Le tout, dans une ambiance conviviale, chaleureuse et bienveillante.
        </p>

        <Link
          href="#"
          className="text-white px-6 py-3 bg-orange uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-max"
        >
          DEVENIR MEMBRE
        </Link>
      </div>
    </section>
  );
}
