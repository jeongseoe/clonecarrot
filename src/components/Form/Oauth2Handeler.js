import axios from "axios";
import React from "react";

// import List from "../../pages/List";

const Oauth2Handler = () => {

    // 인가코드
    let code = new URL(window.location.href).searchParams.get("code");
    console.log("code is", code)
    React.useEffect(() => {
        kakaoLogin(code)

    }, []);


    console.log("code is", code)
    const kakaoLogin = (code) => {
        return function (dispatch, getState, { history }) {
            axios({
                method: "GET",
                url: `http://3.36.71.186:8080/api/member/kakao/callback?code=${code}`,
            })
                .then((res) => {
                    console.log(res); // 토큰이 넘어올 것임

                    const ACCESS_TOKEN = res.data.accessToken;

                    localStorage.setItem("token", ACCESS_TOKEN);    //예시로 로컬에 저장함    

                    history.replace("/list") // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)

                })
                .catch((err) => {
                    console.log("소셜로그인 에러", err);
                    window.alert("로그인에 실패하였습니다.");
                    history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
                })
        }
    };



    return console.log('kakao')
};


export default Oauth2Handler;