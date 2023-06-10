import React from 'react'
import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useEffect } from 'react';

const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useContext(AuthContext);
    const [cardError, setCardError] = useState("");
    const [clientSecret,setClientSecret] = useState("");

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/create_payment_intent`,{price},{
    //         method:"POST",
    //         headers:{
    //             "content-type":"application/json"
    //         },
    //     })
    //     .then((res)=>{
    //         console.log()
    //         setClientSecret(res)
    //     })
    // },[])

    const handleSubmit=async(event)=>{

        event.preventDefault();
        if(!stripe || !elements){
            return;
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
          <button className='text-base font-medium bg-[#05F3FF] rounded-md inline-block py-2 px-5 mt-4' type="submit" disabled={!stripe || clientSecret}>Pay</button>
        </form>
        {cardError && <p className='text-red-600'>{cardError}</p>}
    </div>
  )
}

export default CheckoutForm