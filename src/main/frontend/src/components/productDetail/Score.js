import React, { useState } from 'react';
import styled from 'styled-components';

const Score = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  
  const goToFetch = e => {
    setClicked(e.target.id);
    fetch(`http://10.58.3.24:8000/products/1`, {
      //사용할 http 메소드 
      method: 'POST',
      //토큰
      headers: {
        Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.loTjeBWZ9SeXV-BcIxqOtX37AN30ROvsZl0_udeeRJU',
      },
      //서버에 보낼 데이터 (별점)
      body: JSON.stringify({
        rating: e.target.id,
      }),
    });
  };

  return (
    <ReviewBox>
      <ReviewTextBox>
        <p>이 책을 평가해주세요!</p>
        {[1, 2, 3, 4, 5].map(num => (
          <HiddenText key={num} show={hovered === num}>
            {textList[num - 1]}
          </HiddenText>
        ))}
      </ReviewTextBox>
      <StarContainer>
        {[1, 2, 3, 4, 5].map(el => (
          <i
            className={`fas fa-star ${
              (clicked >= el) | (hovered >= el) && 'yellowStar'
            }`}
            key={el}
            onMouseEnter={() => setHovered(el)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setClicked(el)}
          />
        ))}
      </StarContainer>
    </ReviewBox>
  );
};
