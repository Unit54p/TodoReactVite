import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function TodoList() {
  return (
    <>
      <span className="block mt-3 font-medium text-2xl text-center">
        Your Todo List
      </span>
      <div className="flex gap-4 mt-4">
        <div className="flex flex-col justify-between items-center sideBar">
          <div className="space-y-7">
            <div className="btn_side_bar">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
            <div className="btn_side_bar">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
            <div className="btn_side_bar">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
          </div>
          <div className="space-y-7">
            <div className="btn_side_bar">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
            <div className="btn_side_bar">
              <img className="img_sideBar" src="src\img\logOut.png" alt="" />
            </div>
          </div>
        </div>

        <div className="flex-grow p-4">
          <table className="border-collapse border border-slate-400 w-full mt-2">
            <thead>
              <tr>
                <td className="border border-slate-300 font-tdin p-2 w-4/5">
                  <div className="flex justify-start gap-3">
                    <span className="text-xl">Today list</span>
                    <span></span>
                  </div>
                </td>
                <td className="border border-slate-300 font-tdin p-2 w-1/5">
                  deadline
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 font-thin p-2 w-3/4 underline cursor-pointer">
                  <span>Add task</span>
                </td>
                <td className="border border-slate-300 font-thin p-2 w-1/4">
                  No records yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 sticky top-0">
          <div className="task_card_active task_card p-4">
            <div className="dot dot_task_card_active">
              <div className="num_task">12</div>
            </div>
            <div className="task_text">Active Task</div>
          </div>
          <div className="task_card_overdue task_card p-4">
            <div className="dot dot_task_card_overdue">
              <div className="num_task">12</div>
            </div>
            <div className="task_text">Overdue Task</div>
          </div>
          <div className="task_card_completed task_card p-4">
            <div className="dot dot_task_card_completed">
              <div className="num_task">12</div>
            </div>
            <div className="task_text">Completed Task</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
