import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";


const Form = () => {
    return (
        <StRegisterBox>
            <StImg src={logo} alt="header" />
            <form style={{ marginTop: "10px" }}>
                <InputWrap>
                    <StLabel style={{ marginRight: "5px" }}>아이디</StLabel>
                    <StInput
                        type="text"
                        name="username"
                        id="username"
                        placeholder="아이디를 입력해주세요" />
                    <StBtn>중복확인</StBtn>
                </InputWrap>
                <StsmallLabel style={{ marginBottom: "10px", marginTop: "5px" }}>* 아이디는 영어와 숫자로 4~10자로 입력해주세요. *</StsmallLabel>

                <InputWrap style={{ marginTop: "20px" }}>
                    <StLabel style={{ marginRight: "5px" }}>비밀번호</StLabel>
                    <StInput
                        type="password"
                        name="password"
                        id="password"
                        placeholder="비밀번호를 입력해주세요" />
                </InputWrap>
                <StsmallLabel style={{ marginBottom: "10px" }}>* 비밀번호는 영어, 숫자 포함 8자이상 20자이하로 입력해주세요. * </StsmallLabel>

                <InputWrap style={{ marginTop: "20px" }}>
                    <StLabel style={{ marginRight: "5px" }}>비밀번호 재확인</StLabel>
                    <StInput
                        type="password"
                        name="passwordConfirm"
                        id="passwordConfirm"
                        placeholder="비밀번호를 재입력해주세요" />
                </InputWrap>
                <StsmallLabel style={{ marginBottom: "10px" }}>* 비밀번호를 위에와 동일하게 입력해주세요. *</StsmallLabel>
                <JoinBtn>회원가입 완료</JoinBtn>
            </form>
        </StRegisterBox>
    );
}

export default Form;



//전체 박스 
const StRegisterBox = styled.div`
    width: 45vw;
    height: auto;
    padding-bottom: 2%;
    margin: auto;
    margin-top: 10%;
    border: 5px solid #ff6f0f;
    border-radius: 15px;
`;

//타이틀
const StImg = styled.img`
height: 8vw;
width: 45vw;
border-radius: 10px;
margin-top: 20px;
margin-bottom: 20px;
`;



//인풋 박스
const InputWrap = styled.div`
    display: flex;
    justify-content: center;
`;

//박스안 타이틀
const StLabel = styled.label`
  margin-top: 5px;
  color : #ff6f0f;
  font-weight: bolder;
  padding: 1%;
  text-align: center;
`;

//아이디 인풋창
const StInput = styled.input`
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  font-size: 15px; 
  padding:2%;
  :hover{
    border: 3px solid #ff6f0f;
  }
`;

//아이디 중복확인 버튼
const StBtn = styled.button`
  border: 3px solid #ff6f0f;
  border-radius: 10px;
  background-color: white;
  color: #ff6f0f;
  font-weight: 600;
  :hover{
    background-color: #ff6f0f;
    color:black;
    font-weight: 600;
  }
`;

//인풋 참고사항 라벨
const StsmallLabel = styled.label`
    display: flex;
    justify-content: center;
    font-size: 12px;
    color:gray;
`;


//회원가입 버튼
const JoinBtn = styled.button`
  width: 120px;
  height: 30px;
  margin-left: 35%;
  margin-top: 5%;
  font-size: 15px;
  background-color: #ff6f0f;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  :hover{
    border: 5px solid #ff6f0f;
    background-color: white;
  }
`;