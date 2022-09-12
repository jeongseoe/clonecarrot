import React from "react";
import styled from "styled-components";
import logo from "../../logo.svg"

const Header = () => {

    return (

        <StDiv>
            <img src={logo} alt="logo"/>
            머릿말입니다
        </StDiv>

    );

}

export default Header;

const StDiv = styled.div`
    background-color: lightgray;
`