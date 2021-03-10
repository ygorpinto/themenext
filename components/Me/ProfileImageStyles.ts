import styled from 'styled-components'

export const ProfileImageStyles = styled.div`
img {
    margin:5% 0;
    animation: showimg 10s normal;
    transition: width 2s;
}

@keyframes showimg {
    from {
        opacity:0%;
    }

    to {
        opacity:100%;
    }
}
`
