import { useEffect, useState } from "react";
import questionsData from "../data/questions";
import Question from "../components/Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setQuestions(questionsData);
      } catch (error) {
        console.error("Erro ao buscar as perguntas:", error);
      }
    };

    fetchData();
  }, []);

  const handleCurrentQuestion = (value) => {
    setCurrentQuestion(prev => prev + 1)

    handleSetResponseValue(value)
  }

  const handleSetResponseValue = (value) => {
    setResponses(value)
  }

  console.log(currentQuestion);

  useEffect(() => {
    // Coloque aqui qualquer código adicional que dependa de currentQuestion
  }, [currentQuestion]);

  return (
    <div className="w-[500px] bg-white rounded-md text-3xl p-3">
      <Question questions={questions} currentQuestion={currentQuestion} onIncrementCurrentQuestion={handleCurrentQuestion} onSetResponseValue={handleSetResponseValue}></Question>
    </div>
  );
}

export default App;
