import React, { useState, useContext } from 'react'
import './auth.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginContext } from '../context/contextProvider';

export default function SignIn() {

    const [logdata, setdata] = useState({
        email: '',
        password: ''
    })

    // console.log(logdata)

    const navigate = useNavigate();

  const { account, setAccount } = useContext(loginContext)
    

    const addData = (e) => {
       const {name, value} = e.target;
    //    console.log(e.target.value)
        setdata(()=>{
            return {
                ...logdata,
                [name]:value
            }
        })
    }

    const sendData = async (e) => {
        e.preventDefault();
        const {email, password} = logdata;
        const response = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                 email, password
            })
        })

        const data = await response.json();
        //    console.log(data)
        if (response.status === 400 || !data) {
            console.log("No data found! Please fill all the fields")
            toast.warning('Invalid details !', {
                position: "top-center",
                autoClose: 3000
            })
        } else {
            // alert("Data succefully added")
            setdata({ ...logdata, email: '',password: '' })
            setAccount(data)
            toast.success('Login  successfully', {
                position: "top-center",
                autoClose: 3000
            })
            navigate('/')
        }

    }
    

    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="https://raw.githubusercontent.com/harsh17112000/E-commerceapp/main/client/public/blacklogoamazon.png" alt="amazon_logo" />
                    </div>
                    <div className="sign_form">
                        <form method='POST'>
                            <h1>Sign-In</h1>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={addData} value={logdata.email} name='email' id='email' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" onChange={addData} value={logdata.password} name='password' id='password' placeholder='At least 6 char' />
                            </div>
                            <button className='signin_btn' onClick={sendData}>Continue</button>
                        </form>
                    </div>
                    <div className="create_accountinfo">
                        <p>New To Amazon</p>
                        <Link to="/register"> <button>Create your Amazon Account</button> </Link>
                    </div>
                    <ToastContainer/>
                </div>
            </section>
        </>
    )
}
