import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const discovermovies=createAsyncThunk('netflix-discovermovies',
async()=>{
        const res= await fetch('https://api.themoviedb.org/3/discover/movie?api_key=80910360a4dc971383977fa52b18f76c&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')

        return res.json()
        // console.log(res);
}
)


export const discovertv=createAsyncThunk('netflix-discover-tv',
async()=>{
    const res= await fetch('https://api.themoviedb.org/3/discover/tv?api_key=80910360a4dc971383977fa52b18f76c&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
        return res.json()    
}
)

export const trendmovies=createAsyncThunk('netflix-tmovies',
async()=>{
    const res= await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=80910360a4dc971383977fa52b18f76c&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
             return res.json()

}

)


export const trendtv=createAsyncThunk('netflix-ttv',
    async()=>{
        const res= await fetch('https://api.themoviedb.org/3/trending/tv/day?api_key=80910360a4dc971383977fa52b18f76c&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
        return res.json()


    }
)


const moviegeners=createSlice({
    name:'movies',
    initialState:{
        dmovies:[],
        dtv:[],
        tmovies:[],
        ttv:[],
    },
    extraReducers:(builder)=>{
        builder.addCase(discovermovies.fulfilled,(state,{payload})=>{
            state.dmovies=payload.results
            // console.log(state.dmovies); 
        })
        builder.addCase(discovertv.fulfilled,(state,{payload})=>{
            state.dtv=payload.results
            // console.log(state.dtv);

        })
        builder.addCase(trendmovies.fulfilled,(state,{payload})=>{
            state.tmovies=payload.results
            // console.log(state.tmovies);

        })
        builder.addCase(trendtv.fulfilled,(state,{payload})=>{
            state.ttv=payload.results
            // console.log(state.ttv);

        })
    }
})


export default moviegeners.reducer;
