// import React from "react";
import styled from "styled-components";
import ListComponent from "../components/List/ListComponent";

const List = () => {
    return (
        <ComponentWrap>리스트 목록 페이지입니다
            <ListComponent/>
        </ComponentWrap>
    );
};

export default List;

const ComponentWrap = styled.div`
  width: 100%;
  /* margin: 50px auto; */
  
  background-color: green;
  `