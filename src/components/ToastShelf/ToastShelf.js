import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

// MAKE FUNCTIONS TO ADD OR REMOVE TOASTS
// PUT THEM INTO CONTEXT
// THIS SOLVES THAT HORRENDOUS CIRCULAR DEPENDENCY PROPS HELL THING

function ToastShelf({ toasts, setToasts }) {
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
