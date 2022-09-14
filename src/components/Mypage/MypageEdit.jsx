import React from "react";
import styled from "styled-components";
import profileImage from "./profile.jpg";

const MypageEdit = () => {

    return (
        <div>
            <Body>
                <MyProfile src={profileImage}></MyProfile>
                <ImageUpLoad>이미지 업로드</ImageUpLoad>
                <EditStatus>
                    <EditPassword>비밀번호 변경</EditPassword>
                    <EditLocation>내 위치 수정</EditLocation>
                </EditStatus>
            </Body>

        </div>
    );
};

export default MypageEdit;

const Body = styled.div `
    border: 1px solid lightgrey;
    border-radius: 50px;
    background-color: lightgrey;
    width: 1200px;
    height: 700px;
    margin: 50px auto 0px auto;
`
const MyProfile = styled.img `
    border: 10px solid tomato;
    border-radius: 100px;
    width: 200px;
    height: 200px;
    margin: 100px auto 0px auto;
    background-size: cover;
    display: flex;
`
const ImageUpLoad = styled.div `
    border: 1px solid limegreen;
    border-radius: 20px;
    background-color: limegreen;
    width: 200px;
    height: 50px;
    margin: 60px auto 0px auto;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
`
const EditStatus = styled.div `
    display: flex;
    width: 1000px;
    margin: 0px auto;
`
const EditPassword = styled.div `
    border: 1px solid white;
    border-radius: 20px;
    background-color: white;
    width: 500px;
    height: 100px;
    margin: 70px 0px 0px 0px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
`
const EditLocation = styled.div `
    border: 1px solid white;
    border-radius: 20px;
    background-color: white;
    width: 500px;
    height: 100px;
    margin: 70px 0px 0px 70px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
`