import React from 'react';
import './signInAndSignUp.styles.scss';

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/signUp/signUp.component';

const SignInAndSignUp: any = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp;