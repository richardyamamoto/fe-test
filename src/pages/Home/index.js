import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShoppingBasket } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { formatCurrency } from '../../util/index';
import { ProductList, Title } from './styles';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    amount: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatCurrency(product.price),
      partedPrice: formatCurrency(product.price / 12),
      discountedPrice: formatCurrency(product.price * 0.9),
    }));
    this.setState({ products: data });
    console.tron.log(data);
  }

  handleAddProduct = product => {
    const { dispatch } = this.props;
    dispatch({
      type: '@cart/ADD',
      product,
    });
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;
    return (
      <>
        <Title>Produtos</Title>
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <span>{product.title}</span>
              <strong>{product.formattedPrice}</strong>
              <span className="span-lighter">
                Em até 12x de {product.partedPrice}
              </span>
              <small>{product.discountedPrice} à vista (10% de desconto)</small>
              <Button
                type="button"
                onClick={() => this.handleAddProduct(product)}
              >
                <div>
                  <ShoppingBasket size={16} color="#fff" />
                  {amount[product.id]}
                </div>
                <span>ADICIONAR</span>
              </Button>
            </li>
          ))}
        </ProductList>
      </>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

export default connect(mapStateToProps)(Home);
