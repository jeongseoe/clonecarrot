// import React from "react";
import styled from "styled-components";
import ListComponent from "../components/List/ListComponent";
import Header from "../components/Header/Header";


const List = () => {
    return (
        <>
        <Header/>
        <ComponentWrap>
            <ListComponent/>
        </ComponentWrap>
        </>
        
    );
};

export default List;

const ComponentWrap = styled.div`
  /* width: 100%; */
  /* margin: 50px auto; */
  
  /* background-color: green; */
  `