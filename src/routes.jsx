import React, { createContext, useState } from "react";
import GlobalStyle from "./components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import ResultsPage from "./pages/ResultsPage";
import QuestionThree from "./pages/QuestionThree";
import QuestionFour from "./pages/QuestionFour";
import QuestionFive from "./pages/QuestionFive";
import QuestionSix from "./pages/QuestionSix";
import QuestionSeven from "./pages/QuestionSeven";

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
    let totalPoints =
      questionTreePoints +
      questionFourPoints +
      questionFivePoints +
      questionSixPoints +
      questionSevenPoints;

    if (age < 18) {
      if (sleepHours >= 8) {
        totalPoints += 3;
      }
    } else {
      if (sleepHours >= 7) {
        totalPoints += 3;
      }
    }

    setResult(totalPoints);

    if (totalPoints < 6) {
      return "Péssima";
    } else if (totalPoints <= 12) {
      return "Muito ruim";
    } else if (totalPoints <= 18) {
      return "Ruim";
    } else if (totalPoints <= 24) {
      return "Moderada";
    } else if (totalPoints <= 27) {
      return "Boa";
    } else {
      return "Muito boa";
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
        result,
      }}
    >
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/questionOne" element={<QuestionOne />} />
          <Route path="/questionTwo" element={<QuestionTwo />} />
          <Route path="/questionThree" element={<QuestionThree />} />
          <Route path="/questionFour" element={<QuestionFour />} />
          <Route path="/questionFive" element={<QuestionFive />} />
          <Route path="/questionSix" element={<QuestionSix />} />
          <Route path="/questionSeven" element={<QuestionSeven />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </QuestionsContext.Provider>
  );
};

export default AppPages;
