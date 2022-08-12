import React, { useEffect } from "react";
import { useQuery } from '@apollo/client';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/action'
import { useStoreContext } from '../../utils/GlobalState'
import { Navbar } from "flowbite-react/lib/esm/components";
import { QUERY_CATEGORIES } from "../../utils/queries";
function CategoryMenu() {
    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { data: categoryData } = useQuery(QUERY_CATEGORIES);
    useEffect(() => {
      // if categoryData exists or has changed from the response of useQuery, then run dispatch()
      if (categoryData) {
        // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categoryData.categories
        });
      }
    }, [categoryData, dispatch]);
    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    };
    return (
       
        <div>
            {categories.map((item) => (
                <Navbar.Link
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                >
                    {item.name}
                </Navbar.Link>
            ))}
        </div>
    )
}
export default CategoryMenu;