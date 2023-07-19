import React from "react";

const About = () => {
  return (
    <div className="md:grid md:grid-cols-12 md:gap4 text-black md:justify-evenly m-5 md:place-content-evenly md:bg-white md:text-smal">
      <div className="md:col-span-3">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          HENRY RODWELL:
        </p>
        <ul className="m-2 md:mt-5 md:mr-10">
          <li>Website Design being done by me 🖲️</li>
        </ul>
        <p className="hidden mt-5 mr-10 md:hidden">
          Is a graduate designer from Kingston University. He is someone who;
          thinks design is (and should be) fun, relishes learning new skills,
          loves solving problems and enjoys working with emerging and exciting
          technologies. <br></br> His work is current and focuses on evoking
          intrigue into the ever changing world around us, by coupling digital
          and emerging practices with tried and tested traditional design
          techniques. <br></br>Henry aims to solve mundane problems through
          unconventional, fun and engaging design.
        </p>
      </div>
      <div className="hidden md:hidden">
        <ul
          className="justify-between grid"
          style={{
            fontWeight: 600,
          }}
        >
          <p>SHOWREEL</p>
          <p>TOOLS</p>
        </ul>
      </div>

      <div className="hidden md:col-span-6 flex">
        <div>
          <p
            style={{
              fontWeight: 600,
            }}
          >
            PROJECTS:
          </p>
          <ol className="columns-3 gap-[calc(25vw-7.5rem)] list-inside list-decimal mt-5 md:columns-2 md:gap-[calc(25vw-7.5rem)]">
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
            <li>Stopple</li>
            <li>Tick Tock..</li>
          </ol>
        </div>
      </div>

      <div className="hidden md:hidden">
        <ul
          className="justify-between"
          style={{
            fontWeight: 600,
          }}
        >
          <p>ADITIONAL INFO</p>
        </ul>
      </div>

      <div className="md:hidden"></div>

      <div className=" md:col-span-1">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          CONTACT:
        </p>
        <ul className="m-2 list-none">
          <li className="flex items-center">
            <a>Email</a>
          </li>
          <li className="flex items-center">
            <a href="https://www.instagram.com/henryrodwelllynn/"> Instagram</a>
          </li>
          <li className="flex items-center">
            <a href="https://www.linkedin.com/in/henry-rodwell-lynn-80687a23b/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
