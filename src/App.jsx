import { BrowserRouter } from "react-router-dom";
import { About, Grid } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#ffffff] text-black grid grid-cols-1 h-full grid-rows-6">
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
