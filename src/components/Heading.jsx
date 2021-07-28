import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="border-b-4 border-red-800 w-max pb-2 pr-5">
      <h3 className="text-4xl text-primary">{title}</h3>
    </div>
  );
};

export default Heading;
