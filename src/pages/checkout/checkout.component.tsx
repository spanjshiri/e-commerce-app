import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = (props: {cartItems: any, total: number}) => {

    const { cartItems, total } = props;

    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem: any) => {
                    return <CheckoutItem key={cartItem.id} item={cartItem} />
                })
            }
            <div className='total'>
                <span>TOTAL: {total}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);