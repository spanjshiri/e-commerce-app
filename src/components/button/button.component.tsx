import React from 'react';
import { ButtonContainer } from './button.styles';

const CustomButton: any = ({ children, ...props }: any) => {

    return (
        <ButtonContainer {...props}>
            {children}
        </ButtonContainer>
    )
}

export default CustomButton;