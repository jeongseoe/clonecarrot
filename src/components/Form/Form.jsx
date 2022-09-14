import styled from "styled-components";
import logo from "../../logo.svg";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Form = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    nickname: "",
    password: "",
    passwordConfirm: ""
  });

  const [nicknameError, setnicknameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);


  //유효성 체크 

  const onChangenickname = (e) => {
    // console.log("e.target.value is", e.target.value)
    // console.log("e.target.value.length is ", e.target.value.length)
    const nicknameRegex = /^[A-Za-z0-9+]{4,10}$/;
    if ((4 < e.target.value.length < 10 && (nicknameRegex.test(e.target.value))))
      setnicknameError(false);
    else if (e.target.value.length === 0 || !(nicknameRegex.test(e.target.value))) {
      setnicknameError(true);
    }


    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  const onChangePassword = (e) => {

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[0-9]).{8,20}$/;

    if ((8 < e.target.value.length < 20 && (passwordRegex.test(e.target.value)))) setPasswordError(false);
    else setPasswordError(true);

    if (e.target.value.length === 0 || !(passwordRegex.test(e.target.value))) setPasswordConfirmError(false);
    else if (e.target === 0 || !(passwordRegex.test(e.target.value))) { setPasswordConfirmError(true); }
    // setInput(e.target.value);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };


  const onChangePasswordConfirm = (e) => {
    if (input.password === e.target.value) setPasswordConfirmError(false);
    else setPasswordConfirmError(true);
    // setPasswordConfirmError(e.target.value);
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  //유효성 검사
  const validation = () => {
    if (!input.nickname) setnicknameError(true);
    if (!input.password) setPasswordError(true);
    if (!input.passwordConfirm) setPasswordConfirmError(true);

    if (nicknameError && passwordError && passwordConfirmError) return true;
    else return false;
  }
  // console.log(input.nickname);
  // console.log(input.password);
  // console.log(input.passwordConfirm);


  //회원가입 버튼 누르면 실행
  const addHandler = async () => {
    const { nickname, password, passwordConfirm } = input;
    const user = {
      nickname: nickname,
      password: password,
      passwordConfirm: passwordConfirm
    };
    console.log("user is ", user)
    try {

      const data = await axios.post("http://3.36.71.186:8080/api/member/signup", user);
      console.log(data);

      if (data.data.success === false)
        alert(data.data.error.message);
      else {
        alert("회원가입이 완료되었습니다.");
        navigate('/');
      }
      // return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // return thunkAPI.rejectWithValue(error);
      alert("가입에 실패했습니다");
    }


    // }
    console.log(validation());

    if (validation()) {

    }
    return;
  };




  return (
    <StRegisterBox>
      <StImg src={logo} alt="header" />
      <form style={{ marginTop: "10px" }}>
        <InputBox>
          <StLabel style={{ marginRight: "5px" }}>아이디</StLabel>
          <StInput
            type="text"
            name="nickname"
            id="nickname"
            placeholder="아이디를 입력해주세요"
            onChange={onChangenickname}
            value={input.nickname}
          />{ }

        </InputBox>
        {input.nickname.length <= 0 ? null : nicknameError ? <StSmallWorning>아이디 형식을 확인하세요</StSmallWorning> :
          <div style={{ marginLeft: "45%", fontSize: "13px", color: "blue", fontWeight: "600" }}>올바른 아이디형식입니다!</div>}

        {/* {nicknameError ? <StSmallWorning>아이디 형식을 확인하세요</StSmallWorning> :
          <div style={{ marginLeft: "35%", fontSize: "13px", color: "blue", fontWeight: "600" }}>올바른 아이디형식입니다.</div>} */}

        <StsmallLabel style={{ marginBottom: "10px", marginTop: "5px" }}>* 아이디는 영어와 숫자로 4~10자로 입력해주세요. *</StsmallLabel>

        <InputBox style={{ marginTop: "20px" }}>
          <StLabel style={{ marginRight: "5px" }}>비밀번호</StLabel>
          <StInput
            type="password"
            name="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={onChangePassword}
            value={input.password} />
        </InputBox>
        {input.password.length <= 0 ? null : passwordError ? <StSmallWorning>비밀번호 형식을 확인하세요</StSmallWorning> :
          <div style={{ marginLeft: "45%", fontSize: "13px", color: "blue", fontWeight: "600" }}>안전한 비밀번호입니다!</div>}
        <StsmallLabel style={{ marginBottom: "10px" }}>* 비밀번호는 영어, 숫자 포함 8자이상 20자이하로 입력해주세요. * </StsmallLabel>

        <InputBox style={{ marginTop: "20px" }}>
          <StLabel style={{ marginRight: "5px" }}>비밀번호 재확인</StLabel>
          <StInput
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="비밀번호를 재입력해주세요"
            onChange={onChangePasswordConfirm}
            value={input.passwordConfirm} />
        </InputBox>
        {passwordConfirmError &&
          <StSmallWorning className="invalid-input">비밀번호가 일치하지 않습니다.</StSmallWorning>}
        <StsmallLabel style={{ marginBottom: "10px" }}>* 비밀번호를 위에와 동일하게 입력해주세요. *</StsmallLabel>
      </form>
      <JoinBtn onClick={() => { addHandler(); console.log("input is", input) }}>회원가입 완료</JoinBtn>

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
const InputBox = styled.div`
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
  margin-left: 40%;
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

//비밀번호 오류 라벨
const StSmallWorning = styled.label`
  font-size: 12px;
  color: red;
  font-weight: 600;
  margin-left:45% ;
`;