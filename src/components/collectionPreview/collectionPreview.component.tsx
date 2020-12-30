import React from 'react';

import './collectionPreview.styles.scss';

import '../collectionItem/collectionItem.component';
import CollectionItem from '../collectionItem/collectionItem.component';

const CollectionPreview: any = (props: {title: string, items: Array<{id: number, name: string, imageUrl: string, price: number}>}) => {

    const { title, items } = props;

    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter((item, index) => index < 4)
                    .map(({id, ...otherCollectionItemProps}) => {
                        return <CollectionItem key={id} {...otherCollectionItemProps} />
                    })
                }
            </div>
        </div>
    )
} 

export default CollectionPreview;