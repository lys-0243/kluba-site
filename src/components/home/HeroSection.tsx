import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuLinks, SocialsNetworks } from "../constants";
import MenuItems from "../minimals/menu";
import { appRoutes } from "../utils/routes";

export default function HeroSection() {
  return (
    <section className="bg-[url('/img/home/bg-home.png')] bg-cover min-h-screen p-2 relative">
        <MenuItems />
      <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl lg:max-w-screen-2xl">

        <div className="flex items-center ">
          <div className=" w-1/2 text-bleu flex flex-col gap-10 pt-[12%]">
            <h1 className=" font-PExtra text-4xl">
              Trouvez des opportunités d’investissement et les meilleurs
              conseils pour entreprendre ou accroître votre business.
            </h1>

            <p className=" font-PMedium text-lg">
              Kluba est un club d’affaires des entrepreneurs en croissance et
              des professionnels qui se lancent en business, créé par Kaapital
              Group
            </p>

            <Link
              href={appRoutes.signUp}
              className="text-white px-6 py-3 bg-orange uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-1/2 animate-bounce animate-ease-in-out"
            >
              Rejoignez gratuitement le Club
            </Link>
          </div>
        </div>
      </div>
      <div className=" absolute right-0 top-[40%]">
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
