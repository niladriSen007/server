import React from 'react'
import styled from "styled-components"
import DownArr from "../images/down-arrow.svg"
import Fade from "react-reveal/Fade"

function Section({title,description,leftBtnText,rightBtnText,backgroundImg}) {
  return (
    <Wrap bgImg={backgroundImg} id={title}>
        <Fade bottom>  
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
           </ItemText>
       </Fade>
           <Buttons>
          <Fade bottom>
          <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {
                    rightBtnText && 
                    <RightButton>
                        {rightBtnText}
                </RightButton>
                }
           </ButtonGroup>
          </Fade>
           <DownArrow src={DownArr} />
           </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`

width:100vw;
height:100vh;
background-image: ${props => `url(${props.bgImg})`};
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const Buttons = styled.div``

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px)
    {
        flex-direction:column;
    }

`;

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:10px;
`;

const RightButton = styled(LeftButton)`
background-color:#fff;
opacity:0.55;
color: black;
font-weight:900;
`;

const DownArrow = styled.img`

height:40px;
cursor:pointer;
animation: animateDown infinite 1.5s;
`
export default Section