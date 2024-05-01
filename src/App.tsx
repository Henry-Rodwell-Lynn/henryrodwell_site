import { BrowserRouter } from "react-router-dom";
import { About, Grid } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-screen max-h-screen">
        <div className="flex m-5 flex-1">
          <Grid />
        </div>
        <div className="flex m-5">
          <About />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
