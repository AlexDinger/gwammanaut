import React, { useState } from "react";
import Astronaut from "../components/Astronaut";
import background from "../images/bg.jpg";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Index = ({ children, location }) => {
  const [astroPos, setAstroPos] = useState({
    x: 400,
    y: 400,
  });

  const { height, width } = useWindowDimensions();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url('${background}')`,
        }}
        className="w-screen h-screen absolute top-0 left-0 bg-no-repeat bg-cover bg-center filter grayscale brightness-50 z-0"
      ></div>
      {/* <Astronaut {...astroPos} /> */}
      <div className="absolute w-screen h-screen top-0 left-0 z-10 overflow-x-hidden overflow-y-scroll">
        <header className="w-full flex flex-col justify-center items-center space-y-2 my-10">
          <h1 className="text-yellow-400 md:text-8xl text-5xl">GwammaNaut</h1>
          <h2 className="text-red-700 md:text-4xl text-2xl">
            twitch.tv/GwammaNaut
          </h2>
        </header>
        <main className="md:container mx-auto w-full mb-52">{children}</main>
      </div>
    </div>
  );
};

export default Index;
