import { css } from "@emotion/react"
import * as theme from './theme';

export default css`
    *, *::after, *::before {
        box-sizing: border-box;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-smoothing: antialiased;
    }
    
    #gatsby-focus-wrapper, 
    #___gatsby {
      display: flex;
      height: 100%;
      width: 100%;
    } 
    
    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji",
          "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: ${theme.BASE_FONT_SIZE};
        background: ${theme.COLOR.LIGHT.hex};
        color: ${theme.COLOR.DARK.hex};
        
        padding: 0;
        margin: 0;
        height: 100vh;
    
        @media screen and (min-width: 240px) {
          font-size: 14px;
        }
        
        @media screen and (min-width: 480px) {
          font-size: 15px;
        }
        
        @media screen and (min-width: 700px) {
          font-size: 16px;
        }
        
        @media screen and (min-width: 960px) {
          font-size: 17px;
        }
        
        @media screen and (min-width: 1184px) {
          font-size: 18px;
        }
    }
    
    a {
      color: inherit;
    }
    
    h1 {
      ${theme.H1};
    }
    
    h2 {
      ${theme.H2};
    }
    
    h3 {
      ${theme.H3};
    }
    
    h4 {
      ${theme.H4};
    }
    
    h5 {
      ${theme.H5};
    }
    
    h6 {
      ${theme.H6};
    }
    
    p {
      ${theme.P};
    }
    
    pre {
      font-family: monospace;
    }
`;