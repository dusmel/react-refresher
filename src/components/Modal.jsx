import { createPortal } from "react-dom";

const Modal = ({ children, closeOnClick }) => {
  return createPortal(
    <div className="model-wrapper" onClick={closeOnClick}>
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
