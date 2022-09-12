// import React from "react";
import styled from "styled-components";
import PostComponent from "../components/List/PostComponent";

const Post = () => {
    return (
        <ComponentWrap>
            post 입니다.
            
            <PostComponent/> 
        </ComponentWrap>
    );
};

export default Post;

const ComponentWrap = styled.div`
  width: 80vw;
  margin: 50px auto;
  
  background-color: green;
  `