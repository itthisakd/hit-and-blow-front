import React, { createContext, useContext, useState } from "react";

const GameContext = createContext();

const color = {
  C: "#00FFF9",
  R: "#FF0600",
  G: "#00FF06",
  Y: "#FFF900",
  P: "#F900FF",
  B: "#0600FF",
  0: "#D1D5DB",
  1: "#FFFFFF",
  2: "#FF0600",
};

export const GameContextProvider = ({ children }) => {
  // const [color, setColor] = useState(colorSet);

  return (
    <GameContext.Provider value={{ color }}>{children}</GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
