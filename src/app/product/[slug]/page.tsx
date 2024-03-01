"use client";
import React from "react";
import InvestLayout from "../layaout";
import Image from "next/image";

export default function DetailsProduct({
  params,
}: {
  params: { slug: string };
}) {
  const [image, setImage] = React.useState<string>("/img/products/01.jpg");
  return (
    <InvestLayout>
      <div>My Post: {params.slug}</div>
      <div>Image: {image}</div>

      <section className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg mb-16">
        <div className="grid gap-4 mx-36">
          <div className="h-[25rem]">
            <Image
              src={image}
              width={1920}
              height={1024}
              alt=""
              style={{ objectFit: "cover" }}
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div
              onClick={() => setImage("/img/products/01.jpg")}
              className={
                image == "/img/products/01.jpg"
                  ? "h-[8rem] border-4 border-orange rounded-xl  "
                  : "h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
              }
            >
              <Image
                src="/img/products/01.jpg"
                width={1920}
                height={1024}
                alt=""
                className="h-full max-w-full rounded-lg"
              />
            </div>
            <div
              onClick={() => setImage("/img/products/02.jpg")}
              className={
                image == "/img/products/02.jpg"
                  ? "h-[8rem] border-4 border-orange rounded-xl  "
                  : "h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
              }
            >
              <Image
                src="/img/products/02.jpg"
                width={1920}
                height={1024}
                alt=""
                style={{ objectFit: "cover" }}
                className="h-full max-w-full rounded-lg"
              />
            </div>
            <div
              onClick={() => setImage("/img/products/03.jpg")}
              className={
                image == "/img/products/03.jpg"
                  ? "h-[8rem] border-4 border-orange rounded-xl  "
                  : "h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
              }
            >
              <Image
                src="/img/products/03.jpg"
                width={1920}
                height={1024}
                style={{ objectFit: "cover" }}
                alt=""
                className="h-full max-w-full rounded-lg"
              />
            </div>
            <div
              onClick={() => setImage("/img/products/04.jpg")}
              className={
                image == "/img/products/04.jpg"
                  ? "h-[8rem] border-4 border-orange rounded-xl  "
                  : "h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
              }
            >
              <Image
                src="/img/products/04.jpg"
                width={1920}
                height={1024}
                style={{ objectFit: "cover" }}
                alt=""
                className="h-full max-w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </InvestLayout>
  );
}
