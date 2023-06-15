import {BackendServer} from '../../server'


export const getProducts = ()=> async(dispatch)=>{
    try {
        const data = await fetch(`/getproducts`,{
        // const data = await fetch(`${BackendServer}/getproducts`,{
        // const data = await fetch('http://localhost:8005/getproducts',{
        // const data = await fetch('https://amazonclone-f2wf.onrender.com/getproducts',{
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await data.json();
        // console.log(response)
        dispatch({type: 'SUCCESS_GET_PRODUCTS', payload: response})
    } catch (error) {
        dispatch({type: 'FAIL_GET_PRODUCTS', payload: error.response})
        
    }
}