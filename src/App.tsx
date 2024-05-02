import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Draggable from "react-draggable";
import { Banner, About } from "./components";
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
} from "./components/Work";

import Showreel from "../public/BG.mp4"

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      {/* <div className="flex flex-row">
      <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing h-[200px] w-[200px] z-50">
            <StoppleCanvas />
          </div>
        </Draggable>
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing w-[200px]">
            <ExperimentsCanvas />
          </div>
        </Draggable>
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing w-[200px]">
            <img
              className="pointer-events-none"
              src="/TT.png"
              alt="Description of GIF"
            />
          </div>
        </Draggable>
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing w-[200px]">
            <DisPubCanvas />
          </div>
        </Draggable>
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing w-[200px]">
            <DvomiCanvas />
          </div>
        </Draggable>
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing w-[200px]">
            <img
              className="pointer-events-none"
              src="/FLUX_EXPERIMENT.gif"
              alt="Description of GIF"
            />
          </div>
        </Draggable>
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing w-[200px]">
            <video className="w-full h-full rounded-xl" autoPlay muted loop>
              <source src={"/public/TD Video 1.webm"} type="video/mp4" />
            </video>
          </div>
        </Draggable>
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing w-[200px]">
            <video className="w-full h-full " autoPlay muted loop>
              <source src={"/public/Comp 1_1.mp4"} type="video/mp4" />
            </video>
          </div>
        </Draggable>
      </div> */}
      <video className="w-full h-full pointer-events-none" autoPlay muted loop>
        <source src={Showreel} type="video/mp4" />
      </video>
    </BrowserRouter>
  );
};

export default App;
