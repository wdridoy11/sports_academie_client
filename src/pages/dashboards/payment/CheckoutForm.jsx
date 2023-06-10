import React from 'react'
import { CardElement, lements, useElements, useStripe} from '@stripe/react-stripe-js'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [cardError, setCardError] = useState("");
    const [clientSecret,setClientSecret] = useState("");

    const handleSubmit=async(event)=>{

        event.preventDefault();
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type:"card",
            card
        });

        if(error){
            console.log("Error",error)
            setCardError(error.message)
        }else{
            setCardError("")
            console.log("Payment Method",paymentMethod)
        }

        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method:{
                    card:card,
                    billing_details:{
                        email:user?.email || "Unknown",
                        name:user?.displayName || "anonymous"
                    }
                }
            }
        )
        if(confirmError){
            console.log(confirmError)
        }
        console.log(paymentIntent)

    }

  return (
    <div>
         <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button type="submit" disabled={!stripe || clientSecret}>Pay</button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
    </div>
  )
}

export default CheckoutForm