import React from 'react';
import { connect } from 'react-redux';
import './car-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomBtn from '../custom-button/CustomBtn.component';
import CartItem from '../cart-item/Cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomBtn onClick={() => history.push('/checkout')}>
      GO TO CHECKOUT
    </CustomBtn>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
