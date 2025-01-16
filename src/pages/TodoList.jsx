import React from "react";
import { Link } from "react-router-dom";

function TodoList() {
  return (
    <>
      <span className="block mt-3 font-medium text-2xl text-center  ">
        Your Todo List
      </span>
      {/* container konten */}
      <div className="flex gap-4 mt-4">
        {/* Sidebar Kiri */}
        <div className="flex flex-col justify-between items-center sideBar ">
          <div className="space-y-7">
            <div className="btn_side_bar ">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
            <div className="btn_side_bar ">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
            <div className="btn_side_bar ">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
          </div>
          <div className="space-y-7">
            <div className="btn_side_bar ">
              <img className="img_sideBar" src="src\img\plus.png" alt="" />
            </div>
            <div className="btn_side_bar ">
              <img className="img_sideBar" src="src\img\logOut.png" alt="" />
            </div>
          </div>
        </div>

        {/* Tabel di Tengah */}
        <div className="flex-grow  p-4">
          <span className="font-semibold">Newest list</span>
          <table className="border-collapse border border-slate-400 w-full mt-2">
            <thead>
              <tr>
                <th className="border border-slate-300 font-thin p-2">No</th>
                <th className="border border-slate-300 font-thin p-2">Title</th>
                <th className="border border-slate-300 font-thin p-2">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 font-thin p-2">
                  No records yet.
                </td>
                <td className="border border-slate-300 font-thin p-2">
                  No records yet.
                </td>
                <td className="border border-slate-300 font-thin p-2">
                  No records yet.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Task Dashboard di Kanan */}
        <div className="flex flex-col gap-4 sticky top-0">
          {/* Active Task */}
          {/* task */}
          <div className="task_card_active task_card p-4 ">
            <div className="dot dot_task_card_active">
              <div className="num_task">12</div>
            </div>
            <div className="task_text">Active Task</div>
          </div>
          {/* overdue task */}
          <div className="task_card_overdue task_card p-4 ">
            <div className="dot dot_task_card_overdue">
              <div className="num_task">12</div>
            </div>
            <div className="task_text">Overdue Task</div>
          </div>
          {/* completed task */}
          <div className="task_card_completed task_card p-4">
            <div className="dot dot_task_card_completed">
              <div className="num_task">12</div>
            </div>
            <div className="task_text">Completed Task</div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default TodoList;
