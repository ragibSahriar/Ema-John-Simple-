import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    
    const {img, name, seller, quantity, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart
    return (
        <div>
            <div className="card w-fixed bg-base-100 shadow-xl gap-2 ">
  <figure className="px-10 pt-10 ">
    <img src={img} alt="" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="font-bold text-xl">Price: {price}</p>

    <p>Manufacturer: {seller}</p>
    <p>Rating : {ratings} Stars</p>
    {/* <p></p> */}
    <div className="card-actions">
      <button onClick={()=> handleAddToCart(props.product)} className="btn px-20 bg-orange-300 text-black">
        Add To Cart<FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Product;