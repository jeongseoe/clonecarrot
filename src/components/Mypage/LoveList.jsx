import React from "react";
import styled from "styled-components";
import ItemImageSample from "./Item.jpg";
import HeartIMG from "./heart.png";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../Header/Header";
import { getApi } from "../../shared/Api";

const LoveList = () => {

    const [ post, setPost ] = useState([]);

    const fetchPost = async () => {
        const response = await getApi("/api/lovelist"); 
        console.log(response.data)

        setPost( [response.data.data] );
    }

    useEffect( () => {
        fetchPost();
      }, []);


    return (
        <div>
            <Header></Header>
            <Body>
                <Title>내 관심목록</Title>
                <SaleList>
                    {post.map((item, index)=>{
                        return(
                            <Card key={index}>
                                <ItemImage src={ItemImageSample}></ItemImage>
                                <OnSaleStatus>{item.state}</OnSaleStatus>
                                <ItemTitle>
                                    <Text>이름 :</Text>
                                    {item.title}
                                </ItemTitle>
                                <Price>
                                    <Text>가격 :</Text>
                                    {item.price}
                                </Price>
                                <Location>
                                    <Text>위치 :</Text>
                                    {item.location}
                                </Location>
                                <Buttons>
                                    <Heart>
                                        <HeartImage src={HeartIMG}></HeartImage>
                                        {item.likeCount}
                                    </Heart>
                                    <Chat>채팅</Chat>
                                </Buttons>
                                <Remove>목록제거</Remove>
                            </Card>
                        )
                    })}
                </SaleList>
            </Body>
        </div>
    );
};

export default LoveList;

const Body = styled.div `
    border: 1px solid lightgrey;
    border-radius: 50px;
    background-color: lightgrey;
    width: 1200px;
    min-height: 750px;
    margin: 50px auto 50px auto;
`
const Title = styled.div `
    border: 10px solid tomato;
    border-radius: 20px;
    background-color: white;
    width: 500px;
    height: 100px;
    margin: 80px auto 0px auto;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: tomato;
`
const SaleList = styled.div `
    display: flex;
    width: 1000px;
    min-height: 450px;
    margin: 50px auto 50px auto;
    border: 1px solid white;
    border-radius: 20px;
    background-color: white;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
`
const Card = styled.div `
    width: 200px;
    height: 450px;
    margin: 0px auto 0px auto;
`
const ItemImage = styled.img `
    width: 150px;
    height: 150px;
    margin 20px auto 0px auto;
    border: 5px solid tomato;
    border-radius: 10px;
    display: flex;
`
const OnSaleStatus = styled.div `
    border: 1px solid limegreen;
    border-radius: 5px;
    background-color: limegreen;
    width: 100px;
    height: 25px;
    margin: 10px auto 0px auto;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
`
const ItemTitle = styled.div `
    display: flex;
    width: 150px
    height: 20px
    line-height: 20px;
    font-size: 15px;
    margin: 20px auto 0px 15px;
`
const Price = styled.div `
    display: flex;
    width: 150px
    height: 20px
    line-height: 20px;
    font-size: 15px;
    margin: 10px auto 0px 15px;
`
const Location = styled.div `
    display: flex;
    width: 150px
    height: 20px
    line-height: 20px;
    font-size: 15px;
    margin: 10px auto 0px 15px;
`
const Buttons = styled.div `
    display: flex;
    width: 180px;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    margin: 10px auto 0px auto;
`
const Heart = styled.div `
    display: flex;
    width: 80px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    margin: 10px auto 0px 0px;
`
const Chat = styled.div `
    border: 1px solid gold;
    border-radius: 5px;
    background-color: gold;
    width: 70px;
    height: 30px;
    margin: 15px auto 0px auto;
    text-align: center;
    line-height: 30px;
    font-size: 12px;
`
const Text = styled.div `
    display: flex;
    width: 50px;
    height: 20px;
`
const HeartImage = styled.img `
    width: 35px;
    height: 35px;
    border: 2px solid lightgrey;
    border-radius: 18px;
    margin: 0px 7px 0px 0px;
`
const Remove = styled.div `
    border: 1px solid firebrick;
    border-radius: 5px;
    background-color: firebrick;
    width: 60px;
    height: 25px;
    margin: 20px auto 0px auto;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    color: white;
`