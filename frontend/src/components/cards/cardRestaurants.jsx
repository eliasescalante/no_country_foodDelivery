import React from "react";
import Slider from "react-slick";

import './cardRestaurants.css'
import { useNavigate } from "react-router-dom";

const CardRestaurants = ({ info }) => {
  const navigate = useNavigate();
  //console.log(info)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const handleClick = () => {
    // Navega a la ruta deseada
    navigate(`${info._id}`);
};

  return (
    <div className="card card-side bg-base-100 shadow-xl h-56 flex py-2">
      <figure className="flex w-96 h-full">
        <div className="w-full h-full">
          <div className="slider-container h-full">
            <Slider {...settings} className="h-full">
              {info?.images?.map((x, index) => (
                <div key={index} className="w-full h-full overflow-hidden">
                  <img src={x} className="w-full h-full object-cover"/>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </figure>

      <div className="card-body">
        <div className="flex gap-5">
          <div>logo</div>
          <h2 className="card-title">{info.name}</h2>
        </div>

        <p>{info.description}.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleClick}>Carta</button>
        </div>
      </div>
    </div>
  );
};

export default CardRestaurants;
