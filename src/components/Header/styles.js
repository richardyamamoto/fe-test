import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  background: #fff;
  padding: 30px;
  min-width: 290px;
  border-radius: 4px;
  img {
    max-width: 130px;
    min-width: 100px;
  }

  @media (max-width: 320px) {
    padding: 20px;
    margin: 10px 0;
    min-width: 290px;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: block;
      color: #999;
    }
    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
