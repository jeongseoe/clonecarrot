import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { colors } from '../../lib/constants/colors';
import styled from 'styled-components';
import Card from './Card';

const ListComponent = () => {

  const [ post, setPost ] = useState([]);

  const fetchPost = async () => {
    const response = await axios.get("http://localhost:3001/carrotposts"); 
    console.log(response.data)

    setPost( response.data );
  }

  useEffect( () => {
    fetchPost();
  }, []);

  return (
    <div>
      리스트 컴포넌트
      <Card/>
    </div>
  )
}

export default  ListComponent;