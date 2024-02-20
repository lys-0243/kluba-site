"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import { TestimoniesElement } from "../constants";
import TestimonyCard from "../Crads/Testimony";

const handleDragStart = (e:any) => e.preventDefault();

const items = TestimoniesElement.map((item) => (
  <TestimonyCard text={item.text} key={item.name} imgSrc={item.imgSrc} name={item.name} company={item.company} item={item} />
))

export default function Testimonies() {

  let dots = Math.ceil(TestimoniesElement.length / 3)

  console.log(dots)

  return (
    <section className=" bg-bleu py-16 space-y-8 flex flex-col justify-center">
      <div className=" space-y-4">
        <div className="flex justify-center items-center gap-4 uppercase font-PBold tracking-wider text-lg text-white">
          <div className=" bg-orange h-[3px] w-[5%]"></div>
          <p>Les avis de nos clients</p>
          <div className=" bg-orange h-[3px] w-[5%]"></div>
        </div>
        <h2 className=" text-5xl font-PBold text-white text-center">
          Temoignages
        </h2>
      </div>

      <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl px-10 flex gap-4">
      
        <div className="flex gap-4 flex-wrap justify-center">

          
          <div className=" bg-white group hover:bg-orange flex flex-col  shadow-xl rounded-xl p-8 gap-4 w-[32%] hover:scale-105 transition duration-200 cursor-pointer hover:cursor-pointer">
            <p className="group-hover:text-white text-bleu font-PMedium italic">
              « Notre club réunit des dirigeants passionnés qui souhaitent
              échanger autour des thématiques du numérique (mais pas que) et
              générer des leads qualifiés. Depuis notre création, nous
              travaillons aussi sur la cohésion du groupe en partageant sur les
              expériences de chacun et en organisant des activités hors du
              groupe (rendez-vous croisés, visites d&quot;entreprise, ateliers…) »"
            </p>
            <div className="flex items-center gap-4">
              <div className=" w-12 h-12 bg-[url('/img/kt.jpg')] rounded-full bg-cover"></div>

              <div>
                <h4 className="group-hover:text-white font-PBold text-sm text-bleu">
                  Kristen Tshika
                </h4>
                <p className=" group-hover:text-white uppercase text-xs font-PMedium text-bleu">
                  CEO KTC
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-white group hover:bg-orange flex flex-col  shadow-xl rounded-xl p-8 gap-4 w-[32%]">
            <p className="group-hover:text-white text-bleu font-PMedium italic">
              « Notre club réunit des dirigeants passionnés qui souhaitent
              échanger autour des thématiques du numérique (mais pas que) et
              générer des leads qualifiés. Depuis notre création, nous
              travaillons aussi sur la cohésion du groupe en partageant sur les
              expériences de chacun et en organisant des activités hors du
              groupe (rendez-vous croisés, visites d&quot;entreprise, ateliers…) »"
            </p>
            <div className="flex items-center gap-4">
              <div className=" w-12 h-12 bg-[url('/img/kristen.jpg')] rounded-full bg-cover"></div>

              <div>
                <h4 className="group-hover:text-white font-PBold text-sm text-bleu">
                  Sylvain Lys
                </h4>
                <p className=" group-hover:text-white uppercase text-xs font-PMedium text-bleu">
                  Dev LycGroup
                </p>
              </div>
            </div>
          </div>

          <div className=" bg-white group hover:bg-orange flex flex-col  shadow-xl rounded-xl p-8 gap-4 w-[32%]">
            <p className="group-hover:text-white text-bleu font-PMedium italic">
              « Notre club réunit des dirigeants passionnés qui souhaitent
              échanger autour des thématiques du numérique (mais pas que) et
              générer des leads qualifiés. Depuis notre création, nous
              travaillons aussi sur la cohésion du groupe en partageant sur les
              expériences de chacun et en organisant des activités hors du
              groupe (rendez-vous croisés, visites d&quot;entreprise, ateliers…) »"
            </p>
            <div className="flex items-center gap-4">
              <div className=" w-12 h-12 bg-[url('/img/blog.png')] rounded-full bg-cover"></div>
              <div>
                <h4 className="group-hover:text-white font-PBold text-sm text-bleu">
                  Beaudrick K.
                </h4>
                <p className=" group-hover:text-white uppercase text-xs font-PMedium text-bleu">
                  CEO Djodici
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex gap-3 justify-center">
        
        <div className=" bg-white h-2 w-2 rounded-full cursor-pointer"></div>
        <div className=" h-2 bg-orange w-16 rounded-full cursor-pointer"></div>
        <div className=" bg-white h-2 w-2 rounded-full cursor-pointer"></div>
        <div className=" bg-white h-2 w-2 rounded-full"></div>
        <div className=" bg-white h-2 w-2 rounded-full"></div>
      </div>
    </section>
  );
}
