import React from 'react';

import './button.styling.scss';

const CustomButton: any = (props: { children: any, isGoogleSignIn: boolean }) => {

    const { children, isGoogleSignIn, ...otherProps } = props;

    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;