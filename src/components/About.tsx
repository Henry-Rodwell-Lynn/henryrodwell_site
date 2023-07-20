import React from "react";

const About = () => {
  return (
    <div className="m-5 text-black md:grid md:grid-cols-12 md:gap4  md:justify-evenly md:place-content-evenly">
      <div className="md:col-span-3 lg:col-span-5">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          HENRY RODWELL:
        </p>
        <p className="m-2 md:mt-5 md:m-0 md:mr-10 lg:hidden">
          Website Design being done by me 🖲️
        </p>
        <p className="hidden mt-5 mr-10 lg:block">
          Is a graduate designer from Kingston University. He is someone who;
          thinks design is (and should be) fun, relishes learning new skills,
          loves solving problems and enjoys working with emerging and exciting
          technologies. His work is current and focuses on evoking intrigue into
          the ever changing world around us, by coupling digital and emerging
          practices with tried and tested traditional design techniques.{" "}
          <br></br>Henry aims to solve mundane problems through unconventional,
          fun and engaging design.
        </p>
      </div>
      <div className="hidden lg:block">
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
        </ul>
      </div>

      <div className="hidden md:col-span-6 md:flex lg:col-span-3">
        <div>
          <p
            style={{
              fontWeight: 600,
            }}
          >
            PROJECTS:
          </p>
          <ol className="md:list-inside md:list-decimal md:mt-5 md:columns-2 md:gap-[calc(25vw-7.5rem)] lg:columns-3 lg:gap-5">
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

      <div className="hidden lg:block lg:col-span-2">
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

      <div className="md:col-span-1">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          CONTACT:
        </p>
        <ul className="m-2 list-none md:mt-5 m-0">
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
