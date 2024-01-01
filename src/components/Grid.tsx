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
    <div className="grid grid-cols-4 gap4 text-black justify-items-center m-5 h-[calc(75vh-5rem)] select-none">

      {/* Stopple */}
      <div className="w-full h-[calc(25vh-3.75rem)] cursor-move">
        <p style={{ fontWeight: 600 }}>1</p>
        <div className="justify-self-center w-[25vw] h-full">
          <StoppleCanvas />
        </div>
      </div>

      {/* TickTok */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p style={{ fontWeight: 600 }}>2</p>
        <div className="justify-self-center w-[25vw] h-full p-5">
          <TickTockCanvas />
        </div>
      </div>

      {/* Dis Pub */}
      <div className="w-full h-[calc(25vh-3.75rem)] items-center">
        <p style={{ fontWeight: 600 }}>3</p>
        <div className="w-[25vw] h-[calc(25vh-3.75rem)]">
          <DisPubCanvas />
        </div>
      </div>

      {/* CTQ */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p style={{ fontWeight: 600 }}>4</p>
        <div className="justify-self-center w-[25vw] h-full p-12">
          <CtqCanvas />
        </div>
      </div>

      {/* DVOMI */}
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p style={{fontWeight: 600,}}>5</p>
        <div className="justify-self-center w-[25vw] h-full">
          <DvomiCanvas />
        </div>
      </div>


      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          6
        </p>
        <div className="justify-self-center w-[25vw] h-full">
          <PapacetamolCanvas />
        </div>
      </div>
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          7
        </p>
        <div className="justify-self-center w-[25vw] h-full">
          <SachaCanvas />
        </div>
      </div>
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          8
        </p>
        <div className="justify-self-center w-[25vw] h-full">
          <BhcCanvas />
        </div>
      </div>
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          9
        </p>
        <div className="justify-self-center w-[25vw] h-full p-5">
          <FluxCanvas />
        </div>
      </div>
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          10
        </p>
        <div className="justify-self-center w-[25vw] h-full">
          <HarvardCanvas />
        </div>
      </div>
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          11
        </p>
        <div className="justify-self-center w-[25vw] h-full">
          <ExperimentsCanvas />
        </div>
      </div>
      <div className="w-full h-[calc(25vh-3.75rem)]">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          12
        </p>
        <div className="justify-self-center w-[25vw] h-full">
          <IcchaCanvas />
        </div>
      </div>
    </div>
  );
};

export default Grid;
