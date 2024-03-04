"use client";
import React from "react";
import { FaBullseye } from "react-icons/fa6";
import Image from "next/image";

import MenuBG from "@/components/minimals/menuBg";
import Link from "next/link";
import Footer from "@/components/minimals/Footer";
import { ProductsItems } from "@/components/constants";
import ProductCard from "@/components/Crads/ProductCard";
import InvestLayout from "./layaout";

export default function InvestirEpargner() {
  return (
    <InvestLayout>
      <main className=" ">
        <div className=" lg:h-[25rem]  bg-[url('/img/invest0.jpg')] bg-cover flex  flex-col justify-center px-4 py-6">
          <div className="text-white mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 text-left ">
            <h2 className="text-[4rem] lg:text-[5rem] font-PBold leading-none">
              Investissez <br />
              Epargnez
            </h2>
            <p className="font-PMedium lg:w-1/2 mt-6">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                exercitationem est accusantium, eius ipsa voluptatum voluptate,
                reiciendis iusto deleniti natus eveniet porro rerum cumque
                labore
              </span>
            </p>
          </div>
        </div>

        <div className="text-center mt-12 flex flex-col items-center gap-4 mx-4">
          <h2 className=" text-5xl font-PBold text-text">
            Choisis le produit qui <br className="hidden md:flex" />
            te convient le mieux
          </h2>
          <p className=" font-PMedium md:w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            doloremque deleniti quas minus doloribus sequi!
          </p>
        </div>

        <section className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 flex flex-col  gap-7 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 justify-center items-center mt-16 px-5">
          {ProductsItems.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
              hrefLink={item.hrefLink}
            />
          ))}
        </section>

        <div className=" h-[1px] w-full bg-text mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 opacity-25 my-8"></div>

        <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col gap-6 text-center items-center">
            <h2 className=" text-4xl font-PBold">
              Besoin <br /> d&apos;assistance ?
            </h2>
            <p className=" font-PMedium text-lg">
              Tu veux etre guidé afin de choisir le bon produit ?
            </p>

            <div className=" text-white bg-orange group-hover:bg-white group-hover:text-text w-max px-6 py-3 rounded-2xl flex justify-center items-center hover:scale-90 transition duration-200">
              <Link href={""} className="font-PMedium tracking-wider text-xl">
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
        <div className=" h-[1px] w-full bg-text mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 opacity-25 my-8"></div>
      </main>
    </InvestLayout>
  );
}
