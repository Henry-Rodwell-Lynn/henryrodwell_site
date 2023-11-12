import React from "react";

const Banner = () => {
  const openTabs = () => {
    // URLs you want to open
    const urls = ['https://instagram.com/henryrodwelllynn'];
    
    // Open each URL in a new tab
    urls.forEach((url) => {
      window.open(url, '_blank');
    });
  };

  return (
    <div onClick={openTabs} className="">
      {/* <div className="fixed flex z-[-1] rotate-3 top-48 shadow-lg select-none">
        <div className="whitespace-nowrap ml-1 mr-1">
          <div className="flex gap-2 animate-rightToLeft bg-[#30c104] p-2 border-4 border-black border-l-0 shadow-lg text-black">
            <p className=""
              style={{
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS
              CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
            <p
              style={{
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS
              CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
          </div>
        </div>
      </div> */}

      <div className="fixed flex z-[50] select-none translate-y-[calc(50vh-100%)] shadow-lg">
        <div className="whitespace-nowrap ml-1 mr-1">
          <div className="flex gap-1 animate-leftToRight bg-[#ffffff] hover:bg-yellow-400 border-2 border-black p-2">
            <p
              style={{
                fontWeight: 600,
              }}
            >
              🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO 🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO
            </p>
            <p
              style={{
                fontWeight: 600,
              }}
            >
              🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO 🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 CLICK HERE FOR MORE INFO
            </p>
          </div>
        </div>
      </div>

      {/* <div className="fixed flex z-[-1] rotate-6 bottom-40 shadow-lg select-none -translate-x-10">
        <div className="whitespace-nowrap ml-1 mr-1">
          <div className="flex gap-2 animate-rightToLeft bg-[#04c12a] p-2 border-4 border-black border-l-0 shadow-lg">
            <p
              style={{
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS
              CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
            <p
              style={{
                fontWeight: 600,
                fontSize: 28,
              }}
            >
              🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS
              CURRENTLY UNDER DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER
              DEVELOPMENT 🚧 THIS SITE IS CURRENTLY UNDER DEVELOPMENT
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
