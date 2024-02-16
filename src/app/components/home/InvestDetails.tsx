import Link from "next/link";
import React from "react";
import { InvestItems } from "../constants";

export default function InvestDetails() {
  return (
    <section className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:px-10 py-12">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <h2 className=" text-bleu text-4xl font-black font-PBold">
            Investir <span className=" text-orange">/</span> <br />
            Epargner
          </h2>
          <p className=" text-bleu text-sm  font-PRegular">
            Bienvenue au club dédié à la croissance des entrepreneurs et à
            l&apos;éducation financière. Nous sommes là pour vous aider à
            prendre des décisions éclairées en matière d&apos;argent et à
            développer vos affaires.
          </p>
        </div>

        <div className="bg-[url('/img/home/invest1.png')] rounded-xl flex relative p-6 h-56 w-full">
          <div className="flex absolute bottom-4 justify-between">
            <h3 className=" text-white font-PBold w-1/2 custom-drop-shadow">
              Acheter votre bot de trading automatique
            </h3>
            <Link
              href="#"
              className="text-white px-4 py-1 bg-orange uppercase font-PMedium tracking-wider text-xs rounded-2xl flex justify-center items-center w-max"
            >
              EN savoir plus
            </Link>
          </div>
        </div>

        <div className="bg-[url('/img/home/invest2.png')] rounded-xl flex relative p-6 h-56">
          <div className="flex absolute bottom-4 justify-between">
            <h3 className=" text-white font-PBold w-1/2 custom-drop-shadow">
              Rejoignez la chaîne de fast-food KWI
            </h3>
            <Link
              href="#"
              className="text-white px-4 py-1 bg-orange uppercase font-PMedium tracking-wider text-xs rounded-2xl flex justify-center items-center w-max"
            >
              EN savoir plus
            </Link>
          </div>
        </div>

        <div className="bg-[url('/img/home/invest3.png')] rounded-xl flex relative p-6 h-56">
          <div className="flex absolute bottom-4 justify-between">
            <h3 className=" text-white font-PBold w-1/2 custom-drop-shadow">
              Une vidéo corporate offerte à 150$
            </h3>
            <Link
              href="#"
              className="text-white px-4 py-1 bg-orange uppercase font-PMedium tracking-wider text-xs rounded-2xl flex justify-center items-center w-max"
            >
              EN savoir plus
            </Link>
          </div>
        </div>

        <div className="bg-[url('/img/home/invest4.png')] rounded-xl flex relative p-6 h-56">
          <div className="flex absolute bottom-4 justify-between">
            <h3 className=" text-white font-PBold w-1/2 custom-drop-shadow">
              Acheter vos Token Pay
            </h3>
            <Link
              href="#"
              className="text-white px-4 py-1 bg-orange uppercase font-PMedium tracking-wider text-xs rounded-2xl flex justify-center items-center w-max"
            >
              EN savoir plus
            </Link>
          </div>
        </div>

        <div className="bg-[url('/img/home/invest5.png')] rounded-xl flex relative p-6 h-56">
          <div className="flex absolute bottom-4 justify-between">
            <h3 className=" text-white font-PBold w-1/2 custom-drop-shadow">
              Vous cherchez à lever des fonds
            </h3>
            <Link
              href="#"
              className="text-white px-4 py-1 bg-orange uppercase font-PMedium tracking-wider text-xs rounded-2xl flex justify-center items-center w-max"
            >
              EN savoir plus
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
