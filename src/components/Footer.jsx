import React from "react";
import pokeball from "../assets/pokeball1.png";

function Footer() {
  return (
    <div className="flex flex-col w-full justify-center items-center p-10">
      <a href="/">
        <img className="w-32" src={pokeball} alt="" />
      </a>
    </div>
  );
}

export default Footer;
