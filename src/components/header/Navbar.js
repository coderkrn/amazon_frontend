import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, NavLink, useNavigate } from "react-router-dom";
import { loginContext } from "../context/contextProvider";
import RightHeader from "./RightHeader";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { BackendServer } from '../server'






export default function Navbar() {

  const [dropen, setDropen] = useState(false)

  const { account, setAccount } = useContext(loginContext)

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // For search Funtionality

  const [text, setText] = useState('');
  const [liopen, setLiopen] = useState(true);

  // console.log(text)

  const { products } = useSelector(state => state.getProductsData)

  //

  // console.log(account)
  const validuser = async () => {
    const res = await fetch(`/validuser`, {
    // const res = await fetch(`${BackendServer}/validuser`, {
      // const res = await fetch('http://localhost:8005/validuser', {
      // const res = await fetch('https://amazonclone-f2wf.onrender.com/validuser', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type":"application/json",
        // ' Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Credentials':true
      },
      credentials: "include"
    })
    const data = await res.json();
    // console.log(data)
    if (res.status === !201) {
      console.log("Error while fetching /VALIDUSER")
    } else {
      // console.log("Data avlid")
      setAccount(data)
    }
  }


  const handleOpen = () => {
    setDropen(true)
  }

  const handleDrClose = () => {
    setDropen(false)
  }

  const logoutUser = async () => {
    const res2 = await fetch(`/logout`, {
    // const res2 = await fetch(`${BackendServer}/logout`, {
      // const res2 = await fetch('http://localhost:8005/logout', {
      // const res2 = await fetch('https://amazonclone-f2wf.onrender.com/logout', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
    const data2 = await res2.json();
    // console.log(data)
    if (res2.status === !201) {
      console.log("Error while fetching /LOGOUT")
    } else {
      // console.log("Data avlid")
      toast.success('User logged out ', {
        position: "top-center",
        autoClose: 3000
      })
      setAccount(false)
      navigate('/')

    }
  }

  const getText = (items) => {
    setText(items)
    setLiopen(false)
  }

  useEffect(() => {
    validuser();
  }, [])



  return (
    <>
      <header>
        <nav>
          <div className="left">
            <IconButton
              className="hamburgur"
              onClick={handleOpen}
            >
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>

            <Drawer open={dropen} onClose={handleDrClose} > <RightHeader close={handleDrClose} logoutUser={logoutUser} />  </Drawer>
            <div className="navlogo">
              <Link to='/'> <img src="https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/amazon_PNG25.png" alt="" /> </Link>
            </div>
            <div className="nav_searchbaar">
              <input type="text" placeholder="Search products" onChange={(e) => getText(e.target.value)} />
              <div className="search_icon"> <SearchIcon /> </div>

              {
                // Search Filter 
                text &&
                <List className="extrasearch" hidden={liopen}>
                  {
                    products.filter(product => product.title.shortTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                      <ListItem>
                        <NavLink to={`/getproductsone/${product.id}`} onClick={() => setLiopen(true)}>
                          {product.title.shortTitle}
                        </NavLink>
                      </ListItem>
                    ))
                  }
                </List>
              }
            </div>
          </div>
          <div className="right">
            <div className="nav_btn">
              {
                !account ? <Link to="/login">Signin</Link> : " "
              }
            </div>
            <div className="cart_btn">
              {
                account ? <NavLink to="/buynow">
                  <Badge badgeContent={account.carts.length} color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge> </NavLink> : <NavLink to="/login">
                  <Badge badgeContent='0' color="primary">
                    <ShoppingCartIcon id="icon" />
                  </Badge> </NavLink>
              }

              <p>Cart</p>
              <ToastContainer />
            </div>
            {
              account ? <Avatar className="avtar2"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                {account.name[0].toUpperCase()}</Avatar> : <Avatar className="avtar"
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick} ></Avatar>
            }


            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              {
                account ? <MenuItem onClick={() => { handleClose(); logoutUser(); }} > <LogoutIcon style={{ fontSize: "16px", marginRight: "3" }} />  Logout</MenuItem> : <NavLink to="/login"> <MenuItem onClick={handleClose}>Log In</MenuItem> </NavLink>
              }

            </Menu>

          </div>
        </nav>
      </header>
    </>
  );
}
