import styled from 'styled-components'

export const LandingWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,212,255,1) 100%);
  display: flex;
  justify-content: center;

  & > div{
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    width: 60vw;
    background-color: #ffffff;
    justify-content: center;
    padding: 200px 0px;
    align-items: center;
  }
`

export const LandingDescription = styled.div`
  display: flex;
  height: 425px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #000000; 
  font-weight: 1000;
  font-size: 40px;

  & .description {
    text-align: center;
    line-height: 60px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  border: none;
  height: 90px;
  width: 220px;
  font-size: 27.5px;
  font-weight: 1000;
  background: #5e18af;
  color: #ffffff;

  &:focus {
    outline: none;
  }
`