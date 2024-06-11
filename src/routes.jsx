import React, { createContext, useState } from "react";
import GlobalStyle from "./components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import ResultsPage from "./pages/ResultsPage";

export const QuestionsContext = createContext();

const AppPages = () => {
  const [age, setAge] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [questionTreePoints, setQuestionTreePoints] = useState(0);
  const [questionFourPoints, setQuestionFourPoints] = useState(0);
  const [questionFivePoints, setQuestionFivePoints] = useState(0);
  const [questionSixPoints, setQuestionSixPoints] = useState(0);
  const [questionSevenPoints, setQuestionSevenPoints] = useState(0);
  const [result, setResult] = useState(0);

  const returnSleepQualityResult = () => {
    setResult(
      (preveousPoints) =>
        preveousPoints +
        questionTreePoints +
        questionFourPoints +
        questionFivePoints +
        questionSixPoints +
        questionSevenPoints
    );

    if (age < 18) {
      if (sleepHours >= 8) {
        setResult((preveousPoints) => preveousPoints + 3);
      }
    } else {
      if (sleepHours >= 7) {
        setResult((preveousPoints) => preveousPoints + 3);
      }
    }

    switch (result) {
      case result < 6:
        return "Péssima";
      case 6 <= result <= 12:
        return "Muito ruim";
      case 13 <= result <= 18:
        return "Ruim";
      case 19 <= result <= 24:
        return "Moderada";
      case 25 <= result <= 27:
        return "Boa";
      case result > 27:
        return "Muito boa";
      default:
        break;
    }
  };

  return (
    <QuestionsContext.Provider
      value={{
        age,
        setAge,
        sleepHours,
        setSleepHours,
        setQuestionTreePoints,
        setQuestionFourPoints,
        setQuestionFivePoints,
        setQuestionSixPoints,
        setQuestionSevenPoints,
        returnSleepQualityResult,
      }}
    >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/questionOne" element={<QuestionOne />} />
          <Route path="/questionTwo" element={<QuestionTwo />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </QuestionsContext.Provider>
  );
};

export default AppPages;
