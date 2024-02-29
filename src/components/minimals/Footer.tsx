import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SocialsNetworks } from "../constants";
import BeforeFooter from "./BeforeFooter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <BeforeFooter />
      <footer className="bg-bleu pb-16 pt-16 ">
        <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 flex items-start gap-20">
          <div>
            <div>
              <Link href="/">
                <Image
                  src="/img/logos/kaapital-logo-blanc.png"
                  alt="Logo Kluba"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
            <div className="flex gap-3 pt-8 rounded-tl-2xl rounded-bl-2xl">
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
            <p className=" text-grayHard pt-4  opacity-65">
              &copy; {currentYear}. Kluba-Tous droits réservés
            </p>
          </div>

          <div>
            <h3 className=" text-orange font-PBold text-lg">Vous informer</h3>
            <div className=" flex flex-col gap-3 font-PRegular text-white opacity-65">
              <Link href="#">Accueil</Link>
              <Link href="#">Temoignages</Link>
              <Link href="#">Contact</Link>
              <Link href="#">Mentions légales</Link>
              <Link href="#">Politique de confidentialité</Link>
            </div>
          </div>

          <div>
            <h3 className=" text-orange font-PBold text-lg">Club d’affires</h3>
            <div className=" flex flex-col gap-3 font-PRegular text-white opacity-65">
              <Link href="#">Créer un Club</Link>
              <Link href="#">Les Clubs</Link>
              <Link href="#">Connexion</Link>
              <Link href="#">Conditions Générales d’Utilisation</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
