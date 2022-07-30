import React from "react"

import "./App.css"

import cHeader from "./components/header"

import cFooter from "./components/footer"

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

import {
  OdsDiv,
  OdsBannerOne,
  OdsBannerTwo,
  OdsBannerThree,
  OdsBannerFour,
  OdsBannerFive,
  OdsBannerSix,
  OdsTitle,
  OdsTexts,
  OdsSubTitle,
  OdsText,
  OdsImgBanner
} from "./styles/ods"

import {
  Social,
  Educacao,
  Seguranca,
  Saude,
  Cidade,
  Economia
} from "./assets/assets"

export default function MyOnuOds() {
  
  function OdsButtons(){
    return(
        <OdsBox>
            <OdsButtonBox>
                <OdsButtonBoxOne>
                    <OdsButtonOne>
                      <OdsImg src={Social}/>
                    </OdsButtonOne>
                    <OdsButtonTwo>
                      <OdsImg src={Educacao}/>
                    </OdsButtonTwo>
                    <OdsButtonThree>
                      <OdsImg src={Seguranca}/>
                    </OdsButtonThree>
                </OdsButtonBoxOne>
                <OdsButtonBoxTwo>
                    <OdsButtonFour>
                      <OdsImg src={Saude}/>
                    </OdsButtonFour>
                    <OdsButtonFive>
                      <OdsImg src={Cidade}/>
                    </OdsButtonFive>
                    <OdsButtonSix>
                      <OdsImg src={Economia}/>
                    </OdsButtonSix>
                </OdsButtonBoxTwo>
            </OdsButtonBox>
        </OdsBox>
    )
  } 

  function odsOne() {
    return(
      <OdsDiv>
          <OdsBannerOne>
            <OdsTitle>
              1. Inclusão Social
            </OdsTitle>
            <OdsImgBanner src={Social}/>
          </OdsBannerOne>
          <OdsTexts>
            <OdsSubTitle>
              1.1
            </OdsSubTitle>
            <OdsText>

            </OdsText>
            
            <OdsSubTitle>
              1.2
            </OdsSubTitle>
            <OdsText>

            </OdsText>
            
            <OdsSubTitle>
              1.3
            </OdsSubTitle>
            <OdsText>

            </OdsText>
            
            <OdsSubTitle>
              1.4
            </OdsSubTitle>
            <OdsText>
              
            </OdsText>
          </OdsTexts>
      </OdsDiv>
    )
}

  const odsTwo = () => {
    return(
      <OdsDiv>
        <OdsBannerTwo>
          <OdsTitle>
            2. Educação de qualidade
          </OdsTitle>
          <OdsImgBanner src={Educacao}/>
        </OdsBannerTwo>
        <OdsTexts>
          <OdsSubTitle>
            1.1
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            1.2
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            1.3
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            1.4
          </OdsSubTitle>
          <OdsText>
            
          </OdsText>
        </OdsTexts>
      </OdsDiv>
    )
  }

  const odsThree = () => {
    return(
      <OdsDiv>
        <OdsBannerThree>
          <OdsTitle>
            3. Segurança
          </OdsTitle>
          <OdsImgBanner src={Seguranca}/>
        </OdsBannerThree>
        <OdsTexts>
          <OdsSubTitle>
            3.1
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            3.2
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            3.3
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            3.4
          </OdsSubTitle>
          <OdsText>
            
          </OdsText>
        </OdsTexts>
      </OdsDiv>
    )
  }

  const odsFour = () => {
    return(
      <OdsDiv>
        <OdsBannerFour>
          <OdsTitle>
            4. Saúde e Bem-Estar
          </OdsTitle>
          <OdsImgBanner src={Saude}/>
        </OdsBannerFour>
        <OdsTexts>
          <OdsSubTitle>
            4.1
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            4.2
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            4.3
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            4.4
          </OdsSubTitle>
          <OdsText>
            
          </OdsText>
        </OdsTexts>
      </OdsDiv>
    )
  }

  const odsFive = () => {
    return(
      <OdsDiv>
        <OdsBannerFive>
          <OdsTitle>
            5. Revitalização Urbana
          </OdsTitle>
          <OdsImgBanner src={Cidade}/>
        </OdsBannerFive>
        <OdsTexts>
          <OdsSubTitle>
            5.1
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            5.2
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            5.3
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            5.4
          </OdsSubTitle>
          <OdsText>
            
          </OdsText>
        </OdsTexts>
      </OdsDiv>
    )
  }

  const odsSix = () => {
    return(
      <OdsDiv>
        <OdsBannerSix>
          <OdsTitle>
            6. Incentivo ao comercio 
          </OdsTitle>
          <OdsImgBanner src={Economia}/>
        </OdsBannerSix>
        <OdsTexts>
          <OdsSubTitle>
            6.1
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            6.2
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            6.3
          </OdsSubTitle>
          <OdsText>

          </OdsText>
          
          <OdsSubTitle>
            6.4
          </OdsSubTitle>
          <OdsText>
            
          </OdsText>
        </OdsTexts>
      </OdsDiv>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return(
    <div className="divGlobal">
      {cHeader()}
  
      {OdsButtons()}

      {odsOne()}
      {odsTwo()}
      {odsThree()}
      {odsFour()}
      {odsFive()}
      {odsSix()}

      {cFooter()}
    </div>
  )
}
