import React from "react";
import MyAssesment from "./MyAssesment";
import NewAssesment from "./NewAssesment";
import view_agenda from "../../assets/view_agenda.svg";
import double_man from "../../assets/double_man.svg";
import globe from "../../assets/globe.svg";
import link from "../../assets/link.svg";

const AssesmentsOverview = () => {
  return (
    <div className="w-[100%]  bg-white ml-[180px] mr-[18px] overflow-x-hidden rounded-xl ">
      <div className="  h-[734px] w-[100%]  flex flex-col items-center ">
        {/* My assesment header*/}

        <MyAssesment />

        {/* Assessments Overview Section */}
        <div className="flex  items-start flex-col self-stretch p-5   ">
          <div className="w-[1230px] h-[624px] ">
            <div className="h-[155px] w-[100%] ">
              <p className="text-[18px] text-[#1C4980] font-medium mb-4">
                Assessments Overview
              </p>
              <div className="h-[114px] w-[100%] border border-[#DADCE0] rounded-xl  flex flex-row">
                <div className="w-[162px] px-5 py-4 flex flex-col items-start self-stretch shrink-0 gap-4 ">
                  <p className="text-[#1C4980] text-[14px] font-semibold">
                    Total Assesment
                  </p>
                  <div className="flex items-center justify-center gap-6">
                    <img
                      className="bg-[#EBE8FD] rounded-md p-[10px] w-[40px] h-[40px]"
                      src={view_agenda}
                      alt="view_agenda"
                    />
                    <p className="text-5 font-bold text-[#1C4980] text-[20px]">
                      34
                    </p>
                  </div>
                </div>
                <div className="border-r-2"></div>

                <div className="flex flex-col items-start gap-4 self-stretch  px-5 py-4 w-[369px]">
                  <p className="text-[#1C4980] text-[14px] font-semibold ">
                    Candidates
                  </p>

                  <div className="flex flex-row items-center gap-5">
                    <img
                      className="w-[40px] h-[40px] fill-[#EBE8FD] rounded-md"
                      src={double_man}
                      alt="double_man"
                    />

                    <div className="flex flex-col items-start  gap-[1px]">
                      <div className="flex items-center gap-1">
                        <span className="text-[#1C4980] text-[20px] font-bold">
                          11,145
                        </span>
                        <span className="text-[#05C165] text-[12px] font-medium">
                          +89
                        </span>
                      </div>
                      <p className="text-[#1C4980] text-[12px] font-medium">
                        Total Candidate
                      </p>
                    </div>

                    <div className="border-r-2 h-[40px]"></div>

                    <div className="flex flex-col items-start  gap-[1px]">
                      <div className="flex items-center gap-1">
                        <span className="text-[#1C4980] text-[20px] font-bold">
                          114
                        </span>
                        <span className="text-[#05C165] text-[12px] font-medium">
                          +89
                        </span>
                      </div>
                      <p className="text-[#1C4980] text-[12px] font-medium">
                        Who Attamped
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-r-2"></div>

                <div className="flex flex-col items-start gap-4 self-stretch  px-5 py-4 w-[499px]">
                  <p className="text-[#1C4980] text-[14px] font-semibold ">
                    Candidates Source
                  </p>

                  <div className="flex flex-row items-center gap-5">
                    <img
                      className="w-[40px] h-[40px] fill-[#FCE8EF] rounded-md"
                      src={globe}
                      alt="double_man"
                    />

                    <div className="flex flex-col items-start  gap-[1px]">
                      <div className="flex items-center gap-1">
                        <span className="text-[#1C4980] text-[20px] font-bold">
                          11,000
                        </span>
                        <span className="text-[#05C165] text-[12px] font-medium">
                          +89
                        </span>
                      </div>
                      <p className="text-[#1C4980] text-[12px] font-medium">
                        E-mail
                      </p>
                    </div>

                    <div className="border-r-2 h-[40px]"></div>

                    <div className="flex flex-col items-start  gap-[1px]">
                      <div className="flex items-center gap-1">
                        <span className="text-[#1C4980] text-[20px] font-bold">
                          145
                        </span>
                        <span className="text-[#05C165] text-[12px] font-medium">
                          +89
                        </span>
                      </div>
                      <p className="text-[#1C4980] text-[12px] font-medium">
                        Social Share
                      </p>
                    </div>

                    <div className="border-r-2 h-[40px]"></div>

                    <div className="flex flex-col items-start  gap-[1px]">
                      <div className="flex items-center gap-1">
                        <span className="text-[#1C4980] text-[20px] font-bold">
                          145
                        </span>
                        <span className="text-[#05C165] text-[12px] font-medium">
                          +89
                        </span>
                      </div>
                      <p className="text-[#1C4980] text-[12px] font-medium">
                        Unique Link
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-r-2"></div>

                <div className="flex flex-col items-start gap-4 py-4 pl-5 pr-[50px] shrink-0 self-stretch">
                  <p className="text-[#1C4980] text-[14px] font-semibold ">
                    Total Purpose
                  </p>

                  <div className="flex items-center justify-center gap-6">
                    <img
                      className="bg-[#E5F1FC] rounded-md  w-[40px] h-[40px]"
                      src={link}
                      alt="view_agenda"
                    />
                    <p className="text-5 font-bold text-[#1C4980] text-[20px]">
                      11
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <NewAssesment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentsOverview;
