import React from "react"

import { 
    OnuLogo,
    ThemeMode,
    ToggleOn
} from "../assets/assets"

import { 
    Header,
    LogoOnu,
    ThemeIcon,
    ThemeToggle,
 } from "../styles/header"

export default function cHeader() {
    return(
        <Header>
            <ThemeIcon
            src={ThemeMode}
            />
            <ThemeToggle
            src={ToggleOn}
            />
            <LogoOnu 
            src={OnuLogo}
            />
        </Header>
    )
}
