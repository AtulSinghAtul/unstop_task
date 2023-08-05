import React from "react";
import AssesmentHead from "../components/mobileView/AssesmentHead";
import MyAssesmentBottom from "../components/mobileView/MyAssesmentBottom";
import FormModal from "../components/mobileView/modal/FormModal";
import { useState } from "react";

const MobileView = () => {
  const [flag, setFlag] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center bg-black ">
        <FormModal open={flag} setOpen={setFlag} />
        <div className="inline-flex flex-col items-start w-[375px] ">
          <AssesmentHead />
          <MyAssesmentBottom open={flag} setOpen={setFlag} />
        </div>
      </div>
    </>
  );
};
//  and (width: 375px)
// and (height: 812px)

export default MobileView;
