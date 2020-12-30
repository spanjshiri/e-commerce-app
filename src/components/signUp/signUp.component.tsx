import React from 'react';

import FormInput from '../formInput/formInput.component';
import CustomButton from '../button/button.component';

import { auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './signUp.styles.scss';

interface props {

}

interface state {
    displayName: string,
    email: string,
    password: string,
    confirmPassword: string
}

class SignUp extends React.Component<props, state> {
    constructor(props: any) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })
        } catch(error) {
            console.error(error);
        }
        
    }

    handleNameChange = (event: any) => {
        this.setState({ displayName: event.target.value });
    }

    handleEmailChange = (event: any) => {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange = (event: any) => {
        this.setState({ password: event.target.value });
    }

    handleConfirmPasswordChange = (event: any) => {
        this.setState({ confirmPassword: event.target.value });
    }

    render() {

        const {displayName, email, password, confirmPassword} = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        handleChange={this.handleNameChange}
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        label='Email'
                        handleChange={this.handleEmailChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label='Password'
                        handleChange={this.handlePasswordChange}
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        handleChange={this.handleConfirmPasswordChange}
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;