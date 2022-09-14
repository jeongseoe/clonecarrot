import { useEffect, useCallback, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from "../../lib/constants/colors"
import camera from "./camera.svg"
import { useState } from 'react';



const PostComponent = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("Authorization"); //accesstoken 
  const refreshToken = localStorage.getItem("RefreshToken") //refreshToken

  // 초기값
  const initialState = {
    title: "",
    tag: "",
    price: "",
    content: "",
    location: ""
  }

  const [ post, setPost ] = useState(initialState); // post input value
  // const [ num, setNum ] = useState(0); // 숫자 콤마찍기 챌린지
  const [salePostImg, setSalePostImg] = useState(null); // img input value
  

  // Event Handler
  // Img Upload hadler
  const inputRef = useRef(null);
  const onUploadImg = useCallback((e)=>{
    if (!e.target.files) {
      return;
    }
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    setSalePostImg(formData)
    // console formData
    console.log(e.target.files[0].name);//여기까진 옴
    console.log("폼데이터", formData)
    for (const keyValue of formData) console.log(keyValue); // ["image", file] file은 객체
    console.log("세일즈포스트이미지:",salePostImg)
  }, []);




  // btn use ref
  const fileInputBtnClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);


  //
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(post)
    setPost({ ...post, [name]: value });
  }

  // const inputPriceFormat = (str) => {
  //   const comma = (str) => {
  //     str = String(str);
  //   }
  // }

  // axios
  const postHandler = async (event) => {

    event.preventDefault();
    if (post.title.trim() === "" || post.tag.trim() === "" || post.price.trim() === "" || post.content.trim() === "") {
      return alert("모든 칸을 채워주세요🥕")
    };

    try {

      const response = await axios.post("http://localhost:3001/carrotposts",
      // const response = await axios.post("http://3.36.71.186:8080/api/auth/post",
      {...post, salePostImg},
      // {form-data: formData},
      {
        headers: {
          // Authorization: `Bearer ${accessToken}`,
          // RefreshToken: `Bearer ${refreshToken}`, 
          'Content-Type': 'multipart/form-data',
        },
      }); 
      console.log("👏 Axios Work >>> ", response)
      console.log("🖼 formData >>> ", salePostImg)
      setPost(initialState)

      if (response.status === 200 || 201) {
        window.alert("매물이 등록되었습니다🥕")
        console.log("newPosting: ", response.data)
        navigate('/list') //go list
      } else {
        console.log("Not Ok")
        console.error(response)
      }

    } catch (error) {
      window.alert("🥒ERROR🥒")
      console.error(error);
      setPost(initialState)
    }
  };



  useEffect(() => {

  }, []);

  //제일 상위 div  -> form 으로 
  //location data는 어떻게 어디로 주는지?
  return(
    <div> 
    {/* <div key={post.id}>  */}
      <StH2>중고거래 글쓰기</StH2>
      <StHr/>
      <ComponentWrap >
        <ImgPostWrap>
          <ImgContainer onClick={fileInputBtnClick}>
          <input 
            name='saleContentsImg'
            type="file"
            accept='image/jpg, image/png, image/jpeg, image/gif'
            style={{ display: "none" }}
            ref={inputRef}
            onChange={onUploadImg}
          />
            {salePostImg===null
            ?<Camera src={camera} alt="camera"/>
            :<StImg src={salePostImg} alt="postImg"/>}
          </ImgContainer>
        </ImgPostWrap>
        <StBtn onClick={fileInputBtnClick}>이미지 업로드</StBtn>
        <StHr/>
          <StForm onSubmit={postHandler}>
            <DescWrap >
              <StInput 
                name="title"
                type="text"
                value={post.title}
                onChange={onChangeHandler}
                placeholder="글 제목"
                maxLength="20" 
              />
              <StSelect 
                name='tag' 
                type="text"
                defaultValue="default"
                onChange={onChangeHandler}
                required
              >
                <StOption value="default" disabled >카테고리 선택</StOption>
                <option value="device">디지털기기</option>
                <option value="furniture">가구/인테리어</option>
                <option value="cloth">의류</option>
                <option value="books">도서</option>
                <option value="others">기타 중고물품</option>
              </StSelect>
              {/* <StInput 
                name="price" 
                type="text"
                value={num}
                onChange={(e)=> setNum(inputPriceFormat(e.target.value))}
                placeholder='₩ 가격'
                min="0"
                /> */}
              <StInput 
                name="price" 
                type="number"
                value={post.price}
                onChange={onChangeHandler}
                placeholder='₩ 가격'
                min="0"
                />
              <StTextarea 
              name="content" 
              type="text"
              value={post.content}
              onChange={onChangeHandler}
              maxLength="500" 
              placeholder='당근마켓에 올릴 게시글 내용을 작성해주세요.'/>
            </DescWrap>
            <StHr/>
            <StBtn type="submit">내 매물 올리기</StBtn>
          </StForm>
          
      </ComponentWrap>
    </div>
  )
}

export default PostComponent;

const ComponentWrap = styled.div`
  width: 40vw;
  margin: 0px auto;
  
  /* background-color: green; */
  `

const StH2 = styled.h2`
  /* margin-top: 50px; */
  margin-bottom: -30px;
  color: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center; 
`

const ImgPostWrap = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 50px;
  position: relative;

  :after{
    content: "";
    display: block;
    padding-bottom: 90%;

  }
`

const ImgContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  border: 2px solid ${colors.lightgray};
  border-radius: 10px;
  background-color: ${colors.white};

  cursor: pointer;
`

const Camera = styled.img`
  filter: invert(88%) sepia(0%) saturate(0%) hue-rotate(156deg) brightness(80%) contrast(84%);
  height: 20%;
  padding-top: 35%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
`

const StBtn = styled.button`
  width: 18vw;
  margin: 20px auto;
  color: ${colors.white};
  background-color: ${colors.orange};;

  font-size: 1rem;
  font-weight: 800;

  border: none;
  border-radius: 0.6rem;
  
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  
  ::after{
    content: "";
    padding-bottom: 17%;
  }
`

const StHr = styled.hr`
  margin-top: 50px;
  margin-bottom: 0px;

  border: 0px;
  border-top: 1px solid ${colors.lightgray};
`

const StForm = styled.form`
  
`

const DescWrap = styled.div`
  width: 98%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`

const StInput = styled.input`
  width: 100%;
  height: 4em;
  border: 0px;
  padding-left: 10px;
  border-bottom: 1px solid ${colors.lightgray};
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button{
    -webkit-appearance: none;
  }
  ::placeholder{
    color: ${colors.gray}
  }
`

const StSelect = styled.select`
  width: 100%;
  height: 4em;
  padding-left: 5px;
  border: 0px;
  border-bottom: 1px solid ${colors.lightgray};
  color: ${colors.gray} ;
  ::selection{
    color: ${colors.black};
  }
`

const StOption = styled.option`
  color: ${colors.gray} ;
  display: none;
`

const StTextarea = styled.textarea`
  width: 100%;
  height: 12em;
  border: 0px;
  padding-top: 20px;
  padding-left: 10px;
  
  

  ::placeholder{
    color: ${colors.gray};
    padding-left: 5px;
  }
  
`

const StDiv = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
`