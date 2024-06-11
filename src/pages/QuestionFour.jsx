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

const QuestionFour = () => {
  const navigate = useNavigate();
  const { setQuestionFourPoints } = useContext(QuestionsContext);

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
      <StyledList>
        <ObjetiveQuestionsMold
          alternativeLetter={"A"}
          alternativeText={"Muito ruim"}
          alternativePoints={1}
          statesSetter={setQuestionFourPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"B"}
          alternativeText={"Ruim"}
          alternativePoints={2}
          statesSetter={setQuestionFourPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"C"}
          alternativeText={"Boa"}
          alternativePoints={3}
          statesSetter={setQuestionFourPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"D"}
          alternativeText={"Muito boa"}
          alternativePoints={4}
          statesSetter={setQuestionFourPoints}
        />
      </StyledList>
    </QuestionsPageMold>
  );
};

export default QuestionFour;
