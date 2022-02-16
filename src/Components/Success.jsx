import React from "react";
import styled from "styled-components";
const Success = () => {
  return (
    <Div>
     <Wrapper>
     <First>our Community is to help stop Sexual Violence</First>
     <First2>Success Stories of Abuse Stopped</First2>
     <Logg>
       <Two>
         <REsult>
           <Title>Sexual Volience</Title>
           <Num>49,8,729</Num>
         </REsult>
         <Space/>
         <REsult>
           <Title>People helped</Title>
           <Num>49,8,729</Num>
         </REsult>
         <Space/>

         <REsult>
           <Title>Female Abused stop</Title>
           <Num>49,8,729</Num>
         </REsult>
         <Space/>

         <REsult>
           <Title>No of communities</Title>
           <Num>49,8,729</Num>
         </REsult>
       </Two>
     </Logg>
     </Wrapper>
    </Div>
  );
};

export default Success;
const Div = styled.div`
  height: 200px;
  background-color: #E9538D;
  color: white;
  width: 100%;
  @media (min-width: 300px) and (max-width: 768px) {
    height: 450px;
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;
const Wrapper = styled.div`
 @media (min-width: 300px) and (max-width: 768px) {
  height: 450px;
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align:center;
margin-top: 10px;

  }
`

const First = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  color: white;
  @media (min-width: 300px) and (max-width: 768px) {
    display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  }

`;
const First2 = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  font-size: 34px;
  color: white;
  @media (min-width: 300px) and (max-width: 768px) {
    font-size: 20px;
    font-weight: bold;
  }
`;
const Logg = styled.div`
  height: 120px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (min-width: 300px) and (max-width: 768px) {
    height: 120px;

display: flex;
flex-direction: column;
justify-content: center;
  }
`;

const Two = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px;
  height: 120px;
  @media (min-width: 300px) and (max-width: 768px) {
    margin-top: 10px;
      height: 120px;


  }
`;
const REsult = styled.div`
  margin: 20px;
`;
const Title = styled.div`
  font-size: 17px;
  font-weight: 400;
`;
const Num = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Space = styled.div`
height: 70px;
width: 1px;
background-color: white;
@media (min-width: 300px) and (max-width: 768px) {
  display: none;
}
`