import React, { useEffect } from "react";
import cut from "../../../assets/cut.svg";
import arrow_down from "../../../assets/keyboard_arrow_down.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const FormModalData = ({ setOpen }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="fixed top-[0] left-[0] bottom-0 right-0 w-screen h-screen bg-[#c4c3c358] z-[50]"
        onClick={() => setOpen(false)}
      >
        {console.log("setOpen")}
      </div>

      {/* align center to mobile modal */}
      <div className="w-screen h-screen m-auto flex justify-center items-center">
        <div
          className="absolute  top-[11%]     z-[100]   bg-[#fff]  flex flex-col justify-center items-start   rounded-xl my-auto w-[375px] "
          data-aos-anchor-placement="top-bottom"
          data-aos="slide-up"
        >
          <div className="relative  flex flex-col items-start gap-[-1px] w-[100%] ">
            {/* section 1 */}
            <div className="fixed top-0 flex justify-between items-center self-stretch h-[65px] w-[100%] p-[30px] bg-white border border-[#DADCE0]">
              <p className="text-[#1C4980] font-semibold text-[14px]">
                Sub-Section Details
              </p>

              <button
                className="w-[30px] h-[30px] bg-red-200 rounded-full p-1"
                onClick={() => setOpen(false)}
              >
                <img src={cut} alt="cutImg" />
              </button>
            </div>

            {/* section 2 */}
            <form className="flex flex-col items-start gap-5 self-stretch py-4 px-[15px]  w-[100%] h-[517px] bg-white my-[70px] overflow-y-scroll">
              <label className="flex flex-col items-start gap-[10px] self-stretch w-[100%]">
                <span className="text-[#1C4980] text-[12px] font-medium text-center">
                  Name of assesment
                </span>

                <input
                  className=" flex items-center gap-[10px] p-[15px] h-[50px] rounded-[8px] border border-[#DADCE0] text-[#8DA4BF] text-[12px] font-medium w-[100%]"
                  type="text"
                  placeholder="Type Here"
                />
              </label>

              <label className="flex flex-col  items-start gap-[10px] self-stretch w-[100%] ">
                <span className="text-[#1C4980] text-[12px] font-medium text-center">
                  Purpose of the test is
                </span>
                <div className=" flex justify-between items-center gap-[10px] p-[15px] h-[50px]   w-[100%] rounded-[8px] border border-[#DADCE0]">
                  <p className="text-[#8DA4BF] text-[12px]  font-medium">
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
                <span className="text-[#1C4980] text-[12px] font-medium text-center">
                  Description
                </span>
                <div className=" flex justify-between items-center gap-[10px] p-[15px] h-[50px]   w-[100%] rounded-[8px] border border-[#DADCE0]">
                  <p className="text-[#8DA4BF] text-[12px]  font-medium">
                    Select
                  </p>
                  <img
                    className="w-[24px] h-[24px]"
                    src={arrow_down}
                    alt="arrow_downImg"
                  />
                </div>
              </label>

              {/* skills section */}
              <div className="flex flex-col items-start gap-[10px] self-stretch">
                <p className="text-[#1C4980] text-[12px] font-medium">Skills</p>
                {/* UI/UX design section */}
                <div className="flex flex-col items-start gap-[-1px] self-stretch">
                  <div className="flex flex-col items-start gap-[10px] p-4 border border-[#DDE5EA] rounded-t-[8px] w-[100%]">
                    <div className="flex items-start flex-wrap content-start gap-[10px] self-stretch w-[100%]">
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
                    <p className="text-[#8DA4BF] text-[12px] font-medium">
                      Type here
                    </p>
                  </div>

                  <label className="flex flex-col  items-start gap-[10px] self-stretch w-[100%] pt-4">
                    <span className="text-[#1C4980] text-[16px] font-medium text-center">
                      Duration of assessment
                    </span>
                    <div className=" flex justify-between items-center gap-[10px] p-[15px] h-[50px]   w-[100%] rounded-[8px] border border-[#DADCE0]">
                      <p className="text-[#8DA4BF] text-[12px]  font-medium">
                        HH:MM:SS
                      </p>
                      <div className="w-[24px] h-[24px]">
                        <img
                          className="w-[12px] h-[7.41px] fill-[#1C4980] flex-shrink-0"
                          src={arrow_down}
                          alt="arrow_downImg"
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </form>

            {/* button section */}
            <div className=" fixed bottom-0 flex flex-col justify-center items-start gap-[10px] self-stretch h-[60px] py-[7px] px-[16px] border border-t-[1px]  border-[ #DADCE0] w-[100%]">
              <button className="flex  justify-center items-center gap-[4px] self-stretch flex-shrink-0 h-[40px] py-[10px] px-[30px] rounded-[8px] bg-[#0073E6]">
                <p className="text-[14px] font-semibold text-[#fff]">Next</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModalData;
