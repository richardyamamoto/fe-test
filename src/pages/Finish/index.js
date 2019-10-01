import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles';
import { formatCurrency } from '../../util';

function Finish({ client, cartTotal }) {
  return (
    <Container>
      <strong>{client[0].name}</strong>
      <span>Sua compra de {cartTotal} foi realizada com sucesso!</span>
    </Container>
  );
}

export default connect(state => ({
  client: state.user.map(u => ({
    ...u.client,
  })),
  cartTotal: formatCurrency(
    state.cart.reduce((total, product) => {
      return total + product.amount * product.price;
    }, 0)
  ),
}))(Finish);
