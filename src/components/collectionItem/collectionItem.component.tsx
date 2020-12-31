import React from 'react';
import CustomButton from '../button/button.component';
import './collectionItem.styles.scss';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

interface props {
    item: {
        id: number, 
        name: string, 
        imageUrl: string, 
        price: number
    }
}

const CollectionItem: any = (props: { item: {id: number, name: string, imageUrl: string, price: number}, addItem: any }) => {

    const { item: {name, imageUrl, price}, addItem, item } = props;

    return (
        <div className='collection-item'>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    addItem: (item: any) => dispatch(addItem(item))
})

export default connect<{}, {},props>(null, mapDispatchToProps)(CollectionItem);