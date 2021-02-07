import React from 'react';

import './collection.styles.scss';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collectionItem/collectionItem.component';

const CollectionPage = ({ collection }: any) => {
    const { title, items } = collection
    return (
        <div className='collection-page'>
            <h2 className='title'>{ title }</h2>
            <div className='items'>
                {
                    items.map((item: any) => {
                        return <CollectionItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state: any, ownProps: any) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);