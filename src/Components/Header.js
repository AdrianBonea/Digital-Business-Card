import React from "react";
import photo from "../Images/selfie.jpg";

export default function Header() {
  return (
    <header className="w-[317px] grid place-content-center grid-cols-1">
      <img
        src={photo}
        alt="Adrian"
        className="w-[317px] h-auto rounded-t-lg z-0"
      ></img>
    </header>
  );
}
