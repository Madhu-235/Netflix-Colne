import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { RiArrowUpSFill } from "react-icons/ri";
import { RiArrowDownSFill } from "react-icons/ri";
import { LiaBarsSolid } from "react-icons/lia";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { firebaseAuth } from '../../pages/Base/firebaseConfig';

import { onAuthStateChanged, signOut } from 'firebase/auth';

import { useDispatch, useSelector } from 'react-redux';
import { mov, tv } from '../../Reducers/Reducer2';
import Filtereddata from '../Filterdata/Filtereddata';

// import '../Filterdata/Filterdata.css'

// import { FaCirclePlay } from "react-icons/fa6";
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { AiOutlineLike } from "react-icons/ai";
// import { CiCircleChevDown } from "react-icons/ci";
// import vid from '../Backgroundimages/vid.mp4'





const Navbar = () => {
const dispatch=useDispatch()
// const img = useRef()

    const [arrow, setarrow] = useState(false)
    const [input, setinput] = useState(true)
    const [menu, setmenu] = useState(false)
    const search = useRef()
    const inputsearch = useRef()

    const data=useSelector(state=>state.moviesdata)
var searchdata=data.movies
// const img = useRef()



    // console.log(searchdata)
    useEffect(()=>{
        dispatch(mov())
        dispatch(tv())


    },[dispatch])




    // -----function for removing search clicking on windows-----------
    function removesearch(e) {
        if (search.current && !search.current.contains(e.target) && inputsearch.current.value === "")
            setinput(true)
    }

    useEffect(() => {
        document.addEventListener('mousedown', removesearch)
    }, [])

    useEffect(() => {
        document.title = "Home-Netflix"
    },[])
    

    //--------------  for Sign out--------
    // const [email, setemail] = useState(localStorage.getItem("myapp-email") || "");
    // const [password, setpassword] = useState(localStorage.getItem("myapp-password") || "")


    const nav = useNavigate()
    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            if (!currentUser) {
                nav('/')
            }
        })
    })


    // for changing the background colour of navbar when scrolled
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('nav')
            if (window.scrollY > 0) {
                navbar.style.backgroundColor = 'black'
            } else {
                navbar.style.background = 'linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent)'
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])




// -------------- search filter functionality------------

const [Search, setSearch] = useState('')

const product = useMemo(() => {
    let index=Search.length
    return (
        searchdata.filter((e)=> {
            return (
                e.title.substr(0,index).toLowerCase().includes(Search)||e.title.substr(0,index).includes(Search)||e.title.substr(0,index).toUpperCase().includes(Search)
            )
        })
    )
}, [searchdata, Search])
// console.log(product)


function aa() {
    setinput(!input)
    inputsearch.current.focus()
}

    return (
        <div id='body' >

            <div id='nav'>
                {/* <div className="container-box"></div> */}
                <div className="section">
                    <span className='bars' onClick={() => setmenu(!menu)}><LiaBarsSolid />

                        <span>
                            <div className={menu ? 'showbar' : 'menu-bar'}  >
                                <div style={{ borderBottom: '1px solid white' }}>
                                    <ul>
                                        <Link><li><img classNmae="profile-icon" src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />Profie</li></Link>
                                        <Link><li>Account</li></Link>
                                        <Link><li>Help Center</li></Link>
                                        <Link ><li onClick={() => signOut(firebaseAuth)}>Sign out of Netflix</li></Link>
                                    </ul>
                                </div>
                                <ul>
                                    <Link to={'/browse'}><li>Home</li></Link>
                                    <Link to={"/Movies"}><li>Movies</li></Link>
                                    <Link to={"/TvShows"}><li>TV Shows</li></Link>
                                    <Link to={"/mylist"}><li>My List</li></Link>
                                </ul>
                                <div>

                                </div>
                            </div>
                        </span>
                    </span>

                    <div className='logo-svg'>

                        <Link to='/Home'> <svg viewBox="0 0 111 30" fill='#E50914' version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif1"><g ><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg></Link>
                    </div>

                    {/* <div className='list'> */}
                    <ul className='browse'>
                        <li style={{ color: 'red' }}>Browse
                            <span>

                                <div className='browse-list'>
                                    <span className='notify-arrow'> <RiArrowUpSFill /></span>

                                    <ul>
                                        <Link to={'/browse'}><li>Home</li></Link>
                                        <Link to={'/Movies'}><li>Movies</li></Link>
                                        <Link to={'/TvShows'}><li>TV Shows</li></Link>
                                        <Link to={"/mylist"}><li>My List</li></Link>

                                    </ul>
                                </div>
                            </span>
                        </li>
                        <Link><li>Children</li></Link>

                    </ul>
                    <ul className='not-browse'>
                        <Link to="/browse"><li>Home</li></Link>
                        <Link to="/Movies"><li>Movies</li></Link>
                        <Link to="/TvShows"><li>TV Shows</li></Link>
                        <Link to={"/mylist"}><li>My List</li></Link>
                    </ul>
                </div>

                <div className="icons">
                    {/* <div className="search"> */}
                    <input type="text" className='visible-input' placeholder='Search' onChange={(e) => setSearch(e.target.value)}/>


                    <div className="search" ref={search}>
                        <button onClick={() => aa()}>
                            <IoSearch />
                        </button>
                        <input className={(input) ? "input" : 'extend'}  ref={inputsearch} type="search" placeholder='Titles,people,geners' name="" id="" onChange={(e) => setSearch(e.target.value)}  />
                       
                    </div>
                   
                    
                    <Link><li className='children'>Children</li></Link>
                    <div className='notification' >
                        <FaRegBell />

                        <span >
                            <div className='notify-box'  >
                                <span className='notify-arrow'> <RiArrowUpSFill /></span>
                            </div>
                        </span>
                    </div>


                    <div className="acc-img" >
                        <img onMouseEnter={() => setarrow(true)} onMouseLeave={() => setarrow(false)} className="profile-icon" src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt="" />

                        {arrow && <span onMouseEnter={() => setarrow(true)} onMouseLeave={() => setarrow(false)}>
                            <div className='profile-box' >
                                <span className='notify-arrow'> <RiArrowUpSFill /></span>

                                <div>
                                    <ul>
                                        <Link> <li><span><CiUser /></span>  Account </li></Link>
                                        <Link> <li><span><FaRegQuestionCircle /></span>  Help Center </li></Link>


                                    </ul>
                                </div>
                                <div className='h6'>
                                    <li onClick={() => signOut(firebaseAuth)}>Sign out of Netflix</li></div>

                            </div>
                        </span>}
                    </div>

                    {/* <RiArrowUpSFill />
<RiArrowDownSFill /> */}
                    <h2 className='arrows'>{arrow ?
                        <RiArrowUpSFill /> : <RiArrowDownSFill />}</h2>
                    <h6 className='user'>Profile</h6>
                    {/* </div> */}
                </div>
                {/* </div> */}
            </div>
            {/* </div> */}

            <div className='filterItemBox'>

            {Search!==''&& 
            <Filtereddata data={product}/> 
            }
            </div>

        </div>
    );
};

export default Navbar;