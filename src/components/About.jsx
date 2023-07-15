import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-12 gap4 text-black justify-evenly m-5 place-content-evenly text-sm">
      <div className="col-span-5">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          HENRY RODWELL:
        </p>
        <p className="mt-2.5 mr-10">
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
      <div className="col-span-1">
        <ul
          className=" justify-between"
          style={{
            fontWeight: 600,
          }}
        >
          <p>> SHOWREEL</p>
          <p>> TOOLS</p>
        </ul>
      </div>

      <div className="">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          PROJECTS:
        </p>
        <ol className=" list-inside list-decimal mt-2.5">
          <li>BHC</li>
          <li>CTQ</li>
          <li>Dissertation</li>
          <li>DVOMI</li>
        </ol>
      </div>
      <div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          <br></br>
        </p>
        <ol start="5" className=" list-inside list-decimal mt-2.5">
          <li>Experiments</li>
          <li>Flux</li>
          <li>Harvard D3</li>
          <li>ICCHA</li>
        </ol>
      </div>
      
      <div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          <br></br>
        </p>
        <ol start="9" className=" list-inside list-decimal mt-2.5 mr-10">
          <li>Papacetamol</li>
          <li>Sacha</li>
          <li>Stopple</li>
          <li>Tick Tock..</li>
        </ol>
      </div>

      <div className="col-span-1">
        <ul
          className=" justify-between"
          style={{
            fontWeight: 600,
          }}
        >
          <p>> ADITIONAL INFO</p>
          
        </ul>
      </div>

      <div className="col-span-1"></div>
      <div className="col-span-1">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          CONTACT:
        </p>
        <ul className=" list-inside list-decimal mt-2.5 list-none">
          <li className="flex items-center">
            <svg
              className="mr-1"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <a>Email</a>
          </li>
          <li className="flex items-center">
            <svg
              className="mr-1"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <a href="https://www.instagram.com/henryrodwelllynn/"> Instagram</a>
          </li>
          <li className="flex items-center">
            <svg
              className="mr-1"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <a href="https://www.linkedin.com/in/henry-rodwell-lynn-80687a23b/">
              LinkedIn
            </a>
          </li>
          {/* <li className="flex items-center">
            <svg
              className="mr-1"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <a href="https://www.are.na/henry-rodwell-lynn">Are.na</a>
          </li>
          <li className="flex items-center">
            <svg
              className="mr-1"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
            </svg>
            <a href="https://www.are.na/henry-rodwell-lynn">Github</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default About;
