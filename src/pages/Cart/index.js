import React from 'react';
import { connect } from 'react-redux';
import { Add, Remove, Delete } from '@material-ui/icons';
import { IconButton, TextField, Button } from '@material-ui/core';

import PropTypes from 'prop-types';
import { formatCurrency } from '../../util/index';

import {
  Container,
  ProductTable,
  Total,
  ClientForm,
  Title,
  BackLink,
} from './styles';

const genres = [
  {
    value: '',
    label: '',
  },
  {
    value: 'feminino',
    label: 'Feminino',
  },
  {
    value: 'masculino',
    label: 'Masculino',
  },
  {
    value: 'nao-informado',
    label: 'Não informar',
  },
];

function Cart({ cart, cartSize, total, dispatch, history }) {
  Cart.propTypes = {
    dispatch: PropTypes.func.isRequired,
    cart: PropTypes.objectOf(PropTypes.array).isRequired,
    total: PropTypes.string.isRequired,
    history: PropTypes.func.isRequired,
    cartSize: PropTypes.number.isRequired,
  };
  const [values, setValues] = React.useState({
    genre: '',
    error: false,
  });

  const increment = product => {
    dispatch({
      type: '@cart/UPDATE_AMOUNT',
      ...product,
      amount: product.amount + 1,
    });
  };

  const decrement = product => {
    dispatch({
      type: '@cart/UPDATE_AMOUNT',
      ...product,
      amount: product.amount - 1,
    });
  };

  const removeFromCart = id => {
    dispatch({
      type: '@cart/REMOVE',
      id,
    });
  };

  const handleChange = eventName => event => {
    setValues({ ...values, [eventName]: event.target.value });
  };

  const handleSubmit = event => {
    try {
      if (cartSize <= 0) throw new Error('Cart must have items');
      event.preventDefault();
      dispatch({
        type: '@user/ADD_DATA',
        ...values,
      });
      setValues({ error: false });
      history.push('/finish');
    } catch (err) {
      event.preventDefault();
      setValues({ error: true });
    }
  };
  return (
    <>
      <Title>
        Carrinho
        <BackLink to="/">Voltar para Produtos</BackLink>
      </Title>
      <Container>
        <ProductTable error={values.error}>
          {cartSize <= 0 ? (
            <div>
              <small>Carrinho vazio</small>
            </div>
          ) : (
            <>
              <thead>
                <tr>
                  <th label="img" />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th label="delete-btn" />
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr key={product.title}>
                    <td>
                      <img src={product.image} alt={product.title} />
                    </td>
                    <td>
                      <strong>{product.title}</strong>
                      <span>{product.priceFormatted}</span>
                    </td>
                    <td>
                      <div>
                        <IconButton
                          type="button"
                          onClick={() => decrement(product)}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <input type="number" readOnly value={product.amount} />
                        <IconButton
                          type="button"
                          onClick={() => increment(product)}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </div>
                    </td>
                    <td>
                      <strong>{product.subtotal}</strong>
                    </td>
                    <td>
                      <IconButton
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </>
          )}
        </ProductTable>
        <Total>
          <span>Total</span>
          <strong>{total}</strong>
        </Total>
      </Container>
      <footer>
        <ClientForm onSubmit={handleSubmit}>
          <div>
            <TextField
              InputLabelProps={{ required: false }}
              margin="dense"
              required
              placeholder="Nome"
              name="name"
              label="Nome"
              type="text"
              onChange={handleChange('name')}
            />
            <TextField
              InputLabelProps={{ required: false }}
              margin="dense"
              required
              placeholder="E-mail"
              name="email"
              label="E-mail"
              type="email"
              onChange={handleChange('email')}
            />
            <TextField
              InputLabelProps={{ required: false }}
              required
              select
              label="Sexo"
              value={values.genre}
              SelectProps={{
                native: true,
              }}
              onChange={handleChange('genre')}
            >
              {genres.map(genre => (
                <option key={genre.value} value={genre.value}>
                  {genre.label}
                </option>
              ))}
            </TextField>
          </div>
          <div id="btn-submit">
            <Button type="submit">Finalizar pedido</Button>
          </div>
        </ClientForm>
      </footer>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatCurrency(product.price * product.amount),
  })),
  cartSize: state.cart.length,
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
