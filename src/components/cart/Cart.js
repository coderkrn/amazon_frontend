import React, { useContext, useEffect, useState } from 'react'
import './cart.css'
import { Divider } from '@mui/material'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { loginContext } from '../context/contextProvider'
import CircularProgress from '@mui/material/CircularProgress';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {BackendServer} from '../server'





export default function Cart() {

    const { account, setAccount } = useContext(loginContext)

    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(id)

    const [indData, setIndData] = useState('');
    // console.log(indData)

    const getIndData = async () => {
        const res = await fetch(`/getproductsone/${id}`, {
        // const res = await fetch(`${BackendServer}/getproductsone/${id}`, {
        // const res = await fetch(`http://localhost:8005/getproductsone/${id}`, {
        // const res = await fetch(`https://amazonclone-f2wf.onrender.com/getproductsone/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            
            }
        })

        const data = await res.json();
        // console.log(data)

        if (res.status !== 201) {
            console.log("No Data Available")
        } else {
            // console.log("Get Data")
            setIndData(data);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getIndData()
        }, 1000);
        
    }, [id])


    // Add card function

    const addToCart = async (id) => {
        const checker = await fetch(`/addcart/${id}`, {
        // const checker = await fetch(`${BackendServer}/addcart/${id}`, {
        // const checker = await fetch(`http://localhost:8005/addcart/${id}`, {
        // const checker = await fetch(`https://amazonclone-f2wf.onrender.com/addcart/${id}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Credentials": true
            },
            body: JSON.stringify({
                indData
            }),
            credentials: "include"
        });

        const Data1 = await checker.json()
        // console.log(Data1, "Frontend Data")
        if (checker.status === 401 || !Data1) {
            console.log("User invalid")
            alert("User invalid")
        } else {
            // alert("Data added in your cart")
            setAccount(Data1)
            navigate('/buynow')

        }
    }

    //Loading Effect

    const proAlert = () => {
        toast.warning('Project is under production 👀', {
          position: "top-right",
          autoClose: 5000
        })
        // console.log("Hello world")
      }

 
    return (
        <>
            <div className="cart_section">
                {
                    indData && Object.keys(indData).length &&

                    <div className="cart_container">
                        <div className="left_cart">
                            <img src={indData.url} alt="cart image" />
                            <div className="cart_btn">
                                {
                                    account? <button className='cart_btn1' onClick={() => addToCart(indData.id)}>Add to Cart</button>:
                                     <NavLink to='/login'><button className='cart_btn1'>Add to Cart</button></NavLink>

                                }
                                <button onClick={() => {proAlert()}} className='cart_btn2'>Buy Now</button>
                            </div>
                        </div>
                        <div className="right_cart">
                            <h3>{indData.title.shortTitle}</h3>
                            <h4>{indData.title.longTitle}</h4>
                            <Divider />
                            <p className='mrp'>{indData.price.mrp}</p>
                            <p>Deal of the day : <span style={{ color: "#b12704" }}>{indData.price.cost}</span></p>
                            <p>You Save : <span style={{ color: "#b12704" }}>{indData.price.mrp - indData.price.cost} ({indData.price.discount})</span></p>

                            <div className="discount_box">
                                <h5>Discount : <span style={{ color: '#111', fontWeight: "600" }}>{indData.discount}</span></h5>
                                <h4>Free Devliver <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                                <p>Fastest devlivery <span style={{ color: "#111", fontWeight: "600" }}>Tomorrow 11AM</span></p>
                            </div>
                            <p className="discription">
                                About the item : <span style={{ color: "#565959", fontSize: 14, fontWeight: 500, letterSpacing: '1px' }}>{indData.description}</span>
                            </p>
                        </div>
                    </div>
                }:

                {
                    !indData ? <div className='circle'> <CircularProgress /> <h2>Loading </h2> </div> : ""
                }
            </div>
        </>

    )
}
