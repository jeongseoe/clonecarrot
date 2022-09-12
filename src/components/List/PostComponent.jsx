import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const PostComponent = () => {
  const navigate = useNavigate();
  
  return(
    <div>
      <StH1>매물 올리기</StH1>
      <div>
        {/* <img/> */}
        <button>이미지 업로드</button>
      </div>
      
      <hr/>
      <StDiv>
        <input placeholder="게시글 타이틀 작성"></input>
        <StSelect naeme="what?">
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
          <option value="five">five</option>
        </StSelect>
        <input placeholder='가격 작성'/>
        <textarea placeholder='게시글 본문 작성'/>
        <hr/>
        <button onClick={() => navigate('/list')}>내 매물 게시</button>
      </StDiv>
            
    </div>
    
  )
}

export default PostComponent;

const StH1 = styled.h1`
  margin-top: 50px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`

const StSelect = styled.select`
  width: 200px;
  background-color: yellow;
`

const StDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`