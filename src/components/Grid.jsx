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
    <div className="grid grid-cols-4 gap4 text-black justify-items-center m-5 w full text-sm">
      <div className="w-full h-auto grid">
        <div className="w-[12vw] h-[12vw] justify-self-center">
          <StoppleCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          1
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <TickTockCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          2
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="w-[12vw] h-[12vw] justify-self-center">
          <DisPubCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          3
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-full h-[12vw]">
          <CtqCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          4
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <DvomiCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          5
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <PapacetamolCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          6
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <SachaCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          7
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <BhcCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          8
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <FluxCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          9
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <HarvardCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          10
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <ExperimentsCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          11
        </p>
      </div>
      <div className="w-full h-auto grid">
        <div className="justify-self-center w-[12vw] h-[12vw]">
          <IcchaCanvas />
        </div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          12
        </p>
      </div>
    </div>
  );
};

export default Grid;
