import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../src/Reducers/Reducer";
import Reducer2 from "./Reducers/Reducer2";
// import Reducer from "../src/Reducers/Reducer2";



export const Store=configureStore({
    reducer:{
        movies:Reducer,
        moviesdata:Reducer2,

    }

})

