import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//DB에서도 로그아웃
export const __logout = createAsyncThunk(
  "data/getComments",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post(`http://3.36.71.186:8080/api/auth/member/logout`,
        {
          headers: {
            "Authorization": localStorage.getItem("Authorization"),   //accesstoken
            "RefreshToken": localStorage.getItem("RefreshToken"),
          }
        });
    } catch (error) {
    }
  }
);


export const userSlice = createSlice({

  name: "user",
  initialState: {
    user: null //user has not loged in
  },
  reducers: {
    //로그인은 redux 안 씀
    // login: (state, action) => {
    //   state.user = action.payload;
    //   axios.post("http://3.38.192.170:8080/api/member/login", action.payload)
    // },
    logout(state) {
      localStorage.removeItem("Authorization")   //로그아웃은 token, username 제거
      localStorage.removeItem("RefreshToken")
      localStorage.removeItem("username")
    }
  },

  // extraReducers: {
  //   [__login.pending]: (state) => {
  //     state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
  //   },
  //   [__login.fulfilled]: (state, action) => {
  //     state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
  //     state.data = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
  //   },
  //   [__login.rejected]: (state, action) => {
  //     state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
  //     state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
  //   },
  // },

});



const kakaoLogin = (code) => {
  return function (history) {
    axios({
      method: "GET",
      url: `http://{3.36.71.186:8080/oauth/callback/kakao}?code=${code}`,
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
        history.replace("/login"); // 로그인 실패하면 로그인화면으로 돌려보냄
      })
  }
};



export const { logout } = userSlice.actions;
export default userSlice.reducer;
const actionCreators = { kakaoLogin };
export { actionCreators };