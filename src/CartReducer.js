import { createSlice } from "@reduxjs/toolkit";
import productlistdata from "./components/Data/productlistdata";


const initialState = {
    cart: [],
    items: productlistdata,
    totalquantity: 0,
    totalprice: 0,
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        
    }
})
export default cartSlice.reducer;
export const { addtocart } = cartSlice.actions