import { BrowserRouter } from "react-router-dom";
import { About, Grid, Banner } from "./components";
import CustomCursor from "./CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="hidden">
        <Banner />
      </div>
      <div className="relative z-10 bg-[#ffffff00] text-black grid grid-cols-1 h-full grid-rows-6">
        <div className="flex w-full">
          <Grid />
        </div>
        <div className="">
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
