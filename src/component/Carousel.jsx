import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';



function ControlledCarousel() {
    const imageList = [
        "https://media.self.com/photos/599c997a774b667d3bbe1214/2:1/w_1279,h_639,c_limit/groceries-family-month.jpg",
        "https://images.jdmagicbox.com/comp/dindigul/j7/9999px451.x451.160702160635.i6j7/catalogue/smt-vegetables-oddanchatram-dindigul-commission-agents-for-vegetable-4awmlr8p56.jpg",
        "https://www.heart.org/-/media/AHA/Recipe/Article-Images/vegetables_storage.jpg",
        "https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/3/8/0/6/3156083-1-eng-GB/Bonduelle-achieves-6-years-with-no-lost-time-incidents-with-Alchemy_wrbm_large.png"
    ];
    const contentStyle = {
        height: '400px',
        width: "100%",
        // margin:"10px",
        display: "block",
        objectFit: "cover",

    };
    const imgStyle = {
        height: '400px',
        width: "100vw",
        display: "block",
        paddingLeft: "15px",
        paddingRight: "25px",
        paddingBottom:"5px",
        paddingTop: "15px",
        borderRadius: "30px",
        objectFit: "cover",
    };
    return (
        <>
            <Carousel autoplay effect='fade'>
                <div>
                    <h3 style={contentStyle}><img style={imgStyle} src={imageList[0]}></img></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={imgStyle} src={imageList[1]} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={imgStyle} src={imageList[2]} /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img style={imgStyle} src={imageList[3]} /></h3>
                </div>
            </Carousel>
        </>
    );
}

export default ControlledCarousel;
