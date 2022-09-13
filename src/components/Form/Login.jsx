import React, { useState } from "react";
import styled from "styled-components";
import header from "../Form/half.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { KAKAO_AUTH_URL } from "./Auth";


const Login = () => {
  const navigate = useNavigate();


  const initialState = {
    username: "",
    password: ""
  }

  const [inputValue, setInputValue] = useState(initialState);


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value })
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //빈값 체크
    if (inputValue.username === "" || inputValue.password === "") {
      // window.alert("아이디와 비밀번호를 입력해주세요.");
    }

    try {
      // console.log(payload);
      const data = await axios.post("http://3.36.71.186:8080/api/member/login", inputValue);
      localStorage.setItem("Authorization", data.headers.authorization)    //accesstoken
      localStorage.setItem("RefreshToken", data.headers.refreshtoken)   //refreshtoken 
      localStorage.setItem("nickname", data.data.data.nicname)
      console.log(data);
      navigate('/list');
      // if(data.data.success===false)
      //     alert("data.data.error.message");
      // alert("아이디와 비밀번호를 다시 확인해주세요.");
      // else alert("로그인 성공");
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // alert("아이디와 비밀번호를 다시 확인해주세요.");
      // return thunkAPI.rejectWithValue(error);
    }

    console.log(inputValue);

  };


  return (
    <>

      <StLoginContainer>
        <form onSubmit={onSubmitHandler}>
          <StImg src={header} alt="loge" />
          <StUserBox>
            <StLaber style={{ marginRight: "18px" }}>아이디</StLaber>
            <StLoginInput
              type="text"
              name="username"
              placeholder="아이디를 입력해주세요"
              onChange={onChangeHandler}
              value={inputValue.username}
            />
          </StUserBox>

          <StPwBox>
            <StLaber style={{ marginRight: "5px" }}>비밀번호</StLaber>
            <StLoginInput
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChangeHandler}
              value={inputValue.password}
            />

          </StPwBox>
          <StBtnBox>
            <StBtn type="submit">로그인</StBtn>
          </StBtnBox>
        </form>
        <StBtnBox>
          <StBtn onClick={() => navigate('/signup')}>회원가입</StBtn>
        </StBtnBox>

        <StBtnBox>
          <StBtnKaka onClick={() => { window.location.href = KAKAO_AUTH_URL }} >카카오톡으로 로그인하기</StBtnKaka>

        </StBtnBox>

      </StLoginContainer>

    </>
  )

};

export default Login;


//이미지 당근이세요
const StImg = styled.img`
  width: 30vw;
  border-radius: 15px;
`;

//로그인 박스
const StLoginContainer = styled.div`
  margin: auto;
  margin-top: 10%;
  background-color: white;
  width: 30vw;
  height: auto;
  padding-bottom: 1%;
  border-radius: 20px;
  border: 3px solid #ff6f0f;
  /* background-color: red; */
`;

//박스안에 타이틀
const StLaber = styled.label`
  margin-top: 5px;
  color : #ff6f0f;
  font-weight: bolder;
`;


//로그인박스 안에 username 입력박스
const StUserBox = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 2vw;
`;

//로그인박스안에 pw 입력박스
const StPwBox = styled.div`
  display: flex;
  justify-content:center;
  margin-top: 20px;
  margin-bottom: 30px;
`;

//인풋창 디자인
const StLoginInput = styled.input`
  border: none;
  border-radius: 5px;
  font-size: 15px; 
  padding:2%;
  :hover{
    border: 2px solid #ff6f0f;
  }
`;

//버튼들 박스
const StBtnBox = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
`;

//버튼 디자인
const StBtn = styled.button`
  background-color: white;
  border: none;
  border-radius: 5px;
  padding: 1%;
  font-weight: bold;

  :hover{
    border: none;
    background-color: #ff6f0f;
    color:white;
    font-weight: 800;
    padding: 1%;
  
}
`;

const StBtnKaka = styled.button`
  background-color: white;
  /* border: 2px solid #fcda1a; */
  border:none;
  border-radius: 5px;
  font-weight: bold;
  :hover{
    background-color:#fcda1a;
    padding: 1%;
  }
`;