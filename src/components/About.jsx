import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-12 gap4 text-white justify-evenly m-5 place-content-evenly">
      <div className="col-span-6">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          Hey:
        </p>
        <p className="mt-2.5 mr-10">Mauris ut dui in nisi condimentum euismod sit amet ac leo. Curabitur euismod bibendum quam, et interdum velit vehicula at. Etiam tristique a lectus a fermentum. Duis egestas porta sem, eget euismod tellus pharetra vel. Morbi at consectetur dolor. Aenean bibendum viverra pulvinar. Nunc eget dolor vitae erat commodo hendrerit. Nunc tempor rutrum dolor.</p>
      </div>

      <div className="">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          Projects:
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
      <div>
      <p
          style={{
            fontWeight: 600,
          }}
        >
          Contact:
        </p>
      </div>
    </div>
  );
};

export default About;
