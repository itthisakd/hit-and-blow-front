import React, { useState, useEffect } from "react";
import "./index.css";
import "tailwindcss/tailwind.css";
import Slot from "./components/Slot";
import PinChoice from "./components/PinChoice";
import dataFormat from "./utilities/dataFormat";
import generateAnswer from "./utilities/generateAnswer";
import { useGameContext } from "./contexts/gameContext";

function App(props) {
  const { color } = useGameContext();
  // const pinsArr = [{ 1: "", 2: "", 3: "", 4: ""}]
  const [currentRound, setCurrentRound] = useState(1);
  const [responses, setResponses] = useState(dataFormat);
  const [colorSelected, setColorSelected] = useState(0);
  const [answer, setAnswer] = useState({});

  useEffect(() => {
    const generatedAnswer = generateAnswer(1, color);
    setAnswer(generatedAnswer);
  }, []);

  const setPinTo = (rnd, pinNumber, color) => {
    if (rnd === currentRound) {
      const newResponses = {
        ...responses,
        [rnd]: [
          { ...responses[rnd][0], [pinNumber]: color },
          responses[rnd][1],
        ],
      };
      setResponses(newResponses);
    }
  };

  return (
    <div className="flex flex-col justify-evenly items-center p-10">
      <div className="flex flex-row justify-evenly items-center p-10">
        {Object.values(responses).map((response, idx) => {
          return (
            <Slot
              pins={response[0]}
              hint={response[1]}
              round={idx + 1}
              setPinTo={setPinTo}
              currentRound={currentRound}
              colorSelected={colorSelected}
              setCurrentRound={setCurrentRound}
              style={
                currentRound === idx + 1
                  ? {
                      boxShadow: "0px 0px 30px 5px rgba(39,139,212, 1)",
                    }
                  : {}
              }
            />
          );
        })}
        <Slot
          pins={answer}
          hint={{ 1: 0, 2: 0, 3: 0, 4: 0 }}
          round={0}
          answer={true}
        />
      </div>
      <div className="mt-10">
        <PinChoice
          setColorSelected={setColorSelected}
          colorSelected={colorSelected}
        />
      </div>
    </div>
  );
}

export default App;
