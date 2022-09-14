import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { colors } from '../../lib/constants/colors';
import styled from 'styled-components';
import Card from './Card';

const ListComponent = () => {

  const [ post, setPost ] = useState([]);

  const fetchPost = async () => {
    
    // const response = await axios.get("http://localhost:3001/carrotposts"); 
    const response = await axios.get("http://3.36.71.186:8080/api/post"); 
    // console.log(response.data)
    console.log(response.data)

    setPost( response.data.data );
  }

  useEffect( () => {
    fetchPost();
  }, []);

  return (
    <>
      <StH1>우리동네 인기매물</StH1>
      <PostLayout>
        {/* <StHr/> */}
        {post&&post.map((item, index) => {
          return(
            <Card
              onClick={() => navigator(`/api/post:${item.postId}`)}
              key={item.postId}
              postImgUrl={item.postImgUrl}
              title={item.title}
              tag={item.tag}
              price={item.price}
              location={item.location}
              conetent={item.conetent}
              likeCount={item.likeCount}
            />
          )
        })}
      </PostLayout>
    </>
  )
}

export default  ListComponent;

const PostLayout = styled.div`
  width: 90%;
  margin: 0px auto;
  /* background-color: gray; */

  display: grid;
  /* align-items: center; */
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8%;
  
  @media screen and (max-width: 900px){
    /* width: 80%; */
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 40px;
  }
  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 50px;
  } 
`

const StH1 = styled.h1`
  /* margin-top: 50px; */
  /* margin-bottom: -30px; */
  margin-bottom: 80px;
  color: ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center; 
`

const StHr = styled.hr`
  margin-top: 50px;
  margin-bottom: 0px;

  border: 0px;
  border-top: 1px solid ${colors.lightgray};
`