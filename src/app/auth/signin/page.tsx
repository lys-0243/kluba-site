import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { appRoutes } from "@/components/utils/routes";
import SocialsLogin from "@/components/SocialsLogin";

export default function SignIn() {
  return (
    <div className="">
      <div className="flex items-center justify-end gap-10 mr-24  min-h-screen">
        <div className=" flex gap-5 flex-col">
          <Image
            src="/img/logos/kaapital-logo.png"
            alt="Logo Kluba"
            width={180}
            height={102}
            className=""
          />
          <h2 className=" text-3xl font-PBold">
            Mon espace <br /> Club d&apos;affaires
          </h2>
          <div className=" text-sm font-PMedium">
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

        <div className=" bg-white w-[25rem] rounded-xl p-6 shadow-xl">
          <div>
            <p className=" text-2xl font-PBold">Se connecter</p>
            <p className=" font-PMedium">
              Nouvel utilisateur ? {"     "}
              <Link href={appRoutes.signUp} className=" text-orange">
                Créer un compte
              </Link>
            </p>
          </div>

          <form action="" className=" mt-9">
            <div className="w-full flex flex-col gap-3">
              <div className="relative w-full  h-10">
                <input
                  type="email"
                  className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
                  placeholder=" "
                />
                <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
                  Email
                </label>
              </div>

              <div className="relative w-full  h-10">
                <input
                  type="password"
                  className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
                  placeholder=" "
                />
                <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
                  Mot de passe
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className=" w-1/2">
                <Link
                  href="#"
                  className=" text-text hover:text-orange text-sm font-PMedium"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className=" w-1/2">
                <button
                  type="submit"
                  className=" text-white px-6 py-3 bg-orange font-PMedium text-sm rounded-xl flex justify-center items-center w-full hover:scale-95 transition duration-200 ease-in-out"
                >
                  Se connecter
                </button>
              </div>
            </div>
          </form>

          <SocialsLogin/>
        </div>
      </div>
    </div>
  );
}
