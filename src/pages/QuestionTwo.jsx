import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold";
import { QuestionsContext } from "../providers/QuestionsProvider";
import RangeQuestionMold from "../components/QuetionsPageMold/RangeQuestionMold";
import { useContext } from "react";

const QuestionTwo = () => {
  const navigate = useNavigate();
  const { sleepHours, setSleepHours } = useContext(QuestionsContext);

  const toNextQuestion = () => {
    navigate("/questionThree");
  };

  const toPreviousQuestion = () => {
    navigate(-1);
  };

  return (
    <QuestionsPageMold
      question={"Quantas horas de sono você constuma ter por noite?"}
      quetionNumber={2}
      buttonActionFunc={toNextQuestion}
      buttonTwoActionFunc={toPreviousQuestion}
    >
      <RangeQuestionMold
        state={sleepHours}
        statesSeter={setSleepHours}
        minValue={1}
        maxValue={20}
        complement={"h"}
      />
    </QuestionsPageMold>
  );
};

export default QuestionTwo;
