import React from "react";

const Page = ({ children }) => {
  return (
    <section className="space-y-24 flex flex-col p-10">{children}</section>
  );
};

export default Page;
