import React, { useEffect } from "react";
import cut from "../assets/cut.svg";
import arrow_down from "../assets/keyboard_arrow_down.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const FormModalData = ({ setOpen }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="fixed top-[0] left-[0] bottom-0 right-0 w-screen h-screen bg-[#5b5b5b5c] "
        onClick={() => setOpen(false)}
      ></div>

      <div
        className="absolute  top-[0%] left-[31%]   z-10   bg-[#fff]  flex flex-col justify-center items-start w-[591px]  rounded-xl my-auto "
        data-aos-anchor-placement="top-bottom"
        data-aos="slide-up"
      >
        <div className="  flex flex-col items-start gap-[-1px] w-[100%] ">
          {/* section 1 */}
          <div className="flex justify-between items-center self-stretch h-[65px] w-[100%] p-[30px] ">
            <p className="text-[#1C4980] font-semibold text-[20px]">
              Create new assessment
            </p>

            <button
              className="w-[30px] h-[30px]"
              onClick={() => setOpen(false)}
            >
              <img src={cut} alt="cutImg" />
            </button>
          </div>

          {/* section 2 */}
          <form className="flex flex-col items-start gap-4 self-stretch py-4 px-[30px] border border-[#DADCE0] w-[100%]">
            <label className="flex flex-col items-start gap-[10px] self-stretch w-[100%]">
              <span className="text-[#1C4980] text-[16px] font-medium text-center">
                Name of assesment
              </span>

              <input
                className=" flex items-center gap-[10px] p-[15px] h-[50px] rounded-[8px] border border-[#DADCE0] text-[#1C4980] text-[14px] font-medium w-[100%]"
                type="text"
                placeholder="Type Here"
              />
            </label>

            <label className="flex flex-col  items-start gap-[10px] self-stretch w-[100%] ">
              <span className="text-[#1C4980] text-[16px] font-medium text-center">
                Purpose of the test is
              </span>
              <div className=" flex justify-between items-center gap-[10px] p-[15px] h-[50px]   w-[100%] rounded-[8px] border border-[#DADCE0]">
                <p className="text-[#1C4980] text-[14px]  font-medium">
                  Select
                </p>
                <img
                  className="w-[24px] h-[24px]"
                  src={arrow_down}
                  alt="arrow_downImg"
                />
              </div>
            </label>

            <label className="flex flex-col  items-start gap-[10px] self-stretch w-[100%] ">
              <span className="text-[#1C4980] text-[16px] font-medium text-center">
                Description
              </span>
              <div className=" flex justify-between items-center gap-[10px] p-[15px] h-[50px]   w-[100%] rounded-[8px] border border-[#DADCE0]">
                <p className="text-[#1C4980] text-[14px]  font-medium">
                  Select
                </p>
                <img
                  className="w-[24px] h-[24px]"
                  src={arrow_down}
                  alt="arrow_downImg"
                />
              </div>
            </label>

            <div className="flex flex-col items-start gap-[10px] self-stretch">
              <p className="text-[#1C4980] text-[16px] font-medium">Skills</p>
              <div className="flex flex-col items-start gap-[-1px] self-stretch">
                <div className="flex flex-col items-start gap-[10px] p-4 border border-[#DDE5EA] rounded-t-[8px] w-[100%]">
                  <div className="flex items-start gap-[10px] self-stretch">
                    <div className="flex justify-end items-center gap-[5px] py-[6px] pr-[8px] pl-[10px] border rounded-[22px] bg-[#DDEDFF]">
                      <p className="text-[12px] font-medium text-[#1C4980]">
                        UI/UX and Design
                      </p>
                      <img
                        className="w-[18px] h-[18px]"
                        src={cut}
                        alt="cutImg"
                      />
                    </div>

                    <div className="flex justify-end items-center gap-[5px] py-[6px] pr-[8px] pl-[10px] border rounded-[22px] bg-[#DDEDFF]">
                      <p className="text-[12px] font-medium text-[#1C4980]">
                        UI/UX and Design
                      </p>
                      <img
                        className="w-[18px] h-[18px]"
                        src={cut}
                        alt="cutImg"
                      />
                    </div>

                    <div className="flex justify-end items-center gap-[5px] py-[6px] pr-[8px] pl-[10px] border rounded-[22px] bg-[#DDEDFF]">
                      <p className="text-[12px] font-medium text-[#1C4980]">
                        No of Question
                      </p>
                      <img
                        className="w-[18px] h-[18px]"
                        src={cut}
                        alt="cutImg"
                      />
                    </div>
                  </div>

                  <div className="flex items-start gap-[10px] self-stretch">
                    <div className="flex justify-end items-center gap-[5px] py-[6px] pr-[8px] pl-[10px] border rounded-[22px] bg-[#DDEDFF]">
                      <p className="text-[12px] font-medium text-[#1C4980]">
                        Web Development
                      </p>
                      <img
                        className="w-[18px] h-[18px]"
                        src={cut}
                        alt="cutImg"
                      />
                    </div>

                    <div className="flex justify-end items-center gap-[5px] py-[6px] pr-[8px] pl-[10px] border rounded-[22px] bg-[#DDEDFF]">
                      <p className="text-[12px] font-medium text-[#1C4980]">
                        Web Development
                      </p>
                      <img
                        className="w-[18px] h-[18px]"
                        src={cut}
                        alt="cutImg"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-[10px] h-[50px] p-4 rounded-b-[8px] border border-[#DDE5EA] text-4  border-t-0 w-[100%]">
                  <p className="text-[#1C4980] text-[14px] font-medium">
                    Type here
                  </p>
                </div>

                <label className="flex flex-col  items-start gap-[10px] self-stretch w-[100%] pt-4">
                  <span className="text-[#1C4980] text-[16px] font-medium text-center">
                    Duration of assessment
                  </span>
                  <div className=" flex justify-between items-center gap-[10px] p-[15px] h-[50px]   w-[100%] rounded-[8px] border border-[#DADCE0]">
                    <p className="text-[#8DA4BF] text-[14px]  font-medium">
                      HH:MM:SS
                    </p>
                    <img
                      className="w-[24px] h-[24px]"
                      src={arrow_down}
                      alt="arrow_downImg"
                    />
                  </div>
                </label>
              </div>
            </div>
          </form>
          {/* button section */}
          <div className="flex flex-col justify-center items-start  self-stretch py-5 px-[30px] border border-t-0 rounded-[8px] border-[ #DADCE0] bg-[#FFF] shadow">
            <button className="flex h-[40px] py-[10px] px-[30px] justify-center items-center gap-[4px] self-stretch rounded-[8px] bg-[#0073E6]">
              <span className="text-[#FFF] text-[14px] font-semibold">
                Save
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModalData;
