import React from "react";
import PortalReactDOM from "react-dom";
import FormModalData from "./FormModalData";

const FormModal = ({ open, setOpen }) => {
  if (open) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }

  if (!open) return open;

  return PortalReactDOM.createPortal(
    <FormModalData open={open} setOpen={setOpen} />,
    document.querySelector(".portals")
  );
};

export default FormModal;
