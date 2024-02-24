import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBullseye } from "react-icons/fa6";
interface Props {
  title: string;
  imageUrl: string;
  description: string;
  hrefLink: string;
}

export default function ProductCard({
  title,
  imageUrl,
  description,
  hrefLink,
}: Props) {
  return (
    <div className="text-center flex flex-col items-center gap-4">
      <div className="bg-white rounded-xl shadow-2xl w-[30rem] p-5 group hover:bg-orange flex flex-col gap-4 items-center transition duration-200 hover:scale-105">
        <div className=" h-[15rem]">
          <Image
            src={imageUrl}
            width={1920}
            height={1024}
            style={{ objectFit: "contain" }}
            alt=""
            className=" w-full rounded-xl h-full object-cover"
          />
        </div>
        <div className="flex gap-2 items-center justify-center">
          <FaBullseye className="text-orange w-10 h-10 group-hover:text-white transition duration-150" />
          <h3 className=" text-text font-PBold text-xl group-hover:text-white transition duration-150">
            {title}
          </h3>
        </div>

        <p className="text-text font-PRegular group-hover:text-white transition duration-150">
          {description}
        </p>
        <div className=" text-white bg-orange group-hover:bg-white group-hover:text-text w-max px-6 py-3 rounded-2xl flex justify-center items-center hover:scale-90 transition duration-200">
          <Link href={""} className="font-PMedium tracking-wider text-xl">
            Voir détails
          </Link>
        </div>
      </div>
    </div>
  );
}
