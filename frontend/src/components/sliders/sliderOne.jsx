import React, { useEffect, useState } from "react";
import jsonData from "../../services/prueba.json";
import CardPresentacionProduct from "../cards/cardPresentacionProduct";

import Slider from "react-slick";

const SliderOne = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };

  return (
    <div className="slider-container ">
      <Slider {...settings} >
        {data?.productos ? (
          data.productos.map((x, index) => (
            <CardPresentacionProduct key={index} info={x} />
          ))
        ) : (
          <p>Cargando...</p> // O un mensaje si no hay datos aún
        )}
      </Slider>
    </div>
  );
};

export default SliderOne;
