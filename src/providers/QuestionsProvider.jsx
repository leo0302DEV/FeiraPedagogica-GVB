import { createContext, useState } from "react";

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
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

    if (totalPoints <= 12) {
      return "Ruim";
    } else if (totalPoints <= 18) {
      return "Moderada";
    } else if (totalPoints <= 24) {
      return "Boa";
    } else if (totalPoints <= 27) {
      return "Muito boa";
    } else {
      return "Exelente!";
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
      {children}
    </QuestionsContext.Provider>
  );
};
