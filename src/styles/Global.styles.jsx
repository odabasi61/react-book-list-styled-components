// create global styles
// theme.js dosyasındaki değişkenleri aşağıda çekiyoruz.
// bu componenttekiler, websitesinde her yerde uygulanır.

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        text-transform:uppercase;
        font-family: 'Shantell Sans', cursive;
    }
    body{
        font-size:1.5rem;
        background: ${({ theme }) => theme.colors.mainColor}
    }
`;

