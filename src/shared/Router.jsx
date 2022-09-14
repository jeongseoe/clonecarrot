import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Mypage from "../pages/Mypage";
import MyPageEdit from "../components/Mypage/MypageEdit";
import SaleList from "../components/Mypage/SaleList";
import LoveList from "../components/Mypage/LoveList";
import Post from "../pages/Post";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import Oauth2Handler from "../components/Form/Oauth2Handeler";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="list" exact element={<List />} />
                <Route path="signup" exact element={<Register />} />
                <Route path="post" exact element={<Post />} />
                <Route path="mypage" exact element={<Mypage />} />
                <Route path="mypage/edit" exact element={<MyPageEdit />} />
                <Route path="salelist" exact element={<SaleList />} />
                <Route path="lovelist" exact element={<LoveList />} />
                <Route path='detail/:id' exact element={<Detail />} />
                <Route path='*' element={<div>404 Not Found</div>} />
                <Route path="/oauth/callback/kakao" component={Oauth2Handler}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;