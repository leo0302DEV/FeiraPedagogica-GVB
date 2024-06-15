import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext } from "react";
import { QuestionsContext } from "../providers/QuestionsProvider";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionSeven.json";
import { ObjetiveQuestionsContext } from "../providers/ObjetiveQuestionsProvider";

const QuestionSeven = () => {
  const navigate = useNavigate();
  const { setQuestionSevenPoints } = useContext(QuestionsContext);
  const { selectedAlternativeSeven, setSelectedAlternativeSeven } = useContext(
    ObjetiveQuestionsContext
  );

  const commonOptionsConfigObj = {
    statesSetter: setQuestionSevenPoints,
    selectedAlternative: selectedAlternativeSeven,
    setSelectedAlternative: setSelectedAlternativeSeven,
    name: "question-seven",
  };

  const handleClick = () => {
    navigate("/results");
  };

  const toPreviousQuestion = () => {
    navigate(-1);
  };

  return (
    <QuestionsPageMold
      question={"Qual o seu nível de energia durante o dia?"}
      quetionNumber={7}
      buttonText={"Ver resultado"}
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

export default QuestionSeven;
