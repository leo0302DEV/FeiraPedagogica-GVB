import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext, useState } from "react";
import { QuestionsContext } from "../routes";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionFour.json";

const QuestionFour = () => {
  const navigate = useNavigate();
  const { setQuestionFourPoints } = useContext(QuestionsContext);
  const [selectedAlternative, setSelectedAlternative] = useState("");

  const commonOptionsConfigObj = {
    statesSetter: setQuestionFourPoints,
    selectedAlternative: selectedAlternative,
    setSelectedAlternative: setSelectedAlternative,
    name: "question-four",
  };

  const handleClick = () => {
    navigate("/questionFive");
  };

  return (
    <QuestionsPageMold
      question={
        "Como você descreveria a qualidade do seu sono nas últimas semanas?"
      }
      quetionNumber={4}
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

export default QuestionFour;
