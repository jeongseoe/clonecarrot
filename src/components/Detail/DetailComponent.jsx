import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors } from "../../lib/constants/colors"
import accountImg from "./account_circle.svg"



const DetailComponent = () => {
  const navigate = useNavigate();

  return (
    <ComponentWrap>
      <ToggleBtnWrap>
        <ToggleBtn>수정하기</ToggleBtn>
        <ToggleBtn>삭제하기</ToggleBtn>
        <ToggleBtn>판매완료</ToggleBtn>
      </ToggleBtnWrap>
      <ImgPostWrap>
      <ImgContainer>
            {/* <Camera src={camera} alt="camera"/> */}
            {/* <img src={} alt="post image"/> */}
      </ImgContainer>
      </ImgPostWrap>
      
      
      <UserInfo>
        <ProfileContatiner>
          <ImgWrap>
            <AccountImg src={accountImg} alt="Account Img"/>
          </ImgWrap>
          <div>
            <div>아이디</div>
            <div>위치</div>
          </div>
        </ProfileContatiner>
        <div>
          <div>좋아요 수</div>
          <div>좋아요 버튼</div>
        </div>
      </UserInfo>
      
      <StHr/>

      <DescWrap>
        <DescH2>title</DescH2>
        <DescDiv>분류 | 게시 시간</DescDiv>
        <DescH3>가격</DescH3>
        <DescScrpt>게시글 본문</DescScrpt>
        <DescInfoWrap>
          <span>좋아요 수</span>
          <span>{". 조회수"}</span>
        </DescInfoWrap>
        
      </DescWrap>
      
      <StBtn onClick={() => navigate(-1)}>뒤로가기</StBtn>
    </ComponentWrap>
  )
}
export default DetailComponent;

const ComponentWrap = styled.div`
  width: 60vw;
  margin: 40px auto;
  
  /* background-color: green; */
  `

const ToggleBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ToggleBtn = styled.button`
width: 10vw;
margin: 20px auto;
color: ${colors.white};
background-color: ${colors.orange};;

font-size: 1rem;
font-weight: 800;

border: none;
border-radius: 0.6rem;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

::after{
  content: "";
  padding-bottom: 20%;
}
`

const ImgPostWrap = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  position: relative;

  :after{
    content: "";
    display: block;
    padding-bottom: 60%;

  }
`

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  

  border: 2px solid ${colors.lightgray};
  border-radius: 10px;
  /* background-color: ${colors.white}; */
`
    
const UserInfo = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProfileContatiner = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: white;

`

const StHr = styled.hr`
  margin-top: 50px;
  margin-bottom: 0px;

  border: 0px;
  border-top: 1px solid ${colors.lightgray};
`

const ImgWrap = styled.div`
  width: 100px;
  height: 100px;
  display: flex;

  /* background-color: gray; */
  border: none;
  border-radius: 50%;
`

const AccountImg = styled.img`
  filter: invert(88%) sepia(0%) saturate(0%) hue-rotate(156deg) brightness(80%) contrast(84%);
`

const DescWrap = styled.div`
  width: 98%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const DescH2 = styled.h2`
  color: ${colors.black};
  padding-bottom: 20px;
  border: 0px;
  border-bottom: 1px solid ${colors.lightgray};
`

const DescDiv = styled.div`
  color: ${colors.lightgray};
  padding-bottom: 20px;
  border: 0px;
  border-bottom: 1px solid ${colors.lightgray};
`
const DescH3 = styled.h3`
  color: ${colors.black};
  padding-bottom: 20px;
  border: 0px;
  border-bottom: 1px solid ${colors.lightgray};
`

const DescScrpt = styled.div`
  width: 100%;
  height: 12em;
  border: 0px;
  padding-top: 20px;
  /* padding-left: 10px; */
  border: 0px;
  border-bottom: 1px solid ${colors.lightgray};

  color: ${colors.black};
`

const DescInfoWrap = styled.div`
  padding-top: 20px;
  color: ${colors.lightgray};
  display: flex;
`


const StBtn = styled.button`
width: 18vw;
margin: 50px auto;
color: ${colors.white};
background-color: ${colors.orange};;

font-size: 1rem;
font-weight: 800;

border: none;
border-radius: 0.6rem;

display: flex;
align-items: center;
justify-content: center;

cursor: pointer;

::after{
  content: "";
  padding-bottom: 17%;
}
`