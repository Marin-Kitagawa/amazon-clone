import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if(user){
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" placeholder="Search Amazon"/>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        {/* <a href=""> will refresh the page while Link won't. */}
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className="header__options">
            <span className="header__optionsLineOne">
              Hello, {user?.email} {user ? 'Sign Out' : 'Sign in'}
            </span>
            <span className="header__optionsLineTwo">
              Accounts & Lists
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsLineOne">
              Returns
            </span>
            <span className="header__optionsLineTwo">
              & Orders
            </span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__options">
            <span className="header__optionsLineOne">
              Try
            </span>
            <span className="header__optionsLineTwo">
              Prime
            </span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon className=""/>
            {/* Number of items in the bakset */}
            {/* THE REASON FOR COMMENTS WITHING '{}' IS DUE TO JSX*/}
            {/* JSX IS A HYBRID OF JS AND HTML. WITHIN '{}' WE CAN ACTUALLY WRITE IN JS AND IT'LL WORK */}
            {/* SINCE WE WRITE COMMENT WITH /* IN JS, THE COMMENT IS ENCLOSED IN '{}' IN REACT.JS */}

            <span
              className="header__optionsLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
      {/* Basket */}
    </nav>
  )
}
export default Header;
