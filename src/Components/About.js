import React from 'react'
import styled from "styled-components"

const About = () => {
  return (
    <Container>
        <Wrapper>
            <Top>
                <Big>ABOUT US</Big>
                <Small>Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.</Small>
            </Top>
            <Bottom>
                <Upper>
                    <Little>Campaign About the Awareness of Drug Abuse</Little>
                    <Large>DRUG ABUSE & SEXUAL VIOLENCE CAMPAIGN</Large>
                </Upper>
                <Lower>
                    <Left src="/assests/black.jpg"/>
                    <Right>
                        <Head>THE FIGHT AGAINST VIOLENCE</Head>
                        <Paragraph>Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        <Paragraph1>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
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
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 300px) and (max-width: 768px) {
    width: 100%;
    height:600px;
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
        font-size: 10px;
    }
`
const Large = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 600;

    @media (min-width: 300px) and (max-width: 768px) {
        font-size: 15px;
        text-align: center;
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

    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 15px;
    }
`
const Paragraph = styled.div`
    font-size: 15px;
    line-height: 30px;
    margin-top: 15px;

    @media (min-width: 300px) and (max-width: 768px) {
        line-height: 11px;
        font-size: 12px
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        line-height: 16px;
        font-size: 15px;
        margin-top: 10px;
    }
`
const Paragraph1 = styled.div`
    font-size: 15px;
    line-height: 30px;
    margin-top: 15px;

    @media (min-width: 300px) and (max-width: 768px) {
        line-height: 11px;
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
    line-height: 30px;
    margin-top: 15px;

    @media (min-width: 300px) and (max-width: 768px) {
        line-height: 11px;
        font-size: 12px
    }
    @media (min-width: 1024px) and (max-width: 1440px) {
        line-height: 16px;
        font-size: 15px;
        font-size: 12px
    }
`

const DonateButton = styled.div`
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