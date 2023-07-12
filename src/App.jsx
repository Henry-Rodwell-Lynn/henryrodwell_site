import { BrowserRouter } from "react-router-dom";
import { About, Grid } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#000000] text-white flex flex-col min-h-screen">
        <div className="flex-1">
          <Grid />
        </div>
        <div className="mt-auto">
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
