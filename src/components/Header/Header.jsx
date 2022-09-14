import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHandler = () => {
        // dispatch(__logout());
        // dispatch(logout());
        window.alert("로그인 페이지로 이동합니다");
        navigate('/');
    };





    return (
        <>
            <StContainer>
                <StImg src={logo} alt=" carrot_1" />
                <StBtnContainer>
                    {/* 로그인누르면 로그인화면, 로그아웃누르면 쿠키제거하기 */}
                    { }

                    <StButton >
                        로그인
                    </StButton>

                    <StButton onClick={() => navigate('/signup')}>
                        회원가입
                    </StButton>
                    <StButton onClick={() => navigate('/mypage')}>
                        마이페이지
                    </StButton>
                </StBtnContainer>
            </StContainer>
        </>
    );

};

export default Header;

const StContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const StImg = styled.img`
  margin-left  : 1% ; 
  margin-top: 1%;
  margin-bottom: 1%;
`;

const StBtnContainer = styled.div`
  margin-top: 2% ;
`;

const StButton = styled.button`
  margin-right : 10px ;
  border: none;
  font-size: 15px;
  color: #ff6f0f;
  background-color: white;
  font-weight: 900;

`;