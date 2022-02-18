import React from 'react'
import styled from 'styled-components'

const Event = () => {
  return (
    <Component id ="events">
        <Wrapper>
            <TextHolder>
                <EventHolder>Our Event</EventHolder>
                <Text>Register and help make a change</Text>
            </TextHolder>
            <CardHolder>
               
                <Card3>
                    <Text2>feeding of Young kids on the street of Ajegunle</Text2>
                    <Date>Monday 02 March 2022</Date>
                </Card3>
                <Card2>
                    <Text2>SheCodes Ajegunle</Text2>
                    <Date>Monday 02 March 2022</Date>

                </Card2>
                <Card2>
                <Text2>Young kids on the street of Ajegunle</Text2>
                <Date>Monday 02 March 2022</Date>

                </Card2>
                <Card2>
                <Text2>Young kids on the street of Ajegunle</Text2>
                <Date>Monday 02 March 2022</Date>

                </Card2>
                
            </CardHolder>
        </Wrapper>
    </Component>
  )
}

export default Event

const Card2 = styled.div`
height: 300px;
width: 400px;
background-color: beige;
margin: 5px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 15px;
color: #fff;
background-image: url("/assests/red.jpg");
background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    opacity: 0.6;
    @media (min-width: 300px) and (max-width: 768px) {
        height: 200px;
width: 250px;
background-color: beige;
margin: 5px;
display: flex;
flex-direction: column;
justify-content: flex-end;
opacity: 0.6;
padding: 15px;
color: #fff;
background-image: url("/assests/red.jpg");
background-repeat: no-repeat;
    background-size: cover;
    background-position: top; 
    }
`
const Card3 = styled.div`
height: 300px;
width: 400px;
background-color: beige;
margin: 5px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 15px;
color: #fff;
background-image: url("/assests/kids.jpg");
background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    opacity: 0.6;
    @media (min-width: 300px) and (max-width: 768px) {
        height: 200px;
width: 250px;
background-color: beige;
margin: 5px;
display: flex;
flex-direction: column;
justify-content: flex-end;
opacity: 0.6;
padding: 15px;
color: #fff;
background-image: url("/assests/kids.jpg");
background-repeat: no-repeat;
    background-size: cover;
    background-position: top; 
    }
`

// const Card = styled.div`
// height: 300px;
// width: 70%;
// background-color: beige;
// `

const CardHolder = styled.div`
margin-top: 20px;
display: flex;
@media (min-width: 300px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

`
const Text2 = styled.div`
font-weight: bold;
`

const Image = styled.img`
height: 300px;
object-fit: cover;
width: 400px;
position: absolute;

`
const Date = styled.div`
`
const Text = styled.div`
`
const EventHolder = styled.div`
font-size: 40px;
font-weight: bold;
color: #E9538D;
@media (min-width: 300px) and (max-width: 768px) {
    font-size: 30px;
font-weight: bold;
color: #E9538D;
}
`
const TextHolder = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
@media (min-width: 300px) and (max-width: 768px) {
    display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
}
`

const Wrapper = styled.div`
height: 500px;
width: 90%;
@media (min-width: 300px) and (max-width: 768px) {
    height: 1100px;
width: 90%;
}
`


const Component = styled.div`
height: 500px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 70px;
@media (min-width: 300px) and (max-width: 768px) {
height: 1100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
`