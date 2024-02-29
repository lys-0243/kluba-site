import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuLinks, SocialsNetworks } from "../constants";
import MenuItems from "../minimals/menu";
import { appRoutes } from "../utils/routes";
import DefaultBtn from "../minimals/DefaultBtn";

export default function HeroSection() {
  return (
    <section className="bg-[url('/img/home/bg-sm.png')] md:bg-[url('/img/home/bg-home-lg.png')] lg:bg-[url('/img/home/bg-home.png')] bg-cover h-[50rem] relative">
      <MenuItems />
      <div className=" px-5 mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10">
        <div className=" max-h-screen w-full md:w-2/3 lg:w-1/2 text-bleu flex flex-col mt-24 md:mt-12 lg:mt-36 gap-10">
          <h1 className=" hidden md:grid font-PExtra font-black text-5xl">
            Trouvez des opportunités d’investissement et les meilleurs conseils
            pour entreprendre ou accroître votre business.
          </h1>

          <h1 className="md:hidden font-PExtra md:text-4xl text-3xl lg:hidden text-bleu drop-shadow-xl w-2/3">
            Trouvez des opportunités d’investissement et les meilleurs conseils
            pour entreprendre ou accroître votre business.
          </h1>

          <div className=" bg-white bg-opacity-20  rounded-lg p-5 lg:bg-transparent lg:backdrop-blur-none lg:p-0">
            <p className=" font-PMedium text-lg">
              Kluba est un club d’affaires des entrepreneurs en croissance et
              des professionnels qui se lancent en business, créé par Kaapital
              Group
            </p>
          </div>

          <DefaultBtn
            href={appRoutes.signUp}
            text={"rejoindre gratuitement le club"}
            animated={true}
            color="orange"
          />
        </div>
      </div>

      <div className=" absolute right-0 top-[40%] hidden lg:grid">
        <div className="flex gap-3 flex-col bg-[#DCF598] bg-opacity-10 p-5 rounded-tl-2xl rounded-bl-2xl">
          {SocialsNetworks.map((item) => (
            <Link href={item.href} key={item.name}>
              <Image
                src={item.icon}
                alt={item.name}
                width={40}
                height={40}
                className=" hover:border-3 border-orange rounded-full transition duration-200 ease-in"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
