import React from 'react'

import './checkoutItem.styles.scss';

const CheckoutItem: any = (props: {item: {imageUrl: string, price: number, name: string, quantity: any}}) => {

    const { item: {imageUrl, price, name, quantity} } = props;

    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;