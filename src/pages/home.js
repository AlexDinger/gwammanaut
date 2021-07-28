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
        <p className="text-white text-xl leading-relaxed ">
          Hey! I'm Gwammanaut, and welcome to my stream! I'm a new streamer (if
          you couldn't already tell), so all constructive feedback is very
          appreciated and always welcomed! I'm a Purdue grad from a small town
          in New Jersey near New York City. I've always had an interest in
          gaming and entertainment, so this platform has been my home as a
          viewer for many years, and this channel is my attempt to expand that
          home and build my own community.
        </p>
      </article>

      {/* <article className="space-y-5">
        <Heading title="Clips" />
      </article> */}

      <article className="space-y-5">
        <Heading title="My Goals" />
        <ul className="list-disc text-xl leading-relaxed text-white space-y-2 list-inside">
          <li>
            Build an inclusive community of gamers where everyone feels welcomed
            and excited to be a part of.
          </li>
          <li>
            Give myself a way to channel my creative juices in a major where I
            don't really get the chance to elsewhere.
          </li>
          <li>
            Break out of my shell a little bit more (I would say I'm more
            extroverted, but I find it hard to open up sometimes.)
          </li>
          <li>
            Have fun and create memories! And hopefully entertain others in the
            process!
          </li>
        </ul>
      </article>
    </Page>
  );
};

export default home;
