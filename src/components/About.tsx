import React from "react";
import { useState } from "react";


const About = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("henrywprodwell@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); 
  };

  return (
    <div className="m-5 text-black md:grid md:grid-cols-12 md:gap4  md:justify-evenly md:place-content-evenly h-[calc(25vh)]">
      <div className="md:col-span-3 xl:col-span-5">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          HENRY RODWELL:
        </p>
        <p className="m-2 md:mt-5 md:m-0 md:mr-10 xl:hidden">
          Website Design being done by me 🖲️
        </p>
        <p className="hidden mt-5 mr-10 xl:block">
          Is a designer who
          thinks design is (and should be) fun, relishes learning new skills,
          loves solving problems and enjoys working with emerging and exciting
          technologies. His work is current and focuses on evoking intrigue into
          the ever changing world around us, by coupling digital and emerging
          practices with tried and tested traditional design techniques. Henry aims to solve mundane problems through unconventional,
          fun and engaging design.
          <p>
            <br/>➡️ Website Design by Henry Rodwell-Lynn 🖲️
          </p>
        </p>
      </div>
      <div className="hidden xl:block">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          DESIGN:
        </p>
        <ul className="justify-between grid mt-5">
          <li>Showreel</li>
          <li>Tools</li>
          <li>Sites</li>
        </ul>
      </div>

      <div className="hidden md:col-span-6 md:flex xl:col-span-3">
        <div>
          <p
            style={{
              fontWeight: 600,
            }}
          >
            PROJECTS:
          </p>
          <ol className="md:list-inside md:list-decimal md:mt-5 md:columns-2 md:gap-[calc(25vw-7.5rem)] xl:columns-3 xl:gap-5">
            <li>Stopple</li>
            <li>BHC</li>
            <li>CTQ</li>
            <li>Dissertation</li>
            <li>DVOMI</li>
            <li>Experiments</li>
            <li>Flux</li>
            <li>Harvard D3</li>
            <li>ICCHA</li>
            <li>Papacetamol</li>
            <li>Sacha</li>
            <li>Tick Tock..</li>
          </ol>
        </div>
      </div>

      <div className="hidden xl:block xl:col-span-2">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          ADITIONAL INFO:
        </p>
        <ul className="mt-5">
          <p>This site is currently a WIP</p>
        </ul>
      </div>

      <div className="md:hidden"></div>

      <div className="md:col-span-1">
        <p style={{ fontWeight: 600 }}>CONTACT:</p>
        <ul className="m-2 list-none md:mt-5 m-0">
          <li className="flex items-center">
            <button className="hover:underline" onClick={handleCopyEmail}>
              Email
            </button>
          </li>
          <li className="flex items-center">
            <a
              href="https://www.instagram.com/henryrodwelllynn/"
              target="_blank"
              className="hover:underline"
            >
              Instagram
            </a>
          </li>
          <li className="flex items-center">
            <a
              href="https://www.linkedin.com/in/henry-rodwell-lynn-80687a23b/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        {isCopied && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap animate-email">
            <p
              className="text-center text-7xl" style={{
                fontWeight: 600
              }}
            >
              EMAIL COPPIED TO CLIPBOARD 📧 EMAIL COPPIED TO CLIPBOARD 📧 EMAIL COPPIED TO CLIPBOARD 📧
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
