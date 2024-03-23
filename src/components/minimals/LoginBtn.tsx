import Link from "next/link";
import React from "react";
import { appRoutes } from "../utils/routes";
import { getServerSession } from "next-auth";

export default async function LoginBtn() {
  const session = await getServerSession();
  return (
    <Link
      href={appRoutes.signUp}
      className="text-white bg-orange px-6 py-3 rounded-2xl flex justify-center items-center"
    >
      <p className=" uppercase font-PMedium tracking-wider text-sm">
        S&apos;inscrire
      </p>
    </Link>
  );
}
