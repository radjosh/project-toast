import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

// import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";
import { ToastContext } from "../ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id }) {
  const { toasts, removeToast } = React.useContext(ToastContext);
  const thisToast = toasts.filter((item) => item.id === id)[0];
  const message = thisToast.message;
  const variant = thisToast.variant;
  const theClassName = `${styles.toast} ${styles[variant]}`;
  const IconComponent = ICONS_BY_VARIANT[variant];

  return (
    <div className={theClassName}>
      <div className={styles.iconContainer}>
        <div>{IconComponent && <IconComponent size={24} />}</div>
        <p className={styles.content}>{message}</p>
        <button
          className={styles.closeButton}
          onClick={() => removeToast(id)}
          aria-label="Dismiss message"
          aria-live="off"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
}

export default Toast;
