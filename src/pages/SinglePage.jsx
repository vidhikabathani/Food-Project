import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddCart, Singleproduct } from "../redux/Action";

const SinglePage = () => {
    let { id } = useParams();
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(Singleproduct(id));
    }, []);
    let data = useSelector((store) => store.ProductReducer);

    // const handleCart = () => {
    //     dispatch(
    //         AddCart({
    //             img: data.single_product.url,
    //             title: data.single_product.title,
    //             price: data.single_product.price,
    //         })
    //     );
    // };
    return (
        <div className="w-50">
            <img src={data.single_product.url} className="w-25" alt="" />
            <p>{data.single_product.title}</p>
            <p>{data.single_product.price}</p>
            <button>ADD TO CART</button>
        </div>
    );
};

export default SinglePage;