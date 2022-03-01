import React from "react";
import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";
import {GrRestroomWomen} from "react-icons/gr"
import {MdBloodtype} from "react-icons/md"
import {FaStethoscope} from "react-icons/fa"

const Why = () => {
  return (
    <Div>
      <Wrapper>
        <Holder>
        <Name>why Support Us</Name>
        <Name2>Your donations help Her Voice to support survivors of rape and domestic violence</Name2>
      </Holder>
    <Cardholder>
      <CardMain>
        <Card>
        <Icon>
          <AiFillHeart />
        </Icon>
      <Heading>
        Love
        Womens
      </Heading>
      <Talks>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
</Talks>
      <More>Read More</More>
    </Card>
    <Card>
      <Icon>
        <FaStethoscope />
      </Icon>
      <Heading>
        protect
        Women
      </Heading>
      <Talks>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
</Talks>
      <More>Read More</More>
    </Card>
    <Card>
      <Icon>
        <MdBloodtype />
      </Icon>
      <Heading>
        give them a skills
      </Heading>
      <Talks>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
</Talks>
      <More>Read More</More>
    </Card>
    <Card>
      <Icon>
        <GrRestroomWomen />
      </Icon>
      <Heading>
        Empower the
        Women
      </Heading>
      <Talks>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
</Talks>
      <More>Read More</More>
    </Card>
      </CardMain>
    </Cardholder>
      </Wrapper>
    </Div>
  );
};

export default Why;

const More = styled.div`
margin-top: 20px;
font-weight: bold;
color: #E95390;

`

const Talks = styled.div`
width: 220px;
text-align: center;
margin-top: 20px;
@media (min-width: 1024px) and (max-width: 1440px) {
  width: 180px;
text-align: center;
margin-top: 20px;
}

`

const Heading = styled.div`
margin-top: 20px;
text-transform: capitalize;
@media (min-width: 1024px) and (max-width: 1440px) {
}

`

const Icon = styled.div`
font-size: 40px;
margin-top: 20px;
`

const Card = styled.div`
height: 300px;
width: 250px;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
flex-direction: column;
background-color: white;
justify-content: center;
align-items: center;
@media (min-width: 1024px) and (max-width: 1440px) {
  height: 300px;
width: 200px;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
flex-direction: column;
background-color: white;
justify-content: center;
align-items: center;
}
@media (min-width: 300px) and (max-width: 768px) {
  height: 270px;
width: 250px;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
flex-direction: column;
background-color: white;
justify-content: center;
align-items: center;
}
`

const CardMain = styled.div`
height: 400px;
width: 90vw;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
flex-direction: row;
justify-content: space-evenly;
align-items:center;
@media (min-width: 1024px) and (max-width: 1440px) {
height: 400px;
width: 90vw;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
flex-direction: row;
justify-content: space-evenly;
align-items:center;
}
@media (min-width: 300px) and (max-width: 768px) {
  height: 1200px;
width: 90vw;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
flex-direction: row;
justify-content: space-evenly;
align-items:center;
flex-wrap: wrap;
}

`

const Cardholder = styled.div`
height: 400px;
width: 90vw;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
@media (min-width: 1024px) and (max-width: 1440px) {
  height: 400px;
width: 90vw;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
}
@media (min-width: 300px) and (max-width: 768px) {
  height: 1200px;
width: 90vw;
background-color: whitesmoke;
display: flex;
border-radius: 12px;
}
`

const Name2 = styled.div`
text-transform: capitalize;
font-weight:bold;
@media (min-width: 1024px) and (max-width: 1440px) {
  text-transform: capitalize;
font-weight:bold;
}
@media (min-width: 300px) and (max-width: 768px) {
  text-transform: capitalize;
font-weight:bold;
font-size: 12px;
margin-top: 10px;
}


`

const Name = styled.div`
font-size: 30px;
text-transform: capitalize;
font-weight:bold;
color: #E95390;
@media (min-width: 1024px) and (max-width: 1440px) {
  font-size: 30px;
text-transform: capitalize;
font-weight:bold;
color: #E95390;
}
@media (min-width: 300px) and (max-width: 768px) {
  font-size: 20px;
text-transform: capitalize;
font-weight:bold;
color: #E95390;
margin-top: 10px;

}
`

const Holder = styled.div`
height: 100px;
width: 90vw;
text-align: center;
@media (min-width: 1024px) and (max-width: 1440px) {
  height: 100px;
width: 90vw;
text-align: center;
}
`

const Wrapper = styled.div`
height: 500px;
width: 90vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (min-width: 1024px) and (max-width: 1440px) {
  height: 500px;
width: 90vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    }
    @media (min-width: 300px) and (max-width: 768px) {
      height: 1300px;
width: 90vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
  

`

const Div = styled.div`
height: 500px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;

@media (min-width: 1024px) and (max-width: 1440px) {
  height: 500px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
    }

@media (min-width: 300px) and (max-width: 768px) {
  height: 1300px;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
}

`