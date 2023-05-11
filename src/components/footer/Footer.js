import React from 'react'
import './footer.css'

export default function Footer() {
  const year = new Date().getFullYear();
  // console.log(year)
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_details_one">
            <h3>Get To Know Us</h3>
            <p>About us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
          </div>
          <div className="footer_details_one">
            <h3>Connect With Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className="footer_details_one forres">
            <h3>Make Money With Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div className="footer_details_one forres">
            <h3>Make Money With Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </div>
        <div className="lastdetails">
          <img src="https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/amazon_PNG25.png" alt="" />
        <p>Conditions of Use & Sale &nbsp;&nbsp;&nbsp;   Privacy  &nbsp;&nbsp;&nbsp;  Notice Interest-Based  &nbsp;&nbsp;&nbsp;   Ads 1996-{year}, Amazon.com inc</p>
        </div>
      </footer>
    </>
  )
}
