import React from "react";
import time from "../../assetsMobile/9_41.svg";
import vector_cell from "../../assetsMobile/Vector-cell.svg";
import vector_wifi from "../../assetsMobile/Vector-wifi.svg";
import battery from "../../assetsMobile/battery.svg";
import { Link } from "react-router-dom";
import segment from "../../assetsMobile/segment.svg";
import laptop from "../../assetsMobile/laptop_mac.svg";
import { useState } from "react";
import MobileDashboard from "./mobileDashboard/MobileDashboard";

const AssesmentHead = () => {
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <>
      <section className="fixed top-[0px] z-10 flex flex-col items-start bg-white ]">
        {/* wifi section */}
        <div className="flex justify-between items-center w-[375px] h-[40px] py-[7px] px-4 bg-white">
          <span className="">
            <img
              className="w-[28.426px] h-[11.089px] flex-shrink-0 fill-[#000]"
              src={time}
              alt="9:41Img"
            />
          </span>
          <span className="flex h-[11px] px-[1px] items-center gap-[8px]">
            <img
              className="w-[15.5px] h-[9.778px] fill-[#000]"
              src={vector_cell}
              alt="vector_cellImg"
            />
            <img
              className="w-[13.925px] h-[10.052px] fill-[#000]"
              src={vector_wifi}
              alt="vector_wifiImg"
            />
            <img
              className="w-[21.719px] h-[9.472px] fill-[#000]"
              src={battery}
              alt="9:41Img"
            />
          </span>
        </div>

        {/* bar section */}

        {open ? <MobileDashboard open={open} setOpen={setOpen} /> : ""}

        <div className="flex justify-between items-center w-[375px] h-[50px] px-[15px]">
          <div className="flex items-center gap-[10px]">
            <div
              className="flex justify-center items-center gap-[10px] p-[10px] w-[40px] h-[40px] rounded-[60px] bg-[#F2F8FE] hover:cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
            >
              <img
                className="w-[30px] h-[30px] shrink-0"
                src={segment}
                alt="Img"
              />
            </div>
            <p className="text-[#1C4980] text-[16px] font-semibold">
              Assesment
            </p>
          </div>

          <div className="flex justify-center items-center gap-[10px] p-[10px] w-[40px] h-[40px] ">
            <Link to="/desktop">
              <img
                className="w-[20px] h-[20px] shrink-0"
                src={laptop}
                alt="laptopImg"
              />
            </Link>
          </div>
        </div>

        {/* my asses section */}
        <div className="flex flex-col items-start justify-center gap-[24px] w-[375px]">
          <div className="flex items-start justify-between self-stretch w-[100%]">
            <div className="flex justify-center items-center gap-[10px] h-[50px] py-[10px] border-b-[2px] border-b-[#0073E6] w-[50%]">
              <p className="text-[#0073E6] text-[14px] font-medium ">
                My Assessments
              </p>
            </div>

            <div className="flex justify-center items-center gap-[10px] h-[50px] py-[10px]  border-b-[2px] border-b-[  #F6F8FA] w-[50%]">
              <p className="text-[#3E6493] text-[14px] font-medium">
                Unstop Assessments
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssesmentHead;
