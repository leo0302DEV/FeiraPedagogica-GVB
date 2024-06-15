import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";

const StyledPrimeryPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 1rem 1rem 2.5rem 1rem;
  background-color: #ffffff;
`;

const StyledTitle = styled.h1`
  font-size: 25px;
  font-weight: 400;
  color: #5f5f5f;
  align-self: flex-start;
`;

const StyledParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #5f5f5f;
  align-self: flex-start;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: fixed;
  width: 100%;
  bottom: 2rem;
  padding: 1rem;
`;

const QuestionsPageMold = ({
  question,
  quetionNumber,
  buttonText = "Próxima",
  buttonUrl,
  buttonTwoUrl = null,
  children,
}) => {
  return (
    <StyledPrimeryPageContainer>
      <StyledTitle>Pergunta número #{quetionNumber}:</StyledTitle>
      <StyledParagraph>{question}</StyledParagraph>
      {children}
      <StyledButtonContainer>
        {buttonTwoUrl && <PrimaryButton text={"Anterior"} url={buttonTwoUrl} />}
        <PrimaryButton text={buttonText} url={buttonUrl} />
      </StyledButtonContainer>
    </StyledPrimeryPageContainer>
  );
};

export default QuestionsPageMold;
