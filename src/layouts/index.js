import React from "react";
import background from "../images/bg.jpg";

const index = ({ children, location }) => {
  return (
    <div>
      <div
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80')`,
        // }}
        style={{
          backgroundImage: `url('${background}')`,
        }}
        className="w-screen h-screen absolute top-0 left-0 bg-no-repeat bg-cover bg-center filter grayscale brightness-50 z-0"
      ></div>
      <div className="absolute w-screen h-screen top-0 left-0 z-10 overflow-x-hidden overflow-y-scroll">
        <header className="text-white w-full flex flex-col justify-center items-center space-y-2 my-10">
          <h1 className="text-yellow-400 text-8xl">GwammaNaut</h1>
          <h2 className="text-red-700 text-4xl">twitch.tv/GwammaNaut</h2>
        </header>
        <main className="container mx-auto w-1/2 mb-52">{children}</main>
      </div>
    </div>
  );
};

export default index;
