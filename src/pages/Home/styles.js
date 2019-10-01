import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  list-style: none;
  width: 100%;
  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 0 4px 0px #333;
    }
    img {
      align-self: center;
      max-width: 150px;
      margin: auto;
    }
    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #666;
    }
    > span {
      font-size: 16px;
      font-weight: bold;
      margin: auto 0px;
    }
    button {
      background: #0275d8;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      display: flex;
      align-items: center;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#0275d8')};
      }
      div {
        display: flex;
        align-items: center;
        padding: 5px;
        svg {
          margin-right: 5px;
        }
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
      }
    }
    .span-lighter {
      color: #999;
      font-size: 14px;
      font-weight: 200;
      margin: 0;
      align-items: baseline;
    }
    small {
      color: #999;
      font-size: 14px;
      font-weight: 200;
      margin-bottom: 10px;
      align-items: baseline;
    }
  }
  @media (max-width: 1140) {
    grid-template-columns: minmax(auto-fill, 225px);
  }
`;
