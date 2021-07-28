import React from "react";
import Astro from "../images/astro_tp.png";

const Astronaut = ({ x, y }) => {
  return (
    <div className="absolute mt-0 w-screen h-screen astro x">
      <img src={Astro} className="w-48 h-auto astro y" />
    </div>
  );
};

export default Astronaut;
