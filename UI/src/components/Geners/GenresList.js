import React, { useEffect, useRef, useState } from 'react';
import './GenresList.css'
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link, } from 'react-router-dom';

import {  useSelector } from 'react-redux';
import Trailer from '../../components/Trailer/Trailer';
import Carousel from '../Carousel/Carsouel';
import { RiMenu2Line } from "react-icons/ri";
import { IoGridSharp } from "react-icons/io5";
import '../Navbar/Nav.css'
import Filtereddata from '../Filterdata/Filtereddata';




const GenresList = ({ title, listGenre, data, trailerdata, trend }) => {

  const genrebox = useRef()
  const inputsearch = useRef()
  const [input, setinput] = useState(true)
  const search = useRef()

  // const alldatamovie = useSelector(store => store.moviesdata.movies)
  // const alldatatv = useSelector(store => store.moviesdata.tvs)
  const moviegenres = useSelector(store => store.moviesdata.MovieGenres)
  // console.log(moviegenres)
  // console.log(data)

  const [list, setList] = useState(true)

  function genresOpen() {
    openlist.current.style.display = 'grid'
    setList(true)
    setinput(true)
  }


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('GenreListStyle')
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = 'black'
      } else {
        navbar.style.backgroundColor = 'transparent'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  function removeGenre(e) {
    if (genrebox.current && !openlist.current.contains(e.target))
      openlist.current.style.display = 'none'
  }

  useEffect(() => {
    document.addEventListener('mousedown', removeGenre)
  }, [])


  var genreId = 35;

  var [Genre, setGenre] = useState('')

  listGenre.forEach(e => {
    if (e.id === Genre) {
      genreId = e.id
    }
  });
  // console.log(genreId)


  // console.log(Genre)

  

  const openlist = useRef()
  const right = useRef()

  const [choosegenre, setChoosegenre] = useState('')

  function add(i) {
    console.log(i.target.outerText)
    setGenre(i.target.value)
    setChoosegenre(i.target.outerText)
    genrebox.current.style.display = 'none'
    right.current.style.display = 'block'



  }
  function remove(i) {
    // console.log(i.target.outerText)
    setGenre('')
    setChoosegenre('')
    genrebox.current.style.display = 'block'
    right.current.style.display = 'none'
    setList(true)
    setinput(true)
  }

  //   function removesearch(e) {
  //     if (search.current && !search.current.contains(e.target) && inputsearch.current.value == "")
  //         setinput(true)
  // }

  // useEffect(() => {
  //     document.addEventListener('mousedown', removesearch)
  // }, [])


  function click() {
    setinput(!input)
    setList(false)
  }

  function listadd(){
        setinput(true)
        setList(true)
        
        

  }

  const [select,setSelect]=useState('1')
  
  const filterBySelection=[...data]


  if(select==='2'){
    filterBySelection.sort((a,b)=>(b.release_date||b.first_air_date).localeCompare(a.release_date||a.first_air_date))

  }
  else if(select==='3'){
   
    filterBySelection.sort((a,b)=>(a.title||a.name).localeCompare(b.title||b.name))
    
  }
  else if(select==='4'){
    filterBySelection.sort((a,b)=>(b.title||b.name).localeCompare(a.title||a.name))

    
  }
 
  // console.log(aaa)
  // console.log(aaa.sort((a,b)=>(b.name).localeCompare(a.name)))

  

  
  



  return (
    <div>
      <div className='discoverTvCont' id='GenreListStyle'>

        {/* <button onClick={()=>setGenre('b')}>submit</button> */}
        <div className='genresbox'>
          <div>
            <h1 onClick={() => remove()} style={{ cursor: 'pointer' }}>{title}</h1>
          </div>
          <h3 ref={right} style={{ display: 'none' }}>&gt;</h3>
          <div> <h1>{choosegenre}</h1></div>
          <div className='tvGenres' onClick={genresOpen} ref={genrebox}> <span className='genres'>Genres <span className='upArrow'><RiArrowDownSFill /></span></span>

            <div className=''>
              <div className='genresList' ref={openlist}>

                {listGenre.map(e =>


                  // <div  >
                  <ul key={e.id} >
                    <Link> <li value={e.id} onClick={(i) => add(i)}>{e.name}</li></Link>
                  </ul>
                  // </div>

                )}

              </div>
            </div>
          </div>
        </div>
        <div className='d-flex  flitericons'>
          {/* <button value='qazwsx' onClick={(e)=>setSelect(e.target.value)}>submit</button> */}
          <button className='button1' value='100' onClick={() =>listadd()}>
            <RiMenu2Line size={20} />

          </button>
          <div className="search" ref={search}>
            <button onClick={() => click()} className='button2'>
              <IoGridSharp size={20} />

            </button >

            <select className={(input) ? "input" : 'extend'} ref={inputsearch} value={select} onChange={(e)=>setSelect(e.target.value)} >
              <option value="1" >Suggestions for you</option>
              <option value="2"  >Year Released</option>
              <option value="3" >A-Z</option>
              <option value="4" >Z-A</option>
            </select>

          </div>


        </div>
      </div>
     

      <div>
        {list === false &&

        <div className='filterItemBox'>
         
         <Filtereddata data={filterBySelection} />

         </div>

        }
      </div>


<div>


{list === true && <Trailer data={trailerdata} channel='Movie' />}
</div>

      

      <div>
        {list &&
          <Carousel data={data} id={genreId} trend={trend} />

        }

      </div>
    </div>
  );
};

export default GenresList;