import { useContext } from "react";
import { QuestionsContext } from "../routes";
import QuestionsPageMold from "../components/QuetionsPageMold";
import { useNavigate } from "react-router-dom";

const QuestionOne = () => {
  const navigate = useNavigate();
  const { age, setAge } = useContext(QuestionsContext);

  const toNextQuestion = () => {
    navigate("/questionTwo");
  };

  return (
    <QuestionsPageMold
      question={"Quantos anos você tem?"}
      quetionNumber={1}
      buttonActionFunc={toNextQuestion}
    >
      <h1>Olá, mundo!</h1>
    </QuestionsPageMold>
  );
};

export default QuestionOne;
