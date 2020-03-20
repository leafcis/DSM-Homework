import styled from 'styled-components'

import Landing from '../../assets/background/Landing.jpeg';

/*
background: rgb(178,255,180);
  background: linear-gradient(180deg, rgba(178,255,180,1) 0%, rgba(255,175,0,1) 0%, rgba(255,179,0,1) 100%);
*/

export const LandingWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LandingBackground = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-image: url(${Landing});
  background-size: cover;
  background-attachment: fixed;
  filter: blur(5px);
  position: absolute;
  transform: scale(1.1);
  z-index: -1;
`

export const LandingDescription = styled.div`
  display: flex;
  height: 350px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #e9ecef; 
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
  width: 230px;
  font-size: 27.5px;
  font-weight: 1000;
  background: #a09890;
  color: #ffffff;
  font-family: 'SeoulHangang', sans-serif;

  &:focus {
    outline: none;
  }
`