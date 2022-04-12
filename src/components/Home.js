import React from 'react'
import '../styles/Home.css';
import {NavLink} from 'react-router-dom';

function Home() {
  return (
    <div className="container">
        <p>Tis is an unofficial FBI watchlist website, if you have any info about these people or cases please go to <a href="https://www.fbi.gov/contact-us">"https://www.fbi.gov/contact-us"</a> and contact the FBI. </p>
         <NavLink to="/page" className="btn">See Watchlist</NavLink>
    </div>
  )
}

export default Home