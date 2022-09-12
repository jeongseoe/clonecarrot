// import React from "react";
import styled from "styled-components";
import DetailComponent from "../components/Detail/DetailComponent";
import Header from "../components/Header/Header";

const Detail = () => {
    return (
        <ComponentWrap>
            상세페이지입니다 
            <Header/>
            <DetailComponent/>
        </ComponentWrap>
    );
};

export default Detail;

const ComponentWrap = styled.div`
  width: 80vw;
  margin: 50px auto;
  
  background-color: green;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  `