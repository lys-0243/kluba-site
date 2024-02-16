import React from 'react'
import Image from "next/image";

export default function SponsorCard({ logo, text }: { logo: string; text: string }) {
  return (
    <div><div className="min-w-[calc(220px)] box-border overflow-hidden mx-2.5 px-4 rounded-lg border-gray cursor-pointer">
    <div className="">
      <Image
        loading="eager"
        src={logo}
        style={{ margin: "1rem", objectFit: "contain" }}
        width={150}
        height={100}
        alt={text || "logo"}
      />
    </div>
  </div></div>
  )
}
