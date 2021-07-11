import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import iconHome from "../assets/icons8-home-32.png";
import iconShare from "../assets/icons8-share-32.png";
import iconHeart from "../assets/icons8-heart-32.png";

const NavBar = ({ setView }) => {
  return (
    <Headroom>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              <img src={iconHome} alt="back to home" />
            </Link>
          </li>
          <li>
            <img src={iconShare} alt="share" />
          </li>
          <li>
            <img src={iconHeart} alt="set as favourite" />
          </li>
        </ul>
      </nav>
    </Headroom>
  );
};

export default NavBar;
