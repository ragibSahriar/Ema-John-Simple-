import React from 'react';

const Cart = ({cart}) => {
   let total = 0;
   let totalShipping = 0;
//    let amount = 0;
   for (const product of cart){
    total = total + product.price;
    totalShipping = total + product.shipping;
    
   }
   let tax = total*7/100;
   const grandTotal =total+totalShipping+tax;
    return (
        
            <div className="col-span-1 text-center border w-25">
        <p>Cart Here</p>
        <p>Total Products: {cart.length}</p>
        <p>Total Spend: {total}</p>
        <p>Shipping Cost: {totalShipping}</p>
        <p>Tax: {tax}</p>
        <h2>Total Amount: {grandTotal}</h2>
        
      </div>
        
    );
};

export default Cart;