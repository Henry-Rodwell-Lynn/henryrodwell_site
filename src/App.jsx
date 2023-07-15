import { BrowserRouter } from "react-router-dom";
import { About, Grid } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#ffffff] text-black flex flex-col min-h-screen">
        <div className="flex-1">
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
