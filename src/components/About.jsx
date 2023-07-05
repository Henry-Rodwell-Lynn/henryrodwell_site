import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-4 gap4 text-white justify-evenly  m-5 place-content-evenly">
      <div className="">
        <p
          style={{
            fontWeight: 600,
          }}
        >
          Hey:
        </p>
        <p className="mt-2.5">My name is Henry</p>
      </div>
      <div>
        <p
          style={{
            fontWeight: 600,
          }}
        >
          Projects:
        </p>
        <ol className=" list-inside list-decimal mt-2.5">
          <li>Tick Tock..</li>
          <li>Stopple</li>
          <li>Tick Tock..</li>
          <li>Tick Tock..</li>
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
        <ol className=" list-inside list-decimal mt-2.5">
          <li>Tick Tock..</li>
          <li>Stopple</li>
          <li>Tick Tock..</li>
          <li>Tick Tock..</li>
        </ol>
      </div>
      <div>About</div>
    </div>
  );
};

export default About;
