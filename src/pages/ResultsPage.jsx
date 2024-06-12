import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";
import { useContext, useEffect, useState } from "react";
import { QuestionsContext } from "../routes";

const StyledMainContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("images/imagem-pagina-inicial.png");
  background-size: contain;
`;

const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 0 0 100px 100px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #5f5f5f;
  margin-top: 0.5rem;
`;

const StyledResultParagraph = styled.p`
  font-size: 35px;
  margin: 1.5rem 0 0.5rem 0;
  text-align: center;
  color: #0b3d91;
`;

const StyledScoreParagraph = styled.p`
  font-size: 25px;
  color: #5f5f5f;
  text-align: center;
  margin: 0 0 3rem 0;
`;

const StyledSpan = styled.span`
  text-align: center;
  font-size: 18px;
  color: #5f5f5f;
  margin-top: 2rem;
`;

const ResultsPage = () => {
  const { returnSleepQualityResult, result } = useContext(QuestionsContext);
  const [quality, setQuality] = useState("");
  const handleClick = () => {
    console.log("Olá mundo");
  };

  useEffect(() => {
    const qualityResult = returnSleepQualityResult();
    setQuality(qualityResult);
  }, [returnSleepQualityResult]);

  return (
    <StyledMainContainer>
      <StyledContentBox>
        <StyledTitle>A qualidade do seu sono é:</StyledTitle>
        <StyledResultParagraph>{quality}</StyledResultParagraph>
        <StyledScoreParagraph>Seus pontos: {result}</StyledScoreParagraph>
        <PrimaryButton
          text={"Veja como você pode melhorar o seu sono."}
          onAction={handleClick}
        />
        <StyledSpan>Turma 221 GVB</StyledSpan>
      </StyledContentBox>
    </StyledMainContainer>
  );
};

export default ResultsPage;
