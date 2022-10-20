import React from 'react'
import styled from "styled-components"
import Section from './Section';
import ModelS from "../images/model-s.jpg"
import ModelX from "../images/model-x.jpg"
import ModelY from "../images/model-y.jpg"
import Model3 from "../images/model-3.jpg"
import SolarPanel from "../images/solar-panel.jpg"
import SolarRoof from "../images/solar-roof.jpg" 
import Accessories from "../images/accessories.jpg"

function Home() {
  return (
    <Container>
        <Section title="Model S" description="Order Online For Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  backgroundImg = {ModelS}/>
        <Section title="Model Y" description="Order Online For Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  backgroundImg = {ModelY}/>
        <Section title="Model X" description="Order Online For Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  backgroundImg = {ModelX}/>        
        <Section title="Model 3" description="Order Online For Touchless Delivery" leftBtnText="Custom Order" rightBtnText="Existing Inventory"  backgroundImg = {Model3}/>
        <Section title="Lowest Cost Solar Panels in India" description="Money Back Guarantee" leftBtnText="Order Now" rightBtnText="Learn More"  backgroundImg = {SolarPanel}/>
        <Section title="Solar for New Roofs" description="SolarRoofs costs lesser than the Normal Roofs" leftBtnText="Order Now" rightBtnText="Learn More"  backgroundImg = {SolarRoof}/>
        <Section title="Accessories" leftBtnText="Shop Now"  backgroundImg = {Accessories}/>
    </Container>
  )
}

const Container = styled.div`
height:100vh;
width:100vw;
text-align:center;
`;

export default Home