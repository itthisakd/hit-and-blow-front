import React from "react";

const color = {
  C: "#00FFF9",
  R: "#FF0600",
  G: "#00FF06",
  Y: "#FFF900",
  P: "#F900FF",
  B: "#0600FF",
};

export default function Slot() {
  return (
    <div>
      <div>CHECK</div>
      <div className="flex flex-col justify-evenly items-center border border-black w-min p-10 h-3/6">
        {/* {Object.values(generateAnswers(1)).map((c) => {
          return (
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: c,
                borderRadius: "50%",
                border: "3px black solid",
              }}
            />
          );
        })} */}
        {Object.values({ 1: "R", 2: "B", 3: "G", 4: "Y" }).map((c) => {
          return (
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: color[c],
                borderRadius: "50%",
                border: "3px black solid",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
