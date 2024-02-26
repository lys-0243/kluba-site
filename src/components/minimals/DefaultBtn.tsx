import Link from "next/link";
import React from "react";

export default function DefaultBtn({
  color,
  text,
  href,
  animated,
}: {
  color: string;
  text: string;
  href: string;
  animated: boolean;
}) {
  return (
    <>
      <Link
        href={href}
        className={
          animated
            ? `text-white px-6 py-3 bg-orange uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center md:w-max animate-bounce animate-ease-in-out`
            : `text-white px-6 py-3 bg-orange uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center md:w-max`
        }
      >
        {text}
      </Link>
    </>
  );
}
