import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext } from "react";
import { QuestionsContext } from "../providers/QuestionsProvider";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionFour.json";
import { ObjetiveQuestionsContext } from "../providers/ObjetiveQuestionsProvider";

const QuestionFour = () => {
  const { setQuestionFourPoints } = useContext(QuestionsContext);
  const { selectedAlternativeFour, setSelectedAlternativeFour } = useContext(
    ObjetiveQuestionsContext
  );

  const commonOptionsConfigObj = {
    statesSetter: setQuestionFourPoints,
    selectedAlternative: selectedAlternativeFour,
    setSelectedAlternative: setSelectedAlternativeFour,
    name: "question-four",
  };

  return (
    <QuestionsPageMold
      question={
        "Como você descreveria a qualidade do seu sono nas últimas semanas?"
      }
      quetionNumber={4}
      buttonText={"Próxima"}
      buttonUrl={"/questionFive"}
      buttonTwoUrl={-1}
    >
      <ObjetiveQuestionsList
        commonOptionsConfigObj={commonOptionsConfigObj}
        opitionsConfigObj={optionsConfig.opitionsConfigObj}
      />
    </QuestionsPageMold>
  );
};

export default QuestionFour;
