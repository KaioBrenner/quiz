import { useContext, useEffect, useState } from "react";
import Question from "../components/Question";
import { MyContext } from "../components/MyContext";

function App() {
  const {
    currentQuestion,
    questions,
    handleCurrentQuestion,
    setResponses,
    responses,
  } = useContext(MyContext);

  

  return (
    <div className="w-[500px] bg-white rounded-md text-3xl p-3">
      <p>{responses}</p>
      <Question
        questions={questions}
        currentQuestion={currentQuestion}
        onIncrementCurrentQuestion={handleCurrentQuestion}
      ></Question>
    </div>
  );
}

export default App;
