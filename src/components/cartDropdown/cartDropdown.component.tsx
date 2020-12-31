import React from 'react';

import CustomButton from '../button/button.component';

import './cartDropdown.styles.scss';

const CartDropdown: any = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown