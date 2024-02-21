import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import Link from "next/link";

export default function SocialsLogin() {
  return (
    <div>
      <div className="flex items-center justify-center gap-5 mt-4">
        <p className=" bg-grayHard w-[40%] h-[2px] rounded-full"></p>
        <p className=" text-grayHard font-PRegular">ou</p>
        <p className=" bg-grayHard w-[40%] h-[2px] rounded-full"></p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-text font-PMedium text-sm mt-4">
        <Link
          href={"#"}
          className="flex group hover:bg-orange justify-center items-center gap-2 border-[1px] rounded-md py-2 border-grayHard transition duration-200 ease-in-out hover:text-grayLight"
        >
          {" "}
          <FcGoogle /> <span> Goole</span>
        </Link>
        <Link
          href={"#"}
          className="flex group hover:bg-orange justify-center items-center gap-2 border-[1px] rounded-md py-2 border-grayHard transition duration-200 ease-in-out hover:text-grayLight"
        >
          {" "}
          <FaFacebook /> <span> Facebook</span>
        </Link>
        <Link
          href={"#"}
          className="flex group hover:bg-orange justify-center items-center gap-2 border-[1px] rounded-md py-2 border-grayHard transition duration-200 ease-in-out hover:text-grayLight"
        >
          {" "}
          <FaApple /> <span> iCloud</span>
        </Link>
      </div>
    </div>
  );
}
