import React, { Component } from "react";
import { Navbar } from "react-materialize";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    
    return (
     
      <div>
        <Navbar alignLinks="right" className="navigation" >
        <div className="logo"><img  src="./photos/htb_ikona_white (1).png"  alt="" style={{alignContent:"left"}}></img></div>
          <Link to="/home">Home</Link>
          <Link to="/sleeping">About</Link>
          <Link to="/exploring">Products</Link>
          <Link to="/contact">Contact</Link>
        </Navbar>
      </div>
    );
  }
}
export default Header;
