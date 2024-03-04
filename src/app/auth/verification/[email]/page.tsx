import React from "react";
import Link from "next/link";
import { appRoutes } from "@/components/utils/routes";
import Form from "./form";
import Image from "next/image";

export default function Verification({
  params,
}: {
  params: { email: string };
}) {
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
        </div>

        <div className="w-full bg-white sm:w-[28rem] rounded-xl p-6 shadow-xl">
          <div>
            <p className=" text-2xl font-PBold">Vérifez votre compte</p>
            <p className=" font-PMedium">
              Nous avons envoyé un code à ce mail :{}
              <span className=" text-orange">{params.email}</span>
            </p>
          </div>

          <Form email={params.email.toString()} />
        </div>
      </div>
    </div>
  );
}
