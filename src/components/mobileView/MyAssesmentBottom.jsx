import React from "react";
import MathCommonAssement from "./mobileCommonAssesment/MathCommonAssement";
import MathSingleLogoBox from "./mobileCommonAssesment/MathSingleLogoBox";
import NewAssesmentBox from "./mobileCommonAssesment/NewAssesmentBox";
import MyAssesmentSearchBox from "./mobileCommonAssesment/MyAssesmentSearchBox";

const MyAssesmentBottom = ({ open, setOpen }) => {
  return (
    <>
      <div className="flex flex-col items-start gap-[20px] w-[375px]  py-[20px] px-[15px] bg-white mt-[135px]">
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex flex-col items-start gap-[10px]">
            {/* w-345 My Assesment  part-1*/}
            <MyAssesmentSearchBox />

            {/* ********  w-345px part-2 ***** */}
            <div className="flex flex-col items-start gap-[15px] w-[345px]">
              {/* ********8new assesment**** box-1 */}

              <NewAssesmentBox open={open} setOpen={setOpen} />

              {/* ******* math assesment single logo box-1 ********* */}
              <MathSingleLogoBox />

              {/* **** Math assesment multi logo box-1 ****** */}

              <MathCommonAssement />

              {/* **** Math assesment multi logo box-2 ****** */}
              <MathCommonAssement />

              {/* **** Math assesment multi logo box-3 ****** */}
              <MathCommonAssement />

              {/* **** Math assesment multi logo box-4 ****** */}
              <MathCommonAssement />

              {/* **** Math assesment multi logo box-5 ****** */}
              <MathCommonAssement />

              {/* **** Math assesment multi logo box-6 ****** */}
              <MathCommonAssement />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAssesmentBottom;
