import React from "react";
import globe from "../../assets/globe.svg";
import link from "../../assets/link.svg";
import view_agenda from "../../assets/view_agenda.svg";
import double_man from "../../assets/double_man.svg";

const ChartBar = ({ open, setOpen }) => {
  console.log(open);
  return (
    <div>
      <section
        className={`h-fit w-[345px]  flex flex-col items-start gap-[10px] bg-white mb-3 ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-start self-stretch gap-[1px] rounded-[12px] border border-[#DADCE0] ">
          {/* 111111111 box */}
          <div className="flex items-start gap-1 self-stretch bg-white">
            <div className=" py-[10px] px-[14px] flex flex-col items-start self-stretch shrink-0 gap-4 ">
              <p className="text-[#1C4980] text-[14px] font-medium">
                Total Assesment
              </p>
              <div className="flex items-center  gap-[10px]">
                <div className="flex justify-center items-center w-[40px] h-[40px] p-[10px] rounded-[8px] bg-[#EBE8FD]">
                  <img
                    className="bg-[#EBE8FD] rounded-md p-[1px] w-[20px] h-[20px]"
                    src={view_agenda}
                    alt="view_agenda"
                  />
                </div>
                <p className=" font-semibold text-[#1C4980] text-[16px]">34</p>
              </div>
            </div>

            {/* border right */}
            <div className="border-r-[2px] h-[100px]   border-[#DADCE0]"></div>

            {/* 888 */}
            <div className=" py-[10px] px-[14px] flex flex-col items-start self-stretch shrink-0 gap-4 ">
              <p className="text-[#1C4980] text-[14px] font-medium">
                Total Purpose
              </p>

              <div className="flex items-center  gap-[10px]">
                <img
                  className="bg-[#E5F1FC] rounded-md  w-[40px] h-[40px]"
                  src={link}
                  alt="view_agenda"
                />
                <p className=" font-semibold text-[#1C4980] text-[16px]">11</p>
              </div>
            </div>
            {/* 888 */}

            {/* <div className="w-[100%] border-b-2 border-[#000]"></div> */}
          </div>

          <div className="w-[100%] border-b-[1px] border-[#DADCE0]"></div>

          {/* 788888 box-2 */}
          <div className="flex flex-col items-start gap-[10px] self-stretch  px-[14px] py-[10px]  bg-white">
            <p className="text-[#1C4980] text-[14px] font-medium ">
              Candidates
            </p>

            <div className="flex flex-row items-center gap-[14px]">
              <img
                className="w-[40px] h-[40px] fill-[#EBE8FD] rounded-md"
                src={double_man}
                alt="double_man"
              />

              <div className="flex flex-col items-start  gap-[1px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#1C4980] text-[16px] font-semibold">
                    11,145
                  </span>
                  <span className="text-[#05C165] text-[10px] font-medium">
                    +89
                  </span>
                </div>
                <p className="text-[#1C4980] text-[10px] font-medium">
                  Total Candidate
                </p>
              </div>

              <div className=" ">
                <svg
                  className="stroke-[1px] h-[40px] stroke-[#DDE5EA]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="40"
                  viewBox="0 0 2 40"
                  fill="none"
                >
                  <path d="M1 0V40" stroke="#DDE5EA" />
                </svg>
              </div>

              <div className="flex flex-col items-start  gap-[1px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#1C4980] text-[16px] font-semibold">
                    114
                  </span>
                  <span className="text-[#05C165] text-[10px] font-medium">
                    +89
                  </span>
                </div>
                <p className="text-[#1C4980] text-[10px] font-medium">
                  Who Attamped
                </p>
              </div>
            </div>
          </div>
          {/* border bottom */}

          <div className="w-[100%] border-b-[1px] border-[#DADCE0]"></div>

          {/* box-3 888888 */}
          <div className="flex flex-col items-start gap-[10px] self-stretch  px-[14px] py-[10px]  bg-white">
            <p className="text-[#1C4980] text-[14px] font-medium ">
              Candidates Source
            </p>

            <div className="flex flex-row items-center gap-[10px]">
              <img
                className="w-[40px] h-[40px] fill-[#FCE8EF] rounded-md"
                src={globe}
                alt="double_man"
              />

              <div className="flex flex-col items-start  gap-[1px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#1C4980] text-[16px] font-semibold">
                    11,000
                  </span>
                  <span className="text-[#05C165] text-[10px] font-medium">
                    +89
                  </span>
                </div>
                <p className="text-[#1C4980] text-[10px] font-medium">E-mail</p>
              </div>

              <div className=" ">
                <svg
                  className="h-[40px] stroke-[1px] stroke-[#DDE5EA]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="40"
                  viewBox="0 0 2 40"
                  fill="none"
                >
                  <path d="M1 0V40" stroke="#DDE5EA" />
                </svg>
              </div>

              <div className="flex flex-col items-start  gap-[1px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#1C4980] text-[16px] font-semibold">
                    145
                  </span>
                  <span className="text-[#05C165] text-[10px] font-medium">
                    +89
                  </span>
                </div>
                <p className="text-[#1C4980] text-[10px] font-medium">
                  Social Share
                </p>
              </div>

              <div className=" ">
                <svg
                  className="h-[40px] stroke-[1px] stroke-[#DDE5EA]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="40"
                  viewBox="0 0 2 40"
                  fill="none"
                >
                  <path d="M1 0V40" stroke="#DDE5EA" />
                </svg>
              </div>

              <div className="flex flex-col items-start  gap-[1px]">
                <div className="flex items-center gap-1">
                  <span className="text-[#1C4980] text-[16px] font-semibold">
                    145
                  </span>
                  <span className="text-[#05C165] text-[10px] font-medium">
                    +89
                  </span>
                </div>
                <p className="text-[#1C4980] text-[10px] font-medium">
                  Unique Link
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChartBar;
