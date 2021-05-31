import React, { useState, useEffect } from 'react'
import './index.css'
import 'tailwindcss/tailwind.css'
import Slot from './components/Slot'
import PinChoice from './components/PinChoice'
import dataFormat from './utilities/dataFormat'
import generateAnswer from './utilities/generateAnswer'
import { useGameContext } from './contexts/gameContext'
import Confetti from 'react-confetti'

function App(props) {
  const { color } = useGameContext()
  // const pinsArr = [{ 1: "", 2: "", 3: "", 4: ""}]
  const [page, setPage] = useState(2)
  const [answerFound, setAnswerFound] = useState(false)
  const [currentRound, setCurrentRound] = useState(1)
  const [currentPlayer, setCurrentPlayer] = useState(true)
  const [responses, setResponses] = useState(dataFormat)
  const [colorSelected, setColorSelected] = useState(0)
  const [answer, setAnswer] = useState({})

  useEffect(() => {
    const generatedAnswer = generateAnswer(page, color)
    localStorage.setItem('answer', Object.values(generatedAnswer).join('.'))
    const storedAnswer = localStorage.getItem('answer').split('.')
    setAnswer(storedAnswer)
  }, [page])

  const setPinTo = (rnd, pinNumber, color) => {
    if (rnd === currentRound) {
      const newResponses = {
        ...responses,
        [rnd]: [{ ...responses[rnd][0], [pinNumber]: color }, responses[rnd][1]]
      }
      setResponses(newResponses)
    }
  }

  const setCheckedAnswer = (rnd, checkedAnswer) => {
    const newResponses = {
      ...responses,
      [rnd]: [responses[rnd][0], checkedAnswer]
    }
    setResponses(newResponses)
  }

  if (page === 2) {
    return (
      <div className="flex flex-col justify-center items-center p-10 h-screen">
        <div className="text-7xl p-5">Welcome to Hit & Blow!</div>
        <div className="text-3xl">
          Select the level you would like to play in.
        </div>
        <div className="flex flex-row justify-center items-center p-10">
          <div
            className="flex flex-col justify-center items-center p-5 mx-10 border border-black rounded-3xl bg-blue-500 hover:bg-blue-700 text-white "
            onClick={() => {
              setPage(0)
            }}
          >
            <div className="text-4xl font-bold">EASY</div>
            <div className="text-xl">(Unique colors)</div>
          </div>
          <div
            className="flex flex-col justify-center items-center p-5 mx-10 border border-black rounded-3xl bg-blue-500 hover:bg-blue-700 text-white "
            onClick={() => {
              setPage(Math.floor(Math.random() * 5))
              // setAnswerFound(false)
            }}
          >
            <div className="text-4xl font-bold">TRICKY</div>
            <div className="text-xl">(Duplicated colors)</div>
          </div>
        </div>
        <a className="underline text-md" href="https://www.youtube.com/watch?v=-Dcw18XyHLQ">
          Tutorial: Click Here
        </a>
      </div>
    )
  }

  return (
    <div className="flex flex-col justify-evenly items-center p-10 w-screen h-screen relative">
      {answerFound ? (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={400}
        />
      ) : null}
      {currentRound > 8 ? (
        <div className="bg-black  bg-opacity-50 w-screen h-screen absolute flex flex-col justify-evenly items-center">
          <div className="bg-white w-1/4 h-1/4 absolute flex flex-col justify-evenly items-center border border-black rounded-3xl">
            <div className="text-5xl font-semibold">
              {answerFound ? "YOU'VE WON!!!" : "YOU'VE LOST :-("}
            </div>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => {
                setPage(2)
              }}
            >
              RESTART
            </button>
          </div>
        </div>
      ) : null}

      <div className="flex flex-row justify-end w-full">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            setPage(2)
          }}
        >
          Quit
        </button>
      </div>
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
              setCheckedAnswer={setCheckedAnswer}
              setAnswerFound={setAnswerFound}
              style={
                currentRound === idx + 1
                  ? {
                      boxShadow: '0px 0px 30px 5px rgba(39,139,212, 1)'
                    }
                  : {}
              }
            />
          )
        })}
        <Slot
          style={answerFound || currentRound > 8 ? {} : { opacity: 0 }}
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
  )
}

export default App
