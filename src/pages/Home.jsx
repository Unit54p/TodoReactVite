import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex items-center justify-center flex-col h-[75vh]  ">
        <span className="box_shadow_costume block  mt-3 font-medium text-2xl text-center ">
          Welcome to the ToDo List!
        </span>
        <button className="btn_box_shadow mt-3">
          <Link to="/todolist">Start!</Link>
        </button>
      </div>
    </>
  );
}

export default Home;
