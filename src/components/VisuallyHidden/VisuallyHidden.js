import React from "react";

import styles from "./VisuallyHidden.module.css";
import { ToastContext } from "../ToastProvider";

const VisuallyHidden = ({ children, className = "", ...delegated }) => {
  const { forceShow } = React.useContext(ToastContext);

  if (forceShow) {
    return <span className={styles.showWrapper}>{children}</span>;
  }

  return (
    <span className={`${className} ${styles.wrapper}`} {...delegated}>
      {children}
    </span>
  );
};

export default VisuallyHidden;
