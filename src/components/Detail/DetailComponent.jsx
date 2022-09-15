import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { colors } from "../../lib/constants/colors"
import accountImg from "./account_circle.svg"
import camera from "../List/camera.svg"


// /api/post/{postId} 
const DetailComponent = () => {
  const  param  = useParams();
  const id = param.id 
  const navigate = useNavigate();
  // console.log("param", param)
  
  const accessToken = localStorage.getItem("Authorization"); //accesstoken 
  const refreshToken = localStorage.getItem("RefreshToken") //refreshToken
  
  const [detail, setDetail] = useState([]);
  


  const getDetail = async () => {
    // const response = await axios.get("http://localhost:4001/details"
    const response = await axios.get(`http://3.36.71.186:8080/api/post/${id}`
    
    ,{
    headers: {
      Authorization: `${accessToken}`,
      RefreshToken: `${refreshToken}`,
      // withCredentials:true, 
    }  
    });
    
    // console.log("👏 Axios Work >>> ", response)
    console.log("👏 Axios Work >>> ", response.data.data)
    setDetail( response.data.data ); // 서버로부터 get
    // console.log(detail)
  
  }

  useEffect(() => {
    getDetail();
  }, [])

  return (
    <ComponentWrap>
      {accessToken&refreshToken
      ?<ToggleBtnWrap>
        <ToggleBtn>수정하기</ToggleBtn>
        <ToggleBtn>삭제하기</ToggleBtn>
        <ToggleBtn style={{border: "none"}}>
          {detail.state==="판매완료"?"판매완료":"판매중"}
        </ToggleBtn>
      </ToggleBtnWrap>
      :null}
      <ImgPostWrap>
        <ImgContainer>
          {detail.postImgUrl===""
          ?<Camera src={camera} alt="camera"/>
          :<StImg src={detail.postImgUrl} alt="post image"/>}  
        </ImgContainer>
      </ImgPostWrap>      
      <UserInfo>
        <ProfileContatiner>
          <ImgWrap>
            {detail.profileImgUrl===""
            ?<AccountImg src={accountImg} alt="account image"/>
            :<StImg src={detail.profileImgUrl} alt="post image"/>}
            
          </ImgWrap>
          <ProfileNickname>
            <Nickname>{detail.nickname}</Nickname>
            <Location>{detail.location}</Location>
          </ProfileNickname>
        </ProfileContatiner>
        <LikeWrap>
          <UserLikeCount>{detail.likeCount}</UserLikeCount>
          <LikeBtn>🧡</LikeBtn>
        </LikeWrap>
      </UserInfo>
      
      <StHr/>

      <DescWrap>
        <DescH2>{detail.title}</DescH2>
        <DescDiv>{detail.tag}</DescDiv>
        <DescH3>{detail.price} 원</DescH3>
        <DescScrpt>{detail.content}</DescScrpt>
        <DescInfoWrap>
          <span>좋아요 {detail.likeCount}</span>
          <DescViewCount>조회수 {detail.viewcount}</DescViewCount>
        </DescInfoWrap>
        
      </DescWrap>
      
      <StBtn onClick={() => navigate(-1)}>뒤로가기</StBtn>
    </ComponentWrap>
  )
}
export default DetailComponent;

const ComponentWrap = styled.div`
  width: 60vw;
  margin: 60px auto;
  `

const ToggleBtnWrap = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.orange};;
  border-radius: 0.4rem;

  

`

const ToggleBtn = styled.button`
width: 100%;
height: 70%;
/* margin: 20px auto; */
color: ${colors.white};
font-size: 1rem;
font-weight: 800;
background-color: transparent;
border: none;
border-right: 1px solid ${colors.white};



cursor: pointer;

::after{
  content: "";
  padding-bottom: 20%;
}
`

const ImgPostWrap = styled.div`
  width: 100%;
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
  overflow: hidden;
  width: 100%;
  height: 100%;
  

  border: 2px solid ${colors.lightgray};
  border-radius: 10px;
  /* background-color: ${colors.white}; */
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


const StImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  box-sizing: border-box;
  border-radius: 1.5rem;
`
    
const UserInfo = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProfileContatiner = styled.div`
  position: relative;
  /* width: fit-content; */
  padding: 4px 0px;
  display: flex;
  /* align-items: center; */
  /* justify-content: flex-start; */

  background-color: gray;
  :after{
    content: "";
    display: block;
    padding-bottom: 2%;
  }

`

const LikeWrap = styled.div`
  color: ${colors.orange};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: end;
`

const UserLikeCount = styled.div`
  margin-right: 5px;
`

const LikeBtn = styled.button`
  font-size: 1.4rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const StHr = styled.hr`
  margin-top: 50px;
  margin-bottom: 0px;

  border: 0px;
  border-top: 1px solid ${colors.lightgray};
`

const ImgWrap = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate( 10%);
`

const ProfileNickname = styled.div`
  margin-left: 5vw;
  
`

const Nickname = styled.div`
  color: ${colors.black};
  font-weight: 700;
`
const Location = styled.div`
  color: ${colors.lightgray};
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
  font-size: 0.9rem;
`
const DescViewCount = styled.span`
  position: absolute;
  left: 49%;
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