import React from 'react';

import './button.styling.scss';

const CustomButton: any = (props: { children: any, isGoogleSignIn: boolean, inverted: boolean }) => {

    const { children, isGoogleSignIn, inverted, ...otherProps } = props;

    return (
        <button className={`${inverted ? 'inverted': '' } ${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;