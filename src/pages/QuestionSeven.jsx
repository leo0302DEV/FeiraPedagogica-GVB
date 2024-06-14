import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext, useState } from "react";
import { QuestionsContext } from "../routes";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionSeven.json";

const QuestionSeven = () => {
  const navigate = useNavigate();
  const { setQuestionSevenPoints } = useContext(QuestionsContext);
  const [selectedAlternative, setSelectedAlternative] = useState("");

  const commonOptionsConfigObj = {
    statesSetter: setQuestionSevenPoints,
    selectedAlternative: selectedAlternative,
    setSelectedAlternative: setSelectedAlternative,
    name: "question-seven",
  };

  const handleClick = () => {
    navigate("/results");
  };

  return (
    <QuestionsPageMold
      question={"Qual o seu nível de energia durante o dia?"}
      quetionNumber={7}
      buttonText={"Ver resultado"}
      buttonActionFunc={handleClick}
    >
      <ObjetiveQuestionsList
        commonOptionsConfigObj={commonOptionsConfigObj}
        opitionsConfigObj={optionsConfig.opitionsConfigObj}
      />
    </QuestionsPageMold>
  );
};

export default QuestionSeven;
