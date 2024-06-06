import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import QuestionOne from "./pages/QuestionOne";

const AppPages = () => {
    return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<FirstPage />}/>
            <Route path="/questionOne" element={<QuestionOne />}/>
        </Routes>
    </BrowserRouter>
);
}

export default AppPages;
