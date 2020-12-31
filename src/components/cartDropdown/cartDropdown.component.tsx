import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../button/button.component';
import CartItem from '../cartItem/cartItem.component';

import './cartDropdown.styles.scss';

const CartDropdown: any = (props: {cartItems: any}) => {
    const { cartItems } = props;

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map((cartItem: any) => {
                        return <CartItem key={cartItem.id} item={cartItem} />
                    })
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(CartDropdown);