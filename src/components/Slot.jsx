import React from "react";
import { useGameContext } from "../contexts/gameContext";

const classes = {
  center: "flex flex-col justify-center items-center w-min",
  round: "rounded-full w-3 h-3 text-lg font-bold opacity-0",
  roundInvisible: "rounded-full w-3 h-3 text-lg font-bold",
  hintBox: "flex flex-row justify-evenly items-center w-min m-5 rounded-lg",
  hintBoxInvisible:
    "flex flex-row justify-evenly items-center border border-black w-min m-5 rounded-lg",
  hint: "w-4 h-4 m-2 rounded-full opacity-0",
  hintInvisible: "w-4 h-4 m-2 rounded-full border-2 border-black",
  pinBox:
    "flex flex-col justify-evenly items-center border border-black w-min p-5 rounded-2xl",
  pin: "w-20 h-20 m-2 rounded-full border-2 border-black",
  button:
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5",
  buttonDisabled: "bg-gray-300 text-white font-bold py-2 px-4 rounded mt-5",
  buttonInvisible:
    "bg-gray-300 text-white font-bold py-2 px-4 rounded mt-5 opacity-0 cursor-default",
};

export default function Slot({
  pins,
  hint,
  answer,
  round,
  currentRound,
  setCurrentRound,
  setPinTo,
  colorSelected,
  style,
}) {
  const { color } = useGameContext();

  return (
    <div className={classes.center}>
      {/* //ANCHOR ROUND NUMBER HERE */}
      <div className={answer ? classes.round : classes.roundInvisible}>
        {round}
      </div>
      {/* //ANCHOR HINTS HERE */}
      <div className={answer ? classes.hintBox : classes.hintBoxInvisible}>
        {Object.values(hint).map((c) => {
          return (
            <div
              className={answer ? classes.hint : classes.hintInvisible}
              style={{
                backgroundColor: color[Number(c)],
              }}
            />
          );
        })}
      </div>
      {/*ANCHOR PINS HERE */}
      <div className={classes.pinBox} style={style}>
        {Object.values(pins).map((c, idx) => {
          return (
            <div
              className={classes.pin}
              style={{
                backgroundColor: color[c],
              }}
              onClick={
                answer ? null : () => setPinTo(round, idx + 1, colorSelected)
              }
            />
          );
        })}
      </div>
      {round === currentRound &&
      Object.values(pins).filter((key) => /^[A-Z]/.test(key)).length === 4 ? (
        <button
          className={classes.button}
          onClick={answer ? null : () => setCurrentRound(currentRound + 1)}
        >
          OK
        </button>
      ) : null}
      {round === currentRound &&
      Object.values(pins).filter((key) => /^[A-Z]/.test(key)).length < 4 ? (
        <div className={classes.buttonDisabled}>OK</div>
      ) : null}
      {round !== currentRound ? (
        <div className={classes.buttonInvisible}>OK</div>
      ) : null}
    </div>
  );
}
