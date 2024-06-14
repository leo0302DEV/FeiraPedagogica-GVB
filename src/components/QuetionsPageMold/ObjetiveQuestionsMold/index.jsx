import styled from "styled-components";

const StyledAlternativeContainer = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  background-color: #eeeeee;
  border-radius: 5px;
`;

const StyledBox = styled.div`
  background: ${(props) => props.color};
  padding: 0.3rem 0.5rem;
  color: #ffffff;
  font-size: 25px;
  text-align: center;
  border-radius: 5px 0 0 5px;
`;

const StyledText = styled.p`
  font-size: 16px;
  color: #000000;
`;

const StyledRadioInput = styled.input`
  display: none;
`;

const ObjetiveQuestionsMold = ({
  alternativeLetter,
  alternativeText,
  statesSetter,
  alternativePoints,
  name,
  selectedAlternative,
  setSelectedAlternative,
}) => {
  const handleClick = () => {
    statesSetter(alternativePoints);
    setSelectedAlternative(alternativeLetter);
  };

  return (
    <>
      <StyledAlternativeContainer
        onClick={handleClick}
        htmlFor={`ghost-input-radio-for-${alternativeLetter}`}
      >
        <StyledBox
          color={
            selectedAlternative !== alternativeLetter ? "#6a5acd" : "#A93CFE"
          }
        >
          {alternativeLetter}
        </StyledBox>
        <StyledText>{alternativeText}</StyledText>
      </StyledAlternativeContainer>
      <StyledRadioInput
        type="radio"
        id={`ghost-input-radio-for-${alternativeLetter}`}
        name={name}
      />
    </>
  );
};

export default ObjetiveQuestionsMold;
