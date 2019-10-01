import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  text-decoration: none;
  font-size: 14px;
  color: #999;
  padding: 10px;
  align-items: center;
  transition: background 0.25s;
  &:hover {
    background: ${lighten(0.25, '#999')};
    padding: 10px;
    border-radius: 4px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 26px;
  font-weight: bold;
  color: #999;
  margin: 15px 0;
  justify-content: space-between;
`;

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
  min-width: 290px;
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
  @media (max-width: 650px) {
    padding: 0;
    min-width: 290px;
  }
`;
export const ProductTable = styled.table`
  width: 100%;
  min-width: 290px;
  transition-property: border;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;

  border: ${props => (props.error ? '0.5px solid #ff0000' : 0)};
  border-radius: 4px;
  small {
    margin: 10px auto;
    text-align: center;
    color: #999;
    font-size: 14px;
  }
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
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    align-items: center;
  }
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 50px;
    text-align: center;
  }
  button {
    background: none;
    border: 0;
    border-radius: 50%;
    padding: 6px;
  }
  @media (max-width: 650px) {
    min-width: 290px;
    thead th {
      padding: 0;
      min-width: 50px;
    }

    tbody td {
      padding: 0;
      min-width: 50px;
    }

    img {
      height: 50px;
      border-radius: 50%;
    }

    strong {
      font-size: 12px;
    }

    input {
      padding: 2px;
      max-width: 35px;
      font-size: 12px;
    }

    div {
      flex-direction: column-reverse;
    }
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
  @media (max-width: 650px) {
    margin-right: 10px;
  }
`;

export const ClientForm = styled.form`
  div {
    display: flex;
    flex: 1;
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
    min-width: 320px;

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
  @media (max-width: 650px) {
    div {
      flex-direction: column;
      flex: 1;
      margin: 0;
      + div {
        margin-top: 0;
      }
    }
  }
`;
