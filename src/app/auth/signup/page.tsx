import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import Link from "next/link";
import { appRoutes } from "@/components/utils/routes";
import SocialsLogin from "@/components/SocialsLogin";

export default function SignUp() {
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

        <div className=" bg-white w-[28rem] rounded-xl p-6 shadow-xl">
          <div>
            <p className=" text-2xl font-PBold">Créer un compte</p>
            <p className=" font-PMedium">
              Vous avez déjà un compte ? {}
              <Link href={appRoutes.signIn} className=" text-orange">
                Se connecter
              </Link>
            </p>
          </div>

          <form action="" className=" mt-9">
            <div className="w-full flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative  h-10">
                  <input
                    className="peer w-full h-full bg-transparent text-text font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
                    placeholder=" "
                    type="text"
                  />
                  <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
                    Prénom
                  </label>
                </div>
                <div className="relative   h-10">
                  <input
                    type="text"
                    className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
                    placeholder=" "
                  />
                  <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
                    Nom
                  </label>
                </div>
              </div>

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
                  type="phone"
                  className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
                  placeholder=" "
                />
                <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
                  Téléphone
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

              <div className="relative w-full  h-10">
                <input
                  type="password"
                  className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
                  placeholder=" "
                />
                <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
                  Confirmer
                </label>
              </div>
            </div>

            <div className="inline-flex items-start">
              <label
                className="relative flex items-start p-3 rounded-full cursor-pointer text-xs font-PLight gap-2 text-text"
                htmlFor="link"
              >
                <input
                  type="checkbox"
                  className=" relative h-5 w-5 cursor-pointer checked:accent-orange  rounded-md border border-orange transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-orange before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                />
                En cliquant sur Créer un compte, je reconnais avoir lu et
                accepté les conditions d&apos;utilisation et la politique de
                confidentialité.
              </label>
            </div>

            <button
              type="submit"
              className="mt-4 text-white px-6 py-3 bg-orange font-PMedium text-sm rounded-xl flex justify-center items-center w-full hover:scale-95 transition duration-200 ease-in-out"
            >
              S&apos;inscrire
            </button>
          </form>
          <SocialsLogin />
        </div>
      </div>
    </div>
  );
}
