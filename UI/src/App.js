import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Page2 from './pages/signup/page2';
import Page1 from './pages/signup/page1';
import Landingpage from './pages/Landingpage/Landing_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/signin-page/Signin';
import Page3 from './pages/signup/page3';

import Home from './pages/HomePage/Home';
import Movies from './pages/MoviesPage/Movies';
import TvShows from './pages/TvShowsPage/TvShows';
import Mylist from './pages/MyList/Mylist';
import Player from './components/Player/Player';


const App = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Landingpage/>}/> 
                <Route path='/signup1' element={<Page1/>}/>
                <Route path='/signup2' element={<Page2/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup/password' element={<Page3/>}/> 
            <Route path="/browse" element={<Home/>}/>
            <Route  path={`/Movies`} element={<Movies/>}/>
            <Route exact path="/TvShows" element={<TvShows/>}/> 
            <Route path="/mylist" element={<Mylist/>}/>

            <Route path='/player' element={<Player/>}/> 




                
            </Routes>

            
            </BrowserRouter>
            
        </div>
    );
};

export default App;