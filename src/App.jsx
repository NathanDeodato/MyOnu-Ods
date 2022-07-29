import React, { useState } from "react"

import "./App.css"

import cHeader from "./components/header"

import cFooter from "./components/footer"

/*import OdsOne from "./components/ods"
import OdsTwo from "./components/ods"
import OdsThree from "./components/ods"
import OdsFour from "./components/ods"
import OdsFive from "./components/ods"
import OdsSix from "./components/ods"*/

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
  OdsButtonSix,
  OdsImg
} from "./styles/odsButtons"

export default function MyOnuOds() {
  const [ odsView, setOdsView ] = useState(true)

  function OdsButtons(){
    return(
        <OdsBox>
            <OdsButtonBox>
                <OdsButtonBoxOne>
                    <OdsButtonOne
                    onClick={setOdsView(1)}
                    >
                      <OdsImg src="{}"/>
                    </OdsButtonOne>
                    <OdsButtonTwo
                    onClick={setOdsView(2)}
                    >
                      <OdsImg src="{}"/>
                    </OdsButtonTwo>
                    <OdsButtonThree
                    onClick={setOdsView(3)}
                    >
                      <OdsImg src="{}"/>
                    </OdsButtonThree>
                </OdsButtonBoxOne>
                <OdsButtonBoxTwo>
                    <OdsButtonFour
                    onClick={setOdsView(4)}
                    >
                      <OdsImg src="{}"/>
                    </OdsButtonFour>
                    <OdsButtonFive
                    onClick={setOdsView(5)}
                    >
                      <OdsImg src="{}"/>
                    </OdsButtonFive>
                    <OdsButtonSix
                    onClick={setOdsView(6)}
                    >
                      <OdsImg src="{}"/>
                    </OdsButtonSix>
                </OdsButtonBoxTwo>
            </OdsButtonBox>
        </OdsBox>
    )
  } 

  const [ odsSelect, setOdsSelect ] = useState(OdsButtons)

  return(
    <div className="divGlobal">
      {cHeader()}
      {<OdsButtons/>}
      {cFooter()}
    </div>
  )
}
