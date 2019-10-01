import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      background: #ff8c00;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      align-content: right;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#FF8C00')};
      }
    }
  }
`;
export const ProductTable = styled.table`
  width: 100%;
  thead th {
    color: #999;
    text-align: center;
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  span {
    display: block
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items:center;
  }
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 50px;
    text-align:end;
  }
  button {
    background: none;
    border: 0;
    border-radius: 50%;
    padding: 6px;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  margin-top: 30px;
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;

export const ClientForm = styled.form`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    div {
      margin: 10px;
      color: #000;

      label {
        margin-left: 10px;
      }
    }
  }
  #btn-submit {
    display: flex;
    justify-content: flex-end;

    button {
      background: #ff8c00;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: 15px;
      padding: 12px 20px;
      font-weight: bold;
      align-content: right;
      text-transform: uppercase;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.05, '#FF8C00')};
      }
    }
  }
`;
