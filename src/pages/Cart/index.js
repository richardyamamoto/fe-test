import React from 'react';
import { connect } from 'react-redux';
import { Add, Remove, Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { formatCurrency } from '../../util/index';

import { Container, ProductTable, Total } from './styles';

function Cart({ cart, total, dispatch }) {
  Cart.propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  function increment(product) {
    dispatch({
      type: '@cart/UPDATE_AMOUNT',
      action: product.amount + 1,
    });
  }

  function decrement(product) {
    dispatch({
      type: '@cart/UPDATE_AMOUNT',
      action: product.amount - 1,
    });
  }

  function removeFromCart(id) {
    dispatch({
      type: '@cart/REMOVE',
      id,
    });
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button">
                    <Remove
                      size={20}
                      color="#7159c1"
                      onClick={() => decrement(product)}
                    />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button">
                    <Add
                      size={20}
                      color="#7159c1"
                      onClick={() => increment(product)}
                    />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subtotal}</strong>
              </td>
              <td>
                <button type="button">
                  <Delete
                    size={20}
                    color="#7159c1"
                    onClick={() => removeFromCart(product.id)}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatCurrency(product.price * product.amount),
  })),
  total: formatCurrency(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

export default connect(
  mapStateToProps,
  null
)(Cart);
