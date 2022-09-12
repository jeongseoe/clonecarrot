import React from "react"
import Login from "../components/Form/Login"

import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Login />
            <button onClick={() => {navigate('/post')}}>post로~</button>
            <button onClick={() => {navigate('/detail/:id')}}>detail로~</button>
        </div>
    );
};

export default Home;