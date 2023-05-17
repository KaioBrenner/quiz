import Answer from "./Answer";

const Question = ({ questions, currentQuestion, onIncrementCurrentQuestion, onSetResponseValue }) => {
  return (
    <>
      <div className="w-full text-right">{currentQuestion + 1}/{questions.length}</div>
      <div className="w-full text-left mt-6 mb-6">{questions[currentQuestion]?.question}</div>
      <div className="w-full text-left flex flex-col gap-4">
        {questions[currentQuestion]?.answers.map((answer, index) => (
          <Answer answer={answer} index={index} key={index} onIncrementCurrentQuestion={onIncrementCurrentQuestion} onSetResponseValue={onSetResponseValue}></Answer>
        ))}
      </div>
    </>
  );
};

export default Question;
