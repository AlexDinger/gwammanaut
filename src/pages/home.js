import React from "react";
import Heading from "../components/Heading";
import Page from "../components/Page";

const home = () => {
  return (
    <Page>
      <iframe
        src="https://player.twitch.tv/?channel=gwammanaut&amp;parent=gwammanaut.vercel.app&amp;muted=true"
        height="720"
        width="1280"
        allowfullscreen="true"
        title="past broadcast"
      ></iframe>

      <Heading title="About Me" />
    </Page>
  );
};

export default home;
