import React from 'react'
import styled from "styled-components"


const HomeComp = () => {
  return (
    <Container>
        <Wrapper>

            <Top>Empowering Women and Girls world wide</Top>
            <Bottom>
                <Mission>
                    <Big>our Mission</Big>
                    <Small>Our goal, vision and commitment</Small>
                </Mission>
                <Events>
                    <Big>our Events</Big>
                    <Small>Register and help make a change</Small>
                </Events>
                <Involved>
                    <Big>Get Involved</Big>
                    <Small>Register and help make a change</Small>
                </Involved>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default HomeComp

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background-image: url("/assests/red.jpg");
    background-position: top center;
    background-size: 100% calc(100vh - 80px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
    margin-top: 80px;


`
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
`


const Top = styled.div`
    color: white;
    font-size: 50px;
    width: 60%;
    text-align: center;
    font-weight: bold;
    /* height: 100%; */
    margin-bottom: 150px;
    background-color: rgba(0,0,0, 0.2) ;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 50px;

    }
`
const Bottom = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    @media (min-width: 300px) and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
const Mission = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #E9538D;
    color: white;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`
const Big = styled.div`
    text-transform: capitalize;
    font-size: 35px;
`
const Small = styled.div`
    font-size: 20px;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 10px;
    }
`
const Events = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #72A4EE;
    color: white;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`
const Involved = styled.div`
    width: 33.33%;
    height: 100%;
    background-color: #2E427F;
    color: white;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: none;
    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 25px;
        width: 100%;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`