import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Routing from './components/Routing';
import App from './App';
import Page1 from './pages/signup/page1';
import Page2 from './pages/signup/page2';
import Landing_page from './pages/Landingpage/Landing_page';
import Page3 from './pages/signup/page3';
import { Provider } from 'react-redux';
import { Store } from './Store';
import HomeFooter from './components/homepageFooter/HomeFooter';
// import Page1 from './pages/signup/page1';
// import Page2 from './pages/signup/page2';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={Store}>
    <App/>

    </Provider>
    {/* <Landing_page/> */}
    {/* <Routing/> */}
    {/* <Page1/> */}
    {/* <Page2/> */}

     
   
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();






// netflix app server:
// http://192.168.0.106:3000/browser


