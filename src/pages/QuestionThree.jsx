import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext } from "react";
import { QuestionsContext } from "../providers/QuestionsProvider";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import opitionsConfig from "../mocks/questionThree.json";
import { ObjetiveQuestionsContext } from "../providers/ObjetiveQuestionsProvider";

const QuestionThree = () => {
  const navigate = useNavigate();
  const { setQuestionTreePoints } = useContext(QuestionsContext);
  const { selectedAlternativeThree, setSelectedAlternativeThree } = useContext(
    ObjetiveQuestionsContext
  );

  const commonOptionsConfigObj = {
    statesSetter: setQuestionTreePoints,
    selectedAlternative: selectedAlternativeThree,
    setSelectedAlternative: setSelectedAlternativeThree,
    name: "question-three",
  };

  const handleClick = () => {
    navigate("/questionFour");
  };

  const toPreviousQuestion = () => {
    navigate(-1);
  };

  return (
    <QuestionsPageMold
      question={"Com que frequência você acorda durante a noite?"}
      quetionNumber={3}
      buttonText={"Próxima"}
      buttonActionFunc={handleClick}
      buttonTwoActionFunc={toPreviousQuestion}
    >
      <ObjetiveQuestionsList
        opitionsConfigObj={opitionsConfig.opitionsConfigObj}
        commonOptionsConfigObj={commonOptionsConfigObj}
      />
    </QuestionsPageMold>
  );
};

export default QuestionThree;
