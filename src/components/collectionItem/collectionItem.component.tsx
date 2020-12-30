import React from 'react';
import './collectionItem.styles.scss';

const CollectionItem: any = (props: { id: number, name: string, imageUrl: string, price: number }) => {

    const { name, imageUrl, price } = props;

    return (
        <div className='collection-item'>
            <div style={{ backgroundImage: `url(${imageUrl})` }} className='image' />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;