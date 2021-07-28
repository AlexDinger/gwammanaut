import React from "react";
import Heading from "../components/Heading";
import Page from "../components/Page";

const home = () => {
  return (
    <Page>
      <div>
        <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
          <iframe
            src="https://player.twitch.tv/?video=1098225445&amp;parent=gwammanaut.vercel.app&amp;muted=true"
            height="100%"
            width="100%"
            allowfullscreen="true"
            title="past broadcast"
            className="absolute w-full h-full top-0"
          ></iframe>
        </div>
      </div>

      <article className="space-y-5">
        <Heading title="About Me" />
        <p className="text-white text-xl leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </article>
    </Page>
  );
};

export default home;
