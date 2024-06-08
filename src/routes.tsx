import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import QuestionOne from "./pages/QuestionOne";
import ResultsPage from "./pages/ResultsPage";

const AppPages = () => {
    return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<FirstPage />}/>
            <Route path="/questionOne" element={<QuestionOne />}/>
            <Route path="/results" element={<ResultsPage />}/>
        </Routes>
    </BrowserRouter>
);
}

export default AppPages;
