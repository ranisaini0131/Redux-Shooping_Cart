import './Products.css';
import { useDispatch } from 'react-redux';

import { addToCart } from '../cart/cartSlice.jsx';
import {  useGetProductsQuery } from './productsAPI.jsx';

export function Products() {

  const { data } = useGetProductsQuery()
  const dispatch = useDispatch();


  return (
    <div>
      <h1>Products</h1>
      <div>
        {
          data && data.map(products =>
            <div className="card">
              <img src={products.thumbnail} alt={products.title} style={{ width: "100%" }} />
              <h2>{ products.title}</h2>
              <p className="price">{ `$ ${products.price}`}</p>
              <p>{ products.description}</p>
            <p>
                <button onClick={() => dispatch(addToCart(products))}>Add to Cart</button>
                <br/>
            </p>
            </div>)
        }
      </div>
      
    </div>
  );
}
