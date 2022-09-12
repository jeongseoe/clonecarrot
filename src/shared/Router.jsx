import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Mypage from "../pages/Mypage";
import Post from "../pages/Post";
import Register from "../pages/Register";
import Detail from "../pages/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="list" exact element={<List />} />
                <Route path="signup" exact element={<Register />} />
                <Route path="post" exact element={<Post />} />
                <Route path="Mypage" exact element={<Mypage />} />
                <Route path="detail/:id" exact element={<Detail />} />
                <Route path='*' element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;