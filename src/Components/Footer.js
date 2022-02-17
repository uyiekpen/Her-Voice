import React from 'react'
import styled from 'styled-components'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <Container>
    <Wrapper>
    <WebsiteRights>UO © {new Date().getFullYear()}All rights reserved</WebsiteRights>
    <SocialIcons>
                            <SocialIconLink href="https://web.facebook.com/osazieelizabeth.uyiekpen" target="_blank" aria-label="facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/uyi_osa_/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/uyiekpen-osazie-8b72a4210/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
    </Wrapper>
    </Container>
  )
}

export default Footer

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    @media (min-width: 300px) and (max-width: 768px) {
      display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
}
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
    @media (min-width: 300px) and (max-width: 768px) {
      color: #fff;
    font-size: 15px;
}
`


const WebsiteRights = styled.div`
@media (min-width: 300px) and (max-width: 768px) {
  color: #fff;
    font-size: 12px;
}
`

const Wrapper = styled.div`
height: 70px;
width: 90%;
display: flex;
justify-content: center;
justify-content: space-between;
align-items: center;
@media (min-width: 300px) and (max-width: 768px) {
}

`

const Container = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #000000;
color: #fff;
@media (min-width: 300px) and (max-width: 768px) {
}
`