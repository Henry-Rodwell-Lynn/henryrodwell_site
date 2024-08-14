import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Work_Data } from "./Work";
import Draggable from "react-draggable";

import LogoCanvas from "./components/Work/Logo";
import StoppleCanvas from "./components/Work/Stopple";

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState({});
  const [allMediaLoaded, setAllMediaLoaded] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@henryrodwell.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const workCss = `
    absolute 
    hover:cursor-grab 
    active:cursor-grabbing 
    w-[25rem] 
    h-[20rem] 
    flex 
    justify-center 
    items-center
  `;

  const [positions, setPositions] = useState([]);

  interface Position {
    x: number;
    y: number;
  }

  const getRandomPosition = (
    positions: Position[],
    elementWidth = 200,
    elementHeight = 200,
    margin = 10
  ): Position => {
    const maxAttempts = 1000;
    let attempts = 1000;

    const isOverlapping = (newPos: Position) => {
      return positions.some((pos) => {
        return (
          newPos.x < pos.x + elementWidth + margin &&
          newPos.x + elementWidth + margin > pos.x &&
          newPos.y < pos.y + elementHeight + margin &&
          newPos.y + elementHeight + margin > pos.y
        );
      });
    };

    let x: number, y: number;

    do {
      x = Math.random() * (window.innerWidth - elementWidth);
      y = Math.random() * (window.innerHeight - elementHeight);
      attempts++;
    } while (isOverlapping({ x, y }) && attempts < maxAttempts);

    if (attempts >= maxAttempts) {
      console.warn(
        "Could not find a non-overlapping position after multiple attempts"
      );
    }

    return { x, y };
  };

  // Function to update the media loaded state
  const handleMediaLoad = (index) => {
    setMediaLoaded((prev) => ({ ...prev, [index]: true }));
  };

  // Determine if all media are loaded
  useEffect(() => {
    setAllMediaLoaded(Object.values(mediaLoaded).length === Work_Data.length && Object.values(mediaLoaded).every(Boolean));
  }, [mediaLoaded]);

  return (
    <BrowserRouter>
      <div className="flex flex-row min-h-screen min-w-full justify-center items-center absolute text-white text-sm">
        <div className="z-50 bg-blend-difference mix-blend-difference">
          <div className="h-[200px] w-[200px]">
            <LogoCanvas />
          </div>
          <div>
            <ul className="mt-4 mix-blend-difference">
              <p className="text-center text-sm">HENRY RODWELL </p>
              <p className="text-center">
                <a className="font-mono font-normal text-xs">site_v1.1</a>
              </p>
              <br />
              <p
                className="hover:underline text-center"
                onClick={handleCopyEmail}
              >
                {isCopied
                  ? "EMAIL COPIED TO CLIPBOARD"
                  : "INFO@HENRYRODWELL.COM"}
              </p>
              <br />
              <p className="hover:underline text-center">
                <a href="https://instagram.com/_henryrodwell" target="_blank">
                  INSTAGRAM
                </a>
              </p>

              <p className="hover:underline text-center">
                <a
                  href="https://www.are.na/henry-rodwell-lynn/channels"
                  target="_blank"
                >
                  ARE.NA
                </a>
              </p>
              <br />
              <div className="flex justify-center items-center">
                <label className="inline-flex items-center cursor-crosshair">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={() => setShowWork(!showWork)}
                  />
                  <div className="relative w-7 h-4 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-black peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-black border border-white"></div>
                  <span className="ms-3 font-mono font-normal text-xs">
                    ( Lets See! )
                  </span>
                </label>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={showWork && allMediaLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-row min-h-screen min-w-full"
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
            onLoad={() => handleMediaLoad(i)}
          >
            {item.category === "vid" ? (
              <Draggable>
                <div className={`${workCss}`}>
                  <video
                    autoPlay
                    muted
                    loop
                    className="pointer-events-none object-contain w-full h-full"
                    onCanPlayThrough={() => handleMediaLoad(i)}
                  >
                    <source src={item.source} type="video/mp4" />
                    {`${item.title}`}
                  </video>
                </div>
              </Draggable>
            ) : (
              <Draggable>
                <div className={`${workCss}`}>
                  <img
                    src={item.source}
                    className="pointer-events-none object-contain w-full h-full"
                    onLoad={() => handleMediaLoad(i)}
                  />
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
      </motion.div>
    </BrowserRouter>
  );
};

export default App;
