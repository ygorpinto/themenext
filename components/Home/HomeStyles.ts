import styled from 'styled-components'

export const HomeStyles = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:${props=>props.theme.colors.background};

header{

    margin:0;

    display:flex;

    font-family: 'Poppins', sans-serif;
    font-size: 6rem;
    letter-spacing: 3px;

    div{
        margin-top:3%;    
    :hover{
        color: ${props=>props.theme.colors.secondary};
    }
    }
}

.switch{
    position:absolute;
    top:3%;
    left:3%;
}

.subTitle{
    font-family: 'Architects Daughter', cursive;
    font-size:2rem;
    p{
        margin:0;
    }
}

`