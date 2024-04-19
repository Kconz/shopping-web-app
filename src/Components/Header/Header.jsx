import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>Kconz Shopping</h1>
        </div>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/products"><li>Products</li></Link>
          <Link to="/about"><li>About</li></Link>
          
        </ul>
      </nav>
    </>
  );
}

export default Header;
