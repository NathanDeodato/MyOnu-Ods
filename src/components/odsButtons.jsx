import React from "react"

import {
    OdsBox,
    OdsButtonBox,
    OdsButtonBoxOne,
    OdsButtonBoxTwo,
    OdsButtonOne,
    OdsButtonTwo,
    OdsButtonThree,
    OdsButtonFour,
    OdsButtonFive,
    OdsButtonSix
} from "../styles/odsButtons"

export default function OdsButtons() {
    return(
        <OdsBox>
            <OdsButtonBox>
                <OdsButtonBoxOne>
                    <OdsButtonOne></OdsButtonOne>
                    <OdsButtonTwo></OdsButtonTwo>
                    <OdsButtonThree></OdsButtonThree>
                </OdsButtonBoxOne>
                <OdsButtonBoxTwo>
                    <OdsButtonFour></OdsButtonFour>
                    <OdsButtonFive></OdsButtonFive>
                    <OdsButtonSix></OdsButtonSix>
                </OdsButtonBoxTwo>
            </OdsButtonBox>
        </OdsBox>
    )
}
