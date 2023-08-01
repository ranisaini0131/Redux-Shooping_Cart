import React from 'react'
import { useGetItemsQuery, useAddItemsMutation, useUpdateItemsMutation, useDeleteItemsMutation } from './cartApi.jsx';

export function Cart() {
  
  const [item] = useAddItemsMutation();

  return (
    <div>
    <h1>Cart</h1>
    <div>
        {
          item && item.map(products =>
            <div className="card">
              <img src={products.thumbnail} alt={products.title} style={{ width: "100%" }} />
              <h2>{ products.title}</h2>
              <p className="price">{ `$ ${products.price}`}</p>
              <p>{ products.description}</p>
            <p>
                {/* <button onClick={() => dispatch(addToCart(products))}>Add to Cart</button>
                <br/> */}
            </p>
            </div>)
        }
      </div>
      </div>
  )
}

