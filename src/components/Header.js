import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
        <Link to="/" style={{textDecoration: 'none', color: 'black' }}>
        <h1>FBI Watchlist</h1>
        </Link>
    </div>
  )
}

export default Header