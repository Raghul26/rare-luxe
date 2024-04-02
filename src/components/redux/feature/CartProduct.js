import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usercart: [],
  userfavourite: []
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
        state.usercart[itemindex].subtotal = state.usercart[itemindex].quantity * action.payload.productprice;
      } else {
        const temp = { ...action.payload, quantity: 1, subtotal: action.payload.productprice }
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
        state.usercart[removeitem].subtotal = state.usercart[removeitem].quantity * action.payload.productprice;
      }
    },
    addtofavourite: (state, action) => {
      // state.userfavourite = [...state.userfavourite, action.payload]
      const itemfavindex = state.userfavourite.findIndex((state) => state.id === action.payload.id)

      if (!itemfavindex) {
        state.userfavourite[itemfavindex].quantity = 1
      } else {
        const temp = { ...action.payload }
        state.userfavourite = [...state.userfavourite, temp]
      }
    }
  }
})



export const { addtocart, removefromcart, removelengthitem, addtofavourite } = CartProduct.actions;
export default CartProduct.reducer