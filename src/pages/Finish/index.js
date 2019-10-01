import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Container } from './styles';
import { formatCurrency } from '../../util';
import finish from '../../assets/images/finish.png';

function Finish({ client, cartTotal, dispatch, history }) {
  Finish.propTypes = {
    client: PropTypes.shape({
      client: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
    cartTotal: PropTypes.string.isRequired,
  };

  const handleClick = () => {
    dispatch({
      type: 'RESET',
    });
    history.push('/');
  };
  return (
    <Container>
      <div>
        <strong>{client[0].name}</strong>
        <span>
          Sua compra no valor <span id="span-value">{cartTotal}</span> foi
          finalizada com sucesso!
        </span>
        <img src={finish} alt="Finish" />
        <Button onClick={handleClick}>Iniciar nova compra</Button>
      </div>
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
