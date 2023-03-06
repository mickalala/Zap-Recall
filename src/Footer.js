import styled from "styled-components"

import error from "./assets/icone_erro.png"
import almost from "./assets/icone_quase.png"
import right from "./assets/icone_certo.png"

import cry from "./assets/sad.png"
import party from "./assets/party.png"

import cards from './Mock';



export default function Footer({ meter, icons }) {
  let end = ""
  if (meter === cards.length) end = "theEnd"

  return (
    <FooterStyle data-test="footer" end={end}>
      <EndGame end={end} data-test="finish-text">

        {(icons.includes("red")) ?
          (<span data-test="finish-text"><Presult data-test="finish-text"><img src={ cry} />Putz...</Presult>
            <Ptext data-test="finish-text">Ainda faltam alguns...
              Mas não desanime!</Ptext></span>) :
          (<span data-test="finish-text"><Presult data-test="finish-text"><img src={party } />Parabéns!</Presult>
            <Ptext data-test="finish-text">Você não esqueceu de nenhum flashcard!</Ptext></span>)
        }

      </EndGame>

      <p >{meter}/{cards.length} CONCLUÍDOS</p>
      <FooterIcons>

        {icons.map((i) => {
          return (
            <>
              {(i === "red") ? <img src={error} data-test="no-icon" /> : ""}
              {(i === "orange") ? <img src={almost} data-test="partial-icon" /> : ""}
              {(i === "green") ? <img src={right} data-test="zap-icon" /> : ""}
            </>
          )
        }
        )
        }
      </FooterIcons>
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
  background: #FFFFFF;
  height: ${(props) => (props.end === "theEnd") ? "171px" : "70px"};
  width: 100%;
  position:fixed;
  bottom:0px;
  left:0px;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;

p{
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
 
  color: #333333;
  text-align:center;
  justify-self:center;
}
`
const FooterIcons = styled.div`
display: flex;
justify-content:center;
margin-top:6px;
flex-direction:row-gap;
img{
  width:23px;
  height:23px;
  margin-right:5px;
}
`

const EndGame = styled.div`

display:${(props)=> (props.end==="theEnd")?"":"none"};
img{
  margin-right:12px;
}
`
const Presult= styled.p`
font-family: Recursive;
font-size: 18px;
font-weight: 700;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: #333333;

`
const Ptext= styled.div`
width: 222px;
height: 44px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #333333;
margin-top:15px;
margin-bottom:11px;

`