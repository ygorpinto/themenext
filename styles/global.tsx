import {createGlobalStyle} from 'styled-components'
import db from '../db.json'

export const GlobalStyles = createGlobalStyle`
body {
    background-color:${db.colors.bg};
    padding:0;
    margin:0;
    box-sizing:border-box;
}
`
