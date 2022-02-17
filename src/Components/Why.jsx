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
      <Name2>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Name2>
    </Holder>
    <Cardholder>
      <CardMain>
      <Card>
      <Icon>
        <AiFillHeart />
      </Icon>
      <Heading>
        Love
        <br />
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
        Love
        <br />
        Womens
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
        Donate
        <br />
        Blood
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
        Save the
        <br />
        Womens
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
const Div = styled.div`
  height: 500px;
  width: 100%;
  /* margin-top: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    @media (min-width: 300px) and (max-width: 768px) {
    height: 1200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  }
`;
const Wrapper = styled.div`
height: 500px;
width: 90%;
height: 500px;
  width: 100%;
  /* margin-top: 10px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 300px) and (max-width: 768px) {
    height: 1200px;
  width: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  }

`


const Holder = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  padding: 9px;
  height: 220px;
  width: 100%;
  margin-top: 10px;
    @media (min-width: 300px) and (max-width: 768px) {
    display: flex;
  align-items: center;
  background-color: white;
  flex-direction: column;
  padding: 9px;

  } 
 
`;
const Name = styled.div`
  color: #E9538D;
  font-weight: bold;
  font-size: 26px;
  text-transform: capitalize;
    @media (min-width: 300px) and (max-width: 768px) {
  color: #E9538D;
  font-weight: bold;
  font-size: 20px;
  text-transform: capitalize;
  }
`;
const Name2 = styled.div`
  font-size: 16px;
  height: 20px;
  text-align: center;
  font-weight: bold;
    @media (min-width: 300px) and (max-width: 768px) {
    font-size: 12px;
  height: 20px;
  text-align: center;
  font-weight: bold;
  }


`;
const Cardholder = styled.div`
  display: flex;
  height: 350px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

    @media (min-width: 300px) and (max-width: 768px) {
  }
  display: flex;
  height: 1100px;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  
`;

const CardMain = styled.div`
display: flex;
  margin: 5px;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 350px;
  width: 90%;
  border-radius: 12px;
  margin-top: 20px;
  background-color: whitesmoke;
  align-items: center;
  @media (min-width: 300px) and (max-width: 768px) {
    display: flex;
  margin: 5px;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 1100px;
  width: 90%;
  border-radius: 12px;
  margin-top: 20px;
  background-color: whitesmoke;
  align-items: center;
  }


`

const Card = styled.div`
  margin: 5px;
  height: 300px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  :hover {
    background-color: #f2f2f2;
  }
  @media (min-width: 300px) and (max-width: 768px) {
    margin: 5px;
  height: 250px;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  }
`;
const Icon = styled.div`
margin-top: 10px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 10px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  @media (min-width: 300px) and (max-width: 768px) {
    display: flex;
  justify-content: center;
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  }
`;
const Talks = styled.div`
  margin: 25px;
  line-height: 20px;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  @media (min-width: 300px) and (max-width: 768px) {
  margin: 20px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  }
`;
const More = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 300px) and (max-width: 768px) {
    color: red;
  display: flex;
  justify-content: center;
  cursor: pointer;
  }
`;
