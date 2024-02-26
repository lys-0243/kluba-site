"use client";
import React from "react";
import { FaBullseye } from "react-icons/fa6";
import Image from "next/image";

import MenuBG from "@/components/minimals/menuBg";
import Link from "next/link";
import Footer from "@/components/minimals/Footer";
import { ProductsItems } from "@/components/constants";
import ProductCard from "@/components/Crads/ProductCard";

export default function InvestirEpargner() {
  return (
    <>
      <MenuBG />

      <main className=" ">
        <div className=" h-[25rem]  bg-[url('/img/invest0.jpg')] bg-cover flex  flex-col justify-center">
          <div className="text-white mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl text-left ">
            <h2 className=" text-[5rem] font-PBold leading-none">
              Investissez <br />
              Epargnez
            </h2>
            <p className="font-PMedium w-1/2 mt-6">
              Rejoignez le club en choisissant un produit de fast-food KWI{" "}
              <br /> <br />
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                exercitationem est accusantium, eius ipsa voluptatum voluptate,
                reiciendis iusto deleniti natus eveniet porro rerum cumque
                labore
              </span>
            </p>
          </div>
        </div>

        <div className="text-center mt-12 flex flex-col items-center gap-4">
          <h2 className=" text-5xl font-PBold text-text">
            Choisis le produit qui <br />
            te convient le mieux
          </h2>
          <p className=" font-PMedium w-1/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            doloremque deleniti quas minus doloribus sequi!
          </p>
        </div>

        <section className="flex gap-8 mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl flex-wrap justify-center items-center mt-12 mb-20">
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

        <div className=" h-[1px] w-full bg-text mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl opacity-25"></div>

        <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl flex flex-col justify-center items-center gap-6 mt-5">
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
        <div className=" h-[1px] w-full bg-text mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl opacity-25 my-14"></div>
      </main>

      <Footer />
    </>
  );
}
