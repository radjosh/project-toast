import React from "react";
import { useEscapeKey } from "../../hooks/useEscapeKey.js";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [forceShow, setForceShow] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);
  function removeToast(id) {
    const nextToasts = toasts.filter((item) => item.id !== id);
    setToasts((currentValue) => nextToasts);
  }

  function addToast(message, variant) {
    const newToast = {
      message: message,
      variant: variant,
      id: crypto.randomUUID(),
    };
    const nextToasts = [...toasts, newToast];
    setToasts(nextToasts);
    setForceShow(true);
    setMessage("");
    setVariant("notice");
  }

  useEscapeKey(() => {
    const nextToasts = [];
    setToasts(nextToasts);
  });

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        variant,
        setVariant,
        forceShow,
        setForceShow,
        toasts,
        setToasts,
        removeToast,
        addToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
