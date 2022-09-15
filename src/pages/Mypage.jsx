import React from "react";
import styled from "styled-components";
import profileImage from "../components/Mypage/profile.jpg";
import editImage from "../components/Mypage/profile_edit.png";
import heartImage from "../components/Mypage/heart.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from "../components/Header/Header";
import { getApi } from "../shared/Api";

const Mypage = () => {
    const navigate = useNavigate();

    const [ post, setPost ] = useState([]);

    const fetchPost = async () => {
        const response = await getApi("/api/auth/profile")
        console.log(response.data)

        setPost([response.data.data]);
    }

    useEffect( () => {
        fetchPost();
      }, []);

    
    console.log(post);

    return (
        <Div>
            <Header></Header>
            <Div1>
                {post.map((item, index)=>{
                    return(
                            <div key={index}>
                                <MyStatus>
                                    <MyProfile src={profileImage}></MyProfile>
                                    <div>
                                        <MyId>{item.nickname}</MyId>
                                        <MyLocation>{item.location}</MyLocation>
                                    </div>
                                    <MyPageEdit src={editImage} onClick={() => navigate('/mypage/edit')}></MyPageEdit>
                                </MyStatus>
                                <MyHeart>
                                    <Heart src={heartImage}></Heart>
                                    <Text>매너온도</Text>
                                    <Numbers>{item.totalLike}</Numbers>
                                </MyHeart>
                            </div>
                        )
                    })}
            </Div1>
            <PageBody>
                <SaleList onClick={() => navigate('/salelist')}>판매내역</SaleList>
                <BucketList onClick={() => navigate('/lovelist')}>관심목록</BucketList>
            </PageBody>
        </Div>
    );
};

export default Mypage;

const Div = styled.div `

`
const Div1 = styled.div `

`
const MyStatus = styled.div `
    border: 1px solid lightgrey;
    border-radius: 50px;
    background-color: lightgrey;
    width: 1200px;
    height: 300px;
    margin: 80px auto 0px auto;
    display: flex;
`
const MyProfile = styled.img `
    border: 10px solid tomato;
    border-radius: 100px;
    width: 200px;
    height: 200px;
    margin: 40px 0px 0px 50px;
    background-size: cover;
`
const MyId = styled.div `
    border: 1px solid white;
    border-radius: 20px;
    background-color: white;
    width: 500px;
    height: 100px;
    margin: 30px 0px 0px 70px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
`
const MyLocation = styled.div `
    border: 1px solid white;
    border-radius: 20px;
    background-color: white;
    width: 500px;
    height: 100px;
    margin: 30px 0px 0px 70px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
`
const MyPageEdit = styled.img `
    border-radius: 100px;
    width: 200px;
    height: 200px;
    margin: 50px 0px 0px 80px;
    background-size: cover;
`
const PageBody = styled.div `
    display: flex;
    width: 670px;
    margin: 0px auto;
`
const SaleList = styled.div `
    border: 1px solid limegreen;
    border-radius: 20px;
    background-color: limegreen;
    width: 300px;
    height: 100px;
    margin: 0px 0px 0px 0px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
`
const BucketList = styled.div `
    border: 1px solid limegreen;
    border-radius: 20px;
    background-color: limegreen;
    width: 300px;
    height: 100px;
    margin: 0px 0px 0px 70px;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
`
const MyHeart = styled.div `
    border: 1px solid lightgrey;
    border-radius: 20px;
    background-color: lightgrey;
    width: 400px;
    height: 100px;
    margin: 80px auto;
    text-align: center;
    line-height: 200px;
    display: flex;
`
const Heart = styled.img `
    border-radius: 25px;
    width: 53px;
    height: 50px;
    margin: 26px 0px 0px 40px;
    background-size: cover;
`
const Text = styled.div `
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    margin: 0px 0px 0px 20px;
`
const Numbers = styled.div `
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    margin: 0px auto;
`