
import GlobalStyle from './Globalstyle';
import MainTitle from './Maintitle';
import styled from 'styled-components';

import Deck from './Deck';
import { useState } from 'react';

import Footer from './Footer';
import InitialPage from './InitialPage';



export default function App() {

  const [meter, setMeter] = useState(0)
  const [pageCard, setPageCard] = useState(true)
  const [icons, setIcons]= useState([])


  return (
    <>
      <GlobalStyle />
      <ContainerInitial pageCard={pageCard}>
        <InitialPage setPageCard={setPageCard} pageCard={pageCard} />
      </ContainerInitial>
      <ContainerPageCard pageCard={pageCard}>
        <MainTitle />
        <Deck meter={meter} setMeter={setMeter} icons={icons} setIcons={setIcons} />
        <Footer meter={meter} icons={icons} setIcons={setIcons}/>
      </ContainerPageCard>
    </>
  );
}


const ContainerPageCard = styled.div`
display: ${(props) => (props.pageCard) ? "none" : ""}
`
const ContainerInitial = styled.div`
display: ${(props) => (props.pageCard) ? "" : "none"}
`