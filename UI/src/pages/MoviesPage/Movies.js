import React, { useEffect } from 'react';
import '../HomePage/Home.css'
import Navbar from '../../components/Navbar/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { apidata, discovermovies, discovertv, trendmovies, trendtv } from '../../Reducers/Reducer';
import Trailer from '../../components/Trailer/Trailer';
import Slider from '../../components/Slider/slider';
import { mov, movieGenres, tv, tvGenres } from '../../Reducers/Reducer2';
import GenresList from '../../components/Geners/GenresList';
import HomeFooter from '../../components/homepageFooter/HomeFooter';

const Movies = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => state.movies)
    const alldatamovie = useSelector(store =>store.moviesdata.movies)  
    const alldatatv = useSelector(store =>store.moviesdata.tvs)  
    const moviegenres = useSelector(store =>store.moviesdata.MovieGenres)  
    // console.log(moviegenres)

    // console.log(data.dmovies);

    const movies = [...data.dmovies, ...data.dtv, ...data.tmovies, ...data.ttv]
    // console.log(movies);

    useEffect(() => {
        dispatch(discovermovies())
        dispatch(discovertv())
        dispatch(trendmovies())
        dispatch(trendtv())
        dispatch(mov())
        dispatch(movieGenres())
        dispatch(tv())
        dispatch(tvGenres())
    },[])

    // const action = []
    // const adventure = []
    // const animation = []
    // const thriller = []

    // for(var i in alldatamovie){
    //     var genres=alldatamovie[i].genre_ids
    //     for(var j=0;j<=genres.length;j++){
    //         if(genres[j]==28){
    //         action.push(alldatamovie[i])
    //         }
    //         else if (genres[j] == 12) {
    //             adventure.push(alldatamovie[i])
    //           }
    //           else if (genres[j] == 16) {
    //             animation.push(alldatamovie[i])
    //           }
    //           else if (genres[j] == 53) {
    //             thriller.push(alldatamovie[i])
    //             }
            
    //     }

    // }

    // // console.log(action);
    // // console.log(adventure);
    // // console.log(animation);
    // // console.log(thriller);

    // useEffect(() => {
    //     document.title = "Movies - Netflix"
    //   }, [])
    






    return (
        <section id='MoviesPage'>
            <div>
                <Navbar />
               
                
            </div>

           
            <GenresList listGenre={moviegenres} data={alldatamovie}  trailerdata={data.tmovies} trend={data.ttv} title='Movies'/>


            <div>
                <HomeFooter/>
            </div>

        </section>
    );
};

export default Movies;