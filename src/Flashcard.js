import { useState } from "react"
import turnImg from "./assets/seta_virar.png"
import styled from "styled-components"

import play from './assets/seta_play.png'
import error from "./assets/icone_erro.png"
import almost from "./assets/icone_quase.png"
import right from "./assets/icone_certo.png"


export default function Flashcard({quest, index, meter, setMeter}){


    const [showQuestion, setShowQuestion] = useState(false)
    const [showAnswer, setShowAnswer] = useState(true)
    const [cardanswer, setAnswer] = useState(true) 
  
    const [answered, setAnswered]= useState(play)
    const [turned, setTurned]= useState(false)

    const [answerColor, setAnswerColor]= useState("")
    const [dataTest, setDataTest]= useState("play-btn")
  
    function turnToFlashCard() {
      if(turned) return;
      setShowQuestion(true)
      setShowAnswer(false)
      
    }
  
    function turnToAnswer() {
      setShowAnswer(true)
      setAnswer(false)
    }
  
    function wrongAnswer(){
      console.log("errou miagatah")
      setShowQuestion(false)
      setAnswer(true)
      setAnswered(error)
      setTurned(true)
      let contador= meter+1;
      setMeter(contador)
      setAnswerColor("#FF3030")
      setDataTest("no-btn")
    }
  
    function almostAnswer(){
      console.log("quase lá miagatah")
      setShowQuestion(false)
      setAnswer(true)
      setAnswered(almost)
      setTurned(true)
      let contador= meter+1;
      setMeter(contador)
      setAnswerColor("#FF922E")
      setDataTest("partial-btn")
    }
  
    function rightAnswer(){
      console.log("acertaste miagatah")
      setShowQuestion(false)
      setAnswer(true)
      setAnswered(right)
      setTurned(true)
      let contador= meter+1;
      setMeter(contador)
      setAnswerColor("#2FBE34")
      setDataTest("zap-btn")
    }
    

return(
<div data-test="flashcard">
    <Card key={index} show={showQuestion} answerColor={answerColor} turned={turned} >
        <p data-test="flashcard-text">Pergunta {index + 1}</p>
       <button data-test={dataTest}> <img src={answered} onClick={turnToFlashCard}  /></button>
    </Card >
    <Question key={index + 1} show2={showAnswer}>
        <p data-test="flashcard-text">{quest.question}</p>
        <button onClick={turnToAnswer} data-test="turn-btn"><img src={turnImg}  /></button>
    </Question>
    <Answer key={index + 2} show3={cardanswer}>
        <p data-test="flashcard-text">{quest.answer}</p>
        <Buttons>
            <ButRed onClick={wrongAnswer} data-test="no-btn">Não lembrei</ButRed>
            <ButYellow onClick={almostAnswer} data-test="partial-btn">Quase não lembrei</ButYellow>
            <ButGreen onClick={rightAnswer} data-test="zap-btn">Zap!</ButGreen>
        </Buttons>
    </Answer>
</div >
 )
}

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
  text-decoration: ${(props)=> (props.turned)?"line-through":""} ;
  color: ${(props)=> (props.answerColor)};


`

const Question = styled.div`
margin-top:25px;
height: 131px;
width: 299px;
border-radius: 5px;
background-color:#FFFFD4;
display:${(props)=> !(props.show2)?"":"none"};

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

display:${(props)=> (props.show3)? "none":""};

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

