import React from 'react';
import { colors } from "../../lib/constants/colors"
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import camera from "./camera.svg"


const PostComponent = () => {
  const navigate = useNavigate();
  
  return(
    <ComponentWrap>
      <StH2>중고거래 글쓰기</StH2>
      <StHr/>
      <ImgPostWrap>
        <ImgContainer>
          <Camera src={camera} alt="camera"/>

          {/* <img src={} alt="post image"/> */}
        </ImgContainer>
        
        
      </ImgPostWrap>
      <StBtn>이미지 업로드</StBtn>
      
      <StHr/>

      
        <DescWrap>
          <StInput placeholder="글 제목"/>
          <StSelect name='categories' required>
            <StOption value="" disabled selected>카테고리 선택</StOption>
            <option value="device">디지털기기</option>
            <option value="furniture">가구/인테리어</option>
            <option value="cloth">의류</option>
            <option value="books">도서</option>
            <option value="others">기타 중고물품</option>
          </StSelect>
          <StInput placeholder='₩ 가격'/>
          <StTextarea cols="10" placeholder='게시글 본문 작성'/>
        </DescWrap>
        
        <StHr/>
        <StBtn onClick={() => navigate('/list')}>내 매물 게시</StBtn>
      
            
    </ComponentWrap>
    
  )
}

export default PostComponent;

const ComponentWrap = styled.div`
  width: 50vw;
  margin: 0px auto;
  
  /* background-color: green; */
  `

const StH2 = styled.h2`
  margin-top: 50px;
  margin-bottom: -30px;
  color: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center; 
`

const ImgPostWrap = styled.div`
  width: 30%;
  margin: auto;
  position: relative;

  /* align-items: center;
  justify-content: center; */
  :after{
    content: "";
    display: block;
    padding-bottom: 90%;

  }
`

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  border: 2px solid ${colors.lightgray};
  border-radius: 10px;
  background-color: ${colors.white};
`

const Camera = styled.img`
  filter: invert(88%) sepia(0%) saturate(0%) hue-rotate(156deg) brightness(80%) contrast(84%);
  height: 20%;
  padding-top: 35%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StBtn = styled.button`
  width: 18vw;
  margin: 20px auto;
  color: ${colors.white};
  background-color: ${colors.orange};;

  font-size: 1rem;
  font-weight: 800;

  border: none;
  border-radius: 2vw;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  ::after{
    content: "";
    padding-bottom: 17%;
  }
`

const StHr = styled.hr`
  margin: 50px 0px;

  border: 0px;
  border-top: 1px solid ${colors.lightgray};
`

const DescWrap = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const StInput = styled.input`
  width: 100%;
  height: 5vh;
  border: 0px;
  padding-left: 10px;
  border-bottom: 1px solid ${colors.lightgray};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  ::placeholder{
    color: ${colors.gray}
  }
`

const StSelect = styled.select`
  width: 100%;
  height: 5vh;
  padding-left: 5px;
  border: 0px;
  border-bottom: 1px solid ${colors.lightgray};
  color: ${colors.gray} ;
`

const StOption = styled.option`
  color: ${colors.gray} ;
  display: none;
`

const StTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 0px;
  
  padding-top: 20px;
  padding-left: 10px;
  ::placeholder{
    color: ${colors.gray};
    padding-left: 5px;
  }
  
`

const StDiv = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`