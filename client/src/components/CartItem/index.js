import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_ITEM, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeItem = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_ITEM,
        _id: item._id
      });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
    }
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="p-4 w-32">
        <img src={`/images/${item.image}`} alt="Apple Watch"/>
    </td>
    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
      {item.name}
    </td>
    <td class="py-4 px-6">
        <div class="flex items-center space-x-3">
            <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Quantity button</span>
                <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div>
                <input type="number" id="first_product"  value={item.purchaseQuantity} onChange={onChange} class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
            </div>
            <button class="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <span class="sr-only">Quantity button</span>
                <svg class="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    </td>
    <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
        ${item.price}
    </td>
    <td class="py-4 px-6">
       <span onClick={() => removeItem(item)} class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</span>
        
    </td>
</tr>
  );
}

export default CartItem;