import Link from "next/link";
import React from "react";
import { MenuLinks } from "../constants";
import Image from "next/image";
import { appRoutes } from "../utils/routes";

export default function MenuBG() {
  return (
    <div className="shadow-lg bg-bleu py-3">
      <header className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl ">
        <nav className=" flex justify-between items-center ">
          <div>
            <Link href="/">
              <Image
                src="/img/logos/kaapital-logo-blanc.png"
                alt="Logo Kluba"
                width={110}
                height={100}
              />
            </Link>
          </div>

          <div className=" text-text  space-x-8 text-base ">
            {MenuLinks.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="uppercase font-PExtra text-lg text-white  hover:border-b-2 border-orange"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className=" text-white bg-orange px-6 py-3 rounded-2xl flex justify-center items-center">
            <Link
              href={appRoutes.signUp}
              className=" uppercase font-PMedium tracking-wider text-sm"
            >
              S&apos;inscrire
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
