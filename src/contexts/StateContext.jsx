import { createContext, useContext, useState } from "react";

const defaultStateContextValue = {
  activeState: {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  },
  setActiveState: () => {},
};

export const StateContext = createContext(defaultStateContextValue);

export const StateContextProvider = ({ children }) => {
  const [activeState, setActiveState] = useState(defaultStateContextValue);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03c9d7')
  const [currentMode, setCurrentMode] = useState('Light')
  const [themeSettings, setThemeSettings] = useState(false)

  const setMode = (e) => {
    setCurrentMode(e.target.value)
    localStorage.setItem('themeMode', e.target.value)
    setThemeSettings(false)
  }

  const setColor = (color) => {
    setCurrentColor(color)
    localStorage.setItem('colorMode', color)
    setThemeSettings(false)
  }

  const handleClick = (clicked) => {
    setActiveState({
      ...defaultStateContextValue.activeState,
      [clicked]: true,
    });
    console.log(defaultStateContextValue.activeState);
  };

  return (
    <StateContext.Provider
      value={{
        activeState,
        setActiveState,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor, currentMode,
        setCurrentColor, setCurrentMode,
        setColor, setMode,
        themeSettings,setThemeSettings
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
