import styled from "styled-components"
export const GreyInput = styled.input`
width : ${(props) => (props.Firstname ? "200px" : "432px")};
height : 56px;
margin-right: 10px;
::placeholder {
  color: ${(props) => (props.error ? "rgba(230, 70, 70, 1)" : "#4D4D4D;")};
}
text-align: center;
border: ${(props) => (props.error ? "2px solid #FF4114" : "1px")};
background: ${(props) => (props.error ? "rgb(230, 70, 70, 0.1)" : "#F2F4F7")};
border-radius: 4px;
@media (max-width: 768px) 
{ width: 343px;}
`;

export const WhiteInput = styled.input`
width : ${(props) => (props.lastName ? "200px" : "432px")};
height : 56px;
background: ${(props) => (props.error ? "rgb(230, 70, 70, 0.1)" : "#FFFFFF")};
text-align: center;
::placeholder {
  color: ${(props) => (props.error ? "rgba(230, 70, 70, 1)" : "#4D4D4D;")};
}
border: ${(props) => (props.error ? "2px solid #FF4114" : "1px solid #DCDCE6")};
box-sizing: border-box;
border-radius: 4px;
@media (max-width: 768px) 
{ width: 343px;}
`;

export const Title = styled.p`


/* Title / Title 3 Semibold */

font-family: Graphik LCG;
font-style: normal;
font-weight: 600;
font-size: 44px;
line-height: 48px;

color: #000000;
`;

export const Body = styled.body`
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

export const Form = styled.form`
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

export const Button = styled.button`
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
font-size: 16px;
line-height: 20px;
border: 2px;
color: #FFFFFF;
@media (max-width: 768px) 
{ width: 343px;}
:hover {
  background: #F72F00;
}
`;
