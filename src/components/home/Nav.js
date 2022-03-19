import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

function Nav() {
  const [buttonColor, setButtonColor] = useState(["#00bdf2", "#000"]);
  console.log(buttonColor);

  return (
    <div className="footer">
      <div>
        <Link to="/">
          <AiOutlineHome
            color={buttonColor[0]}
            onClick={() => setButtonColor(["#00bdf2", "#000"])}
            size="2rem"
          />
        </Link>
      </div>
      <Link to="/profile">
        <BsPerson
          color={buttonColor[1]}
          onClick={() => setButtonColor(["#000", "#00bdf2"])}
          size="2rem"
        />
      </Link>
    </div>
  );
}

export default Nav;
