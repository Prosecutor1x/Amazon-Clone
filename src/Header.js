import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';

function Header() {
  const [{ basket }, dispatch] = UseStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://cdn.discordapp.com/attachments/426104825806323712/971451693092986990/amazon.png"
        />
      </Link>
      <div className="header_navigation">
        <FmdGoodIcon className="location" />
        <div className="header_option">
          <span className="header_option1">Hello Guest</span>
          <span className="header_option2">Select your address</span>
        </div>
      </div>
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="What are you looking for?"
        />

        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_navigation">
        <div className="header_option">
          <span className="header_option1">Hello Guest</span>
          <span className="header_option2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2"> & Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_cart">
            <ShoppingBasketIcon className="shopping_basket" />
            <span className="header_option2 cart_items">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
