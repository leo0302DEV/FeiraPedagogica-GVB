import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #6a5acd;
  border: none;
  color: #ffffff;
  padding: 0.5rem;
  font-size: 22px;
  cursor: pointer;
  border-radius: 10px;
  width: 80%;
`;

const PrimaryButton = ({ text, url }) => {
  const navigate = useNavigate();

  const onAction = () => {
    navigate(url);
  };

  return <StyledButton onClick={onAction}>{text}</StyledButton>;
};

export default PrimaryButton;
