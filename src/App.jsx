import { BrowserRouter } from "react-router-dom";

import {About, Grid,} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#000000]">
        <div>
          <Grid />
        </div>
        <div>
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
