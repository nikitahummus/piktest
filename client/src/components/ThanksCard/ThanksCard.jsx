import styled from "styled-components";
import React from 'react';

const Card = styled.div`
width: 544px;
height: 662px;
left: 448px;
top: 188px;
display: flex;
display: flex;
flex-direction: column;
justify-content : space-around;
align-items: center;

background: #FFFFFF;
border-radius: 8px;
`;

const Message = styled.div`
width: 408px;
height: 96px;
left: 0px;
top: 106px;

/* Title / Title 3 Semibold */

font-family: Graphik LCG;
font-style: normal;
font-weight: 600;
font-size: 44px;
line-height: 48px;
/* or 109% */

text-align: center;

color: #000000;`



export default function ThanksCard() {
  return (
    <Card>
      <Message>Ваша заявка отправлена</Message>
    </Card>
  )
}

