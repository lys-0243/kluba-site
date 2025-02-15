import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { appRoutes } from "@/components/utils/routes";
import SocialsLogin from "@/components/SocialsLogin";
import Form from "./form";

export default async function SignUp() {

  return (
    <div className="">
      <div className="flex flex-col gap-4 justify-center items-center sm:items-end sm:mr-14 lg:mr-20 sm:min-h-screen lg:flex lg:flex-row lg:items-center lg:justify-end">
        <div className="flex gap-5 flex-col justify-center items-center bg-white p-3 rounded-md bg-opacity-50 backdrop-blur-md sm:justify-end sm:items-end sm:bg-transparent sm:backdrop-blur-none lg:flex lg:items-start">
          <Link href={appRoutes.home} className="sm:hidden">
            <Image
              src="/img/logos/kaapital-logo.png"
              alt="Logo Kluba"
              width={140}
              height={79}
              className=""
            />
          </Link>
          <Link href={appRoutes.home} className="hidden sm:grid">
            <Image
              src="/img/logos/kaapital-logo.png"
              alt="Logo Kluba"
              width={180}
              height={102}
              className=""
            />
          </Link>
          <h2 className="hidden sm:grid text-2xl text-center lg:text-left lg:text-3xl font-PBold">
            Mon espace <br className="hidden lg:grid" /> Club d&apos;affaires
          </h2>

          <div className="hidden sm:grid text-sm font-PMedium">
            <p className="flex items-center gap-2">
              <FaCheckCircle className=" text-orange" /> Rejoindre un ou
              plusieurs Clubs sur toute la RDC
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className=" text-orange" /> Se faire des
              recommandations entre membres
            </p>
            <p className="flex items-center gap-2">
              <FaCheckCircle className=" text-orange" /> Développer votre réseau
              et votre chiffre d&apos;affaires
            </p>
          </div>
        </div>

        <div className="w-full bg-white sm:w-[28rem] rounded-xl p-6 shadow-xl">
          <div>
            <p className=" text-2xl font-PBold">Créer un compte</p>
            <p className=" font-PMedium">
              Vous avez déjà un compte ? {}
              <Link href={appRoutes.signIn} className=" text-orange">
                Se connecter
              </Link>
            </p>
          </div>

          <Form/>
          <SocialsLogin />
        </div>
      </div>
    </div>
  );
}
