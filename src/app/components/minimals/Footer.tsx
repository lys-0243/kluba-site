import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SocialsNetworks } from "../constants";
import BeforeFooter from "../home/BeforeFooter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" relative mt-[17rem]">
      <div className="before-footer flex items-center justify-between p-5">
        <div className=" space-y-5 pl-10">
          <h3 className=" font-PBold text-white text-4xl">
            Club Kluba, la solution la <br /> plus performante <br /> pour
            investir en startups.
          </h3>
          <Link
            href="#"
            className="text-orange px-6 py-3 bg-white uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-max"
          >
            DEVENIR MEMBRE
          </Link>
        </div>
        <div>
          <Image
            src="/img/home/footer.png"
            alt="Footer Image"
            width={350}
            height={350}
            className=" rounded-lg"
          />
        </div>
      </div>

      <footer className=" bg-bleu pb-16 pt-60">
        <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-xl flex items-start gap-20">
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
    </div>
  );
}
