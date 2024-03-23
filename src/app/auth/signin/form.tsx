"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { RiLoader2Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/components/utils/routes";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response?.ok) {
      toast.success("Connexion réussie");
      router.push(appRoutes.home);
    } else {
      setLoading(false);
      toast.error("Compte non trouvé ! Veuillez vérifier vos identifiants");
      return;
    }
  };
  return (
    <form onSubmit={handleSubmit} className=" mt-9">
      <div className="w-full flex flex-col gap-3">
        <div className="relative w-full  h-10">
          <input
            type="email"
            name="email"
            required
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
            name="password"
            required
            className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
            placeholder=" "
          />
          <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
            Mot de passe
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:flex lg:flex-row lg:justify-between lg:items-center mt-4 ">
        <div className=" w-1/2">
          <Link
            href="#"
            className=" text-text hover:text-orange text-sm font-PMedium"
          >
            Mot de passe oublié ?
          </Link>
        </div>
        <div className=" w-1/2">
          {loading ? (
            <button
              type="submit"
              disabled
              className="bg-grayHard hover:cursor-not-allowed text-white px-6 py-3 font-PMedium text-sm rounded-xl flex justify-center items-center w-full hover:scale-95 transition duration-200 ease-in-out"
            >
              <RiLoader2Line className="animate-spin text-orange h-6 w-6" />
            </button>
          ) : (
            <button
              type="submit"
              className=" text-white px-6 py-3 bg-orange font-PMedium text-sm rounded-xl flex justify-center items-center w-full hover:scale-95 transition duration-200 ease-in-out"
            >
              Se connecter
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
