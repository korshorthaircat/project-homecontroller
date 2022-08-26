import React from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  margin-top: 2rem;
  margin-left: 5rem;
  color: black;
  .first_row {
    font-weight: 600;
    font-size: 12px;
    
  }
  .second_row {
    font-size: 13px;
    line-height: 14px;
    margin-bottom: 1rem;
  }
  .third_row {
    font-size: 11px;
    color: #a8a8a8;
  }
  .hollow {
    display: none;
  }
  .last_row {
    font-size: 14px;
  }
`;

const CardWrapper = styled.a`
  width: 300px;
  height: 100%;
  margin: 0 auto;

  video {
    width: 240px;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  width: 50%;
  height: 300px;
  padding: 2rem;
  margin-left: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  

  .place {
    position: absolute;
    bottom: 5%;
    left: 5%;
    font-size: 14px;
    color: black;
    font-weight: 600;
  }
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;




function MiniCard({ id, title, img, condition }) {
  return (
    <CardWrapper href={`/course/${id}`}>
      {/* 개별 Card */}
      {/* img */}
      <p>{id}</p>
      <VideoContainer>
        {/* 95%만족 태그 */}
        
          

          {/* 비디오 */}

          <img
            
            
            src={img}
            style={{
              objectFit: "contain",
            }}
          ></img>

          {/* 위치 */}
          <div className="place">마포구 망원동</div>
        
      </VideoContainer>
      {/* title */}
      <TextContainer>
        <div className="first_row">
          {/* props로 데이터 넘겨서 넣어주기 일단 dummy */}
          원데이
        </div>
        <div className="second_row">{title}</div>
        <div className={condition ? "third_row" : "hollow"}>
          {/* 이쪽은 있을수도있고 없을수도있고 조건 처리 */}
          {condition ? "true면 보임" : "false면 안보임"}
        </div>
        <div className="last_row">30,000원 ~</div>
      </TextContainer>
    </CardWrapper>
  );
}

export default MiniCard;
