import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Blog() {
  return (
    <section className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl flex flex-col gap-8 mt-9">
      <h2 className=" text-bleu text-4xl font-black font-PBold text-center">
        Blog
      </h2>

      <div className="grid grid-cols-3 justify-center items-center gap-7 px-12">
        <div className="group hover:bg-orange flex flex-col w-full shadow-xl rounded-xl p-5 gap-4 hover:cursor-pointer">
          <Image
            src="/img/blog.png"
            alt="Footer Image"
            width={250}
            height={250}
            className=" rounded-lg w-full"
          />
          <h3 className=" text-bleu font-PBold group-hover:text-white text-lg leading-5 transition duration-150">
            Comment sont définies les allocations aux levées de fonds ?
          </h3>
          <p className=" text-text font-PMedium text-[13px] group-hover:text-white">
            l existe cinq niveaux d’adhésion au club allant de Bronze à Diamond,
            qui font varier pour chaque levée de fonds, le montant
          </p>

          <div className=" flex justify-end">
            <Link
              href="#"
              className="text-white px-6 py-3 bg-orange uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-max group-hover:text-orange group-hover:bg-white transition duration-150"
            >
              EN savoir plus
            </Link>
          </div>
        </div>

        <div className="group hover:bg-orange flex flex-col w-full shadow-xl rounded-xl p-5 gap-4 hover:cursor-pointer">
          <Image
            src="/img/blog.png"
            alt="Footer Image"
            width={250}
            height={250}
            className=" rounded-lg w-full"
          />
          <h3 className=" text-bleu font-PBold group-hover:text-white text-lg leading-5 transition duration-150">
            Comment sont définies les allocations aux levées de fonds ?
          </h3>
          <p className=" text-text font-PMedium text-[13px] group-hover:text-white">
            l existe cinq niveaux d’adhésion au club allant de Bronze à Diamond,
            qui font varier pour chaque levée de fonds, le montant
          </p>

          <div className=" flex justify-end">
            <Link
              href="#"
              className="text-white px-6 py-3 bg-orange uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-max group-hover:text-orange group-hover:bg-white transition duration-150"
            >
              EN savoir plus
            </Link>
          </div>
        </div>

        <div className="group hover:bg-orange flex flex-col w-full shadow-xl rounded-xl p-5 gap-4 hover:cursor-pointer">
          <Image
            src="/img/blog.png"
            alt="Footer Image"
            width={250}
            height={250}
            className=" rounded-lg w-full"
          />
          <h3 className=" text-bleu font-PBold group-hover:text-white text-lg leading-5 transition duration-150">
            Comment sont définies les allocations aux levées de fonds ?
          </h3>
          <p className=" text-text font-PMedium text-[13px] group-hover:text-white">
            l existe cinq niveaux d’adhésion au club allant de Bronze à Diamond,
            qui font varier pour chaque levée de fonds, le montant
          </p>

          <div className=" flex justify-end">
            <Link
              href="#"
              className="text-white px-6 py-3 bg-orange uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-max group-hover:text-orange group-hover:bg-white transition duration-150"
            >
              EN savoir plus
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center ">
        <Link
          href="#"
          className="group w-max flex flex-col justify-center items-center p-3  transition duration-300"
        >
          <p className=" group-hover:text-base uppercase text-sm font-PMedium text-bleu transition duration-300">
            en savoir plus
          </p>
          <FaChevronDown className=" text-orange text-base group-hover:text-lg transition duration-300" />
        </Link>
      </div>
    </section>
  );
}
