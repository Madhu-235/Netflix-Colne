import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// export const getMoviesGenres = createAsyncThunk(
//     "getMoviesGenres",
//     async (_, thunkAPI) => {
//       try {
//         const api = `api_key=${process.env.REACT_APP_KEY_API}`;
//         const { data } = await axios.get(`genre/movie/list?${api}`);
  
//         const moviesReqs = data.genres.map(async ({ id }) => {
//           const { data } = axios.get(`discover/movie?${api}&with_genres=${id}`);
//           return data.results; // array of movies in genre
//         });
  
//         const movies = await Promise.all(moviesReqs)
//           .then(allMovies => allMovies.flat()); // flatten array of array of movies
  
//         return movies;
//       } 
//       catch (error) {
//         // toast.error(error.message); // <-- toast from here, reducer is pure
//         return thunkAPI.rejectWithValue(error);
//       }
//     }
//   );

export const mov = createAsyncThunk(
        "getMoviesGenres",
        async () => {
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=80910360a4dc971383977fa52b18f76c&language=en`); // get all id genres
                // console.log(data)
    
                const moviesReqs = data.genres.map(async ({id}) => {
                    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=80910360a4dc971383977fa52b18f76c&with_genres=${id}&include_adult=false&include_video=false&language=en-US`)
                    ;
                    return data.results; // array of movies in genre
                  });
                  // console.log(moviesReqs)
            
                  const movies = await Promise.all(moviesReqs)
                    .then(allMovies => allMovies.flat()); // flatten array of array of movies
                   
                    // console.log(movies);

                  return movies;
    
                  
        })

    export const movieGenres=createAsyncThunk(
        'movieGenres',
        async () => {
            const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=80910360a4dc971383977fa52b18f76c&language=en`); // get all id genres
                // console.log(data.genres)

                return data.genres           
        }
    )


    

        export const tv = createAsyncThunk(
            "getTvsGenres",
            async (_, thunkAPI) => {

                const {data} = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=80910360a4dc971383977fa52b18f76c&language=en`); // get all id genres
                    // console.log(data)

                    
        
                    const tvReqs = data.genres.map(async ({id}) => {
                        const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=80910360a4dc971383977fa52b18f76c&with_genres=${id}&include_adult=false&include_video=false&language=en-US`)
                        ;
                        return data.results; // array of movies in genre
                      });
                      // console.log(tvReqs)
                
                      const tvs = await Promise.all(tvReqs)
                        .then(allTvs => allTvs.flat()); // flatten array of array of movies
                    //    console.log(allTvs.flat())
                        // console.log(tvs);
    
                      return tvs;
        
                      
            })


            export const tvGenres=createAsyncThunk(
                'tvGenres',
                async () => {
                    const {data} = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=80910360a4dc971383977fa52b18f76c&language=en`); // get all id genres
                        // console.log(data.genres)
        
                        return data.genres           
                }
            )
    

  const moviesdata=createSlice({
    name:'moviesdata',
    initialState:{
        movies:[],
        MovieGenres:[],
        tvs:[],
        TvGenres:[],
        isLoading : '',
        isError : '',
        
    },
    extraReducers:(builder)=>{
        builder.addCase(mov.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          builder.addCase(mov.fulfilled, (state,{payload}) => {
            // console.log(payload);
            state.movies = payload; // <-- save payload into state
            state.isLoading = false;
            state.isError = false;
          })
          builder.addCase(movieGenres.fulfilled, (state,{payload}) => {
            // console.log(payload);
            state.MovieGenres = payload; // <-- save payload into state
            state.isLoading = false;
            state.isError = false;
          })
          builder .addCase(mov.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          });
          builder.addCase(tv.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          builder.addCase(tv.fulfilled, (state, {payload}) => {
            // console.log(payload);
            state.tvs = payload; // <-- save payload into state
            state.isLoading = false;
            state.isError = false;
          })
          builder.addCase(tvGenres.fulfilled, (state,{payload}) => {
            // console.log(payload);
            state.TvGenres = payload; // <-- save payload into state
            state.isLoading = false;
            state.isError = false;
          })
          builder .addCase(tv.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          });

        //  --------------
       
    }

  })

  export default moviesdata.reducer;