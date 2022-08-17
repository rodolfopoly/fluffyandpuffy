import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';

function CategoryMenu() {
    const [state, dispatch] = useStoreContext();

    const { categories } = state;

    const { data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories,
            });
        }
    }, [categoryData, dispatch]);

    const handleClick = (id) => {
        console.log(id);
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
    };


    return (
        <>
            {categories.map((item) => (
                <button>
                <a
                    key={item._id}
                    onClick={() => {
                        handleClick(item._id);
                    }}
                >
                    {item.name}
                    </a>
                </button>
            ))}
        </>
    );
}

export default CategoryMenu;
