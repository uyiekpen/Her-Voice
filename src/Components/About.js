import React from 'react'
import styled from "styled-components"

const About = () => {
  return (
    <Container id="about">
        <Wrapper>
            <Top>
                <Big>ABOUT US</Big>
                <Small>We Speak for so,our voice will be held </Small>
            </Top>
            <Bottom>
                <Upper>
                    <Little>Campaign About the Awareness of Rape</Little>
                    <Large>RAPE AND DOMESTIC VIOLENCE CAMPAIGN</Large>
                </Upper>
                <Lower>
                    <Left src="/assests/black.jpg"/>
                    <Right>
                        <Head>THE FIGHT AGAINST VIOLENCE</Head>
                        <Paragraph>Gender-based violence (GBV) or violence against women and girls (VAWG), is a global pandemic that affects 1 in 3 women in their lifetime.200 million women have experienced female genital mutilation/cutting.This issue is not only devastating for survivors of violence and their families, but also entails significant social and economic costs. 
                        Failure to address this issue also entails a significant cost for the future.  Numerous studies have shown that children growing up with violence are more likely to become survivors themselves or perpetrators of violence in the future.

                        <Paragraph1>
                        One characteristic of gender-based violence is that it knows no social or economic boundaries and affects women and girls of all socio-economic backgrounds: this issue needs to be addressed in both developing and developed countries.Decreasing violence against women and girls requires a community-based, multi-pronged approach, and sustained engagement with multiple stakeholders. The most effective initiatives address underlying risk factors for violence, including social norms regarding gender roles and the acceptability of violence.
                        
                        </Paragraph1>

                        <Paragraph2>WE APPRECIATE YOUR HELP TO US</Paragraph2>
                        </Paragraph>
                        <DonateButton>
                            <Donate>DONATE NOW</Donate>

                        </DonateButton>
                    </Right>
                </Lower>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default About

const Container = styled.div`
    margin-top: 20px;
    width: 100%;
    height: 950px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 300px) and (max-width: 768px) {
    width: 100%;
    height:1150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:70px;
    }
`
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    @media (min-width: 300px) and (max-width: 768px) {
    width: 90%;
    height: 100%;
    }
`
const Top = styled.div`
    width:100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 300px) and (max-width: 768px) {
        width:100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    }
    
`
const Bottom = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("/assests/b.jpg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.7);
    background-blend-mode: darken;
    background-size: cover;


    @media (min-width: 300px) and (max-width: 768px) {
        min-height: 80%;
    }
`
const Big = styled.div`
    font-size: 40px;
    color: #E9538D;
    font-weight: bold;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 20px;
        margin-top: 50px;
    }
`
const Small = styled.div`
    font-weight: bold;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 10px;
        text-align: center;
    }
`
const Upper = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 300px) and (max-width: 768px) {
        width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    }
`
const Lower = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
`
const Little = styled.div`
    color: white;
    

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 12px;
    }
`
const Large = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 600;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 15px;
        text-align: center;
        margin-top: 10px;

    }
`
const Left = styled.img`
    width: 40%;
    height: 80%;    
    object-fit: cover;

    @media (min-width: 300px) and (max-width: 768px) {
        display: none;
    }
`
const Right = styled.div`
    color: white;
    width: 35%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 300px) and (max-width: 768px) {
        width: 90%;
        margin-top: 10px;
    }
`
const Head = styled.div`
    font-size: 25px;
    font-weight: bold;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 15px;
        text-align:center;

    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 15px;
    }
`
const Paragraph = styled.div`
       font-size: 15px;
letter-spacing: 1.5px;
    margin-top: 15px;

    @media (min-width: 300px) and (max-width: 768px) {
        line-height: 16px;
        font-size: 12px
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        line-height: 16px;
        font-size: 15px;
        font-size: 12px
    }
`
const Paragraph1 = styled.div`
    font-size: 15px;
letter-spacing: 1.5px;
    margin-top: 15px;

    @media (min-width: 300px) and (max-width: 768px) {
        line-height: 16px;
        font-size: 12px
    }

    @media (min-width: 1024px) and (max-width: 1440px) {
        line-height: 16px;
        font-size: 15px;
        font-size: 12px
    }
`
const Paragraph2 = styled.div`
    font-size: 15px;
    line-height: 1.5;
letter-spacing: 1.5px;
    margin-top: 15px;

    @media (min-width: 300px) and (max-width: 768px) {
        line-height: 16px;
        font-size: 12px
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        line-height: 16px;
        font-size: 15px;
        font-size: 12px
    }
`

const DonateButton = styled.div`
display: flex;
justify-content: flex-start;
`
const Donate = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 5px;
    background-color: #E9538D;
    color: white;
    font-family: poppins;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 300px) and (max-width: 768px) {
        margin-left: 30px;
        margin-top: 20px;
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-left: 30px;
        margin-top: 20px;
    }
`