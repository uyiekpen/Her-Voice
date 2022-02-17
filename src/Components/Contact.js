import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Container id="contact">
        <Wrapper>
        <TextHolder>
            <Text>Contact Us</Text>
            <First>Our goal, vision and commitment</First>
            <Address>No 4 Barrister Ahmed Musa street Orige Lagos</Address>
            <Number>07060967446 , 07042328243</Number>
        </TextHolder>
        <CardHolder>
            <Text2>
                <Join>Join us</Join>
                <Empower>Empower women and girls</Empower>
                <Button2>
                <Donate>Donate</Donate>

                </Button2>
                
            </Text2>
            <Image/>
        </CardHolder>
        </Wrapper>
    </Container>
  )
}

export default Contact

const Join = styled.div`
color: #fff;
font-weight: bold;
margin-top: 5px;
font-size: 30px;
@media (min-width: 300px) and (max-width: 768px) {
    color: #fff;
font-weight: bold;
font-size: 20px;
}
`

const Empower = styled.div`
color: #fff;
margin-top: 5px;
@media (min-width: 300px) and (max-width: 768px) {
    color: #fff;
    font-size: 15px;
}

`


const Button2 = styled.div`
margin-top: 20px;
@media (min-width: 300px) and (max-width: 768px) {
}

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

`

const CardHolder = styled.div`
height: 400px;
width: 100%;
display: flex;
margin-top: 20px;
@media (min-width: 300px) and (max-width: 768px) {
    height: 400px;
width: 100%;
display: flex;
margin-top: 20px;
flex-direction: column;
justify-content: center;
align-items: center;
}

`
const Image = styled.img`
height: 400px;
width: 60%;
background-image: url("/assests/hand.jpg");
background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    @media (min-width: 300px) and (max-width: 768px) {
        height: 200px;
width: 250px;
background-image: url("/assests/hand.jpg");
background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}
`
const Text2 = styled.div`
height: 400px;
width: 40%;
background-color: #123456;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (min-width: 300px) and (max-width: 768px) {
    height: 200px;
    width: 250px;
background-color: #123456;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
`
const Number = styled.div`
font-size: 15px;
font-weight:bold;
@media (min-width: 300px) and (max-width: 768px) {
    font-size: 10px;
font-weight:bold;
}
`

const Address = styled.div`
font-size: 20px;
font-weight:bold;
@media (min-width: 300px) and (max-width: 768px) {
    font-size: 15px;
    text-align: center;
font-weight:bold;
}
`
const First = styled.div`
@media (min-width: 300px) and (max-width: 768px) {
    font-size: 15px;
   
}
`
const Text = styled.div`
color:#E9538D;
font-size: 40px;
font-weight:bold;
@media (min-width: 300px) and (max-width: 768px) {
    color:#E9538D;
font-size: 25px;
font-weight:bold;
}


`

const TextHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (min-width: 300px) and (max-width: 768px) {
    display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
`
const Wrapper = styled.div`
height:700px;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (min-width: 300px) and (max-width: 768px) {
    height:700px;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
`



const Container = styled.div`
height:700px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 300px) and (max-width: 768px) {
    height:550px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
`