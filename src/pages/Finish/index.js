import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { formatCurrency } from '../../util';
import finish from '../../assets/images/finish.png';

function Finish({ client, cartTotal }) {
  Finish.propTypes = {
    client: PropTypes.shape({
      client: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
    cartTotal: PropTypes.string.isRequired,
  };
  return (
    <Container>
      <strong>{client[0].name}</strong>
      <span>Sua compra de {cartTotal} foi realizada com sucesso!</span>
      <img src={finish} alt="Finish" />
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
