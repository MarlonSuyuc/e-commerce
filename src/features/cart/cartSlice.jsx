import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cantidadProducto: 0,
  productList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      // console.log(action.payload);
      const find = state.productList.findIndex(
        (item) => item.id === action.payload.id
      )
      // console.log(find);
      if (find >= 0) {
        state.productList[find].cantidad += 1
      } else {
        const tempVar = { ...action.payload, cantidad: 1 }
        state.productList.push(tempVar)
        state.cantidadProducto += 1
      }
    },

    removeOneProduct: (state, action) => {
      const removeOneProduct = state.productList.find(
        (product) => product.id === action.payload
      )
      if (removeOneProduct) {
        state.productList.splice(state.productList.indexOf(removeOneProduct), 1)
      }
    },

    removeAllCart: (state, action) => {
      let resetproductList = (state.productList = [])
      action.payload = resetproductList
    },
  },
})

export const { addCart, removeOneProduct, removeAllCart } = cartSlice.actions
export default cartSlice.reducer
