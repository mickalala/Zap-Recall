import deck from './Mock'
import Flashcard from './Flashcard'

import styled from "styled-components"




export default function Deck({meter, setMeter, icons, setIcons}) {
    return (
        <DeckStyle >
            {deck.map((quest, index) => (
                
                <Flashcard  quest={quest} index={index} meter={meter} setMeter={setMeter} 
                key={index+4} icons={icons} setIcons={setIcons}/>
             
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
