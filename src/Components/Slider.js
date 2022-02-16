import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const contentStyle = {
  height: '500px',
  color: 'black',
  textAlign: 'center',
  background: '#364d79',
};

const Slider = () => {
  return (
    <div>
    <Carousel autoplay>
    <div>
    <img src='assests/b.jpg' alt="" style={{height :"500px" ,objectFit: "cover", }}/>
      <h3 style={contentStyle} style={{color:"black"}}>boy</h3>
    </div>
    <div>
    <img src='assests/b.jpg' alt="" style={{height :"500px" ,objectFit: "cover", }}/>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
    <img src='assests/black.jpg' alt="" style={{height :"500px" ,objectFit: "cover", }}/>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
    <img src='assests/black.jpg' alt="" style={{height :"500px" ,objectFit: "cover", }}/>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>

    </div>
  )
}

export default Slider