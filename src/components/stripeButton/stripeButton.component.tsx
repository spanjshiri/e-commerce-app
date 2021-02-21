import React from 'react'
import StripeCheckout, { Token } from 'react-stripe-checkout'

type props = {
    price: any
}

const StripeCheckoutButton = ({ price }: props) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51INMzqJydJOjyOnmDBJMbugPx3wzXkZWEnFuFJJo1bCY2pmhXsnbFOpdqqvRMfzUWIKi3wiq47Npl96Rkl0YcyJg00duT4yCv5';

    const onToken = (token: Token) => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;