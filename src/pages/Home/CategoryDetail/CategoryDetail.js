import React from 'react';
import { useParams } from 'react-router';
import useFoodItems from '../../../Hooks/useFoodItems';

const CategoryDetail = () => {
    const { catId, category } = useParams();
    const { foods } = useFoodItems();
    return (
        <div>
            <h2>This is Food detail: {catId}</h2>
            <h2>{category}</h2>
            <img src={foods?.image} alt="" />
        </div>
    );
};

export default CategoryDetail;