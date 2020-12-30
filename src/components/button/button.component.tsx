import React from 'react';

import './button.styling.scss';

const CustomButton: any = (props: { children: any }) => {

    const { children, ...otherProps } = props;

    return (
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;