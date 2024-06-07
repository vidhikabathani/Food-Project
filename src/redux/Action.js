import axios from "axios"
import { ADD_PRODUCT, BOOK_TABLE, GET_PRODUCT, SIGNUP } from "./ActionType"

export const signup=(data)=>async(dispatch)=>{
    let user = await axios.post("http://localhost:3100/users", data)

    dispatch({
        type:SIGNUP,
        payload:user.data
    })
}
export const login=(data)=>async(dispatch)=>{
    let user = await axios.get("http://localhost:3100/users",data)

    dispatch({
        type:SIGNUP,
        payload:user.data
    })
}
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

export const book_table=(data)=>async(dispatch)=>{
    let table = await axios.post("http://localhost:3100/book-table", data)

    dispatch({
        type:BOOK_TABLE,
        payload:table.data
    })
}