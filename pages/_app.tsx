import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/global"
import themes from '../styles/themes/light'

function MyApp({ Component, pageProps }) {
  return ( 
  <>
  <ThemeProvider theme={themes}>
  <GlobalStyles/>
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}

export default MyApp
