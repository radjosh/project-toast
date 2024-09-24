import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

// MAKE FUNCTIONS TO ADD OR REMOVE TOASTS
// PUT THEM INTO CONTEXT
// THIS SOLVES THAT HORRENDOUS CIRCULAR DEPENDENCY PROPS HELL THING

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast id={toast.id}></Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
