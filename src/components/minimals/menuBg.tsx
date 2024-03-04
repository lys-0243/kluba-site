import Link from "next/link";
import React from "react";
import { MenuLinks } from "../constants";
import Image from "next/image";
import { appRoutes } from "../utils/routes";
import { IoMenu } from "react-icons/io5";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function MenuBG() {
  return (
    <div className="shadow-lg bg-bleu">
      <header className="hidden lg:grid mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10 py-4">
        {/* <header className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg md:px-10"> */}
        <nav className=" flex justify-between items-center ">
          <div>
            <Link href="/">
              <Image
                src="/img/logos/kaapital-logo-blanc.png"
                alt="Logo Kluba"
                width={110}
                height={100}
              />
            </Link>
          </div>

          <div className=" text-text  space-x-8 text-base ">
            {MenuLinks.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="uppercase font-PExtra text-lg text-white  hover:border-b-2 border-orange"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <Link
            href={appRoutes.signUp}
            className=" text-white bg-orange px-6 py-3 rounded-2xl flex justify-center items-center"
          >
            <p className=" uppercase font-PMedium tracking-wider text-sm">
              S&apos;inscrire
            </p>
          </Link>
        </nav>
      </header>

      <div className="flex justify-between items-center px-5 md:px-8 py-2 lg:hidden bg-bleu sticky top-0 z-50">
        <div>
          <Link href="/">
            <Image
              src="/img/logos/kaapital-logo-blanc.png"
              alt="Logo Kluba"
              width={90}
              height={80}
            />
          </Link>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-bleu px-3 py-2 text-sm shadow-sm  hover:bg-gray-50">
              <IoMenu
                className="-mr-1 h-7 w-7 text-gray-400 text-white"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 px-3">
                <Menu.Item>
                  <div className="flex flex-col text-text gap-3 mb-3 text-base ">
                    {MenuLinks.map((item) => (
                      <Link
                        href={item.href}
                        key={item.name}
                        className="font-PExtra text-lg text-bleu  hover:border-b-2 border-orange"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </Menu.Item>

                <Menu.Item>
                  <Link
                    href={appRoutes.signUp}
                    className=" text-white bg-orange px-6 py-3 rounded-2xl flex justify-center items-center"
                  >
                    <p className=" uppercase font-PMedium tracking-wider text-sm">
                      S&apos;inscrire
                    </p>
                  </Link>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}
