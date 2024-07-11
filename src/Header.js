import "./App.css";
import { Link } from "react-router-dom";
import CartIcon from "./UI/Icon/CartIcon";

const Header = () => {
  return (
    <nav className="App-header">
      <h2>SHOP THE LOOK</h2>
      <input type="search" placeholder="Search" />
      <Link to="/cart">
        <CartIcon />
      </Link>
    </nav>
  );
};

export default Header;
