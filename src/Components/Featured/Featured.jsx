import React from 'react'
import './Featured.scss'
const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
            <div className="left">
                <h1>
                    Find the perfect <span>freelance</span> services for your business
                </h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="../src/Assets/img/search.png" alt="" />
                        <input type="text" placeholder="Search Services" />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web design</button>
                    <button>Wordpress</button>
                    <button>Logo design</button>
                    <button>AI services</button>
                </div>
            </div>
            <div className="right">
                <img src="../src/Assets/img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured