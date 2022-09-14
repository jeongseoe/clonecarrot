import React, { useEffect } from "react";
import styled from "styled-components";
import logo from "../../logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __logout, logout } from "../../redux/modules/userSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickHandler = () => {
        dispatch(__logout());
        dispatch(logout());
        window.alert("로그인 페이지로 이동합니다");
        navigate('/');
    };

    const token = localStorage.getItem('RefreshToken')






    return (
        <>
            <StContainer>
                <StImg src={logo} alt=" carrot_1" onClick={() => navigate('/list')} />
                <StBtnContainer>
                    {/* 로그인누르면 로그인화면, 로그아웃누르면 쿠키제거하기 */}
                    {token === null ? <StButton onClick={() => navigate('/')}>
                        로그인
                    </StButton> : <StButton onClick={onClickHandler}>
                        로그아웃
                    </StButton>}

                    {token === null ? null :

                        <StButton onClick={() => navigate('/mypage')}>
                            마이페이지
                        </StButton>
                    }
                    {token === null ? null :

                        <StButton onClick={() => navigate('/post')}>
                            내물건 팔기
                        </StButton>
                    }



                    <StButton onClick={() => navigate('/signup')}>
                        회원가입
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