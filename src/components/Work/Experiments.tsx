import React from "react";

const Experiments = () => {
  return (
    <div className="flex flex-col">
      <video className="w-full h-full " autoPlay muted loop>
        <source src={"/public/36dot.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default Experiments;
