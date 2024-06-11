import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  & > .range-input {
    display: block;
    width: 100%;
    height: 2rem;
    appearance: none;
    padding: 0;
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    transform: scale(0.7);
  }

  & > .range-input::-webkit-slider-thumb {
    appearance: none;
    display: block;
    background-color: #6a5acd;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }

  & > .range-input::-moz-slider-thumb {
    appearance: none;
    display: block;
    background-color: #6a5acd;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

const StyledDisplay = styled.span`
  font-size: 65px;
  color: #5f5f5f;
  font-weight: 400;
  text-align: center;
`;

const RangeQuestionMold = ({
  state,
  statesSeter,
  minValue,
  maxValue,
  complement = null,
}) => {
  const handleChange = (event) => {
    const inputValue = event.target.value;
    statesSeter(inputValue);
  };

  return (
    <StyledSection>
      <StyledDisplay>
        {complement ? state + "" + complement : state}
      </StyledDisplay>
      <input
        onChange={(event) => handleChange(event)}
        type="range"
        min={minValue}
        max={maxValue}
        value={state}
        className="range-input"
      />
    </StyledSection>
  );
};

export default RangeQuestionMold;
