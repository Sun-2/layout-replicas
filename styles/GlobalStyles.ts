import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 ${css`
   html,
   body {
     padding: 0;
     margin: 0;
   }

   * {
     box-sizing: border-box;

     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }
 `}
`;
