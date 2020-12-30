import React, { ChangeEventHandler } from 'react'

import './formInput.styles.scss';

const FormInput = (props: {handleChange: ChangeEventHandler, label: string, name: string, type: string, value: any, required?: any }) => {

    const {handleChange, label, ...otherProps } = props;
    
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps}/>
            {
                label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label> :
                null
            }
        </div>
    )
}

export default FormInput;