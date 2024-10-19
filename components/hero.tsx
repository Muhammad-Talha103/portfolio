import React from "react";
import Image from "next/image";
import MainImage from "@/app/images/talha.png";

const Hero = () => {
  return (
    <div className="md:flex ">
      <div className="flex mt-10  md:w-[50rem] justify-center ml- flex-col gap-4">
        <h1 className="text-4xl ml-10 font-bold text-black  text-start">
          Hi, Im
          <br />
          <span
            className="text-4xl tracking-widest font-extrabold"
            style={{ color: "#f4bb1e" }}
          >
            Muhammad Talha
          </span>
        </h1>

        <h2 className="text-sm -mt-5 font-medium text-start ml-10 text-gray-600">
          Frontend Developer & Web Designer
        </h2>

        <button
          className="rounded-lg text-black w-24 font-bold mt-10 ml-20 px-3 py-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          style={{ backgroundImage: "linear-gradient(#f4bb1e, #f4bb1e)" }}
        >
          Contact
        </button>
      </div>

      <div className="bg-white mt-10 h-96 w-full md:w-full flex items-center justify-end relative overflow-hidden">
        <div
          className="rounded-full h-[40rem] w-[50rem] flex items-center justify-center absolute bottom-24 right-4 translate-x-1/4 translate-y-1/2"
          style={{ backgroundImage: "linear-gradient(#f4bb1e, #f4bb1e)" }} // Adjust right here
        >
          <div className="rounded-full h-[25rem] w-[25rem] flex items-center justify-center bg-white absolute top-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
            <Image
              src={MainImage}
              alt="Inner Circle"
              width={200}
              height={200}
              className="h-full w-full absolute top-8 right-2 object-cover rounded-full"
            />
          </div>
          <div className="relative">
            <div className="rounded-full h-32 md:h-16 w-32 md:w-16 flex items-center justify-center bg-white absolute bottom-[rem] md:bottom-[-3rem] right-28 md:right-40 transform translate-y-6"></div>
          </div>
          <div className="relative">
            <div
              className="rounded-full h-16 w-16 flex  items-center justify-center absolute top-[-15rem] left-[-27rem]"
              style={{ backgroundImage: "linear-gradient(#f4bb1e, #f4bb1e)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
