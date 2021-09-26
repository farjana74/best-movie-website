import React from 'react';
import './Header.css'

// header section----------------------------
const Header = () => {
    return (
        <div className="header">
            <h1>My favourite movies</h1>
            <h4>Save time finding where to watch a movie and your life so much enjoyable </h4>
            <h2>Total movie:15
            </h2>
            <input type="text" name="" id=""  placeholder="search movie"/><button className="btn">search</button>
            
        </div>
    );
};

export default Header;