import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../lib/constants/colors';

const Card = ({title, tag, price, location, content}) => {

  return (
    <CardArea>
      <ImgPostWrap>
        <ImgContatiner>
          {/* <img/> */}
        </ImgContatiner>
      </ImgPostWrap>

      <SaleBadge>판매완료</SaleBadge>
      <StTitle>{title}</StTitle>
      <div>
          <StPrice>{price}</StPrice>
          <span>{location}</span>
        <StStatus>
          <span>좋아요 999</span>
          <button>채팅</button>
        </StStatus>
      </div>
          
      
      
    </CardArea>
  )
}


export default Card;

const CardArea = styled.div`
  width: 90%;
  height: fit-content;
  /* background-color: ${colors.green}; */
  margin: 0px auto; 
  cursor: pointer;
`

const ImgPostWrap =styled.div`
  width: 100%;
  position: relative;
  :after{
    content: "";
    display: block;
    padding-bottom: 100%;

  }
`

const ImgContatiner = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  border: 1px solid ${colors.lightgray};
  border-radius: 1.5rem;
  background-color: ${colors.white};

`

const SaleBadge = styled.div`
  width: fit-content;
  margin: 0px auto;
  margin-top: 10px;
  padding: 6px 30px;
  color: ${colors.white};
  border: none;
  border-radius: 0.5rem;
  background-color: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StTitle = styled.h2`
  font-weight: 300;
`

const StPrice = styled.h3`
  margin-bottom: 10px;
`

const StStatus = styled.div`
  color: ${colors.lightgray};
  margin-right: 30px;
  display: flex;
  justify-content: space-between;

`