import { useEffect, useState } from 'react'
import { Loading } from '../Loading'
import Switch from 'react-switch'
import {ThemeProvider} from 'styled-components'
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'
import { GlobalStyles } from '../../styles/global'
import { HomeStyles } from './HomeStyles'


export const HomeTitle = () => {

    const [theme, setTheme] = useState(light)
    const [checked, setChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(true);
    
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
        <GlobalStyles/>
        <ThemeProvider theme={theme}>
        <HomeStyles>
            <div className="switch">
            <Switch 
            checked={checked}
            onChange={handleTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={45}
            handleDiameter={25}
            onHandleColor={theme.colors.background}
            offHandleColor={theme.colors.background}
            checkedHandleIcon={<div>☀️</div>}
            uncheckedHandleIcon={<div>🌘</div>}
            offColor={theme.colors.text}
            onColor={theme.colors.text}
            />
            </div>
            <header><div>Y</div><div>g</div><div>o</div><div>r</div>
                <div>F</div><div>e</div><div>r</div><div>r</div><div>e</div><div>i</div><div>r</div><div>a</div><div>.</div></header>
            <div className="subTitle"></div>
        </HomeStyles>
        </ThemeProvider>
        </>
    )
}

