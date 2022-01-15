import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Config } from './Config';
import 'slick-carousel/slick/slick.css';
import '../styling/sliderStyle.css';
import '../styling/sliderConfigStyle.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

export default function MySlider() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('logos.json')
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [list]);

  function show() {
    return list.map((item) => {
      return (
        <div className="card" key={item.id}>
          <img className="list-img" src={item.img} />
        </div>
      );
    });
  }

  return (
    <div className="slider-container">
      <Slider {...Config}>{show()}</Slider>
    </div>
  );
}
