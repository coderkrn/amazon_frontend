import React, { useEffect, useState } from 'react'
import './buynow.css'
import { Divider } from '@mui/material'
import Option from './Option'
import SubTotle from './SubTotle'
import Right from './Right'

export default function BuyNow() {

    const [cardData, setCardData] = useState('')
    // console.log(cardData.carts)

    const getData = async () => {
        const resposne = await fetch('/cartdetails', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        })
        const data = await resposne.json();

        if (resposne.status !== 201) {
            console.log("Found some error in carddetails api")
        } else {
            setCardData(data.carts)
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            {
                cardData.length ? <div className="buynow_section">
                    <div className="buynow_container">
                        <div className="left_buy">
                            <h1>Shopping Cart</h1>
                            <p>Select all item</p>
                            <span className='leftbuy_price'>Price</span>
                            <Divider />
                            {
                                cardData.map((e, k) => {
                                    return (
                                        <>
                                            <div className="item_container">
                                                <img src={e.url} alt="" />
                                                <div className="item_details">
                                                    <h3>{e.title.longTitle}</h3>
                                                    <h3>{e.title.shortTitle}</h3>
                                                    <h3 className="diffrentprice">{e.price.mrp}</h3>
                                                    <p className="unusuall">Usually dispathed in 8 days.</p>
                                                    <p>Eligible for FREE Shpipping</p>
                                                    {/* <img src="" alt="" /> */}
                                                    <Option  deleteItem={e.id} get={getData}/>
                                                </div>
                                                <h3 className='item_price'>{e.price.cost}</h3>
                                            </div>
                                            <Divider />

                                        </>
                                    )
                                })
                            }

                            <SubTotle item={cardData} get={getData} />
                        </div>
                        <Right   item={cardData} />
                        <div className="right_buy">

                        </div>
                    </div>
                </div> : " "
            }

        </>
    )
}
