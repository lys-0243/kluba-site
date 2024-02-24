"use client";
import React, { useCallback, useEffect, useState } from "react";
import screenW from "../constants";

export default function KlubaTime() {
  const [y, setY] = useState(
    typeof window !== "undefined" ? window.scrollY : ""
  );
  const screeWidth = screenW();

  return (
    <section className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl lg:px-10 text-center my-12">
      <h2 className={"text-bleu font-PBold font-extrabold text-4xl pb-4"}>
        Club Kluba en seulement 6 mois, c&apos;est déjà :
      </h2>

      <div className="grid grid-cols-4 mt-6">
        <div className=" border-r-3 border-opacity-60 border-bleu mr-2 pr-4">
          <h3 className=" text-orange  font-PExtra text-5xl">+800</h3>
          <p className=" text-text font-PRegular text-lg">
            membres qui échangent quotidiennement sur le Forum de discussion
            Kluba.
          </p>
        </div>

        <div className=" border-r-3 border-opacity-60 border-bleu mr-2 pr-4">
          <h3 className=" text-orange  font-PExtra  text-5xl">+20</h3>
          <p className=" text-text font-PRegular text-lg">
            milles dollars levés dans des startups comme KWI, Kommerce, Fameux
            Consulting,etc.
          </p>
        </div>

        <div className=" border-r-3 border-opacity-60 border-bleu mr-2 pr-4">
          <h3 className=" text-orange  font-PExtra  text-5xl">60</h3>
          <p className=" text-text font-PRegular text-lg">
            Investisseurs privés et Business angels
          </p>
        </div>

        <div>
          <h3 className=" text-orange  font-PExtra  text-5xl">+5</h3>
          <p className=" text-text font-PRegular text-lg">
            experts de l&apos;investissement qui analysent les dossiers pour
            vous les proposer aux meilleures conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
