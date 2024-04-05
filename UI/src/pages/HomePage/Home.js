import React, { useEffect } from 'react';
import './Home.css'
import Navbar from '../../components/Navbar/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { discovermovies, discovertv, trendmovies, trendtv } from '../../Reducers/Reducer';
import Trailer from '../../components/Trailer/Trailer';
import Slider from '../../components/Slider/slider';
import HomeFooter from '../../components/homepageFooter/HomeFooter';
    const Home = () => {

    const dispatch = useDispatch()

    const data = useSelector(state => state.movies)

    // console.log(data.tmovies);

    const movies = [...data.dmovies, ...data.dtv, ...data.tmovies, ...data.ttv]
    // console.log(movies);

    useEffect(() => {
        dispatch(discovermovies())
        dispatch(discovertv())
        dispatch(trendmovies())
        dispatch(trendtv())
    },[dispatch])

    const action = []
    const adventure = []
    const animation = []
    const thriller = []

    for(var i in movies){
        var genres=movies[i].genre_ids
        for(var j=0;j<=genres.length;j++){
            if(genres[j]===28){
            action.push(movies[i])
            }
            else if (genres[j] === 12) {
                adventure.push(movies[i])
              }
              else if (genres[j] === 16) {
                animation.push(movies[i])
              }
              else if (genres[j] === 53) {
                thriller.push(movies[i])
                }
            
        }

    }

    // console.log(action);
    // console.log(adventure);
    // console.log(animation);
    // console.log(thriller);



    return (

        <section id='homePage'>
            <div>
                <Navbar/>
            </div>

            <div>
                <div>
                <Trailer data={movies}/>
                </div>

                <div className='slider-container'>

                <div className='box'>
                    <h2>Trending Movies</h2>
                    <Slider data={data.tmovies} />
                 </div>
                 <div className='box'>
                    <h2>Tv Shows</h2>
                    <Slider data={data.ttv}/>
                 </div>
                 <div className='box'>
                    <h2>Action</h2>
                    <Slider data={action}/>
                 </div>
                 <div className='box'>
                 <h2>Adventure</h2>

                    <Slider data={adventure}/>
                 </div>
                 <div className='box'>
                 <h2>Animation</h2>
                    <Slider data={animation}/>
                 </div>
                 <div className='box'>
                 <h2>Thriller & Suspense</h2>
                    <Slider data={thriller}/>
                 </div>
            </div>
            </div>

            <div>
                <HomeFooter/>
            </div>
            
        </section>
    );
};

export default Home;