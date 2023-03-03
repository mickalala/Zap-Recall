import styled from "styled-components"
import logo from "./assets/logo.png"

export default function MainTitle() {
  return (
    <Title>
      <img src={logo} />
      <h1> Zaprecall</h1>
    </Title>
  )
}

const Title = styled.div`
display:flex;
justify-content:center;

img{
  width:52px;
  height: 60px;
  margin-top:43px;
}
h1{
  font-family:Righteous;
  font-Weight: 400;
  font-Size: 36px;
  color:#FFFFFF;
  margin-top:48px;
  margin-left:13px;
}
`