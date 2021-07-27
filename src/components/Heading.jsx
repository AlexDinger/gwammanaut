import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="border-b-4 border-red-800 w-max">
      <h3 className="text-3xl text-yellow-400">{title}</h3>
    </div>
  );
};

export default Heading;
