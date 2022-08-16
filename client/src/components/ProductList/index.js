import React, { useEffect } from "react";
//import { Card } from "flowbite-react/lib/esm/components";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import ProductItem from "../ProductItem";
function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { data } = useQuery(QUERY_PRODUCTS);
  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      })
    }
  }, [data, dispatch])
  function filterProducts() {
    if (!currentCategory) {
      const arr = state.products;

      const uniqueIds = [];

      const uniqueProducts = arr.filter(element => {
        const isDuplicate = uniqueIds.includes(element.name);
    
        if (!isDuplicate) {
          uniqueIds.push(element.name);
    
          return true;
        }
    
        return false;
      });
    
      // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
      return uniqueProducts
    }

    return state.products.filter(product =>
      product.category._id === currentCategory)
  }


  return (
    <div>
      <h1 className="text-7xl text-center mb-10">Products</h1>
      {state.products.length ? (
        <div className="grid grid-cols-4 gap-6 pb-4" >
          {filterProducts().map((product) => (

            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}
export default ProductList;