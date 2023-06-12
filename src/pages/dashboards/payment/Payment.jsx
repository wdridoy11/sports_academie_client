
import React from 'react'
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// const stripePromise ="pk_test_51NFVqkL2EQkVMTRmomXyyQc9rvPLCCbSVgOAMSWnq6HLwmYTuSHAm8MsaLyKaUBLUhvUZUbUeeEJUV2ScjpY664K00ktiINTfG"
const stripePromise = loadStripe(process.env.REACT_APP_Payment_Gateway_PK)

const Payment = () => {
  return (
    <div className='w-full'>
        <div>
            <div className='w-full md:w-1/2 shadow-lg p-5 rounded-md mx-auto'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    </div>
  )
}
// console.log(stripePromise)
export default Payment