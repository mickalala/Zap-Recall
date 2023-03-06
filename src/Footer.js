import styled from "styled-components"

import cards from './Mock';

export default function Footer({ meter }) {
    return (
        <FooterStyle data-test="footer">
            <p >{meter}/{cards.length} CONCLUÍDOS</p>
        </FooterStyle>
        )
}

const FooterStyle = styled.footer`
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