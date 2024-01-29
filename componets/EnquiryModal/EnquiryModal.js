import React from "react";

import "./EnquiryModal.css";
import Modal from "@mui/material/Modal";
import "./EnquiryModal.css";

import { ImCross } from "react-icons/im";
import NeedHelpMain from "../NeedHelpMain/NeedHelpMain";

function EnquiryModal({ open, onClose, setBookInterestModalOpen }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={`book-interest-modal-conainer ${open ? "" : "exit"}`}>
        <div className="book-interest-cross-icon">
          <ImCross
            onClick={() => {
              setBookInterestModalOpen(false);
            }}
          />
        </div>
        <NeedHelpMain />
      </div>
    </Modal>
  );
}

export default EnquiryModal;
