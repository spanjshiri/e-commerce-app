import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collectionPreview/collectionPreview.component';

import './collectionsOverview.styles.scss';

interface props {
    collections: Array<{ id: number, title: string, routeName: string, items: Array<{ id: number, name: string, imageUrl: string, price: number }> }>
}

const CollectionsOverview: any = ({ collections }: props) => {
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionPreviewProps }) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionPreviewProps} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);