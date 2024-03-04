"use client";
import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RiLoader2Line } from "react-icons/ri";

export default function Form({ email }: { email: string }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const code = formData.get("code");

    const response = await fetch(`/api/auth/activation`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        code: formData.get("code"),
      }),
    });
    if (response.ok) {
      toast.success("Compte activé");
      router.push(`/auth/signin`);
    }
  };


  return (
    <form className="mt-9" onSubmit={handleSubmit} method="post">
      <div className="w-full flex flex-col gap-3">
        <div className="relative w-full  h-10">
          <input
            type="email"
            name="email"
            placeholder=" "
            required
            className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
          />
          <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
            Email
          </label>
        </div>

        <div className="relative w-full  h-10">
          <input
            type="text"
            name="code"
            className="peer w-full h-full bg-transparent text-border-bleulight font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-grayHard disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-grayHard  border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-grayHard focus:border-grayHard"
            placeholder=" "
          />
          <label className=" text-sm font-PRegular caret-text flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate  leading-tight peer-focus:leading-tight peer-disabled:text-transparent  transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-bleulight peer-focus:before:!border-gray-900 after:border-bleulight peer-focus:after:!border-gray-900">
            Code OTP
          </label>
        </div>
      </div>

      {loading ? (
        <button
          type="submit"
          disabled
          className="mt-4 hover:cursor-not-allowed text-white px-6 py-3 bg-grayHard font-PMedium text-sm rounded-xl flex justify-center items-center w-full hover:scale-95 transition duration-200 ease-in-out"
        >
          <RiLoader2Line className="animate-spin text-orange h-6 w-6" />
        </button>
      ) : (
        <button
          type="submit"
          className=" mt-4 text-white px-6 py-3 bg-orange font-PMedium text-sm rounded-xl flex justify-center items-center w-full hover:scale-95 transition duration-200 ease-in-out"
        >
          S&apos;inscrire
        </button>
      )}
    </form>
  );
}
