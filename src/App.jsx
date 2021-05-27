import React, { useState } from "react";
import "./index.css";
import "tailwindcss/tailwind.css";
import Slot from "./Slot"
import dataFormat from "./utilities/dataFormat"

const color = {
  C: "#00FFF9",
  R: "#FF0600",
  G: "#00FF06",
  Y: "#FFF900",
  P: "#F900FF",
  B: "#0600FF",
};
const generateAnswers = (duplicated) => {
  let answer = {};
  do {
    answer = {
      1: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
      2: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
      3: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
      4: Object.keys(color)[
        Math.floor(Math.random() * Object.keys(color).length)
      ],
    };
  } while (
    Array.from(new Set(Object.values(answer))).length !==
    4 - duplicated
  );
  return answer;
  // generateAnswers(0) = no duplicates, generateAnswers(1) = 1 duplicated color
};

function App(props) {
  // const pinsArr = [{ 1: "", 2: "", 3: "", 4: ""}]

  const [round, setRound] = useState(1)
  const [responses, setResponses] = useState(dataFormat);

  return (
    <div>
      {Object.values(responses).map((response) => {
        return <Slot pins={response[0]} />;
      })}
    </div>
  );
}

export default App;
