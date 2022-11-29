import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Link, useNavigate } from 'react-router-dom';
import { UseStateValue } from '../utils/StateProvider';
import { UserAuth } from '../utils/StateProvider';

export function Header() {
  const nav=useNavigate()
  const [{ basket }] = UseStateValue();
  const {user,logout}=UserAuth()
  const handleLogOut=async()=>{
    try{
        await logout()
        nav('/login')
    }catch(e){
      console.log(e.message)
    }
  }
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
          <span className="header_option1">Hello!! {user && user.email}</span>
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
          
          {user==null? 
          <>
          <span className="header_option1">Hello Guest</span>
          <Link to="/login">
          <span className="header_option2">Sign In</span>
          </Link>
          </>
          :
          <>
          <span className="header_option1">{user && user.email}</span>
          <span className="header_option2" onClick={handleLogOut}>Log Out</span>
          </>
          }
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

