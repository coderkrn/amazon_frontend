import React, { useState, useEffect } from 'react'


export default function ({ item }) {

  const [price, setPrice] = useState();


  const totalAmount = () => {
    let price = 0;
    item.map((e) => {
      price = e.price.cost + price
    })
    setPrice(price)
  }

  useEffect(() => {
    totalAmount()
  }, [item])

 
  return (
    <>
      <div className="sub_item" >
        <h3 >Subtotal ({item.length} items): <strong style={{ fontWeight: 700, color: '#111' }}>₹{price}.00</strong> </h3>
      </div>
      
    </>
  )
}
