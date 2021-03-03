import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
    background-color:${props=>props.theme.colors.background};
    padding:0;
    margin:0;
    box-sizing:border-box;
    color:${props=>props.theme.colors.text}
}
`
