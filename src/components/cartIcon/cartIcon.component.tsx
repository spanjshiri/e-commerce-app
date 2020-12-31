import React from 'react';

import './cartIcon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'; 

const CartIcon: any = (props: {toggleCartHidden: any}) => {

    const { toggleCartHidden } = props;

    return (
        <div className='cart-icon'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
            <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);