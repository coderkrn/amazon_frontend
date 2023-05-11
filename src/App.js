import './App.css';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import BuyNow from './components/buynow/BuyNow';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import MainComp from './components/home/MainComp';
import NewNavbar from './components/newNavbar/NewNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 2000);
  }, [])
  
  return (
    <>
    {
      data? <BrowserRouter>
      <Navbar />
      <NewNavbar />
      <Routes>
        <Route path='/' element={<MainComp />}></Route>
        <Route path='/login' element={<SignIn />}> </Route>
        <Route path='/register' element={<SignUp />}> </Route>
        <Route path='/getproductsone/:id' element={<Cart />}> </Route>
        <Route path='/buynow' element={<BuyNow />}> </Route>
      </Routes>
      <Footer />
    </BrowserRouter> : <div className='circle'> <CircularProgress/> <h2>Loading </h2> </div>
    }
      
    </>
  );
}

export default App;
