import { BrowserRouter } from "react-router-dom";
import { About, Grid, Banner } from "./components";
import CustomCursor from "./CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="">
        <Banner />
      </div>
      <div>
      <video
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src={"/BG.mp4"} type="video/mp4" />
      </video>
      </div>
      <div className="relative z-10 bg-[#ffffff00] text-black grid grid-cols-1 h-full grid-rows-6">
        <div className="flex w-full hidden">
          <Grid />
        </div>
        <div className="hidden">
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
