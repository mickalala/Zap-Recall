import logo from "./assets/logo.png"
import styled from "styled-components"

export default function InitialPage({ setPageCard}) {

    function showPageCard() {
        setPageCard(false)
    }

    return (
        <Init >
            <img src={logo} />
            <h1>Zaprecall</h1>
            <button onClick={showPageCard} data-test="start-btn">Iniciar Recall!</button>
        </Init>
    )
}

const Init = styled.div`
display:flex;
flex-direction:column;
align-items:center;

margin-top:148px;


img{
    height: 161px;
    width: 136px;
   
}
h1{
    font-family: Righteous;
    font-size: 36px;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;
    color: #FFFFFF; 
    margin-top:14px;
}

button{
    margin-top: 30px;

    height: 54px;
    width: 246px;
    border-radius: 5px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #D70900;    
}

`
