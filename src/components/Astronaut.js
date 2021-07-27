import React from "react";
import Astro from "../images/astro_tp.png";

const Astronaut = ({ x, y }) => {
  console.log(x, y);
  return (
    <div
      style={{
        top: `${y ? y : 0}`,
        left: `${x ? x : 0}`,
      }}
      className="absolute w-52 h-auto mt-0"
    >
      <img src={Astro} />
    </div>
  );
};

export default Astronaut;
