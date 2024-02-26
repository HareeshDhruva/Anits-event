import React from "react";
import Image from "next/image"

const page = () => {
  return (
    <div>
      <div className="absolute z-0">
          <Image src="bg.svg" alt="" className="opacity-[0.3]" width={1300} height={1000} />
        </div>
      <div className="flex justify-center items-center flex-col h-screen z-10">
        <h1 className="text-[80px] uppercase font-bold text-[#ff0099]">anits fest 2024</h1>
        <p className="text-[20px] italic">Uniting Passion, Igniting Talent!</p>
      </div>
    </div>
  );
};

export default page;
