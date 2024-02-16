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
  console.log(item);

  return (
    <div className=" bg-white group hover:bg-orange flex flex-col w-full shadow-xl rounded-xl p-8 gap-4">
      <p className=" text-bleu font-PMedium italic">
        « Notre club réunit des dirigeants passionnés qui souhaitent échanger
        autour des thématiques du numérique (mais pas que) et générer des leads
        qualifiés. Depuis notre création, nous travaillons aussi sur la cohésion
        du groupe en partageant sur les expériences de chacun et en organisant
        des activités hors du groupe (rendez-vous croisés, visites d’entreprise,
        ateliers…) »
      </p>
      <div className="flex items-center gap-4">
        <Image
          src="/img/kt.jpg"
          alt="Footer Image"
          width={50}
          height={50}
          className=" rounded-full"
        />
        <div>
          <h4 className=" font-PBold text-sm text-bleu">{name}</h4>
          <p className=" uppercase text-xs font-PMedium text-bleu">{company}</p>
        </div>
      </div>
    </div>
  );
}
