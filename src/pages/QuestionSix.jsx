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

const QuestionSix = () => {
  const navigate = useNavigate();
  const { setQuestionSixPoints } = useContext(QuestionsContext);

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
      <StyledList>
        <ObjetiveQuestionsMold
          alternativeLetter={"A"}
          alternativeText={"Nunca"}
          alternativePoints={4}
          statesSetter={setQuestionSixPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"B"}
          alternativeText={"Raramente"}
          alternativePoints={3}
          statesSetter={setQuestionSixPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"C"}
          alternativeText={"Frequentemente"}
          alternativePoints={2}
          statesSetter={setQuestionSixPoints}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"D"}
          alternativeText={"Todos os dias"}
          alternativePoints={1}
          statesSetter={setQuestionSixPoints}
        />
      </StyledList>
    </QuestionsPageMold>
  );
};

export default QuestionSix;
