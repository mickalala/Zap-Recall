import styled from 'styled-components';
import GlobalStyle from './Globalstyle';
import MainTitle from './Maintitle';
import deck from './deck'
import play from './assets/seta_play.png'

export default function App() {

function turnToFlashCard(quest,index){
 console.log("funcionaafunçao de numero:" ,index) 
 console.log(quest.question)
 console.log(quest.answer)
}

  return (
    <>
      <GlobalStyle />
      <MainTitle />
      <Deck>
        {deck.map((quest, index) => (
          <div className='front-side' key={index}>
            Pergunta {index+1} 
            <img src={play} onClick={()=>turnToFlashCard(quest,index)}/>
          </div>
        )
        )}
      </Deck>

     <Footer>
       <p>0/4 CONCLUÍDOS</p>
     </Footer>

    </>
  );
}

const Deck = styled.ul`
display:flex;
flex-direction:column;
align-items:center;

div{
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
  
}
`

const Footer= styled.footer`
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
