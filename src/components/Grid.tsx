import { Home_data } from "../Data/Home_data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
const Grid = () => {
  const cell_i = "flex flex-col flex-none max-h-fit";
  const defaultImage = "object-contain w-full max-h-[calc(100vh/4.4)]";
  const defaultVid = " max-h-[calc(100vh/4.4)] pointer-events-none";

  return (
    <div className="text-xs text-black grid grid-cols-4 flex-1">
      {Home_data.map((item, i) => (
        // Wrap each cell in a Link component
        <Link key={i} to={`/${item.title}`} className={`${cell_i}`}>
          <h2 className="font-black">{item.title}</h2>
          <div className="h-full overflow-hidden items-center justify-center flex ">
            <motion.div
              initial={{ y: 100, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="flex flex-col w-full"
            >
              {item.category === "vid" ? (
                <video autoPlay muted loop className={`${defaultVid}`}>
                  <source src={item.value} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={item.value} className={`${defaultImage}`} />
              )}
            </motion.div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
