import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = props => {
  return(
    <header>
      <nav className="nav-extended">
        <div className={"nav-wrapper" + ((props.colorNav) ? " " + props.colorNav : "")}>
          <Link to="/" className="brand-logo center">Before You Watch...</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header;