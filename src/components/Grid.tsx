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
    <div className="grid grid-cols-4 gap4 text-black justify-items-center m-5 h-[75vh] select-none">
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="w-[25vw] h-full justify-self-center">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
      <div className="w-full h-[calc(25vh-2.5rem)]">
        <div className="justify-self-center w-[25vw] h-full">
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
