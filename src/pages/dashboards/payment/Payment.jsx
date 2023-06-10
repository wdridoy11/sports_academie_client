import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import CheckoutForm from './CheckoutForm';
const stripePromise = process.env.REACT_APP_Payment_Gateway_PK;
const Payment = () => {
  return (
    <div>
        <div>
            <div className='w-full md:w-1/2'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    </div>
  )
}

export default Payment