import React from "react";
import add from "../../../assetsMobile/add.svg";

const NewAssesmentBox = ({ open, setOpen }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center  items-center gap-[12px] self-stretch border border-dashed border-[#DADCE0] rounded-xl bg-[#F6F8FA] hover:cursor-pointer py-[20px] px-[30px]"
        onClick={() => setOpen(true)}
      >
        <div className="flex flex-col items-center gap-[10px]">
          <div className="w-[50px] h-[50px] p-[7.143px] flex justify-center items-center gap-[7.143px] rounded-[51.429px] bg-white">
            <img
              className="w-[28.571px] h-[28.571px] flex-shrink-0"
              src={add}
              alt="addImg"
            />
          </div>

          <p className="text-[#1C4980] text-[14px] font-semibold text-center">
            New Assesment
          </p>
        </div>

        <p className="text-center text-[#1C4980] text-[12px] font-medium  self-stretch">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </p>
      </div>
    </div>
  );
};

export default NewAssesmentBox;
