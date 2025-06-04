import React, { useContext, useRef, useState } from "react";
import { contextinfo } from "../Context/ContextPage";
import { data } from "../assets/data";

const Home = () => {
  const { question, setquestion, index, setindex,score, setscore } = useContext(contextinfo);

  const [lock, setlock] = useState(false);
  const [giveExp, setgiveExp] = useState("");
  const [result, setresult] = useState(false);

  let Option1 = useRef();
  let Option2 = useRef();
  let Option3 = useRef();
  let Option4 = useRef();

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, a) => {
    if (lock == false) {
      if (question.ans === a) {
        e.target.classList.add("correct");
        setlock(true);
        setscore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setlock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    setindex((prev) => ++prev);
    setquestion(data[index]);
    setlock(false);
    if (index === data.length - 1) {
      setresult(true);
    }
    setgiveExp("");
    option_array.map((elem) => {
      elem.current.classList.remove("correct");
      elem.current.classList.remove("wrong");
      return null;
    });
  };

  const Exp = (a) => {
    if (question.ans == a) {
      setgiveExp(question.explanation);
      return null;
    }
  };

  
    const restartQuiz = () => {
      setindex(0);
      setquestion(data[0]);
      setscore(0);
      setresult(false);
      setgiveExp("");
    };
  

  return (
    <div className="container bg-[#8573C2] text-black min-h-screen w-full md:min-w-screen p-6 sm:p-10 flex justify-center items-center">
      <div className="quizbox w-full max-w-xl rounded cursor-pointer bg-white text-xl sm:text-2xl p-6 sm:p-10">
        <h1 className="text-3xl text-center font-black ">Quiz</h1>
        <hr />
        {result ? (
          <>
            <div className="bg-green-100 text-green-800 p-5 mt-6 rounded shadow-md text-center">
              <h2 className="text-2xl font-bold mb-2">Quiz Completed!</h2>
              <p className="text-xl mb-4">
                Your Score: {score} / {data.length}
              </p>
              <button
                onClick={restartQuiz}
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                Restart Quiz
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="font-black mb-6 mt-5">{question.question}</h1>
            <ul className="flex flex-col gap-4">
              <li
                ref={Option1}
                onDoubleClick={() => Exp(1)}
                onClick={(e) => checkAns(e, 1)}
                className="border rounded p-3 w-full text-left sm:text-center"
              >
                {question.option1}
              </li>
              <li
                ref={Option2}
                onDoubleClick={() => Exp(2)}
                onClick={(e) => checkAns(e, 2)}
                className="border rounded p-3 w-full text-left sm:text-center"
              >
                {question.option2}
              </li>
              <li
                ref={Option3}
                onDoubleClick={() => Exp(3)}
                onClick={(e) => checkAns(e, 3)}
                className="border rounded p-3 w-full text-left sm:text-center"
              >
                {question.option3}
              </li>
              <li
                ref={Option4}
                onDoubleClick={() => Exp(4)}
                onClick={(e) => checkAns(e, 4)}
                className="border rounded p-3 w-full text-left sm:text-center"
              >
                {question.option4}
              </li>
              {giveExp && <li>Explanation : {giveExp}</li>}
            </ul>
            <button
              onClick={lock && next}
              className="bg-green-600 cursor-pointer text-white mt-6 px-6 py-2 rounded w-full sm:w-28 mx-auto block"
            >
              Next
            </button>
            <br />
            <p>{`${index} questions attempted of total ${data.length} questions `}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
