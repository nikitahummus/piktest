import React from 'react'
import styled from 'styled-components'

const GreyInput = styled.input`
width : ${(props) => (props.name ? "200px" : "432px")};
height : 56px;
margin-right: 10px;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;
text-align: center;
background: #F2F4F7;
border-radius: 4px;
@media (max-width: 768px) 
{ width: 343px;}
`;

const WhiteInput = styled.input`
width : ${(props) => (props.lastName ? "200px" : "432px")};
height : 56px;
background: #FFFFFF;
text-align: center;
border: 1px solid #DCDCE6;
box-sizing: border-box;
border-radius: 4px;
@media (max-width: 768px) 
{ width: 343px;}
`;

const Title = styled.p`


/* Title / Title 3 Semibold */

font-family: Graphik LCG;
font-style: normal;
font-weight: 600;
font-size: 44px;
line-height: 48px;

color: #000000;
`;

const Body = styled.body`
// position: absolute;
width: 314px;
height: 48px;

font-family: Graphik LCG;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 24px;
text-align: center;

color: #000000;`

const Frame = styled.form`
display: flex;
flex-direction: column;
justify-content : space-around;
align-items: center;
width: 544px;
height: 648px;
left: 448px;
top: 188px;
background: #FFFFFF;
border-radius: 8px;

@media (max-width: 768px) 
{ width: 100vw;
height: 100vh}
`;

const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 18px 40px;
width: 432px;
height: 56px;
background: #FF4114;
border-radius: 4px;
font-family: Graphik LCG;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 20px;
color: #FFFFFF;
@media (max-width: 768px) 
{ width: 343px;}
:hover {
  background: #F72F00;
}
`;

export default function Form() {
  return (
    <Frame>
      <Title>Добрый вечер</Title>
      <Body>Для бронирования помещений заполните форму</Body>
      <div className="inputcontainer">
      <GreyInput name type="text" placeholder="Ваше имя"/>
      <WhiteInput lastName type="text" placeholder="Фамилия"/></div>
      <WhiteInput type="text" placeholder="Телефон"/>
      <GreyInput type="text" placeholder="E-mail"/>
      <GreyInput type="text" placeholder="Количество помещений"/>
      <Button type="submit">Забронировать квартир</Button>
      <p className="disclame">Это дисклеймер, который есть во всех формах</p>
    </Frame>
  )
}

