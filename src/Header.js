import "./App.css";
import { Link } from "react-router-dom";
import CartIcon from "./UI/Icon/CartIcon";

const Header = () => {
  return (
    <nav className="App-header">
      <Link to="/" className="link">
        <h2>SHOP THE LOOK</h2>
      </Link>
      <input type="search" placeholder="Search" />
      <Link to="/cart" className="link">
        <CartIcon />
      </Link>
    </nav>
  );
};

export default Header;
