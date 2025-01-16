import React from "react";
import { Link } from "react-router-dom";

function TodoList() {
  return (
    <>
      <span className="block  mt-3 font-medium text-2xl text-center ">
        Your Todo List
      </span>
      <div>
        <span>Newest list</span>
        <table className="border-collapse border border-slate-400">
          <thead>
            <tr>
              <th className="border border-slate-300 font-thin  p-2">no</th>
              <th className="border border-slate-300 font-thin p-2">Title</th>
              <th className="border border-slate-300 font-thin p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 font-thin  p-2">
                No records yet.
              </td>
              <td className="border border-slate-300 font-thin  p-2">
                No records yet.
              </td>
              <td className="border border-slate-300 font-thin  p-2">
                No records yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default TodoList;
