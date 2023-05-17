import React, { createContext, useState, useEffect } from "react";
import questionsData from "../data/questions";

// Cria o contexto
export const MyContext = createContext();

// Provedor do contexto
export const MyContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentResponse, setCurrentResponse] = useState();
  const [responses, setResponses] = useState([]);

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

  const handleCurrentQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const addResponse = (response) => {
    response = response;
    setCurrentResponse(response);

    setResponses(currentResponse);
  };

  useEffect(() => {

  }, [currentQuestion]);

  console.log(responses);

  const contextValue = {
    questions: questions,
    setQuestions: setQuestions,
    currentQuestion: currentQuestion,
    setCurrentQuestion: setCurrentQuestion,
    responses: responses,
    setResponses: setResponses,
    handleCurrentQuestion: handleCurrentQuestion,
    addResponse: addResponse,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
