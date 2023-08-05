import React from "react";
import suitcase from "../../../assetsMobile/suitcase.svg";
import link from "../../../assetsMobile/link.svg";
import schedule from "../../../assetsMobile/schedule.svg";
import dot from "../../../assetsMobile/dot.svg";

const MathCommonAssement = () => {
  return (
    <div>
      {/* **** Math assesment multi logo box ****** */}
      <div className="flex p-[14px] flex-col items-start gap-[10px] self-stretch rounded-xl border border-[#DADCE0] bg-[#fff]">
        <div className="flex justify-between items-start self-stretch">
          <div className="flex   items-start gap-[10px]">
            <img
              className="w-[50px] h-[50px] rounded-xl fill-[#EBE8FD]"
              src={suitcase}
              alt="suitcaseImg"
            />
            <div className="flex flex-col items-start gap-[2px]">
              <p className="text-[#1C4980] text-[14px] font-semibold">
                Math Assessment
              </p>

              <div className="flex items-center gap-[5px]">
                <div className="w-[26px] ">
                  <p className="text-[12px] text-[#1C4980] font-medium">Job</p>
                </div>

                <div className="h-[16px] w-[1px] stroke-[#DADCE0] stroke-[1px] border"></div>

                <div className="flex h-[22px items-center gap-[4px]">
                  <img
                    className="w-[12px] h-[12px] fill-[#8DA4BF]"
                    src={schedule}
                    alt="calendarIMg"
                  />
                  <p className="text-[12px] font-medium text-[#8DA4BF]">
                    20 Apr 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-[24px] h-[24px] py-[4px] px-[8px] gap-[8px] justify-center items-center rounded-[40px] bg-white">
            <div className="w-[16px] h-[16px] flex-shrink-0">
              <img
                className="w-[3.333px] h-[12.667px]"
                src={dot}
                alt="dotIMg"
              />
            </div>
          </div>
        </div>
        {/* dotted border */}
        <div>
          <svg
            className="stroke-[#DADCE0] stroke-[1px] self-stretch text-center"
            xmlns="http://www.w3.org/2000/svg"
            width="317"
            height="2"
            viewBox="0 0 317 2"
            fill="none"
          >
            <path d="M0 1H317" stroke="#DADCE0" stroke-dasharray="3 3" />
          </svg>
        </div>

        <div className="flex justify-between items-center self-stretch">
          <div className="flex items-start gap-[10px]">
            <div className=",flex flex-col items-start gap-[1px]">
              <p className="text-[#1c4980] text-[12px] font-semibold">00</p>
              <p className="text-[#1c4980] text-[10px] font-medium">Duration</p>
            </div>

            <div className="flex flex-col items-start gap-[1px]">
              <p className="text-[#1c4980] text-[12px] font-semibold">00</p>
              <p className="text-[#1c4980] text-[10px] font-medium">
                Questions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="flex justify-center items-center gap-4 h-[30px] py-[2px] pr-[8px] pl-[6px] rounded-[50px] border border-[#1C4980] bg-white">
              <img className="w-[16px] h-[16px]" src={link} alt="linkImg" />
              <p className="text-[#1C4980] text-[12px] font-medium">Share</p>
            </div>

            {/* *****multiple logo section***** */}
            <div className="flex items-center gap-[4px]">
              <div className="flex justify-center items-center gap-[-15.59px]">
                {/* first */}
                <div className="flex w-[30px] h-[30px] py-[5px] px-[6px] flex-col items-flex-end justify-center gap-[10px] border border-[#fff] bg-[#6548EE] rounded-[33px] ">
                  <p className="text-white text-center text-[14px] font-bold">
                    LP
                  </p>
                </div>

                {/* second */}
                <div className="flex w-[30px] h-[30px] py-[5px] px-[6px] flex-col items-flex-end justify-center gap-[10px] border border-[#fff] bg-[#3079E1] rounded-[33px] ml-[-15px]">
                  <p className="text-white text-center text-[14px] font-bold">
                    LP
                  </p>
                </div>

                {/* third */}
                <div className="flex w-[30px] h-[30px] py-[5px] px-[6px] flex-col items-flex-end justify-center gap-[10px] border border-[#fff] bg-[#E9407A] rounded-[33px] ml-[-15px]">
                  <p className="text-white text-center text-[14px] font-bold">
                    LP
                  </p>
                </div>
              </div>
              {/* logo number  */}
              <p className="text-[12px] font-semibold text-[#1C4980]">+324</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathCommonAssement;
