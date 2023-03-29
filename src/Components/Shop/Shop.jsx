import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import Cart from './../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    // button handlers
    const handleAddToCart = (product) => {
      const newCart = [...cart, product];
      setCart(newCart);
  }

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

  return (
    <div class="grid grid-cols-6 gap-2">
      <div className="col-span-5 w-200 ">
        <p class="text-center border ">Products Here {products.length}</p>
        <div className="grid grid-cols-3">
        {
            products.map(product => 
            <Product 
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            >

            </Product>)
        }
        
        </div>
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
