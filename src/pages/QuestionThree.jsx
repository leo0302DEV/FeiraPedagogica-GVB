import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext, useState } from "react";
import { QuestionsContext } from "../routes";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import opitionsConfig from "../mocks/questionThree.json";

const QuestionThree = () => {
  const navigate = useNavigate();
  const { setQuestionTreePoints } = useContext(QuestionsContext);
  const [selectedAlternative, setSelectedAlternative] = useState("");

  const commonOptionsConfigObj = {
    statesSetter: setQuestionTreePoints,
    selectedAlternative: selectedAlternative,
    setSelectedAlternative: setSelectedAlternative,
    name: "question-three",
  };

  const handleClick = () => {
    navigate("/questionFour");
  };

  return (
    <QuestionsPageMold
      question={"Com que frequência você acorda durante a noite?"}
      quetionNumber={3}
      buttonText={"Próxima"}
      buttonActionFunc={handleClick}
    >
      <ObjetiveQuestionsList
        opitionsConfigObj={opitionsConfig.opitionsConfigObj}
        commonOptionsConfigObj={commonOptionsConfigObj}
      />
    </QuestionsPageMold>
  );
};

export default QuestionThree;
