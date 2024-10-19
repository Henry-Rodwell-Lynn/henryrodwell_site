import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import LogoCanvas from "./components/Work/Logo";

const App = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [browserType, setBrowserType] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [location, setLocation] = useState("Unknown");
  const [timeZone, setTimeZone] = useState("");
  const [screenResolution, setScreenResolution] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Copy email handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("info@henryrodwell.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  // Fetch current time with seconds
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString();
      setCurrentTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Determine browser type
  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.includes("Chrome")) setBrowserType("Chrome");
    else if (userAgent.includes("Firefox")) setBrowserType("Firefox");
    else if (userAgent.includes("Safari") && !userAgent.includes("Chrome"))
      setBrowserType("Safari");
    else if (userAgent.includes("Edg")) setBrowserType("Edge");
    else setBrowserType("Unknown Browser");
  }, []);

  // Determine device type and check if it's a touch device
  useEffect(() => {
    const checkDeviceTypeAndTouch = () => {
      if (window.innerWidth <= 768) setDeviceType("Mobile");
      else if (window.innerWidth <= 1024) setDeviceType("Tablet");
      else setDeviceType("Desktop");

      // Check if the device is a touchscreen
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    checkDeviceTypeAndTouch();
    window.addEventListener("resize", checkDeviceTypeAndTouch);
    return () => window.removeEventListener("resize", checkDeviceTypeAndTouch);
  }, []);

  // Get screen resolution
  useEffect(() => {
    const updateResolution = () => {
      setScreenResolution(`${window.innerWidth}x${window.innerHeight}`);
    };

    updateResolution();
    window.addEventListener("resize", updateResolution);
    return () => window.removeEventListener("resize", updateResolution);
  }, []);

  // Fetch location using Geolocation API
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`Lat: ${latitude.toFixed(2)}, Long: ${longitude.toFixed(2)}`);
      });
    }
  }, []);

  // Get the user's time zone
  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimeZone(timeZone);
  }, []);

  // Direct DOM updates using requestAnimationFrame for smoother crosshair and coordinates
  useEffect(() => {
    if (isTouchDevice || window.innerWidth <= 1024) return; // Skip crosshair rendering for touch devices or smaller screens

    const crosshairX = document.createElement("div");
    const crosshairY = document.createElement("div");
    const coordDisplay = document.createElement("div");

    // Set styles for crosshairs
    crosshairX.style.position = "absolute";
    crosshairX.style.height = "1px";
    crosshairX.style.width = "100%";
    crosshairX.style.background = "rgba(255, 255, 255, 0.5)";
    crosshairX.style.pointerEvents = "none";
    crosshairX.style.transform = "translateY(-50%)";
    
    crosshairY.style.position = "absolute";
    crosshairY.style.width = "1px";
    crosshairY.style.height = "100%";
    crosshairY.style.background = "rgba(255, 255, 255, 0.5)";
    crosshairY.style.pointerEvents = "none";
    crosshairY.style.transform = "translateX(-50%)";

    // Set styles for coordinate display
    coordDisplay.className = "text-gray-400 font-mono text-xs";
    coordDisplay.style.position = "absolute";
    coordDisplay.style.pointerEvents = "none";

    document.body.appendChild(crosshairX);
    document.body.appendChild(crosshairY);
    document.body.appendChild(coordDisplay);

    const updateCrosshair = (e: { clientX: any; clientY: any; }) => {
      const x = e.clientX;
      const y = e.clientY;

      crosshairX.style.top = `${y}px`;
      crosshairY.style.left = `${x}px`;

      coordDisplay.style.left = `${x + 15}px`;
      coordDisplay.style.top = `${y + 15}px`;
      coordDisplay.textContent = `(x: ${x}, y: ${y})`;
    };

    const handleMouseMove = (e: any) => {
      requestAnimationFrame(() => updateCrosshair(e));
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(crosshairX);
      document.body.removeChild(crosshairY);
      document.body.removeChild(coordDisplay);
    };
  }, [isTouchDevice]);

  return (
    <BrowserRouter>
      <div className="text-white absolute m-3 text-xs z-50">
        <ul>
          <p className="">HENRY RODWELL</p>
          <p className="text-gray-400">
            <a className="font-mono font-normal text-xs">
              DESIGN | CODE | MOTION | INTERACTION
            </a>
          </p>
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
            <a href="https://instagram.com/_henryrodwell" target="_blank">
              EXPERIMENTS
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

      <div className="flex flex-row min-h-screen min-w-full justify-center items-center absolute text-white text-sm">
        <div className="bg-blend-difference mix-blend-difference">
          <div className="h-[10rem] w-[10rem]">
            <LogoCanvas />
          </div>
        </div>
      </div>

      {/* Information in the Bottom Right Corner */}
      <div className="bottom-0 absolute m-3 text-gray-400 text-xs">
        <ul className="-space-y-1.5">
          <p>
            <a className="font-mono font-normal">CURRENT TIME: {currentTime}</a>
          </p>
          <p>
            <a className="font-mono font-normal">BROWSER: {browserType}</a>
          </p>
          <p>
            <a className="font-mono font-normal">DEVICE: {deviceType}</a>
          </p>
          <p>
            <a className="font-mono font-normal">
              SCREEN RESOLUTION: {screenResolution}
            </a>
          </p>
          <p>
            <a className="font-mono font-normal">TIME ZONE: {timeZone}</a>
          </p>
          <p>
            <a className="font-mono font-normal">SITE VERSION: v1.3</a>
          </p>
        </ul>
      </div>
    </BrowserRouter>
  );
};

export default App;
