import React,{useState} from 'react'
import styled from "styled-components"
import DehazeIcon from '@mui/icons-material/Dehaze';
import SiderBar from './SiderBar';
import { Link as LinkS } from "react-scroll"  


const Header = () => {
    const [isOpen , setIsOpen] = useState(false)

    const onToggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <Container>
        <Wrapper>
            <Logo>
                .HerVoice
            </Logo>
            <Middle>
            <Links  to="home" spy={true} smooth={true}>Home</Links>
                <Links  to="about" spy={true} smooth={true}>About</Links>
                <Links  to="team" spy={true} smooth={true}>Team</Links>
                <Links  to="events" spy={true} smooth={true}>Events</Links>
                <Links  to="contact" spy={true} smooth={true}>Contact</Links>
            </Middle>
            <Donate>Donate</Donate>
            <Dehaze><DehazeIcon onClick={() =>{ onToggle()}} sx={{ fontSize: 40 }}/>
            {
                isOpen ? <SiderBar onToggle={onToggle}/> : null
            }
            </Dehaze>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;
    display : flex;
    justify-content: center;
    align-items: center;
    border: none;
position: fixed;
top: 0;
z-index: 10;
top: 0;
    left: 0;
    right: 0;
`
const Wrapper =styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    font-size: 20px;
    font-weight: bold;
`
const Middle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 100%;

    @media (min-width: 300px) and (max-width: 768px) {
        display: none;
    }
  
`
const Links = styled(LinkS)`
    font-size: 15px;
    font-weight: bold;
    
`
const Donate = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    background: #E9538D;
    transition: all 350ms;
  transform: scale(1);
  padding: 15px 40px;
  margin: 0 10px;
  outline: none;
  border-radius: 5px;
  border: none;
    
  :hover {
    cursor: pointer;
    transform: scale(0.97);
  }


    @media (min-width: 300px) and (max-width: 768px) {
        display: none;
    }
`
const Dehaze = styled.div`
    margin-right: 20px;
    display: flex;

    @media (min-width: 769px) {
        display: none;
    }
`