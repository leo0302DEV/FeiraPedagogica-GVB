import { useState } from "react";
import styled from "styled-components";

const StyledAlternativeContainer = styled.section`
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

const ObjetiveQuestionsMold = ({
  alternativeLetter,
  alternativeText,
  statesSetter,
  alternativePoints,
}) => {
  const [clickCouter, setClickCouter] = useState(0);
  const handleClick = () => {
    statesSetter(alternativePoints);
    setClickCouter((previousValue) => previousValue + 1);
  };

  return (
    <StyledAlternativeContainer onClick={handleClick}>
      <StyledBox color={clickCouter % 2 === 0 ? "#6a5acd" : "#A93CFE"}>
        {alternativeLetter}
      </StyledBox>
      <StyledText>{alternativeText}</StyledText>
    </StyledAlternativeContainer>
  );
};

export default ObjetiveQuestionsMold;
