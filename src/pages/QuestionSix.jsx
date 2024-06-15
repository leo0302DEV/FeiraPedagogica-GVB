import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext } from "react";
import { QuestionsContext } from "../providers/QuestionsProvider";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionSix.json";
import { ObjetiveQuestionsContext } from "../providers/ObjetiveQuestionsProvider";

const QuestionSix = () => {
  const navigate = useNavigate();
  const { setQuestionSixPoints } = useContext(QuestionsContext);
  const { selectedAlternativeSix, setSelectedAlternativeSix } = useContext(
    ObjetiveQuestionsContext
  );

  const commonOptionsConfigObj = {
    statesSetter: setQuestionSixPoints,
    selectedAlternative: selectedAlternativeSix,
    setSelectedAlternative: setSelectedAlternativeSix,
    name: "question-six",
  };

  const handleClick = () => {
    navigate("/questionSeven");
  };

  return (
    <QuestionsPageMold
      question={"Você costuma tirar cochilos durante o dia?"}
      quetionNumber={6}
      buttonText={"Próxima"}
      buttonActionFunc={handleClick}
    >
      <ObjetiveQuestionsList
        commonOptionsConfigObj={commonOptionsConfigObj}
        opitionsConfigObj={optionsConfig.opitionsConfigObj}
      />
    </QuestionsPageMold>
  );
};

export default QuestionSix;
