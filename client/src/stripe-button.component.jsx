import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =  "pk_test_51ISvneGzGi3lY8MkMCvY5q78CLMTSDh1Z0rH1Jk4BvFOXBmhH6cGRDdKfPK3UcaGBgfTFy4tDC11Md4FFYsKX97o00S03Mmjhe";


  const onToken = token => { 
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='subscribe'
      name='Netflix-clone'
      billingAddress
      shippingAddress
      image='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
