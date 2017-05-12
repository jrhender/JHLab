import React from 'react';
// import logo from './logo.svg';

const Header = (props) => {
    return (
        <div className="App-header FBoxContainer">
            <div className="box">
                <h2>JH Personal Site</h2>
            </div>
            <div className="box">
                <h2>Welcome to React</h2>
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
            </div>
        </div>
    )
}

export default Header;