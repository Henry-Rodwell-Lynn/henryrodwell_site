import React from "react";
import { motion } from "framer-motion";
import {
  StoppleCanvas,
  TickTockCanvas,
  DisPubCanvas,
  CtqCanvas,
  DvomiCanvas,
  PapacetamolCanvas
} from "./Work";

const Grid = () => {
  return (
    <div className="grid grid-cols-4 gap4 text-white justify-evenly justify-items-center m-5">
      <div className="h-[200px] w-[200px]">
        <StoppleCanvas />
        <p>1</p>
      </div>
      <div className="h-[200px] w-[200px]">
        <TickTockCanvas />
        <p>2</p>
      </div>
      <div className="h-[200px] w-[200px]">
        <DisPubCanvas />
        <p>3</p>
      </div>
      <div className="h-[200px] w-[200px]">
        <CtqCanvas />
        <p>4</p>
      </div>
      <div className="h-[200px] w-[200px]">
        <DvomiCanvas />
        <p>5</p>
      </div>
      <div className="h-[200px] w-[200px]">
        <PapacetamolCanvas />
        <p>6</p>
      </div>
    </div>
  );
};

export default Grid;
