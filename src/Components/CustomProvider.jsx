import React, { createContext, useState } from "react";

export const context = createContext();
const { Provider } = context;

function CustomProvider({children}) {
  const [buttonState, setButtonState] = useState(false);

  const handleButton = () => {
    setButtonState(!buttonState);
  };

  const contextValue = {
    buttonState: buttonState,
    handleButton: handleButton
  }
  return(
    <Provider value={contextValue}>
        {children}
    </Provider>
  )
}

export default CustomProvider;
