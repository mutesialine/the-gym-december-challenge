
import Image from "next/image";
import React from "react";
import pause from "/public/icons/pause.svg"
export default function Hero(){
  
  return (
    <div className="w-full flex flex-col-reverse">
      
        <video
          src="https://www.tum.de/fileadmin/w00bfo/www/Startseite/tum_startseite_header_010922.mp4"
          autoPlay
          muted
          loop
          className="object-cover w-full relative"
        />
      <div>
        <Image src={pause} className=" absolute w-14 z-[99] right-0 bottom-0 p-4  invert" alt="play and pause icon"/>
      </div>

      <div className=" hidden  xl:block w-full max-w-primary mx-auto px-6 absolute top-40 left-0 right-0  text-white">
        <h1 className="text-5xl font-bold pb-6">
          TUM. The Entrepreneurial
          <br /> University
        </h1>
        <p className="text-xl">
          Innovation through talent, excellence and responsibility
        </p>
      </div>
      <div className=" mt-16 py-16 xl:hidden bg-gradient-to-r from-heroblue to-lightblue w-full max-w-primary mx-auto px-6 text-white ">
        <h1 className="text-4xl lg:text-5xl font-bold pb-6">
          TUM. The Entrepreneurial
          <br /> University
        </h1>
        <p className=" text-xl lg:text-xl">
          Innovation through talent, excellence and responsibility
        </p>
      </div>
    </div>
  );

}