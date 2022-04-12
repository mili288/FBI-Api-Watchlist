import './App.css';
import React from 'react'
import Home from './components/Home';
import Product from './components/Product';
import Product2 from './components/Product2';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
      <>
   <Router>
     <Header/>
     <Routes>
     <Route path="/" element={<Home/>}/>
       <Route path="/page" element={<Product/>}/>
       <Route path="/page2" element={<Product2/>}/>
     </Routes>
   </Router>
      </>
  )
}

export default App;
