import {
  StoppleCanvas,
  TickTockCanvas,
  DisPubCanvas,
  CtqCanvas,
  DvomiCanvas,
  TMC2Canvas,
  SachaCanvas,
  BhcCanvas,
  FluxCanvas,
  HarvardCanvas,
  ExperimentsCanvas,
  IcchaCanvas,
} from "./Work";

const Grid = () => {
  return (
    <div className="grid grid-cols-4 gap4 text-black font-semibold  justify-items-center m-5 h-[calc(75vh-5rem)] select-none">

      {/* Stopple */}
      <div className="w-full h-[calc(25vh-3.75rem)] cursor-move">
        <p>1.</p>
        <div className="justify-self-center w-[25vw] h-full">
          <StoppleCanvas />
        </div>
      </div>

      {/* TickTok */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>2.</p>
        <div className="justify-self-center w-[25vw] h-full p-5">
          <TickTockCanvas />
        </div>
      </div>

      {/* Dis Pub */}
      <div className="w-full h-[calc(25vh-3.75rem)] items-center">
        <p>3.</p>
        <div className="w-[25vw] h-[calc(25vh-3.75rem)]">
          <DisPubCanvas />
        </div>
      </div>

      {/* CTQ */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>4</p>
        <div className="justify-self-center w-[25vw] h-full p-12">
          <CtqCanvas />
        </div>
      </div>

      {/* DVOMI */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>5</p>
        <div className="justify-self-center w-[25vw] h-full">
          <DvomiCanvas />
        </div>
      </div>

      {/* TMC2 */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>6.</p>
        <div className="justify-self-center w-[25vw] h-full">
          <TMC2Canvas />
        </div>
      </div>

      {/* SACHA */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>7.</p>
        <div className="justify-self-center w-[25vw] h-full">
          <SachaCanvas />
        </div>
      </div>

      {/* BHC */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>8.</p>
        <div className="justify-self-center w-[25vw] h-full">
          <BhcCanvas />
        </div>
      </div>

      {/* Flux */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>9.</p>
        <div className="justify-self-center w-[25vw] h-full p-5">
          <FluxCanvas />
        </div>
      </div>

      {/* Harvard */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>10.</p>
        <div className="justify-self-center w-[25vw] h-full">
          <HarvardCanvas />
        </div>
      </div>

      {/* Experiments */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>11.</p>
        <div className="justify-self-center w-[25vw] h-full">
          <ExperimentsCanvas />
        </div>
      </div>

      {/* ICCHA */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p>12.</p>
        <div className="justify-self-center w-[25vw] h-full">
          <IcchaCanvas />
        </div>
      </div>
    </div>
  );
};

export default Grid;
