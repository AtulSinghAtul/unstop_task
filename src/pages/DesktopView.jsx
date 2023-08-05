import React from "react";
import AssesmentsOverview from "../components/desktopView/AssesmentsOverview";
import Dashboard from "../components/desktopView/Dashboard";

const DesktopView = () => {
  return (
    <div>
      <div className=" flex flex-row  justify-between items-start w-[100%]  h-[1532px]   bg-slate-200 ">
        <Dashboard />
        <AssesmentsOverview />
      </div>
    </div>
  );
};

export default DesktopView;
