import React from 'react';
import CustomButton from '../button/button.component';
import FormInput from '../formInput/formInput.component';

import './signIn.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils';

interface props {

}

interface state {
    email: string,
    password: string
}

class SignIn extends React.Component<props, state> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleEmailChange = (event: any) => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = (event: any) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account </h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        handleChange={this.handleEmailChange}
                    // required 
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='password'
                        handleChange={this.handlePasswordChange}
                    // required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In With Google{' '}
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;