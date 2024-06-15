import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext } from "react";
import { QuestionsContext } from "../providers/QuestionsProvider";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionFive.json";
import { ObjetiveQuestionsContext } from "../providers/ObjetiveQuestionsProvider";

const QuestionFive = () => {
  const { setQuestionFivePoints } = useContext(QuestionsContext);
  const { selectedAlternativeFive, setSelectedAlternativeFive } = useContext(
    ObjetiveQuestionsContext
  );

  const commonOptionsConfigObj = {
    statesSetter: setQuestionFivePoints,
    selectedAlternative: selectedAlternativeFive,
    setSelectedAlternative: setSelectedAlternativeFive,
    name: "question-five",
  };

  return (
    <QuestionsPageMold
      question={"Você se sente descansado ao acordar?"}
      quetionNumber={5}
      buttonText={"Próxima"}
      buttonUrl={"/questionSix"}
      buttonTwoUrl={-1}
    >
      <ObjetiveQuestionsList
        commonOptionsConfigObj={commonOptionsConfigObj}
        opitionsConfigObj={optionsConfig.opitionsConfigObj}
      />
    </QuestionsPageMold>
  );
};

export default QuestionFive;
