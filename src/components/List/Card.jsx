import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../lib/constants/colors';

const Card = () => {

  return (
    <CardWrap>
      <ImgContatiner>
        {/* <img/> */}
      </ImgContatiner>
      <div>

      </div>
      <SaleBadge>판매완료</SaleBadge>
      <h3>타이틀</h3>
      <div>
        <div>
          <span>가격</span><span>얼마</span>
        </div>
        <div>
          <span>위치</span><span>어디</span>
        </div>
        <div>
          <span>좋아요</span><span>999</span>  
        </div>
        
      </div>
      
      <button>채팅</button>
    </CardWrap>
  )
}


export default Card;

const CardWrap = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${colors.green};
`

const ImgContatiner = styled.div`
  width: 90%;
  height: 90%;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightgray};
  border-radius: 8px;
`

const SaleBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`