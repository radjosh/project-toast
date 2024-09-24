import React from "react";

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

  // wild that this works globally!!
  // this isn't being explicitly consumed anywhere
  const clear = React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        const nextToasts = [];
        setToasts(nextToasts);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown");
    };
  }, []);

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
        clear,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
