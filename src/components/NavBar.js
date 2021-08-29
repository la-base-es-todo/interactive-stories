import Headroom from "react-headroom";
import { Link } from "react-router-dom";
import iconHome from "../assets/icons8-home-32.png";
import iconShare from "../assets/icons8-share-32.png";

const TITLE_MAX_LENGTH = 17;

const NavBar = ({ title, author }) => {

  const metaTitle = title.length < TITLE_MAX_LENGTH ? title : title.substr(0, TITLE_MAX_LENGTH) + '...';

  return (
    <Headroom>
      <nav className="navbar">
        <div className='navbar__container'>
          <div>
            <Link to="/">
              <img src={iconHome} alt="back to home" />
            </Link>
          </div>
          <div className='navbar__metadata'>
            <p className='meta-title'>{metaTitle}</p>
            <p className='meta-author'>{author}</p>
          </div>
          <div>
            <img src={iconShare} alt="share" />
          </div>
        </div>
      </nav>
    </Headroom>
  );
};

export default NavBar;
