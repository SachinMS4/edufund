import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="footer">
      <div>
        <Link to="/">
          <AiOutlineHome size="2rem" />
        </Link>
      </div>
      <Link to="/profile">
        <BsPerson size="2rem" />
      </Link>
    </div>
  );
}

export default Nav;
