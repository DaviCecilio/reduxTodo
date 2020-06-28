import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
  background-color: #525252;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: sans-serif;
}

.App{
  margin: 30px 0;
  display:flex;
  flex-direction:column;
  align-items: center;
}

.font-white {
  color: #D9D8D9;
}

.fontWhite{
  fill: #fff
}
.fontDanger{
  fill: #e0dbdb;
  &:hover{
    fill: rgb(196, 49, 75)
  }

}
.fontSuccess{
  fill: #e0dbdb;
  &:hover{
  fill: #2c974b
  }
}
.fontWait{
  fill: #e0dbdb;
  &:hover{
  fill: #F0E14A
  }
}
`
