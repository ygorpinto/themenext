import styled from 'styled-components'

export const ProfileImageStyles = styled.div`
img {
    margin:5% 0;
    animation: showimg 6s normal;
    transition: width 2s;
    opacity:80%;

    :hover{
        opacity:100%;
    }
}

@keyframes showimg {
    from {
        opacity:0%;
    }

    to {
        opacity:80%;
    }
}
`
