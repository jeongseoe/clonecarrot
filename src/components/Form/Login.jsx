import React from "react";
import styled from "styled-components";
import header from "../Form/half.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <form>
                <StLoginContainer>
                    <StImg src={header} alt="loge" />
                    <StUserBox>
                        <StLaber style={{ marginRight: "18px" }}>아이디</StLaber>
                        <StLoginInput
                            type="text"
                            name="username"
                            placeholder="아이디를 입력해주세요"
                        />
                    </StUserBox>

                    <StPwBox>
                        <StLaber style={{ marginRight: "5px" }}>비밀번호</StLaber>
                        <StLoginInput
                            type="password"
                            name="username"
                            placeholder="비밀번호를 입력해주세요" />

                    </StPwBox>
                    <StBtnBox>
                        {/* 로그인 기능구현하기 */}
                        <StBtn  >로그인</StBtn>
                    </StBtnBox>

                    <StBtnBox>
                        <StBtn onClick={() => navigate('/signup')}>회원가입</StBtn>
                    </StBtnBox>

                    <StBtnBox>
                        {/* 카카오톡연동하기 */}
                        <StBtnKaka>카카오톡으로 로그인하기</StBtnKaka>
                    </StBtnBox>

                </StLoginContainer>
            </form>
        </>
    )

};

export default Login;



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
  border-radius: 15px;
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