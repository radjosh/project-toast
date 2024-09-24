import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [forceShow, setForceShow] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

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
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
