import styled from "styled-components";
import ObjetiveQuestionsMold from "../ObjetiveQuestionsMold";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  list-style-type: none;
  padding: 1rem;
`;

const ObjetiveQuestionsList = ({
  opitionsConfigObj,
  commonOptionsConfigObj,
}) => {
  const { statesSetter, selectedAlternative, setSelectedAlternative, name } =
    commonOptionsConfigObj;

  return (
    <StyledList>
      {opitionsConfigObj.map((option) => {
        return (
          <ObjetiveQuestionsMold
            key={`${name}--${option.alternativeLetter}`}
            alternativeLetter={option.alternativeLetter}
            alternativeText={option.alternativeText}
            statesSetter={statesSetter}
            alternativePoints={option.alternativePoints}
            name={name}
            selectedAlternative={selectedAlternative}
            setSelectedAlternative={setSelectedAlternative}
          />
        );
      })}
    </StyledList>
  );
};

export default ObjetiveQuestionsList;
