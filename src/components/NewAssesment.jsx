import React from "react";
import add from "../assets/add.svg";
import suitcase from "../assets/suitcase.svg";
import calendar from "../assets/calendar_today.svg";
import dot from "../assets/Group_6.svg";
import link from "../assets/link-2.svg";
import FormModal from "./FormModal";
import { useState } from "react";

const NewAssesment = () => {
  let [open, setOpen] = useState(false);

  return (
    <div>
      <div className="w-[100%] flex flex-col items-start gap-4">
        {/* my assesment text  */}
        <div className="flex justify-between items-end w-[1224px] ">
          <p className="text-[#1C4980] text-[18px] font-medium">My Assesment</p>
          <div className="w-[40px] h-[40px] "></div>
        </div>
        {/*  Assesment box */}
        <div className="flex flex-col items-start gap-8">
          <div className="flex items-start gap-8 w-[1224px]">
            <FormModal open={open} setOpen={setOpen}>
              Hello
            </FormModal>
            {/* New Assesment box */}
            <div
              className="flex flex-col p-[30px] items-center gap-[12px] self-stretch border border-dashed border-[#DADCE0] rounded-xl bg-[#F6F8FA] hover:cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <div className="flex flex-col items-center gap-[10px]">
                <div className="w-[70px] h-[70px] p-[10px] flex justify-center items-center gap-[10px] rounded-full bg-white">
                  <img src={add} alt="addImg" />
                </div>

                <p className="text-[#1C4980] text-[18px] font-medium text-center">
                  New Assesment
                </p>
              </div>

              <p className="text-center text-[#1C4980] text-[12px] font-medium w-[328px] self-stretch">
                From here you can add questions of multiple types like MCQs,
                subjective (text or paragraph)!
              </p>
            </div>

            {/* Math Assesment box-1 */}

            <div className="flex p-4 flex-col items-start gap-4 self-stretch rounded-xl border border-[#DADCE0] bg-[#fff]">
              <div className="flex justify-between items-start self-stretch">
                <div className="flex flex-col justify-center items-start gap-[10px]">
                  <img
                    className="w-[50px] h-[50px] rounded-xl fill-[#EBE8FD]"
                    src={suitcase}
                    alt="suitcaseImg"
                  />
                  <div className="flex flex-col items-start gap-[2px]">
                    <p className="text-[#1C4980] text-[18px] font-medium">
                      Math Assessment
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[26px] h-[20px]">
                        <p className="text-[14px] text-[#1C4980] font-semibold">
                          Job
                        </p>
                      </div>

                      <div className="h-[16px] w-[1px] stroke-[#DADCE0] stroke-[1px] border"></div>

                      <div className="flex h-[22px items-center gap-[4px]">
                        <img
                          className="w-[14px] h-[14px]"
                          src={calendar}
                          alt="calendarIMg"
                        />
                        <p className="text-[12px] font-medium text-[#8DA4BF]">
                          20 Apr 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-[30px] h-[30px] py-[5px] px-[10px] gap-[10px] justify-center items-center rounded-[50px] bg-white">
                  <img
                    className="w-[4.167px] h-[15.8px]"
                    src={dot}
                    alt="dotIMg"
                  />
                </div>
              </div>

              <div>
                <svg
                  className="stroke-[#DADCE0] stroke-[1px] self-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                  width="356"
                  height="2"
                  viewBox="0 0 356 2"
                  fill="none"
                >
                  <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                </svg>
              </div>

              <div className="flex justify-between items-center self-stretch">
                <div className="flex items-start gap-[14px]">
                  <div className=",flex flex-col items-start gap-[-1px]">
                    <p className="text-[#1c4980] text-[14px] font-semibold">
                      00
                    </p>
                    <p className="text-[#1c4980] text-[12px] font-medium">
                      Duration
                    </p>
                  </div>

                  <div className=",flex flex-col items-start gap-[-1px]">
                    <p className="text-[#1c4980] text-[14px] font-semibold">
                      00
                    </p>
                    <p className="text-[#1c4980] text-[12px] font-medium">
                      Questions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div className="flex justify-center items-center gap-4 h-[30px] py-[2px] pr-[8px] pl-[6px] rounded-[50px] border border-[#1C4980] bg-white">
                    <img
                      className="w-[20px] h-[20px]"
                      src={link}
                      alt="linkImg"
                    />
                    <p className="text-[#1C4980] text-[14px] font-medium">
                      Share
                    </p>
                  </div>

                  <div className="flex items-center gap-[4px]">
                    <div className="flex w-[30px] h-[30px] py-[5px] px-[6px] flex-col items-flex-end justify-center gap-[10px] border border-[#fff] bg-[#6548EE] rounded-[33px]">
                      <p className="text-white text-center text-[14px] font-bold">
                        LP
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Math Assesment box-1 */}

            <div className="flex p-4 flex-col items-start gap-4 self-stretch rounded-xl border border-[#DADCE0] bg-[#fff]">
              <div className="flex justify-between items-start self-stretch">
                <div className="flex flex-col justify-center items-start gap-[10px]">
                  <img
                    className="w-[50px] h-[50px] rounded-xl fill-[#EBE8FD]"
                    src={suitcase}
                    alt="suitcaseImg"
                  />
                  <div className="flex flex-col items-start gap-[2px]">
                    <p className="text-[#1C4980] text-[18px] font-medium">
                      Math Assessment
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[26px] h-[20px]">
                        <p className="text-[14px] text-[#1C4980] font-semibold">
                          Job
                        </p>
                      </div>

                      <div className="h-[16px] w-[1px] stroke-[#DADCE0] stroke-[1px] border"></div>

                      <div className="flex h-[22px items-center gap-[4px]">
                        <img
                          className="w-[14px] h-[14px]"
                          src={calendar}
                          alt="calendarIMg"
                        />
                        <p className="text-[12px] font-medium text-[#8DA4BF]">
                          20 Apr 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-[30px] h-[30px] py-[5px] px-[10px] gap-[10px] justify-center items-center rounded-[50px] bg-white">
                  <img
                    className="w-[4.167px] h-[15.8px]"
                    src={dot}
                    alt="dotIMg"
                  />
                </div>
              </div>

              <div>
                <svg
                  className="stroke-[#DADCE0] stroke-[1px] self-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                  width="356"
                  height="2"
                  viewBox="0 0 356 2"
                  fill="none"
                >
                  <path d="M0 1H356" stroke="#DADCE0" stroke-dasharray="3 3" />
                </svg>
              </div>

              <div className="flex justify-between items-center self-stretch">
                <div className="flex items-start gap-[14px]">
                  <div className=",flex flex-col items-start gap-[-1px]">
                    <p className="text-[#1c4980] text-[14px] font-semibold">
                      00
                    </p>
                    <p className="text-[#1c4980] text-[12px] font-medium">
                      Duration
                    </p>
                  </div>

                  <div className=",flex flex-col items-start gap-[-1px]">
                    <p className="text-[#1c4980] text-[14px] font-semibold">
                      00
                    </p>
                    <p className="text-[#1c4980] text-[12px] font-medium">
                      Questions
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[10px]">
                  <div className="flex justify-center items-center gap-4 h-[30px] py-[2px] pr-[8px] pl-[6px] rounded-[50px] border border-[#1C4980] bg-white">
                    <img
                      className="w-[20px] h-[20px]"
                      src={link}
                      alt="linkImg"
                    />
                    <p className="text-[#1C4980] text-[14px] font-medium">
                      Share
                    </p>
                  </div>

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
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom empet box */}
          <div className="w-[1224px] h-[155px]"></div>
        </div>
      </div>
    </div>
  );
};

export default NewAssesment;
