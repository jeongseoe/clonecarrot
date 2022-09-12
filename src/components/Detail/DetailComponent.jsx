import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailComponent = () => {
  const navigate = useNavigate();

  return (
    <ComponentWrap>
      <div>
        <button>수정하기</button>
        <button>삭제하기</button>
        <button>판매완료</button>
      </div>
      게시글 이미지
      {/* <img/> */}
      <div>
        <div>
          <div>
            {/* <img/> */}
          </div>
          <div>
            <div>아이디</div>
            <div>위치</div>
          </div>
        </div>
        <div>
          <div>좋아요 수</div>
          <div>좋아요 버튼</div>
        </div>
      </div>
      
      <hr/>
      <div>title</div>
      <div>분류 | 게시 시간</div>
      <div>가격</div>
      <div>게시글 본문</div>
      <span>좋아요 수</span>
      <span>조회수</span>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </ComponentWrap>
  )
}
export default DetailComponent;

const ComponentWrap = styled.div`
  /* width: 80vw; */
  /* margin: 50px auto; */
  /* padding: 10px; */
  
  /* display: flex;
  align-items: center;
  justify-content: center; */
`