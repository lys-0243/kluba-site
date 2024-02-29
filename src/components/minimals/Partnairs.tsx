import React from "react";
import Marquee from "react-fast-marquee";
import { PartnairsItems } from "../constants";
import SponsorCard from "../Crads/SponsorCard";

export default function Partnairs() {
  return (
    <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 pt-6">
      <p className=" text-center text-xl font-PBold text-bleu">
        Nos partenaires
      </p>
      <div className="grayImg opacity-60">
        <div className="">
          <Marquee className="flex items-center">
            {PartnairsItems.map((item, i) => (
              <SponsorCard logo={item.logo} text={item.text} key={i} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
