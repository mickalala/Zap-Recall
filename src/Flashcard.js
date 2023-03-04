
import turnImg from "./assets/seta_virar.png"
import styled from "styled-components"

export default function Flashcard({quest, index, showQuestion, showAnswer, turnToFlashCard, turnToAnswer, cardanswer, wrongAnswer, almostAnswer, rightAnswer, answered}){
return(<>
    <Card key={index} show={showQuestion} >
        Pergunta {index + 1}
        <img src={answered} onClick={turnToFlashCard} />
    </Card>
    <Question key={index + 1} show2={showAnswer}>
        <p>{quest.question}</p>
        <img src={turnImg} onClick={turnToAnswer} />
    </Question>
    <Answer key={index + 2} show3={cardanswer}>
        <p>{quest.answer}</p>
        <Buttons>
            <ButRed onClick={wrongAnswer}>Não lembrei</ButRed>
            <ButYellow onClick={almostAnswer}>Quase não lembrei</ButYellow>
            <ButGreen onClick={rightAnswer}>Zap!</ButGreen>
        </Buttons>
    </Answer>
</>)
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
  text-decoration: line-through #FF3030;
  color: #FF3030;


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

