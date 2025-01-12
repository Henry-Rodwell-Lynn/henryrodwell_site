import { BrowserRouter } from "react-router-dom";
import { useState, useCallback } from "react";

const App = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Copy email handler
  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("info@henryrodwell.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  }, []);

  return (
    <BrowserRouter>
      <div className="absolute m-3 text-xs z-50 leading-3 text-white">
        <ul>
          <p className="">HENRY RODWELL</p>
          <br />
          <p className="hover:underline" onClick={handleCopyEmail}>
            {isCopied ? "EMAIL COPIED TO CLIPBOARD" : "INFO@HENRYRODWELL.COM"}
          </p>
          <p className="hover:underline">
            <a href="https://instagram.com/_henryrodwell" target="_blank">
              SELECTED WORK
            </a>
          </p>
          <p className="hover:underline">
            <a
              href="https://www.instagram.com/experiments.hrl/"
              target="_blank"
            >
              EXPERIMENTS
            </a>
          </p>
          <p className="hover:underline">
            <a href="https://github.com/Henry-Rodwell-Lynn" target="_blank">
              GITHUB
            </a>
          </p>
          <p className="hover:underline">
            <a
              href="https://www.are.na/henry-rodwell-lynn/channels"
              target="_blank"
            >
              ARE.NA
            </a>
          </p>

          <br />
        </ul>
      </div>
    </BrowserRouter>
  );
};

export default App;
