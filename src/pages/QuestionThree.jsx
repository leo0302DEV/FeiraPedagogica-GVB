import { useNavigate } from "react-router-dom";
import QuestionsPageMold from "../components/QuetionsPageMold/index";
import ObjetiveQuestionsMold from "../components/QuetionsPageMold/ObjetiveQuestionsMold";
import styled from "styled-components";
import { useContext } from "react";
import { QuestionsContext } from "../routes";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  list-style-type: none;
  padding: 1rem;
`;

const QuestionThree = () => {
  const navigate = useNavigate();
  const { setQuestionTreePoints } = useContext(QuestionsContext);

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
      <StyledList>
        <ObjetiveQuestionsMold
          alternativeLetter={"A"}
          alternativeText={"Nunca"}
          statesSetter={setQuestionTreePoints}
          alternativePoints={4}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"B"}
          alternativeText={"Raramente"}
          statesSetter={setQuestionTreePoints}
          alternativePoints={3}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"C"}
          alternativeText={"Frequentemente"}
          statesSetter={setQuestionTreePoints}
          alternativePoints={2}
        />
        <ObjetiveQuestionsMold
          alternativeLetter={"D"}
          alternativeText={"Todas as noites"}
          statesSetter={setQuestionTreePoints}
          alternativePoints={1}
        />
      </StyledList>
    </QuestionsPageMold>
  );
};

export default QuestionThree;
