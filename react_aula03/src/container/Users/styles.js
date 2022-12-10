import styled from "styled-components";
import Background2 from "../../assets/background2.svg"

export const Container = styled.div`
background: url('${Background2}');
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

min-height: 100vh;

`

export const Image = styled.img`
margin-top: 30px;
`

export const InputLabel = styled.p`
margin-top: 34px;
padding-left: 25px;
font-weight: 700;
font-size: 18px;
line-height: 22px;
align-items: center;
letter-spacing: -0.408px;
color: #EEEEEE;
`

export const Input = styled.input`
width: 342px;
height: 58px;
padding-left: 25px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;
outline: none;

font-weight: 400;
font-size: 22px;
line-height: 28px;
color: #FFFFFF;
`

export const Li = styled.li`
width: 342px;
height: 58px;
margin-bottom: 20px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
border: none;

display: flex;
justify-content: space-around;
align-items: center;

font-weight: 400;
font-size: 22px;
line-height: 28px;
color: #FFFFFF;
`