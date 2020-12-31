import React from 'react';

import './cartItem.styles.scss';

const CartItem = (props: { item: {imageUrl: string, price: number, name: string, quantity: any} }) => {

    const {item: {imageUrl, price, name, quantity}} = props;

    return(
        <div className='cart-item'>
            <img src={imageUrl} alt='item' />
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )
}

export default CartItem;