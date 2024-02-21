import React from "react";
import Image from "next/image";

export default function TestimonyCard({
  text,
  imgSrc,
  name,
  company,
  item,
}: {
  text: String;
  imgSrc: String;
  name: String;
  company: String;
  item: {};
}) {
  return (
    <div className=" bg-white group hover:bg-orange flex flex-col  shadow-xl rounded-xl p-8 gap-4 hover:cursor-text h-72 ">
      <p className=" group-hover:text-white text-bleu font-PMedium italic">
        {text}
      </p>
      <div className="flex items-center gap-4">
        <Image
          src={imgSrc as string}
          alt="Footer Image"
          width={50}
          height={50}
          className=" rounded-full"
        />
        <div>
          <h4 className="group-hover:text-white font-PBold text-sm text-bleu">
            {name}
          </h4>
          <p className="group-hover:text-white uppercase text-xs font-PMedium text-bleu">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}
