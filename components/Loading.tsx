import styled from "styled-components";

export const Loading = () => {
    return (
        <LoadingContainer>
            <img src="loading.gif"/>
        </LoadingContainer>
    )
}

const LoadingContainer = styled.div`
height:100vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;

img{
    height:50%;
}
`


