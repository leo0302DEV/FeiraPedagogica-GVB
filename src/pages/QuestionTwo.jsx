import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold";

const QuestionTwo = () => {
  const navigate = useNavigate();

  const toNextQuestion = () => {
    navigate("/questionTree");
  };

  return (
    <QuestionsPageMold
      question={"Quantas horas de sono você constuma ter por noite?"}
      quetionNumber={2}
      buttonActionFunc={toNextQuestion}
    >
      <h1>Olá, mundo!</h1>
    </QuestionsPageMold>
  );
};

export default QuestionTwo;
