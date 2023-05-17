const Answer = ({
  answer,
  index,
  onIncrementCurrentQuestion,
  onSetResponseValue,
}) => {
  const handleSendValue = (index) => {
    onSetResponseValue(index);
  };

  return (
    <>
      <div
        className="bg-blue-800 text-white rounded-md p-1 cursor-pointer"
        onClick={onIncrementCurrentQuestion}
        key={index}
      >
        {answer.text}
      </div>
    </>
  );
};

export default Answer;
