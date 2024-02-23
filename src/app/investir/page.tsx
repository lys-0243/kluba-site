"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

import MenuBG from "@/components/minimals/menuBg";

export default function InvestirEpargner() {
  return (
    <>
      <MenuBG />

      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        // modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl h-[25rem] bg-orange mt-3 rounded-xl "
      >
        <SwiperSlide className="relative">
          <div className="absolute text-left w-1/2 left-16 top-10">
            <h2 className=" text-[5rem] font-PBold text-orange">KWI</h2>
            <p className=" text-bleu font-PMedium">
              Rejoignez la chaîne de fast-food KWI <br /> <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                exercitationem est accusantium, eius ipsa voluptatum voluptate,
                reiciendis iusto deleniti natus eveniet porro rerum cumque
                labore
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/img/home/bg-home.png"
              alt="Logo Kluba"
              width={1920}
              height={1080}
              style={{ objectFit: "fill" }}
              className=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute text-left w-1/2 left-16 top-10">
            <h2 className=" text-[5rem] font-PBold text-orange">Token Pay</h2>
            <p className=" text-bleu font-PMedium">
              Acheter vos Token Pay <br /> <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                exercitationem est accusantium, eius ipsa voluptatum voluptate,
                reiciendis iusto deleniti natus eveniet porro rerum cumque
                labore
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/img/home/bg-home.png"
              alt="Logo Kluba"
              width={1920}
              height={1080}
              style={{ objectFit: "fill" }}
              className=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute text-left w-1/2 left-16 top-10">
            <h2 className=" text-[4rem] font-PBold text-orange">
              Bot de trading auto
            </h2>
            <p className=" text-bleu font-PMedium">
              Acheter votre bot de trading automatique
              <br /> <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                exercitationem est accusantium, eius ipsa voluptatum voluptate,
                reiciendis iusto deleniti natus eveniet porro rerum cumque
                labore
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/img/home/bg-home.png"
              alt="Logo Kluba"
              width={1920}
              height={1080}
              style={{ objectFit: "fill" }}
              className=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute text-left w-1/2 left-16 top-10">
            <h2 className=" text-[5rem] font-PBold text-orange">
              Corporate video
            </h2>
            <p className=" text-bleu font-PMedium">
              Une vidéo corporate offerte à 150$ <br /> <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                exercitationem est accusantium, eius ipsa voluptatum voluptate,
                reiciendis iusto deleniti natus eveniet porro rerum cumque
                labore
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/img/home/bg-home.png"
              alt="Logo Kluba"
              width={1920}
              height={1080}
              style={{ objectFit: "fill" }}
              className=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="absolute text-left w-1/2 left-16 top-10">
            <h2 className=" text-[5rem] font-PBold text-orange">
              Levée de fonds
            </h2>
            <p className=" text-bleu font-PMedium">
              Vous cherchez à lever des fonds <br /> <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                exercitationem est accusantium, eius ipsa voluptatum voluptate,
                reiciendis iusto deleniti natus eveniet porro rerum cumque
                labore
              </span>
            </p>
          </div>
          <div>
            <Image
              src="/img/home/bg-home.png"
              alt="Logo Kluba"
              width={1920}
              height={1080}
              style={{ objectFit: "fill" }}
              className=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
