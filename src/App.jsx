import { useEffect, useState } from "react";
import "./App.css";
import questionsData from "./data/questions";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  console.log(questions[0]?.answers[0].text);

  return (
    <div className="bg-blue-500 h-[100vh] w-full flex flex-col gap-5 text-5xl justify-center items-center">
      <h1>QUIZ</h1>

      <div className="w-[500px] bg-white rounded-md text-3xl p-3">
        <div className="w-full text-right">1/{questions.length}</div>
        <div className="w-full text-left mt-6 mb-6">
          {questions[0]?.question}
        </div>
        <div className="w-full text-left flex flex-col gap-4">
          <div
            className="bg-blue-800 text-white rounded-md p-1"
            data-correct={questions[0]?.answers[0].correct}
          >
            {questions[0]?.answers[0].text}
          </div>
          <div className="bg-blue-800 text-white rounded-md p-1"
            data-correct={questions[0]?.answers[1].correct}>
            {questions[0]?.answers[1].text}
          </div>
          <div className="bg-blue-800 text-white rounded-md p-1"
            data-correct={questions[0]?.answers[2].correct}>
            {questions[0]?.answers[2].text}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
