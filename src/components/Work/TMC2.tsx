import React from "react";

const TMC2 = () => {
  return (
    <video
      className="w-full h-full justify-center object-contain"
      autoPlay
      loop
      muted
    >
      <source src={"/public/Comp 1.mp4"} type="video/mp4" />
    </video>
  );
};

export default TMC2;
