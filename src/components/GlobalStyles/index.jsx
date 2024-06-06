import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        font-family: "Itim", cursive;
        font-style: normal;
    }
    
    display: flex;
    flex-direction: column;
`;

export default GlobalStyle;
