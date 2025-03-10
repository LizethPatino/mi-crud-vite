import { ModalProps } from "../../types";
import styles from "./Modal.module.css";


const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
