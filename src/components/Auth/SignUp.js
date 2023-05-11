import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {

    const [udata, setudata] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        cpassword: ''
    })

    // console.log(udata)

    const addData = (e) => {
        const { name, value } = e.target;
        //    console.log(e.target.value)
        setudata(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    }
    const sendData = async (e) => {
        e.preventDefault();
        const { name, email, mobile, password, cpassword } = udata;
        // if (name === "") {
        //     toast.warning('Please enter your name !', {
        //         position: "top-center",
        //         autoClose: 3000
        //     })
        // }

        const response = await fetch('https://amazonclone-f2wf.onrender.com/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, mobile, password, cpassword
            })
        })

        const data = await response.json();
        //    console.log(data)
        if (response.status === 422 || !data) {
            // alert("No data found! Please fill all the fields")
            toast.warning('Invalid details !', {
                position: "top-center",
                autoClose: 3000
            })
        } else {
            // alert("Data succefully added")
            setudata({ ...udata,name: '',email: '',mobile: '',password: '',cpassword: '' })
            toast.success('Data successfully added', {
                position: "top-center",
                autoClose: 3000
            })
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
                            <h1>Sign-Up</h1>
                            <div className="form_data">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" onChange={addData} value={udata.name} name='name' id='fname' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={addData} value={udata.email} name='email' id='email' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="number">Mobile</label>
                                <input type="text" onChange={addData} value={udata.mobile} name='mobile' id='mobile' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Password</label>
                                <input type="password" onChange={addData} value={udata.password} name='password' id='password' placeholder='At least 6 char' />
                            </div>
                            <div className="form_data">
                                <label htmlFor="password">Confirm Password</label>
                                <input type="password" onChange={addData} value={udata.cpassword} name='cpassword' id='cpassword' />
                            </div>
                            <button className='signin_btn' onClick={sendData}>Continue</button>

                            <div className="signin_info">
                                <p>Already have an account?</p>
                                <Link to='/login'>signin</Link>
                            </div>
                        </form>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}
