import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getRestaurantById } from "../../services/getRestaurants";

const RestaurantId = () => {
  const [restaurant, setRestaurant] = useState({});
  const [foods, setFoods] = useState({});


  const { id } = useParams();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getRestaurantById(id);
        setRestaurant(response.restaurant);
        setFoods(response.foods)


       // console.log("rrrr",response)
        //  console.log("user data=> ",data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };
    fetchFoods();
  }, []);


  //console.log('foods=>',foods)

  const groupedByCategory = Array.isArray(foods) ? (foods.reduce((acc, food) => {
    // Si la categoría aún no existe en el objeto acumulador, la inicializamos como un array vacío
    if (!acc[food.category]) {
        acc[food.category] = [];
    }
    // Añadimos el elemento a la categoría correspondiente
    acc[food.category].push(food);
    return acc;
}, {})):[]

  //console.log(groupedByCategory)

  for (let clave in groupedByCategory){
    console.log(clave, groupedByCategory[clave]);
  }
  




  ///console.log(restaurant);

  return (
    <div className="px-10 py-20 flex flex-col gap-10">
    <div className="flex gap-2 text-3xl font-bold">
      <div className="">logo</div>
      <div>{restaurant.name}</div>
    </div>
    <div role="tablist" className="tabs tabs-lifted">
      {Object.keys(groupedByCategory).map((clave, index) => {
        return (
          <>
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab text-xl font-bold"
              aria-label={`Tab ${index + 1}`}
              defaultChecked={index === 0} // El primer tab está seleccionado por defecto
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <h3 className="text-xl font-semibold">{clave}</h3>
              <ul>
                {groupedByCategory[clave].map((item, idx) => (
                  <li>{item.name}</li>
                ))}
              </ul>
            </div>
          </>
        );
      })}
    </div>
  </div>
  );
};

export default RestaurantId;
