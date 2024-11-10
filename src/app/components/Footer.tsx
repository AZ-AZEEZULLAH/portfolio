import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AiFillLinkedin} from "react-icons/ai";
import DeveloperLogo from "../public/picture/dev-logo.jpeg"; // Import the image here

const Footer = () => {
  return (
    <div className=" bg-slate-700">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-extrabold items-center md:justify-start justify-center text-red-600">

            <Image
              src={DeveloperLogo} // Use the imported image here
              alt="Azeezullah"
              width={100}
              height={100}
              className="w-[50px]"
            />

            <span className="ml-3 text-xl">Azeezullah</span>
          </a>
          <p className="text-sm text-red-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-red-800 sm:py-2 sm:mt-0 mt-4">
            © 2024 Azeezullah.net.pk
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https/www.linkedin.com/in/azeezullah-noohpoto-6499b52a6"}
              className="text-red-500 font-extrabold"
            >
              <AiFillLinkedin className="text-xl hover:text-[red]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;