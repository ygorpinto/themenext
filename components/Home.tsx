import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Loading } from './Loading'

export const HomeTitle = () => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
        setIsLoading(false)
        }, 1800)
    }, [])


    if (isLoading === true) {
        return (
            <Loading />
        )
    }

    return (
        <HomeContainer>
            <header><div>Y</div><div>g</div><div>o</div><div>r</div>
                <div>F</div><div>e</div><div>r</div><div>r</div><div>e</div><div>i</div><div>r</div><div>a</div><div>.</div></header>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;

header{

    display:flex;

    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
    letter-spacing: 3px;

    div{
        
    :hover{
        color: #f52c74;
    }
    }
}
`

