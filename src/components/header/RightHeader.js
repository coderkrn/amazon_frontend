import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { loginContext } from '../context/contextProvider';
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';
import './rightHeader.css'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';

export default function RightHeader({close, logoutUser}) {
  const { account } = useContext(loginContext)


  return (
    <>
      <div className="rightheader">
        <div className="right_nav">
          {
            account ? <Avatar className="avtar2">{account.name[0].toUpperCase()}</Avatar> : <Avatar className="avtar"></Avatar>
          }
          {
            account? <h3 style={{marginTop: "30px",}}>Hey, {account.name.toUpperCase()}</h3> : " "
          }
        </div>
        <div className="nav_btn">
          <NavLink to='/' onClick={()=> close()}>Home</NavLink>
          <NavLink to='/' onClick={()=> close()}>Shop by category</NavLink>
          <Divider style={{width: "100%", marginLeft: "-20px"}}/>
          <NavLink to='/' onClick={()=> close()}>Best Deal</NavLink>
          {

            account ? <NavLink to='/buynow' onClick={()=> close()}>Your orders</NavLink> : <NavLink to='/login' onClick={()=> close()}>Your orders</NavLink>
          }
          <Divider style={{width: "100%", marginLeft: "-20px"}} />
          <div className="flag">
            <NavLink to='/' onClick={()=> close()}>Setting</NavLink>
            <img src="" alt="" />
          </div>
          
          {
            account ? 
            <div className="flag">
              <LogoutIcon style={{fontSize: 18, marginRight: 4}}/>
              <h3 onClick={()=> {close(); logoutUser()}} style={{cursor: "pointer", fontWeight: 500}}>Logout</h3>
            </div>: 
            <NavLink to='/login' onClick={()=> close()}>Sign in</NavLink>

          }

        </div>
      </div>
     
    </>
  )
}
