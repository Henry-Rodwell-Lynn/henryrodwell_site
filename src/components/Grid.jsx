import React from "react";
import { motion } from "framer-motion";
import {
  StoppleCanvas,
  TickTockCanvas,
  DisPubCanvas,
  CtqCanvas,
  DvomiCanvas,
  PapacetamolCanvas,
  SachaCanvas,
  BhcCanvas,
  FluxCanvas,
  HarvardCanvas,
  ExperimentsCanvas,
  IcchaCanvas,
} from "./Work";

const Grid = () => {
  return (
    <div className="grid grid-cols-4 gap4 text-white justify-evenly justify-items-center m-5 place-content-evenly">
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <StoppleCanvas />
        </div>
        <p>1</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <TickTockCanvas />
          <p>2</p>
        </div>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <DisPubCanvas />
        </div>
        <p>3</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <CtqCanvas />
        </div>
        <p>4</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <DvomiCanvas />
        </div>
        <p>5</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <PapacetamolCanvas />
        </div>
        <p>6</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <SachaCanvas />
        </div>
        <p>7</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <BhcCanvas />
        </div>
        <p>8</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <FluxCanvas />
        </div>
        <p>9</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <HarvardCanvas />
        </div>
        <p>10</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <ExperimentsCanvas />
        </div>
        <p>11</p>
      </div>
      <div className="w-full h-auto">
        <div className="w-[100%] h-[12vw]">
          <IcchaCanvas />
        </div>
        <p>12</p>
      </div>
    </div>
  );
};

export default Grid;
