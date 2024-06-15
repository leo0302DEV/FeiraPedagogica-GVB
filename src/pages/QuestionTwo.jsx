import QuestionsPageMold from "../components/QuetionsPageMold";
import { QuestionsContext } from "../providers/QuestionsProvider";
import RangeQuestionMold from "../components/QuetionsPageMold/RangeQuestionMold";
import { useContext } from "react";

const QuestionTwo = () => {
  const { sleepHours, setSleepHours } = useContext(QuestionsContext);

  return (
    <QuestionsPageMold
      question={"Quantas horas de sono você constuma ter por noite?"}
      quetionNumber={2}
      buttonUrl={"/questionThree"}
      buttonTwoUrl={-1}
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
