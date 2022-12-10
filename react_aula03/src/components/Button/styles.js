import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;
background: ${props => props.borda ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
border-radius: 14px;
border:${props => props.borda ? '1px solid white' : 'none'};

font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;

&:hover{
    opacity: 0.8;
    transition: 1s;
}
&:active{
    opacity: 0.2;
    transition: 0s;
}

`