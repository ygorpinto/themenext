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

    h1{
        margin:0;
        font-size:6rem;
        border-right:3px solid rgba(0,0,0,0.5);
        animation: 
        blinkCursor 500ms steps(40) infinite normal,
        typingTitle 3s steps(30) normal both,
        hideborder 1s 4s infinite normal;
        color:${props=>props.theme.colors.title};
        margin-top:3%;    
        white-space:nowrap;
        overflow:hidden;
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
        animation: 
        blinkCursor 400ms steps(30) 4s infinite normal,
        typing 3s steps(30) 4s normal both,
        hideborder 1s 8s infinite normal;
        border-right:2px solid rgba(0,0,0,0.0);
        color:${props=>props.theme.colors.title};
        margin:0;
        white-space:nowrap;
        overflow:hidden;
    }
}

@keyframes blinkCursor {
            from {
                border-right-color:rgba(0,0,0,0.5);
            }
        
            to {
                border-right-color:transparent;
            }
        }

@keyframes typingTitle {
        from {
            width:0;
        }
        
        to {
            width:42rem;
        }
    }

@keyframes typing {
    from {
            width:0;
    }
        
    to {
            width:21rem;
        }
    }

@keyframes hideborder {
    from {
        border-right-color:transparent;
    }

    to {
        border-right-color:transparent;
    }
}
`