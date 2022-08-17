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
    <tr class="flex bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 w-32">
        <img src={`/images/${item.image}`} alt="Apple Watch" />
      </td>
      
      <td class="py-4 px-6 font-semibold text-gray-900 dark:text-white">
        {item.name}
      </td>
      <td class="py-4 px-6">
        <div class="flex items-center space-x-3">
          <div>
            <input type="number" id="first_product" value={item.purchaseQuantity} onChange={onChange} class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
          </div>
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