import React from "react";

const Experiments = () => {
  return (
    <video className="w-full h-full justify-center object-contain" autoPlay muted loop>
      <source src={"/public/36dot.mp4"} type="video/mp4" />
    </video>
  );
};

export default Experiments;
