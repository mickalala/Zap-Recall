import deck from './Mock'
import Flashcard from './Flashcard'

import styled from "styled-components"




export default function Deck({showQuestion, showAnswer, turnToFlashCard, turnToAnswer, cardanswer, wrongAnswer, almostAnswer, rightAnswer, answered}) {
    return (
        <DeckStyle >
            {deck.map((quest, index) => (
                
                <Flashcard  quest={quest} index={index} showQuestion={showQuestion}
                 showAnswer={showAnswer}
                turnToFlashCard={turnToFlashCard}
                turnToAnswer={turnToAnswer} cardanswer={cardanswer} 
                wrongAnswer={wrongAnswer} almostAnswer={almostAnswer}
                rightAnswer={rightAnswer} answered={answered}/>
             
            )
            )}
        </DeckStyle>
    )

}

const DeckStyle = styled.ul`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:78px;
`
