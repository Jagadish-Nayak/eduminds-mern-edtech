import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cart:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],
    total:localStorage.getItem("total")?JSON.parse(localStorage.getItem("total")):0,
    totalItems:localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")):0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        addToCart: (state,action)=>{
            const course = action.payload;
            const index = state.cart.findIndex((item)=>item._id===course._id);
            if(index>=0){
                toast.error("Item is already added to the cart");
                return;
            }
            state.cart.push(course);
            state.total+=course.price;
            state.totalItems++;
            localStorage.setItem("cart",JSON.stringify(state.cart));
            localStorage.setItem("totalItems",JSON.stringify(state.totalItems));
            localStorage.setItem("total",JSON.stringify(state.total));
            toast.success("Item added to cart Successfully");
        },
        removeFromCart: (state,action)=>{
            const course = action.payload;
            const index = state.cart.findIndex((item)=>item._id===course._id);
            if(index>=0){
                state.total-=state.cart[index].price;
                state.totalItems--;
                state.cart.splice(index,1);
                localStorage.setItem("cart",JSON.stringify(state.cart));
                localStorage.setItem("totalItems",JSON.stringify(state.totalItems));
                localStorage.setItem("total",JSON.stringify(state.total));
                toast.success("Item removed from cart Successfully");
            }
        },
        resetCart:(state)=>{
            state.total=0;
            state.cart = [];
            state.totalItems=0;
            localStorage.removeItem("cart");
            localStorage.removeItem("total");
            localStorage.removeItem("totalItems");
        }

    }
})

export const {addToCart,removeFromCart,resetCart} = cartSlice.actions;
export default cartSlice.reducer;