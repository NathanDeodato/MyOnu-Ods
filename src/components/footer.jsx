import React from "react"

import { 
    Footer,
    Hr,
    Copy,
    SociaMediaBox,
    Nathan,
    ImgSocialMedia,
    OnuBox,
    Onu
 } from "../styles/footer"

import {
    Insta,
    GitHub,
    NathanDeodato,
    OnuLogo
} from "../assets/assets"

export default function cFooter() {
    return(
        <Footer>
            <Hr/>
            <Copy>
                © Copyright 2022 NathanDeodato.Dev
            </Copy>
            <SociaMediaBox>
                <ImgSocialMedia 
                src={Insta}
                />
                <ImgSocialMedia
                src={GitHub}
                />
                <Nathan
                src={NathanDeodato}
                />
            </SociaMediaBox>
            <OnuBox>
                <Onu
                src={OnuLogo}
                />
            </OnuBox>
        </Footer>
    )
}
