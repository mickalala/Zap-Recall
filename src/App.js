
import GlobalStyle from './Globalstyle';
import MainTitle from './Maintitle';
import styled from 'styled-components';

import Deck from './Deck';
import { useState } from 'react';

import Footer from './Footer';



export default function App() {

  const [meter, setMeter] = useState(0)




  return (
    <>
      <GlobalStyle />
      <ContainerPageCard>
        <MainTitle />
        <Deck meter={meter} setMeter={setMeter} />
        <Footer meter={meter} />
      </ContainerPageCard>
    </>
  );
}


const ContainerPageCard = styled.div`
`
