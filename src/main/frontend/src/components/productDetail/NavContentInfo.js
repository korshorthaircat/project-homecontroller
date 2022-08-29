import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../../css/ProductDetail.css";
import Textarea from "../../css/Textarea";

export default function NavContentInfo() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionDetails>
          <Typography>
            <p id="acodianProductName">제품 설명</p>
            <textarea id="acodianProductInfo" >
              시트의 내구성 좋은 금속 스프링은 소파에 푹신한 편안함을 제공하여
              오랫동안 앉거나 편안하게 휴식을 즐길 수 있습니다. 커버는 물세탁
              가능하며 간편하게 벗겨내고 다시 씌울 수 있어 깔끔하게 관리하기
              편합니다.프레임에는 10년 품질보증이 제공됩니다. 브로슈어에서
              품질보증 기간에 대한 내용을 읽어 보세요.
            </textarea>
            <span id="acodianProductNo_text">제품 번호 </span>
            <p />
            <p id="acodianProductNo">294.768.27</p>
          </Typography>
        </AccordionDetails>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              height: "80px",
              transform: "translateY(35%)",
              fontWeight: 600,
              fontSize: "17px",
            }}
          ></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              height: "80px",
              transform: "translateY(35%)",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            참고
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>이케아코리아</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              height: "80px",
              transform: "translateY(35%)",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            소재 및 관리
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            소재 2인용 소파 프레임 프레임: 합판, 파티클보드, 섬유판, 라미네이트
            무늬목 커버 소재: 폴리에스테르 중공섬유 충전재, 폴리우레탄 폼
            30kg/cu.m. 다리: 스틸, 에폭시/폴리에스테르 파우더코팅, 폴리프로필렌
            플라스틱 2인용소파커버 면 100% 제품관리 프레임 2인용 소파 프레임
            순한 세제에 적신 천으로 닦으세요. 깨끗한 천으로 물기를 닦아주세요.
            안감 2인용 소파 프레임 먼지떨이를 이용하거나 진공청소기용 부드러운
            브러시로 가볍게 청소하세요. 탈부착커버 2인용소파커버 세탁기, 최대
            40°C, 표준 코스. 단독세탁 표백하지 마세요. 건조기에 넣지 마세요.
            다림질, 최대 200°C. 뒤집어 다림질하세요. 드라이클리닝, 표준 코스.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              height: "80px",
              transform: "translateY(35%)",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            안전 및 규정 준수
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            내변색성 레벨 1~8 중 레벨 5 판정을 받은 커버입니다. 업계 표준에
            따르면 가정용으로는 레벨 4 이상이 적합합니다. 25,000 사이클의 마모성
            테스트를 완료한 커버입니다. 15,000 사이클 이상을 견디는 커버는
            일반적인 가정용으로 적합합니다.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography
            sx={{
              width: "33%",
              flexShrink: 0,
              height: "80px",
              transform: "translateY(35%)",
              fontWeight: 600,
              fontSize: "17px",
            }}
          >
            고시정보
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            인증필 유무 개별 제품의 인증필 유무를 확인하세요. 색상 제품명 또는
            이미지 참조 구성품 포장 탭 참조 크기 제품 크기 탭 참조 중량 포장 탭
            참조 재질 소재 & 관리 탭 참조 제조사 IKEA of Sweden AB 제조국 중국,
            터키 수입자 이케아코리아 유한회사 배송&설치비용 이케아 서비스 페이지
            참조 품질보증 IKEA 품질 보증 기준을 따릅니다. 홈페이지에서 IKEA 품질
            보증을 확인 하세요. 교환 환불 책임자와 전화 번호 이케아코리아
            유한회사/ 1670-4532 동일모델의 출시년월 7/1/2022 취급시 주의
            사항(세탁방법 및 사용 연령) 제품 설명 탭 참조 제조년월 제조일자:
            포장면 참조 (예:1246=2012년 46번째 주 생산제품)
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}