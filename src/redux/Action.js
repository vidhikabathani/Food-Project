import axios from "axios"
import { ADD_PRODUCT, GET_PRODUCT } from "./ActionType"

export const signup=()=>{}
export const login=()=>{}
export const logout=()=>{}

export const add_product=(data)=>async(dispatch)=>{
    let products = await axios.post("http://localhost:3100/food", data)

    dispatch({
        type:ADD_PRODUCT,
        payload:products.data
    })
}
export const get_product=()=>async(dispatch)=>{
    let get=await axios.get("http://localhost:3100/food")

    dispatch({
        type:GET_PRODUCT,
        payload:get.data
    })  
}

export const add_cart=()=>{}
export const get_cart=()=>{}
export const remove_cart=()=>{}

export const book_table=()=>{}