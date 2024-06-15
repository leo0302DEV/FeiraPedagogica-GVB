import { useContext } from "react";
import { QuestionsContext } from "../providers/QuestionsProvider";
import QuestionsPageMold from "../components/QuetionsPageMold";
import RangeQuestionMold from "../components/QuetionsPageMold/RangeQuestionMold";

const QuestionOne = () => {
  const { age, setAge } = useContext(QuestionsContext);

  return (
    <QuestionsPageMold
      question={"Quantos anos você tem?"}
      quetionNumber={1}
      buttonUrl={"/questionTwo"}
      buttonTwoUrl={-1}
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
