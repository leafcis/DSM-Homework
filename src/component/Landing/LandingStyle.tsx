import styled from 'styled-components'

export const LandingWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,212,255,1) 100%);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 100px 0px;
`

export const LandingDescription = styled.div`
  display: flex;
  height: 700px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff; 
  font-weight: 1000;
  font-size: 50px;

  & .description {
    text-align: center;
    line-height: 100px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  height: 100px;
  width: 270px;
  font-size: 50px;
  border-radius: 100px;
  font-weight: 1000;

  &:focus {
    outline: none;
  }
`