import { BrowserRouter } from "react-router-dom";
import { About, Grid } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="fixed flex z-50 rotate-3 top-48 shadow-lg">
        <div className="whitespace-nowrap ml-1 mr-1">
          <div className="flex gap-2 animate-rightToLeft bg-[#fdd300] p-2 border-4 border-black border-l-0 shadow-lg">
            <p
              style={{
                fontWeight: 600,
                fontSize: 23,
              }}
            >
              ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
            <p
              style={{
                fontWeight: 600,
                fontSize: 23,
              }}
            >
              ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
          </div>
        </div>
      </div>

      <div className="fixed flex z-[-50] -rotate-12 top-48">
        <div className="whitespace-nowrap ml-1 mr-1">
          <div className="flex gap-4 animate-leftToRight bg-[#fdd300] p-2 border-4 border-black border-l-0 shadow-lg">
            <p
              style={{
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT 
            </p>
            <p
              style={{
                fontWeight: 600,
                fontSize: 22,
              }}
            >
              ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
          </div>
        </div>
      </div>

      <div className="fixed flex z-50 rotate-6 bottom-5 shadow-lg">
        <div className="whitespace-nowrap ml-1 mr-1">
          <div className="flex gap-2 animate-rightToLeft bg-[#fdd300] p-2 border-4 border-black border-l-0 shadow-lg">
            <p
              style={{
                fontWeight: 600,
                fontSize: 26,
              }}
            >
              ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
            <p
              style={{
                fontWeight: 600,
                fontSize: 26,
              }}
            >
              ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT ⚠️ THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
          </div>
        </div>
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
