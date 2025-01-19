import React from "react";
import { Link } from "react-router-dom";

function Author() {
  return (
    <>
      <span className="block  mt-3 font-medium text-2xl text-center ">
        Author
      </span>
      {/* 1 */}
      <div className="layout-x-15">
        <div className="flex justify-between items-center align-middle">
          <div>
            <span className="text-xl font-medium">Surya ario</span> <br />
            Front end and UI Design part
          </div>
          <div>
            <img src="src\img\react.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Author;
