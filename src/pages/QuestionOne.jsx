import { useContext } from "react";
import { QuestionsContext } from "../routes";
import QuestionsPageMold from "../components/QuetionsPageMold";
import { useNavigate } from "react-router-dom";
import RangeQuestionMold from "../components/QuetionsPageMold/RangeQuestionMold";

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
      <RangeQuestionMold
        state={age}
        statesSeter={setAge}
        minValue={1}
        maxValue={100}
      />
    </QuestionsPageMold>
  );
};

export default QuestionOne;
