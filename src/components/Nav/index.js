import "./nav.css"
import { Link, useLocation} from "react-router-dom";

const Nav = ({openCart, openSearch, cartContent}) => {
    
    const path = useLocation().pathname
    const location = path.split("/")[1];

    return (
      <div className={"nav-container " + location}>
        <p>Game In Style</p>
        <button onClick={openSearch} className="open-search-btn"></button>
        <ul className="nav-links">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            <div className="cart-btn" onClick={openCart}>
              {cartContent > 0 ? (<span className="cart-content">{cartContent}</span>) : null}
            </div>
          </li>
        </ul>
      </div>
    );
}

export default Nav;