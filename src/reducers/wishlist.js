import { createSlice } from '@reduxjs/toolkit'

export const wishlist = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
    },

    reducers: {
        addItem: (state, action) => {

            // const { product } = action.payload (från Jonnarus projekt)
            const existingProduct = state.items.find((item) => item.id === action.payload.id)
       
            if (existingProduct) {
                // increment quantity
                existingProduct.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeItem: (state, action) => {
            const existingProduct = state.items.find((item) => item.id === action.payload.id)

            if (existingProduct && existingProduct.quantity === 1) {
                //remove it
                state.items = state.items.filter((item) => item.id !== action.payload.id)
            } else if (existingProduct) {
                existingProduct.quantity -= 1
            }
        }
    }
})