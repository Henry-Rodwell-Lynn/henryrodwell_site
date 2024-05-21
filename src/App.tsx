import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Work_Data } from "./Work";
import Draggable from "react-draggable";

import LogoCanvas from "./components/Work/Logo";
import StoppleCanvas from "./components/Work/Stopple";

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("henrywprodwell@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const workCss =
    "absolute hover:cursor-grab active:cursor-grabbing w-[200px] h-[200px]";

  const [positions, setPositions] = useState([]);

  interface Position {
    x: number;
    y: number;
  }

  const getRandomPosition = (positions: Position[]): Position => {
    let x: number, y: number;
    do {
      x = Math.random() * (window.innerWidth - 200);
      y = Math.random() * (window.innerHeight - 200);
    } while (
      positions.some(
        (pos) => Math.abs(pos.x - x) < 400 && Math.abs(pos.y - y) < 400
      )
    );

    return { x, y };
  };

  return (
    <BrowserRouter>
      <div className="flex flex-row min-h-screen min-w-full justify-center items-center absolute text-white text-xs">
        <div className="z-50 ">
          <div className="h-[200px] w-[200px] ">
            <LogoCanvas />
          </div>
          <div>
            <ul className="mt-4 mix-blend-difference">
              <p className="text-center">Henry Rodwell Designs</p>
              <br />
              <p
                className="hover:underline text-center"
                onClick={handleCopyEmail}
              >
                info@henryrodwell.com
              </p>
              <p className="hover:underline text-center hidden">
                <a href="">Portfolio</a>
              </p>
              <br />
              <p className="hover:underline text-center">
                <a href="https://instagram.com/studio.hrl" target="_blank">
                  Instagram
                </a>
              </p>
              <p className="hover:underline text-center">
                <a
                  href="https://www.are.na/henry-rodwell-lynn/channels"
                  target="_blank"
                >
                  Are.na
                </a>
              </p>
              <br />
              <div className="flex justify-center items-center ">
                <label className="inline-flex items-center cursor-crosshair">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={() => setShowWork(!showWork)}
                  />
                  <div className="relative w-7 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-black border border-white"></div>{" "}
                  {/* Added border class */}
                  <span className="ms-3 text-xs">Let See!</span>
                </label>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-row min-h-screen min-w-full ${
          showWork ? "" : "hidden"
        }`}
      >
        {Work_Data.map((item, i) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              ...getRandomPosition(positions),
            }}
            animate={
              showWork ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={i}
          >
            {item.category === "vid" ? (
              <Draggable>
                <div className={`${workCss}`}>
                  <video autoPlay muted loop className="pointer-events-none">
                    <source src={item.source} type="video/mp4" />
                    {`${item.title}`}
                  </video>
                </div>
              </Draggable>
            ) : (
              <Draggable>
                <div className={`${workCss}`}>
                  <img src={item.source} className="pointer-events-none" />
                </div>
              </Draggable>
            )}
          </motion.div>
        ))}
        <Draggable>
          <div className="hover:cursor-grab active:cursor-grabbing h-[200px] w-[200px] z-40 top-[50vh] absolute left-[300px]">
            <StoppleCanvas />
          </div>
        </Draggable>
      </div>
    </BrowserRouter>
  );
};

export default App;
