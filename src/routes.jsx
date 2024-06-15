import React from "react";
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
import { QuestionsProvider } from "./providers/QuestionsProvider";
import { ObjetiveQuestionsProvider } from "./providers/ObjetiveQuestionsProvider";

const AppPages = () => {
  return (
    <QuestionsProvider>
      <ObjetiveQuestionsProvider>
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
      </ObjetiveQuestionsProvider>
    </QuestionsProvider>
  );
};

export default AppPages;
