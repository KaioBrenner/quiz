import { useContext } from "react";
import { MyContext } from "../components/MyContext";
useContext;

const Answer = ({ answer, index }) => {
  const { currentQuestion, questions, handleCurrentQuestion, setResponses, responses, addResponse } = useContext(MyContext);

  

  return (
    <>
      <div
        className="bg-blue-800 text-white rounded-md p-1 cursor-pointer"
        onClick={() => {
          handleCurrentQuestion();
          addResponse(index);
        }}
        key={index}
      >
        {answer.text}
      </div>
    </>
  );
};

export default Answer;
