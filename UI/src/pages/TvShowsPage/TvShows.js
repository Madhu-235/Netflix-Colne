import React, { useEffect } from 'react';
import '../HomePage/Home.css'
import Navbar from '../../components/Navbar/Nav';
import { useDispatch, useSelector } from 'react-redux';
import {  discovermovies, discovertv, trendmovies, trendtv } from '../../Reducers/Reducer';
import { mov, movieGenres, tv, tvGenres } from '../../Reducers/Reducer2';
import GenresList from '../../components/Geners/GenresList';
import HomeFooter from '../../components/homepageFooter/HomeFooter';

const TvShows = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => state.movies)
    // const alldatamovie = useSelector(store =>store.moviesdata.movies)  
    const alldatatv = useSelector(store =>store.moviesdata.tvs)  
    // const moviegenres = useSelector(store =>store.moviesdata.MovieGenres)  
    const tvgenres = useSelector(store =>store.moviesdata.TvGenres)  
    // console.log(tvgenres)

    // console.log(alldatatv);

    // const movies = [...data.dmovies, ...data.dtv, ...data.tmovies, ...data.ttv]
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
    },[dispatch])



    useEffect(() => {
        document.title = "TvShows - Netflix"
      }, [])
    




    return (
        <section id='MoviesPage'>
            <div>
                <Navbar />
               
                
            </div>

           
            <GenresList listGenre={tvgenres} data={alldatatv}  trailerdata={data.ttv} trend={data.tmovies} title='TvShows'/>

            <div>
                <HomeFooter/>
            </div>

        </section>
    );
};

export default TvShows;