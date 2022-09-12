import React from "react"
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            로그인 페이지 입니다.
            <button onClick={() => {navigate('/post')}}>post로~</button>
            <button onClick={() => {navigate('/detail/:id')}}>detail로~</button>
        </div>
    );
};

export default Home;