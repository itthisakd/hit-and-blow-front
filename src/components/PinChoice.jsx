import React from "react";
import getColorsOnly from "../utilities/getColorsOnly";
import { useGameContext } from "../contexts/gameContext";

const classes = {
  pinSelected: "w-20 h-20 m-2 rounded-full border-2 border-black",
  pin: "w-20 h-20 m-2 rounded-full border-2 border-black",
  pinBox:
    "flex flex-row justify-evenly items-center border border-black w-min p-5 rounded-2xl",
};

export default function PinChoice({ setColorSelected, colorSelected }) {
  const { color } = useGameContext();

  return (
    <div>
      <div className={classes.pinBox}>
        {getColorsOnly(color).map((c) => {
          return (
            <div
              className={classes.pin}
              style={
                colorSelected === c
                  ? {
                      boxShadow: "0px 0px 30px 5px rgba(39,139,212, 1)",
                      backgroundColor: color[c],
                    }
                  : {
                      backgroundColor: color[c],
                    }
              }
              onClick={() => {
                setColorSelected(c);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
