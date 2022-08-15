import React, { useEffect } from "react";
import { Card } from "flowbite-react/lib/esm/components";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_PRODUCTS, QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import ProductItem from "../ProductItem";
function ProductList() {
  const [state, dispatch] = useStoreContext();
  const { currentCategory } = state;
  const { data } = useQuery(QUERY_ALL_PRODUCTS);
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
      return state.products;
    }
    return state.products.filter(product => product.category._id === currentCategory)
  }
  return (
    <div>
      {state.products.length ? (
        <div className="grid grid-cols-4 ">
          {filterProducts().map((product) => (
            <Card
            >
              <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}/>
            </Card>
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}
export default ProductList;