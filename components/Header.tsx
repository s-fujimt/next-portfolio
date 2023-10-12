import Image from "next/image";
import bg from "../public/background.svg";

import { MY_NAME } from "../lib/constants";

export default function Header() {
  return (
    <header
      className="header relative items-center flex h-screen"
      style={{ maxHeight: "45rem" }}
      id="home"
    >
      <div className="container max-w-6xl mx-auto items-center flex">
        <div className="w-full px-4 md:-translate-y-10">
          <h2 className="font-semibold text-6xl text-gray-900 uppercase first-letter:text-red-600">
            {MY_NAME}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-neutral-900">
            Data specialist, fullstack developer and GIS analyst with passion
            for sustainability and environment.
          </p>
          <div className="mt-10 md:mt-20 flex flex-col md:flex-row gap-2 uppercase text-sm text-center">
            <a
              href="/#projects"
              className="text-white px-6 py-4 rounded 
                      hover:bg-neutral-700 bg-neutral-900 font-black shadow transition-all duration-300"
            >
              Check out my Projects
            </a>

            <a
              href="/#about"
              className="font-semibold px-6 py-4 rounded  transition-all duration-300 text-neutral-900 hover:text-neutral-700 underline"
            >
              Or find out more about me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -z-2 top-0 left-0 right-0 bottom-0">
        <Image
          src={bg}
          width={500}
          height={500}
          alt="bg"
          className="opacity-30 rotate-180 grayscale h-full w-full object-cover"
        />
      </div>
    </header>
  );
}
