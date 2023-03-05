
import GlobalStyle from './Globalstyle';
import MainTitle from './Maintitle';

import Deck from './Deck';
import { useState } from 'react';

import Footer from './Footer';



export default function App() {

  const [meter, setMeter] = useState(0)
  
 


  return (
    <>
      <GlobalStyle />
      <MainTitle />


      <Deck meter={meter} setMeter={setMeter} />

      <Footer meter={meter} />

    </>
  );
}
