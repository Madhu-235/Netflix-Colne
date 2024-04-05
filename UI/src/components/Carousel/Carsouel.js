import React from 'react';
import Slider from '../Slider/slider';
// import { useSelector } from 'react-redux';
import './Carousel.css'

const Carousel = ({ data, id ,trend}) => {
// const TvShows=useSelector(state=>state.movies.ttv)
// const dataa=data
// console.log(data)

const trendMovies= data.filter((e) =>e.genre_ids.includes(id))
.sort((a, b) => b.popularity - a.popularity)
.filter((v, i, a) => i === a.findIndex(e => e.id === v.id))

// console.log(trendMovies)

const trendTv= trend.filter((e) =>e.genre_ids.includes(id))
.sort((a, b) => b.popularity - a.popularity)
.filter((v, i, a) => i === a.findIndex(e => e.id === v.id))

const en=data.filter((e) =>e.genre_ids.includes(id)).filter(e=>e.original_language==='en')
// console.log(en)


// const action = data.filter((e) =>e.genre_ids.includes(id))


// const war = data.filter((e) => e.genre_ids.includes(id))

// // console.log(war)

// const Horror = data.filter((e) => e.genre_ids.includes(id))
// // console.log(Horror)


// const Western = data.filter((e) => e.genre_ids.includes(id))
// // console.log(Western)


  return (
    <div>
      <div className='slider-container'>

        {trendMovies.length>1&&<div className='box'>
          <h2>Trending Movies</h2>
          <Slider data={trendMovies} />
        </div>}

       {trendTv.length>1&&
        <div className='box'>
          <h2>Tv Shows</h2>
          <Slider data={trendTv} />
        </div>}


        {en.length>1&&
          <div className='box'>
          <h2>Internationl</h2>
          <Slider data={en} />
        </div>}


       {/* { war.length>1&&
       
       <div className='box'>
          <h2>WAR</h2>
          <Slider data={war} />
        </div>}

        {Horror.length>1&&
          <div className='box'>
          <h2>Horror</h2>
          <Slider data={Horror} />
        </div>}


       { Western.length>1&&
       
       <div className='box'>
          <h2>Western</h2>
          <Slider data={Western} />
        </div>} */}

      </div>
    </div>
  );
};

export default Carousel;