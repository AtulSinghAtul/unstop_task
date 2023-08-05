import React from "react";
import Vector_298 from "../../assets/Vector 298.svg";
import mobile from "../../assets/mobile_screen_share.svg";
import { Link } from "react-router-dom";

const MyAssesment = () => {
  return (
    <div className="w-[100%]">
      <div className="flex flex-row justify-between items-center self-stretch h-[70px] w-[100%] px-5 border">
        <div className="flex flex-row justify-center items-center gap-5">
          <p className="text-5 text-[#1C4980] font-semibold text-xl flex shrink-1">
            Assesment
          </p>
          <img
            className="  stroke-[1px] stroke-[#DADCE0]"
            src={Vector_298}
            alt="Vector_298Img"
          />
          <p
            className="text-[#0073E6] font-semibold text-sm w-[116px] h-[70px] py-[10px]   flex items-center justify-center border-[#0073E6]
             border-b-[3px]"
          >
            My Assesments
          </p>
        </div>

        <Link to="/mobile">
          <img
            className="w-[24px] h-[24px] m-4 mr-[65px]"
            src={mobile}
            alt="mobileImg"
          />
        </Link>
      </div>
    </div>
  );
};

export default MyAssesment;
