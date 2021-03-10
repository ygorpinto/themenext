import styled from 'styled-components'

export const ProfileImageStyles = styled.div`
img {
    margin:5% 0;
    animation: showimg 4s normal;
    transition: width 2s;
}

@keyframes showimg {
    from {
        width:0%;
    }

    to {
        width:100%;
    }
}
`
