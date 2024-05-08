import PapacetamolCanvas from "./Work/Papacetamol";
import { useState } from "react";

const About = () => {

  const [isCopied, setIsCopied] = useState(false);
  const [showWork, setShowWork] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("henrywprodwell@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };
  
  return (
    <div className="flex flex-row min-h-screen min-w-full justify-center items-center  border-red-500 absolute text-white text-xs">
      <div className="z-50 ">
        <div className="h-[200px] w-[200px] hover:cursor-grab active:cursor-grabbing">
          <PapacetamolCanvas />
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
            <div className="flex justify-center items-center">
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
  );
};

export default About;
