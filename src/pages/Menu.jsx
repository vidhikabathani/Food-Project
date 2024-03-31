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
        <div className="p-50 flex center justify-between capitalize">

            <div className="menu-bg">
                <div className="container">
                    <h1 className="text-white banner-head">OUR MENU</h1>
                </div>
            </div>
            <div className="container">
            <div className="row my-5">
                <h1 className="Greate-vibe fs-1 f-primary">Pizza</h1>
                {product.map((ele) => {
                    if (ele.category == "pizza") {
                        return (
                            <div className="main-div col-md-6 col-12">
                                <NavLink to={`/product/${ele.id}`} className="text-decoration-none text-dark">
                                    <div id="flex" className="p-2">
                                        <div className="rounded-circle overflow-hidden my-2" id="img-div"> <img src={ele.url} alt="" /></div>
                                        <div className="px-3">
                                            <h3>{ele.title}</h3>
                                            <p> dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
                                        </div>
                                        <h5 className="f-blue">$ {ele.price}</h5>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="row my-5">
                <h1 className="Greate-vibe fs-1 f-primary">Vegetables</h1>
                {product.map((ele) => {
                    if (ele.category == "vegetables") {
                        return (
                            <div className="main-div col-md-6 col-12">
                                <NavLink to={`/product/${ele.id}`} className="text-decoration-none text-dark">
                                    <div id="flex" className="p-2">
                                        <div className="rounded-circle overflow-hidden" id="img-div"> <img src={ele.url} alt="" /></div>
                                        <div className="px-3">
                                            <h3>{ele.title}</h3>
                                            <p> dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
                                        </div>
                                        <h5 className="f-blue">$ {ele.price}</h5>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    }
                })}
            </div>
            <div className="row my-5">
                <h1 className="Greate-vibe fs-1 f-primary">Wine</h1>
                {product.map((ele) => {
                    if (ele.category == "wine") {
                        return (
                            <div className="main-div col-md-6 col-12">
                                <NavLink to={`/product/${ele.id}`} className="text-decoration-none text-dark">
                                    <div id="flex" className="p-2">
                                        <div className="rounded-circle overflow-hidden" id="img-div"> <img src={ele.url} alt="" /></div>
                                        <div className="px-3">
                                            <h3>{ele.title}</h3>
                                            <p> dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
                                        </div>
                                        <h5 className="f-blue">$ {ele.price}</h5>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    }
                })}
            </div><div className="row my-5">
                <h1 className="Greate-vibe fs-1 f-primary">Pasta</h1>
                {product.map((ele) => {
                    if (ele.category == "pasta") {
                        return (
                            <div className="main-div col-md-6 col-12
                            ">
                                <NavLink to={`/product/${ele.id}`} className="text-decoration-none text-dark">
                                    <div id="flex" className="p-2">
                                        <div className="rounded-circle overflow-hidden" id="img-div"> <img src={ele.url} alt="" /></div>
                                        <div className="px-3">
                                            <h3>{ele.title}</h3>
                                            <p> dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
                                        </div>
                                        <h5 className="f-blue">$ {ele.price}</h5>
                                    </div>
                                </NavLink>
                            </div>
                        );
                    }
                })}
            </div>  
            </div>
            
        </div>
    );
}

export default Menu;
