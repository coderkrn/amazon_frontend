import React, { useContext } from 'react'
import { loginContext } from '../context/contextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ({ deleteItem, get }) {

    const { account, setAccount } = useContext(loginContext)


    const removeData = async () => {
        try {
            const res = await fetch(`https://amazonclone-f2wf.onrender.com/remove/${deleteItem}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json();
            // console.log(data)
            if (res.status === 400 || !data) {
                console.log('Got Error while removing item')
            } else {
                // console.log("Item deleted")
                get();
                setAccount(data)
                toast.success('Product removed successfully', {
                    position: "top-center",
                    autoClose: 4000
                })
            }
        } catch (error) {
            console.log("Found error in fetch method of removing items")
        }

    }

    return (
        <>
            <div className="add_remove_select">
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <p style={{ cursor: "pointer" }} onClick={() => removeData()}> Delete </p><span>|</span>
                <p className='forremovemedia' style={{ cursor: "pointer" }} >Save Or Later </p><span>|</span>
                <p className='forremovemedia' style={{ cursor: "pointer" }}>See more like this</p>
            </div>
            <ToastContainer/>
        </>
    )
}
