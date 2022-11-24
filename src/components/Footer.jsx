import React from "react";
import pokeball from "../assets/pokeball1.png";

function Footer() {
  return (
    <div className=" w-full p-10">
      <a className="flex justify-center items-center mb-10" href="/">
        <img className="w-32" src={pokeball} alt="" />
      </a>
    </div>
  );
}

export default Footer;
