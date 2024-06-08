import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const StyledMainContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 100px 100px 0 0;
  margin-top: -140px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-size: 30px;
  color: #5f5f5f;
  margin-top: 1rem;
`;

const StyledParagraph = styled.p`
  text-align: center;
  font-size: 20px;
  color: #5f5f5f;
  margin: 1.5rem 0 4.5rem 0;
`;

const StyledIcon = styled.img`
  width: 40px;
  margin-bottom: 2rem;
  opacity: 0.7;
  animation: jumpJump 600ms linear 0s infinite alternate;

  @keyframes jumpJump {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;

const StyledSpan = styled.span`
  text-align: center;
  font-size: 16px;
  color: #5f5f5f;
  margin-top: 3.5rem;
`;

const FirstPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/results");
  };

  return (
    <main>
      <StyledMainContainer>
        <StyledImage
          src="/images/imagem-pagina-inicial.png"
          alt="Imagem de fundo, céu estrelado, gerada por inteligência artificial."
        />
        <StyledMainSection>
          <StyledTitle>Você sabe como anda seu sono?</StyledTitle>
          <StyledParagraph>
            Responda à 10 perguntas rápidas e descubra!
          </StyledParagraph>
          <StyledIcon src="/icons/arrow-down.png" />
          <PrimaryButton text={"Responder"} onAction={handleClick} />
          <StyledSpan>Turma 221 | GVB</StyledSpan>
        </StyledMainSection>
      </StyledMainContainer>
    </main>
  );
};

export default FirstPage;
