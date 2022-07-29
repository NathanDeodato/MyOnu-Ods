import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;
    height: 50vh;
    
    margin-top: 6%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1025px) {
        height: 45vh;
    }

    @media (max-width: 426px) {
        height: 35vh;
    }

    @media (max-width: 376px) {
        height: 30vh;
    }
`

export const Hr = styled.hr`
    width: 80%;
    height: 0.5vh;

    margin-top: 5vh;

    background-color: #fff;
    border-radius: 10px;
`

export const SociaMediaBox = styled.div`
    width: 28%;

    position: relative;
    top: -10%;
    left: 27%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Copy = styled.p`
    position: relative;

    top: 6vh;
    left: -30.5%;

    color: #fff;
    font-size: 0.9em;
    font-weight: bold;

    @media (max-width: 1025px) {
        top: 5vh;
        left: -27%;
    }

    @media (max-width: 769px) {
        left: -26.5%;

        font-size: 0.7em;
    }

    @media (max-width: 426px) {
        top: 2.5vh;
        left: -26%;

        font-size: 0.4em;
    }

    @media (max-width: 376px) {
        top: 2vh;
        left: -24%;
    }

    @media (max-width: 321px) {
        top: 2vh;
        left: -22%;
    }
`

export const Nathan = styled.img`
    width: 30%;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 376px) {
        width: 35%;
    }
`

export const ImgSocialMedia = styled.img`
    width: 8%;

    &:hover{
        cursor: pointer;
    }

    @media (max-width: 426px) {
        width: 12%;
    }

    @media (max-width: 376px) {
        width: 15%;
    }
`

export const OnuBox = styled.div`

`

export const Onu = styled.img`
    width: 25vw;
    
    &:hover{
        cursor: pointer;
    }

    @media (max-width: 426px) {
        width: 40vw; 
    }
`
