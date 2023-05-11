import React from 'react'
import './newnav.css'

export default function NewNavbar() {
  return (
    <>
      <div className="new_nav">
        <div className="nav_data">
          <div className="left_data">
            <p>All</p>
            <p>mobile</p>
            <p>Bestseller</p>
            <p>Fashion</p>
            <p>Customor Services</p>
            <p>Electronics</p>
            <p>Prime</p>
            <p>Today's deals</p>
            <p>Amazon pay</p>
          </div>
          <div className="right_data">
            <img src="https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/nav.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
