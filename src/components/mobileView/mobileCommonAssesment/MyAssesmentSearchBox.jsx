import React from "react";
import search from "../../../assetsMobile/search.svg";
import filter from "../../../assetsMobile/filter_list_alt.svg";
import bar_chart from "../../../assetsMobile/bar_chart.svg";
// import { Link } from "react-router-dom";
import { useState } from "react";
import ChartBar from "../../chartBar/ChartBar";

const MyAssesmentSearchBox = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <ChartBar open={open} setOpen={setOpen} />
      <div className="flex justify-between items-center w-[345px] ">
        <p className="text-[#1C4980] text-[16px] font-semibold">
          My Assessment
        </p>

        <div className="flex items-start gap-[4px]">
          {/* img-1 */}
          <div className="flex justify-center items-center gap-[10px] p-[4px] w-[40px] h-[40px]">
            <img
              className="w-[22px] h-[22px] flex-shrink-0"
              src={search}
              alt="searchImg"
            />
          </div>

          {/* img-2 */}
          <div className="flex justify-center items-center gap-[10px] p-[4px] w-[40px] h-[40px]">
            <img
              className="w-[24px] h-[24px] flex-shrink-0"
              src={filter}
              alt="searchImg"
            />
          </div>

          {/* img-3 */}

          {/* <Link to="chartbar"> */}
          <div
            className="flex justify-center items-center gap-[10px] p-[4px] w-[32px] h-[32px] hover:cursor-pointer"
            onClick={() => (open ? setOpen(false) : setOpen(true))}
          >
            <div className="w-[20px] h-[20px] flex justify-center items-center gap-[10px] flex-shrink-0">
              <img
                className="w-[16px] h-[16px] flex-shrink-0 fill-[#1C4980]"
                src={bar_chart}
                alt="searchImg"
              />
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default MyAssesmentSearchBox;
