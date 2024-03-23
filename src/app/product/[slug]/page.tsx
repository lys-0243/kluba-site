"use client";
import React from "react";
import InvestLayout from "../layaout";
import Image from "next/image";
import { ProductsItems } from "@/components/constants";
import DefaultBtn from "@/components/minimals/DefaultBtn";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { RiLoader2Line } from "react-icons/ri";
import { useSession } from "next-auth/react";
import { appRoutes } from "@/components/utils/routes";

export default function DetailsProduct({
  params,
}: {
  params: { slug: string };
}) {
  const [image, setImage] = React.useState<string>("/img/products/01.jpg");
  const [activeTab, setActiveTab] = React.useState<string>("desc");
  const [styleDesc, setStyleDesc] = React.useState({});
  const [styleComment, setStyleComment] = React.useState({ display: "none" });
  const { data: session } = useSession();

  var object = ProductsItems.find((obj) => {
    return obj.slug === params.slug;
  });

  const changeCity = (tabName: string) => {
    if (tabName === "desc") {
      setStyleComment({ display: "none" });
      setStyleDesc({ display: "grid" });
    } else {
      setStyleDesc({ display: "none" });
      setStyleComment({ display: "grid" });
    }
    setActiveTab(tabName);
  };

  return (
    <InvestLayout>
      <section className="bg-grayLight py-6 lg:py-20">
        <div className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg flex flex-col lg:flex lg:flex-row">
          <div className="grid gap-4 w-full lg:w-3/5 px-3 sm:px-5">
            <div className="sm:h-[25rem] lg:h-[25rem]">
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
                    ? "h-[5rem] sm:h-[8rem] lg:h-[8rem] border-4 border-orange rounded-xl  "
                    : "h-[5rem] sm:h-[8rem] lg:h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
                }
              >
                <Image
                  src="/img/products/01.jpg"
                  width={1920}
                  height={1024}
                  style={{ objectFit: "cover" }}
                  alt=""
                  className="h-full max-w-full rounded-lg"
                />
              </div>

              <div
                onClick={() => setImage("/img/products/02.jpg")}
                className={
                  image == "/img/products/02.jpg"
                    ? "h-[5rem] sm:h-[8rem] lg:h-[8rem] border-4 border-orange rounded-xl  "
                    : "h-[5rem] sm:h-[8rem] lg:h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
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
                    ? "h-[5rem] sm:h-[8rem] lg:h-[8rem] border-4 border-orange rounded-xl  "
                    : "h-[5rem] sm:h-[8rem] lg:h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
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
                    ? "h-[5rem] sm:h-[8rem] lg:h-[8rem] border-4 border-orange rounded-xl  "
                    : "h-[5rem] sm:h-[8rem] lg:h-[8rem] hover:cursor-pointer hover:rotate-2 grayscale hover:border-4 hover:border-orange hover:rounded-xl hover:grayscale-0 transition duration-300 "
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

          <div className="w-ful p-4 lg:w-2/5 lg:pl-8 flex flex-col gap-6 lg:gap-12">
            <div>
              <p className="text-grayHard font-PRegular">Détails du produit</p>
              <h1 className="text-[1.5rem] sm:text-[2.3rem] leading-5 lg:leading-10 lg:text-[3rem] font-PBold text-orange">
                {object?.title}
              </h1>
            </div>
            <p className="text-text text-sm sm:text-base font-PRegular">
              {/* {object?.description} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              excepturi autem at fugiat minima eius laborum quasi expedita porro
              maxime nobis eaque quidem nam esse rem, eveniet voluptatibus quas
              illo? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              excepturi autem at fugiat minima eius laborum quasi expedita porro
              maxime nobis eaque quidem nam esse rem, eveniet voluptatibus quas
              illo?
            </p>

            <div className="flex flex-col sm:flex sm:flex-row sm:justify-start lg:justify-between items-center">
              <div className="w-full sm:w-max hover:border-2 p-2 rounded-3xl hover:border-orange transition duration-200">
                <Link
                  href={
                    session?.user?.email
                      ? appRoutes.dashboard
                      : appRoutes.signIn
                  }
                  className={`text-white px-6 py-3 bg-bleu uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center md:w-max`}
                >
                  Investir
                </Link>
              </div>
              <div className="hover:border-2 p-2 rounded-3xl hover:border-bleu transition duration-200">
                <Link
                  href={""}
                  className={`w-full text-white px-6 py-3 bg-orange lg:uppercase font-PMedium tracking-wider text-sm rounded-2xl flex justify-center gap-3 md:w-max`}
                >
                  <FaDownload />
                  Telecharger le catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg my-16">
        <div className="border-b border-b-grayHard bg-white sticky top-0 z-50">
          <nav
            className="-mb-0.5 flex justify-center space-x-6"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className={
                activeTab == "desc"
                  ? `text-orange font-PBold border-b-4 h-12`
                  : `text-bleu font-PRegular`
              }
              id="horizontal-alignment-item-1"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab"
              onClick={() => changeCity("desc")}
            >
              Description
            </button>
            <button
              type="button"
              className={
                activeTab == "comments"
                  ? `text-orange font-PBold border-b-4 h-12`
                  : `text-bleu font-PRegular`
              }
              id="horizontal-alignment-item-2"
              data-hs-tab="#horizontal-alignment-2"
              aria-controls="horizontal-alignment-2"
              role="tab"
              onClick={() => changeCity("comments")}
            >
              Commentaires <span>(65)</span>
            </button>
          </nav>
        </div>

        <div className="mt-10">
          <div
            id="descTab"
            className="mx-4 lg:grid lg:grid-cols-2 gap-4"
            style={styleDesc}
          >
            <div className="text-text font-PLight">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                error neque eaque expedita repudiandae facere labore iste
                officia! Et alias ipsam in inventore impedit error laborum modi
                quibusdam voluptate doloremque!
              </p>{" "}
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                error neque eaque expedita repudiandae facere labore iste
                officia! Et alias ipsam in inventore impedit error laborum modi
                quibusdam voluptate doloremque!
              </p>{" "}
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                error neque eaque expedita repudiandae facere labore iste
                officia! Et alias ipsam in inventore impedit error laborum modi
                quibusdam voluptate doloremque!
              </p>
            </div>
            <div className="text-text font-PLight flex flex-col gap-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
                error neque eaque expedita repudiandae facere labore iste
                officia! Et alias ipsam in inventore impedit error laborum modi
                quibusdam voluptate doloremque!
              </p>{" "}
              <div>
                <h2 className="mb-2 font-PMedium text-orange">Requirements:</h2>
                <ul className="">
                  <li className="flex items-center">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-orange"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className=" font-PMedium">Lorem Ipsum Point 01</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-orange"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className=" font-PMedium">Lorem Ipsum Point 02</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-orange"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className=" font-PMedium">Lorem Ipsum Point 03</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-orange"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className=" font-PMedium">Lorem Ipsum Point 04</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-grayLight rounded-lg py-8" style={styleComment}>
            <div className="max-w-2xl mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-PBold text-bleu">
                  Laissez un commentaire
                </h2>
              </div>
              <form className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                  <label className="sr-only">Your comment</label>
                  <textarea
                    id="comment"
                    rows={5}
                    className="px-0 w-full text-sm text-gray-900 border-0 font-PRegular focus:ring-0 focus:outline-none"
                    placeholder="Tapez votre commentaire..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-orange inline-flex items-center py-2.5 px-4 text-base font-PBold text-center text-white rounded-lg"
                >
                  Commenter
                </button>
              </form>

              <div className="bg-grayLight rounded-lg">
                <article className="p-3 text-base">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center ">
                      <p className="inline-flex items-center mr-3 text-text font-PMedium">
                        <Image
                          src="/img/kristen.jpg"
                          width={1920}
                          height={1024}
                          alt=""
                          style={{ objectFit: "cover" }}
                          className="mr-2 w-6 h-6 rounded-full"
                        />
                        Michael Gough
                      </p>
                      <p className="text-xs font-PRegular">Feb. 8, 2022</p>
                    </div>
                  </footer>
                  <p className="text-text font-PRegular">
                    Very straight-to-point article. Really worth time reading.
                    Thank you! But tools are just the instruments for the UX
                    designers. The knowledge of the design tools are as
                    important as the creation of the design strategy.
                  </p>
                </article>

                <article className="p-3 text-base border-t-2 border-grayHard">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center ">
                      <p className="inline-flex items-center mr-3 text-text font-PMedium">
                        <Image
                          src="/img/profile-picture-3.jpg"
                          width={1920}
                          height={1024}
                          alt=""
                          style={{ objectFit: "cover" }}
                          className="mr-2 w-6 h-6 rounded-full"
                        />
                        John Doe
                      </p>
                      <p className="text-xs font-PRegular">Mar. 12, 2022</p>
                    </div>
                  </footer>
                  <p className="text-text font-PRegular">
                    The article covers the essentials, challenges, myths and
                    stages the UX designer should consider while creating the
                    design strategy.
                  </p>
                </article>

                <article className="p-3 text-base border-t-2 border-grayHard">
                  <footer className="flex justify-between items-center mb-2">
                    <div className="flex items-center ">
                      <p className="inline-flex items-center mr-3 text-text font-PMedium">
                        <Image
                          src="/img/profile-picture-4.jpg"
                          width={1920}
                          height={1024}
                          alt=""
                          style={{ objectFit: "cover" }}
                          className="mr-2 w-6 h-6 rounded-full"
                        />
                        Helene Engels
                      </p>
                      <p className="text-xs font-PRegular">Mar. 12, 2022</p>
                    </div>
                  </footer>
                  <p className="text-text font-PRegular">
                    Thanks for sharing this. I do came from the Backend
                    development and explored some of the tools to design my Side
                    Projects. Lor
                  </p>
                </article>
              </div>
              <div className="flex items-center gap-4 text-bleu font-PRegular hover:cursor-pointer hover:text-orange w-max">
                <RiLoader2Line /> Voir plus
              </div>
            </div>
          </div>
        </div>
      </section>
    </InvestLayout>
  );
}
