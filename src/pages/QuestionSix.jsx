import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import { useContext, useState } from "react";
import { QuestionsContext } from "../routes";
import ObjetiveQuestionsList from "../components/QuetionsPageMold/ObjetiveQuestionsList";
import optionsConfig from "../mocks/questionSix.json";

const QuestionSix = () => {
  const navigate = useNavigate();
  const { setQuestionSixPoints } = useContext(QuestionsContext);
  const [selectedAlternative, setSelectedAlternative] = useState("");

  const commonOptionsConfigObj = {
    statesSetter: setQuestionSixPoints,
    selectedAlternative: selectedAlternative,
    setSelectedAlternative: setSelectedAlternative,
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
