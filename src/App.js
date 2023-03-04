import styled from 'styled-components';
import GlobalStyle from './Globalstyle';
import MainTitle from './Maintitle';
// import deck from './Mock'
import play from './assets/seta_play.png'
import { useState } from 'react';

import Footer from './Footer';
import Deck from './Deck';


import error from "./assets/icone_erro.png"
import almost from "./assets/icone_quase.png"
import right from "./assets/icone_certo.png"

export default function App() {
  const [showQuestion, setShowQuestion] = useState(false)
  const [showAnswer, setShowAnswer] = useState(true)
  const [cardanswer, setAnswer] = useState(true) 

  const [answered, setAnswered]= useState(play)
  const [turned, setTurned]= useState(false)
  const [meter, setMeter]= useState(0)


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
  }

  function almostAnswer(){
    console.log("quase lá miagatah")
    setShowQuestion(false)
    setAnswer(true)
    setAnswered(almost)
    setTurned(true)
    let contador= meter+1;
    setMeter(contador)
  }

  function rightAnswer(){
    console.log("acertaste miagatah")
    setShowQuestion(false)
    setAnswer(true)
    setAnswered(right)
    setTurned(true)
    let contador= meter+1;
    setMeter(contador)
  }

  return (
    <>
      <GlobalStyle />
      <MainTitle />
   

      <Deck showQuestion={showQuestion} showAnswer={showAnswer} turnToFlashCard={turnToFlashCard}
      turnToAnswer={turnToAnswer} cardanswer={cardanswer} wrongAnswer={wrongAnswer}
       almostAnswer={almostAnswer}
      rightAnswer={rightAnswer} answered={answered}
      />

<Footer meter={meter}/>

    </>
  );
}
