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

const QuestionFive = () => {
  const navigate = useNavigate();
  const { setQuestionFivePoints } = useContext(QuestionsContext);

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
      <StyledList>
        <ObjetiveQuestionsMold
          alternativeLetter={"A"}
          alternativeText={"Nunca"}
          alternativePoints={1}
          statesSetter={setQuestionFivePoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"B"}
          alternativeText={"Raramente"}
          alternativePoints={2}
          statesSetter={setQuestionFivePoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"C"}
          alternativeText={"Frequentemente"}
          alternativePoints={3}
          statesSetter={setQuestionFivePoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"D"}
          alternativeText={"Sempre"}
          alternativePoints={4}
          statesSetter={setQuestionFivePoints}
        />
      </StyledList>
    </QuestionsPageMold>
  );
};

export default QuestionFive;
