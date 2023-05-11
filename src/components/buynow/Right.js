import React, {useEffect, useState} from 'react'

export default function Right({item}) {

    const [price, setPrice]= useState();

    const totalAmount = ()=>{
       let price = 0;
      item.map((e)=>{
        price = e.price.cost + price
      })
      setPrice(price)
    }
  
    useEffect(() => {
      totalAmount()    
    }, [item])
  
    
    return (
        <>
            <div className="right_buy">
                <img src="https://m.media-amazon.com/images/G/31/gateway-2015/TrustTest/Page/UpdatedImages/OriginalProducts_Trust-MessagingPage_3._CB485931493_.png" alt="" />
                <div className="cost_right">
                    <p>Your order is eligible for FREE Delivery</p> <br />
                    <span style={{ color: '#565959' }}>Select this option to checkout. Details</span>
                    <h3>Subtotal ({item.length} itmes): <span style={{fontWeight:700}}>₹{price}.00</span></h3>
                    <button className="rightbuy_btn">Procsess to Buy</button>
                    <div className="emi">
                        EMI Available
                    </div>
                </div>
            </div>
        </>
    )
}
