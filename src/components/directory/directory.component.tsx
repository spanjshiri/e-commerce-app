import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

interface props {
    sections: Array<{
        title: string,
        imageUrl: string,
        size?: string,
        id: number,
        linkUrl: string
    }>
}

const Directory : any = ({ sections }: props) => {

    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSectionProps }) => {
                    return (
                        <MenuItem key={id} {...otherSectionProps} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);