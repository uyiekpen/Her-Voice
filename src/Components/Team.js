import React from 'react'
import styled from 'styled-components'

const Team = () => {
  return (
    <Component id="team">
        <Wrapper>
        <TeamHolder>
            <First>Meet Our Team</First>
            </TeamHolder>

            <CardHolder>
            
            <Card>
            <Image src="/assests/bukky.jpg"/>
            <Name>Bukola Gbemi</Name>
            <Position>Founder of SheCodes Ajegunle</Position>
            </Card>
            <Card>
            <Image src="/assests/osa2.JPG"/>
            <Name>Uyiekpen Osazie</Name>
            <Position>Project Manager</Position>

            </Card>  
            <Card>
            <Image src="/assests/lucy.jpg"/>
            <Name>Luciana Anozie</Name>
            <Position>Ass. Project Manager</Position>
            </Card>
            <Card>
            <Image src="/assests/odun.jpg"/>
            <Name>Precoius Onuegbu</Name>
            <Position>Content Creator</Position>
            </Card>

            </CardHolder>
        </Wrapper>
    </Component>
  )
}

export default Team

const Position = styled.div`
font-size: 12px;
color: #000;
font-weight: bold;
@media (min-width: 300px) and (max-width: 768px) {
  font-size: 12px;
color: #000;
font-weight: bold;
}
`


const Name = styled.div`
color: #E9538D;
font-weight: bold;
margin-top: 10px;
@media (min-width: 300px) and (max-width: 768px) {
  color: #E9538D;
font-weight: bold;
margin-top: 10px;
}
`


const Image = styled.img`
height: 220px;
width: 220px;
background-color: beige;
object-fit: cover;
@media (min-width: 300px) and (max-width: 768px) {
  height: 180px;
width: 220px;
background-color: beige;
object-fit: cover;
}
`


const Card= styled.div`
height: 300px;
width: 250px;
background-color:#fff;
margin: 5px;
flex-direction: column;
display: flex;
justify-content:center;
align-items: center;
@media (min-width: 300px) and (max-width: 768px) {
  height: 250px;
width: 250px;
background-color:#fff;
margin: 5px;
flex-direction: column;
display: flex;
justify-content:center;
align-items: center;
}
;

`


const CardHolder = styled.div`
height: 500px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color:#E9538D ;
margin: 20px;
flex-direction: row;
@media (min-width: 300px) and (max-width: 768px) {
  height: 1100px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color:#E9538D ;
margin: 20px;
flex-direction: column;
}

/* background-image: url("/assests/aud.jpg");
background-repeat: no-repeat;
    background-size: cover;
    opacity:0.6; */
`

const First = styled.div`
color: #E9538D;
font-size: 40px;
font-weight: bold;
@media (min-width: 300px) and (max-width: 768px) {
  color: #E9538D;
font-size: 30px;
font-weight: bold;
}
`

const TeamHolder = styled.div``

const Wrapper = styled.div`
height: 600px;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (min-width: 300px) and (max-width: 768px) {
  height: 1200px;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
`


const Component = styled.div`
height: 600px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 300px) and (max-width: 768px) {
  height: 1200px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
`