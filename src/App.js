import styled from 'styled-components';
import GlobalStyle from './Globalstyle';
import MainTitle from './Maintitle';
import deck from './Mock'
import play from './assets/seta_play.png'
import { useState } from 'react';
import turnImg from "./assets/seta_virar.png"

export default function App() {
  const [showQuestion, setShowQuestion] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  function turnToFlashCard() {
    setShowQuestion(true)
  }

  function turnToAnswer() {
    setShowAnswer(true)
  }



  return (
    <>
      <GlobalStyle />
      <MainTitle />
      <DeckStyle >
        {deck.map((quest, index) => (
          <>
            <Card key={index} show={showQuestion}>
              Pergunta {index + 1}
              <img src={play} onClick={() => turnToFlashCard(quest, index)} />
            </Card>
            <Question key={index + 1}>
              <p>{quest.question}</p>
              <img src={turnImg} />
            </Question>
            <Answer key={index + 2}>
              <p>{quest.answer}</p>
              <Buttons>
                <ButRed>Não lembrei</ButRed>
                <ButYellow>Quase não lembrei</ButYellow>
                <ButGreen>Zap!</ButGreen>
              </Buttons>
            </Answer>
          </>
        )
        )}
      </DeckStyle>

      <Footer>
        <p>0/4 CONCLUÍDOS</p>
      </Footer>

    </>
  );
}

const DeckStyle = styled.ul`
display:flex;
flex-direction:column;
align-items:center;

`

const Card = styled.div`
  height: 65px;
  width: 300px;
  border-radius: 5px;
  margin-top: 25px;
  background: #FFFFFF;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding:15px;

  font-family: Recursive;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  display:${(props) => (props.show) ? "none" : ""};
`


const Footer = styled.footer`
  background: #FFFFFF;
  height: 70px;
  width: 100%;
  position:fixed;
  bottom:0px;
  left:0px;

p{
  font-family: Recursive;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
  text-align:center;
  margin-top:25px;
}
`
const Question = styled.div`
margin-top:25px;
height: 131px;
width: 299px;
border-radius: 5px;
background-color:#FFFFD4;

font-family: Recursive;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color:#333333;
position: relative;
p{
margin-top:18px;
margin-left:15px;
}
img{
position:absolute;
top:105px;
left: 254px;
}
`

const Answer = styled.div`
margin-top:25px;
height: 131px;
width: 299px;
border-radius: 5px;
background-color:#FFFFD4;

font-family: Recursive;
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color:#333333;
position: relative;

p {margin-top:18px;
margin-left:15px;
}
`

const Buttons = styled.div`
display: flex;
justify-content: space-evenly;
width:300px;
border-color:transparent;
position:absolute;
bottom:10px;
button{
  height: 37px;
  width: 85px;
  border-radius: 5px; 
  font-family: Recursive;
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: center;
  border:transparent;
  color: #FFFFFF;

  
}

`
const ButRed= styled.button`
 background-color: #FF3030;
`

const ButYellow= styled.button`
 background-color:  #FF922E;

`

const ButGreen= styled.button`
 background-color:  #2FBE34;
`



