import styled from "styled-components"

export const Header = styled.header`
    width: 100vw;
    height: 20vh;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 2px solid #fff;
    
    @media (max-width: 376px) {
        height: 15vh;
    }
`

export const LogoOnu = styled.img`
    width: 20%;

    &:hover {
        cursor: pointer;
    }
`

export const Hr = styled.hr`
    height: 12vh;
    
    position: absolute;
    left: 32%;

    @media (max-width: 426px) {
        height: 8vh;
        
        left: 35%;
    }
`

export const ThemeIcon = styled.img`
    width: 2.5%;

    position: absolute;
    left: 3%;
    
    &:hover {
        cursor: pointer;
    }
    
    @media (max-width: 1025px) {
        width: 3.5%;
        
    }

    @media (max-width: 426px) {
        width: 4%;
        
    }

    @media (max-width: 320px) {
        width: 4.5%;
        
    }
`

export const ThemeToggle = styled.img`
    width: 2.5%;

    position: absolute;
    left: 7%;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 1025px) {
        width: 3.5%;
    }

    @media (max-width: 426px) {
        width: 4%;
    }

    @media (max-width: 320px) {
        width: 4.5%;
    }
`
