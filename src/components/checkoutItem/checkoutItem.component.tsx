import React from 'react'
import { connect } from 'react-redux';
import {  addItem, removeItem, clearItemFromCart } from '../../redux/cart/cart.actions';

import './checkoutItem.styles.scss';

interface props {
    item: {
        imageUrl: string, 
        price: number, 
        name: string, 
        quantity: any
    }, 
}

const CheckoutItem: any = (props: {item: {imageUrl: string, price: number, name: string, quantity: any}, clearItem: any, addItem: any, removeItem: any}) => {

    const { item: {imageUrl, price, name, quantity}, clearItem, addItem, removeItem, item } = props;

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(item)}>&#10094;</div>
                <span className='value'>
                    {quantity}
                </span>
                <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    clearItem: (item: any) => dispatch(clearItemFromCart(item)),
    addItem: (item: any) => dispatch(addItem(item)),
    removeItem: (item: any) => dispatch(removeItem(item))
})

export default connect<{}, {},props >(null, mapDispatchToProps)(CheckoutItem);