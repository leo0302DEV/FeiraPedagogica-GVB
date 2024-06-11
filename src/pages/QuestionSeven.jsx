import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import ObjetiveQuestionsMold from "../components/QuetionsPageMold/ObjetiveQuestionsMold";
import { useContext } from "react";
import { QuestionsContext } from "../routes";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  list-style-type: none;
  padding: 1rem;
`;

const QuestionSeven = () => {
  const navigate = useNavigate();
  const { setQuestionSevenPoints } = useContext(QuestionsContext);

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
      <StyledList>
        <ObjetiveQuestionsMold
          alternativeLetter={"A"}
          alternativeText={"Muito baixo"}
          alternativePoints={1}
          statesSetter={setQuestionSevenPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"B"}
          alternativeText={"Baixo"}
          alternativePoints={2}
          statesSetter={setQuestionSevenPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"C"}
          alternativeText={"Moderado"}
          alternativePoints={3}
          statesSetter={setQuestionSevenPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"D"}
          alternativeText={"Alto"}
          alternativePoints={4}
          statesSetter={setQuestionSevenPoints}
        />
      </StyledList>
    </QuestionsPageMold>
  );
};

export default QuestionSeven;
