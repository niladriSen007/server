import React,{useState} from 'react'
import styled from "styled-components"
import Logo from "../images/logo.svg"
import MenuIc from "@mui/icons-material/Menu"
import Close from "@mui/icons-material/Close"
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux"

function Header() {

  const [burgerOpen,setBurgerOpen] = useState(false);
  const cars = useSelector(selectCars);
  // console.log(cars);

  return (
    <Container>
      <a>
        <img src={Logo}  alt="logo"/>
      </a>
      <Menu>
        {
          cars && cars.map((car,index)=>(
            <a key={index} href='#'>{car}</a>
          ))
        }
        {/* <a href='#'>Model S</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model X</a>
        <a href='#'>Model 3</a> */}
      </Menu>
      <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <MenuIcon onClick={()=>setBurgerOpen(true)}/>
      </RightMenu>
     {/* {
      burgerOpen &&  */}
      <BurgerNav show={burgerOpen}>
      <CustomClose onClick={()=>setBurgerOpen(false)}/>

      {
          cars && cars.map((car,index)=>(
            <li key = {index}><a href='#'>{car}</a></li>
          ))
        }

        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Cyber Truck</a></li>
        <li><a href='#'>Roadster</a></li>
        {/* <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Existing Inventory</a></li> */}
    </BurgerNav>
    {/* } */}
    </Container>
  )
}
const Container = styled.div`
  min-height:60px;
  min-width:100vw;
  position:fixed;
  display:flex;
  align-items:center;
   justify-content:space-between;
  padding:20px;
  z-index:1;
`

const Menu = styled.div`
  display:flex;
  align-items:center;
 
  justify-content:center;
  a{
    font-weight:800;
    font-size:18px;
    text-decoration:uppercase;
    padding:0 10px;
    flex-wrap:no-wrap;
  }
  @media (max-width:768px)
  {
     display:none;
  }
`

const RightMenu = styled.div`
display:flex;
align-items:center;
justify-content:center;
a{
  font-weight:800;
  font-size:18px;
  text-decoration:uppercase;
  padding:0 10px;
}
`

const BurgerNav = styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:#fff;
  width:300px;
  overflow:hidden;
  z-index:100;
  display:flex;
  flex-direction:column;
  // align-items:flex-start;
  text-align:start;
  font-weight:700;
  padding:20px;
  list-style:none;
  transform:${props => props.show ? 'translateX(0)' :  'translateX(100%)' };
  transition:all 0.4s ease-in-out;
  li
  {
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    
  }

`

const CustomClose = styled(Close)`
align-self:flex-end;
cursor:pointer;
`;

const MenuIcon = styled(MenuIc)`
cursor:pointer;
`

export default Header