import React from 'react';
import './car-dropdown.styles.scss';

import CustomBtn from '../custom-button/CustomBtn.component';

const CartDropdown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomBtn>GO TO CHECKOUT</CustomBtn>
  </div>
);

export default CartDropdown;
