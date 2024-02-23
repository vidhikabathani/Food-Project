import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product } from "../redux/Action";
import { NavLink } from "react-router-dom";

function Menu() {
    let dispatch = useDispatch();
    let { product } = useSelector((store) => store.ProductReducer);

    useEffect(() => {
        dispatch(get_product());
    }, [dispatch]);

    return (
        <div className="container p-100 flex center justify-between">
            <h1>PIZZA</h1>
            {product.map((ele) => {
            if (ele.category == "pizza") {
                return (
                    <div className="main-div col-4">
                        <NavLink to={`/product/${ele.id}`}>
                            <img src={ele.url} alt="" />
                            <h3>{ele.title}</h3>
                            <h5 className="f-blue">Rs. {ele.price}</h5>
                            <p> dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
                        </NavLink>
                    </div>
                );
            }
            })}

            <h1>SANDWICH</h1>
            {product.map((ele) => {
                if (ele.category == "sandwich") {
                    return (
                        <div className="main-div col-4">
                            <NavLink to={`/product/${ele.id}`}>
                                <img src={ele.url} alt="" />
                                <h3>{ele.title}</h3>
                                <h5 className="f-blue">Rs. {ele.price}</h5>
                                <p> dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
                            </NavLink>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default Menu;
