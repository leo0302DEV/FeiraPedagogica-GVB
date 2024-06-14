import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext, useState } from "react";
import { QuestionsContext } from "../routes";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionFive.json";

const QuestionFive = () => {
  const navigate = useNavigate();
  const { setQuestionFivePoints } = useContext(QuestionsContext);
  const [selectedAlternative, setSelectedAlternative] = useState("");

  const commonOptionsConfigObj = {
    statesSetter: setQuestionFivePoints,
    selectedAlternative: selectedAlternative,
    setSelectedAlternative: setSelectedAlternative,
    name: "question-five",
  };

  const handleClick = () => {
    navigate("/questionSix");
  };

  return (
    <QuestionsPageMold
      question={"Você se sente descansado ao acordar?"}
      quetionNumber={5}
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

export default QuestionFive;
