import { About, Grid } from "../components";

const HarvardCanvas = () => {
  return (
    <div className="flex flex-col h-screen max-h-screen">
      <div className="flex m-5 flex-1">
        <Grid />
      </div>
      <div className="flex m-5">
        <About />
      </div>
    </div>
  );
};

export default HarvardCanvas;
