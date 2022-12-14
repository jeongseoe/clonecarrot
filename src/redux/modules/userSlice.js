import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//DB에서도 로그아웃
export const __logout = createAsyncThunk(
  "data/getComments",
  async (payload, thunkAPI) => {
    try {
      console.log(localStorage.getItem);
      const data = await axios.post(`http://3.36.71.186:8080/api/auth/member/logout`, null,
        {
          headers: {
            "Authorization": localStorage.getItem("Authorization"),   //accesstoken
            "RefreshToken": localStorage.getItem("RefreshToken"),
          }
        });
    } catch (error) {
      console.log('로그아웃 실패')
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
      localStorage.removeItem("nickname")
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





export const { logout } = userSlice.actions;
export default userSlice.reducer;
