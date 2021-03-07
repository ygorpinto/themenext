import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Loading } from './Loading'
import Switch from 'react-switch'
import {ThemeProvider} from 'styled-components'
import {ThemeContext} from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import { GlobalStyles } from '../styles/global'


export const HomeTitle = () => {

    const [theme, setTheme] = useState(light)
    const [checked, setChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    const { colors, title } = useContext(ThemeContext);
    
    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false)
        }, 1800)
    }, [])

    const handleTheme = () => {
        setTheme(theme.title === "light" ? dark : light)
        setChecked(checked ? false : true )
    }

    if (isLoading === true) {
        return (
            <Loading />
        )
    }

    return (
        <>
        <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <HomeContainer>
            <div className="switch">
            <Switch 
            checked={checked}
            onChange={handleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            height={20}
            width={50}
            handleDiameter={25}
            offHandleColor={theme.colors.background}
            onHandleColor={theme.colors.background}
            offColor={theme.colors.text}
            onColor={theme.colors.text}
            />
            </div>
            <header><div>Y</div><div>g</div><div>o</div><div>r</div>
                <div>F</div><div>e</div><div>r</div><div>r</div><div>e</div><div>i</div><div>r</div><div>a</div><div>.</div></header>
        </HomeContainer>
        </ThemeProvider>
        </>
    )
}

const HomeContainer = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props=>props.theme.colors.background};

header{

    display:flex;

    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
    letter-spacing: 3px;

    div{
        
    :hover{
        color: ${light.colors.secondary};
    }
    }
}

.switch{
    position:absolute;
    top:3%;
    left:3%;
}

`

