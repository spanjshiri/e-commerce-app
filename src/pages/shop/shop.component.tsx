import React from 'react';

import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collectionPreview/collectionPreview.component';

interface props {

}

interface state {
    collections: Array<{ id: number, title: string, routeName: string, items: Array<{ id: number, name: string, imageUrl: string, price: number }> }>
}

class ShopPage extends React.Component<props, state> {
    constructor(props: any) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop=page'>
                {
                    collections.map(({id, ...otherCollectionPreviewProps}) => {
                        return(
                            <CollectionPreview key={id} {...otherCollectionPreviewProps} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;
