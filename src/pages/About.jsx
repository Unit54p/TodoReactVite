import React from "react";

function About() {
  return (
    <>
      <span className="block  mt-3 font-medium text-2xl text-center ">
        Welcome to the About Page!
      </span>
      {/* 1 */}
      <div className="layout-x-15">
        <div className="flex justify-between items-center align-middle">
          <div>
            <span className="text-xl font-medium">Front end</span> <br />
            React, Tailwind, Vite, Html, Css, dan js
          </div>
          <div>
            <img src="src\img\react.png" alt="" />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="layout-x-15">
        <div className="flex justify-between items-center align-middle">
          <div>
            <img src="src\img\Rectangle 49.png" alt="" />
          </div>
          <div>
            <span className="text-xl font-medium">Back end</span> <br />
            Not yet
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="layout-x-15">
        <div className="flex justify-between items-center align-middle">
          <div>
            <span className="text-xl font-medium">Front end</span> <br />
            React, Tailwind, Vite, Html, Css, dan js
          </div>
          <div>
            <img src="src\img\Rectangle 49.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
