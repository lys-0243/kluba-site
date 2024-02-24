import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BeforeFooter() {
  return (
    <section className="relative after:absolute after:bottom-0 after:h-2/4 after:w-full after:bg-bleu">
      <div className="mx-auto 2xl:max-w-screen-2xl xl:max-w-screen-2xl lg:max-w-screen-md bg-orange relative after:absolute after:z-10  after:shadow-inner z-10 rounded-xl shadow-lg flex items-center justify-between p-5">
        <div className=" space-y-5 pl-10 ">
          <h3 className=" font-PBold text-white text-4xl">
            Club Kluba, la solution la <br /> plus performante <br /> pour
            investir en startups.
          </h3>
          <Link
            href="#"
            className="text-orange px-6 py-3 bg-white uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center w-max"
          >
            DEVENIR MEMBRE
          </Link>
        </div>

        <div>
          <Image
            src="/img/home/footer.png"
            alt="Footer Image"
            width={350}
            height={350}
            className=" rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
