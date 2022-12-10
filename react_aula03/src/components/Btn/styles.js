import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 130px;
background:transparent;
border-radius: 14px;
border:1px solid white;

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