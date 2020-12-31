import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../button/button.component';
import CartItem from '../cartItem/cartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { withRouter } from 'react-router-dom';
import './cartDropdown.styles.scss';

const CartDropdown: any = (props: {cartItems: any, history: any, dispatch: any}) => {
    const { cartItems, history, dispatch } = props;

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length > 0 ?
                    cartItems.map((cartItem: any) => {
                        return <CartItem key={cartItem.id} item={cartItem} />
                    })
                    :
                    <span className='empty-message'>The cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));