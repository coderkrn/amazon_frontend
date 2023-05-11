import { Slide } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
// import './banner.css'

export default function Banner() {

    const data = [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ]


    return (
        <Carousel className='carasousel' 
        autoPlay={true} 
        animation={Slide}
         indicators={false}
         navButtonsAlwaysVisible={true}
         cycleNavigation={true}>
            {
                data.map((img, i) => {
                    return (
                        <>
                            <img src={img} alt="" className='banner_img' />
                        </>
                    )
                })
            }
        </Carousel>
    )
}
