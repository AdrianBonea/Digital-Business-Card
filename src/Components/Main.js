import React from "react";
import Buttons from "./Buttons";

export default function Main() {
  return (
    <main className="h-[399px] w-[317px] bg-[#1A1B21]">
      <h1
        className="flex justify-center pt-7 
                    text-white font-bold text-2xl"
      >
        Bonea Adrian Mirel
      </h1>
      <h3
        className="flex justify-center
                    text-sm text-[#F3BF99] "
      >
        Audit Analyst
      </h3>
      <h7 className="flex justify-center text-white text-[10px] mt-2">
        bonea.website
      </h7>

      <Buttons />

      <div className="flex flex-col">
        <h2 className="text-xl text-white mt-5 ml-5 font-medium">About</h2>
        <p className="text-[10px] text-white mx-5 mt-1">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl text-white mt-5 ml-5 font-medium">Interests</h2>
        <p className="text-[10px] text-white mx-5 mt-1">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}
