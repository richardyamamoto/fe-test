import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  min-width: 290px;
  div {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    align-items: center;

    strong {
      font-size: 24px;
      font-weight: bold;
    }

    span {
      font-size: 18px;
      color: #666;
      font-weight: 600;
      margin-top: 10px;
      > #span-value {
        color: #0275d8;
      }
    }
    img {
      margin-top: 15px;
      max-width: 200px;
      min-width: 200px;
    }

    button {
      margin-top: 20px;
      background: #ff8c00;
      font-weight: bold;
      text-transform: uppercase;
      span {
        color: #fff;
        margin: 0;
      }
      &:hover {
        background: ${darken(0.05, '#FF8C00')};
      }
    }
  }
`;
