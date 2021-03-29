// styled componentes para estilo
import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


:root{
    --white:#ffffff;

    --gray-50: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-900: #121214;

    --cyan-500: #61dafb;
    --yellow-500: #eba417;
}

@media (max-width:1080px){
    html{
        font-size:93.75%;
    }
}


@media (max-width:720px){
    html{
        font-size:87.5%;
    }
}

body,input,textarea,select, button{
    font:400 1rem "Roboto", sans-serif;
}

button{
    cursor: pointer;
}

a{
    color:inherit;
    text-decoration:none;
}

body{
    background: var(--gray-900)
}


div{
   
    h1{
        color: var(--cyan-500);
    }

    p{
        color: var(--yellow-500);
        font-weight:bold;
    }
}

`;