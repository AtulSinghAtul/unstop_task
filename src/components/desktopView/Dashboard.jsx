import React from "react";
import dashboard from "../../assets/dashboard.png";
import note_alt from "../../assets/note_alt.svg";
import quiz from "../../assets/quiz.svg";
import Vector_267 from "../../assets/Vector 267.svg";
import admin from "../../assets/admin_meds.svg";

const Dashboard = () => {
  return (
    <div className="relative   ">
      <div className="fixed  flex flex-col items-center justify-start gap-10 w-auto h-[992px] text-center  bg-white pl-8 pr-5 pb-5 pt-4 font-semibold ">
        <div className="flex flex-col items-center justify-center gap-2  hover:cursor-pointer">
          <img src={dashboard} alt="dashboardImg" />
          <p className="text-[#0073E6]">Dashboard</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2  hover:cursor-pointer border-2 border-[#0073E6] rounded-lg bg-[#E5F1FC] p-3">
          <img src={note_alt} alt="dashboardImg" />
          <p className="text-[#0073E6]">Assessment</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-2  hover:cursor-pointer">
          <img src={quiz} alt="dashboardImg" />
          <p className="text-[#0073E6]">My Library</p>
        </div>

        <div>
          <img src={Vector_267} alt="vectorImg" />
        </div>

        <button className="border border-1 border-red-600 rounded-full px-3 py-1 text-[14px] text-red-800 bg-red-100 -mt-6 ">
          Admin
        </button>

        <div className="flex flex-col items-center justify-center gap-2 -mt-6 hover:cursor-pointer ">
          <img src={admin} alt="dashboardImg" />
          <p className="text-[#0073E6] ">Round Status</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
