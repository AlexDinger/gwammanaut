import React from "react";

const Page = ({ children }) => {
  return (
    <section className="space-y-24 flex flex-col md:p-10 p-5">
      {children}
    </section>
  );
};

export default Page;
