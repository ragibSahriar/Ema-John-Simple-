import React, { useEffect, useState } from "react";
import Product from "../product/Product";

const Shop = () => {
    const [products, setProducts] = useState([]);

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
            >

            </Product>)
        }
        
        </div>
      </div>
      <div className="col-span-1 text-center border w-25">
        <p>Cart Here</p>
        
      </div>
    </div>
  );
};

export default Shop;
