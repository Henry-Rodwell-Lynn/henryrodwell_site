import React from "react";

const Experiments = () => {
  return (
    <div className="flex flex-col">
      <video className="w-full h-full " autoPlay muted loop>
        <source src={"/public/36dot.mp4"} type="video/mp4" />
      </video>
      {/* <div className="flex flex-col mt-2">
        <p>36 Days of Type</p>
        <p>Experiments</p>
      </div> */}
    </div>
  );
};

export default Experiments;
