import React from 'react';
import * as S from './LandingStyle';

interface LandingProps {
  
}

 const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <S.LandingWrapper>
      <S.LandingDescription>
        <div className="description">
          <div>문제를 손쉽게 만들어 보세요</div>
          <div>문제를 공유하고 같이 풀어보세요</div>
          <div>손쉽게 채점해 보세요</div>
        </div>
        <S.Button>
          시작하기
        </S.Button>
      </S.LandingDescription>
    </S.LandingWrapper>
  )
 }

 export default Landing