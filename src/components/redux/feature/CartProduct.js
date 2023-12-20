import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usercart: []
}

const CartProduct = createSlice({
  name: "CartProduct",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      // state.usercart = [...state.usercart, action.payload]
      const itemindex = state.usercart.findIndex((state) => state.id === action.payload.id)

      if (itemindex >= 0) {
        state.usercart[itemindex].quantity += 1
      } else {
        const temp = { ...action.payload, quantity: 1 }
        state.usercart = [...state.usercart, temp]
      }
    },
    removefromcart: (state, action) => {
      const removeindex = state.usercart.filter((state) => state.id !== action.payload)
      state.usercart = removeindex
    },
    removelengthitem: (state, action) => {
      const removeitem = state.usercart.findIndex((state) => state.id === action.payload.id)
      if (state.usercart[removeitem].quantity >= 1) {
        state.usercart[removeitem].quantity -= 1
      }
    },
  }
})



export const { addtocart, removefromcart, removelengthitem } = CartProduct.actions;
export default CartProduct.reducer