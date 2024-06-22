import React from "react";
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
import MoldPage from "./pages/MoldPage";

const AppPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoldPage />}>
          <Route index element={<FirstPage />} />
          <Route path="questionOne" element={<QuestionOne />} />
          <Route path="questionTwo" element={<QuestionTwo />} />
          <Route path="questionThree" element={<QuestionThree />} />
          <Route path="questionFour" element={<QuestionFour />} />
          <Route path="questionFive" element={<QuestionFive />} />
          <Route path="questionSix" element={<QuestionSix />} />
          <Route path="questionSeven" element={<QuestionSeven />} />
          <Route path="results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppPages;
