import React, { useEffect } from 'react'
import Banner from './Banner'
import './home.css'
import Slide from './Slide'
import {getProducts} from '../redux/actions/action'
import { useDispatch, useSelector } from 'react-redux'


export default function MainComp() {


    const {products} = useSelector(state => state.getProductsData)
    // console.log(products)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])
    


    return (
        <>
            <div className="home_section">
                <div className="banner_part">
                    <Banner />
                </div>
                <div className="slide_part">
                    <div className="left_slide">
                        <Slide title="Deals of the day" products={products} />
                    </div>
                    <div className="right_slide">
                        <h4>Festive latest launches</h4>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/MayART23/GW/Revised/MayART_T2_PC_CC_1X._SY304_CB590948482_.jpg" alt="Fesivle Image" />
                        <a href="/">See more</a>
                    </div>
                </div>

                <Slide title="Today's deals"  products={products}/>
                <div className="center_img">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MayART23/KSD/header/updated/3-1500x300.jpg" alt="" />
                </div>
                <Slide title="Best Saller" products={products}/>
                <Slide title="Upto 80% off" products={products} />

            </div>
        </>
    )
}
