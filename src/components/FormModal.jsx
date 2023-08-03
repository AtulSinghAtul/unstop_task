import React, { useEffect } from "react";

const FormModal = ({ open, setOpen, children }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  if (!open) return open;
  return (
    <>
      <div
        className="fixed top-[0] left-[0] bottom-0 right-0 w-screen h-screen bg-[#ffffff7d]"
        onClick={() => setOpen(false)}
      ></div>

      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[250px] h-[250px]   bg-[#e71e1e] opacity-50 flex justify-center items-center overflow-y-hidden">
        <button onClick={() => setOpen(false)}>X </button>
        {children}
      </div>
    </>
  );
};

export default FormModal;
