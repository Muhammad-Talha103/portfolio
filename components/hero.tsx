import React from "react";
import Image from "next/image";
import MainImage from "@/app/images/talha.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:flex ">
      <div className="flex mt-10 px-4 md:w-[50rem] justify-center ml- flex-col gap-4">
        <h1 className="text-4xl  font-bold text-black  text-start">
          Hi, Im
          <br />
          <span
            className="text-4xl tracking-widest font-extrabold text-[#f4bb1e] "
       
          >
            Muhammad Talha
          </span>
        </h1>

        <h2 className="text-sm -mt-5 font-medium text-start  text-gray-600">
          Frontend Developer & Web Designer
        </h2>
      <Link href="contact">
        <button
          className="rounded-lg bg-[#f4bb1e]  text-black w-24 font-bold mt-10  px-3 py-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
         
          >
          Contact
        </button>
          </Link>
      </div>

      <div className="bg-white mt-10 h-96 w-full md:w-[70rem]flex items-center justify-end relative overflow-hidden">
        <div
          className="rounded-full h-[40rem] w-[45rem] flex items-center justify-center absolute bottom-28 right-4 translate-x-1/4 bg-[#f4bb1e]  translate-y-1/2"
         
        >
          <div className="rounded-full h-[25rem] w-[25rem] flex items-center justify-center bg-white absolute top-40 left-[21rem] transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <Image
              src={MainImage}
              alt="Inner Circle"
              width={800}
              height={800}
              className="h-96 w-96 absolute top-16 right-10 object-cover rounded-full"
            />
          </div>
          <div className="relative">
            <div className="rounded-full h-32 md:h-16 w-32 md:w-16 flex items-center justify-center bg-white absolute bottom-[rem] md:bottom-[-3rem] right-28 md:right-40 transform translate-y-6"></div>
          </div>
          <div className="relative">
            <div
              className="rounded-full bg-[#f4bb1e] md:flex hidden h-16 w-16   items-center justify-center absolute top-[-16rem] left-[-23rem]"
              
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
