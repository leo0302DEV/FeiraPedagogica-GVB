import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext } from "react";
import { QuestionsContext } from "../providers/QuestionsProvider";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionFive.json";
import { ObjetiveQuestionsContext } from "../providers/ObjetiveQuestionsProvider";

const QuestionFive = () => {
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate("/questionSix");
  };

  const toPreviousQuestion = () => {
    navigate(-1);
  };

  return (
    <QuestionsPageMold
      question={"Você se sente descansado ao acordar?"}
      quetionNumber={5}
      buttonText={"Próxima"}
      buttonActionFunc={handleClick}
      buttonTwoActionFunc={toPreviousQuestion}
    >
      <ObjetiveQuestionsList
        commonOptionsConfigObj={commonOptionsConfigObj}
        opitionsConfigObj={optionsConfig.opitionsConfigObj}
      />
    </QuestionsPageMold>
  );
};

export default QuestionFive;
