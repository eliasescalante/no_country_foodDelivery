import React, { useEffect, useState } from "react";
import jsonData from "../../services/prueba.json";

import { getRestaurants } from "../../services/getRestaurants";

import CardRestaurants from "../../components/cards/cardRestaurants";
import MapRestaurants from "../../components/mapRestaurants";

const Restaurants = () => {
  const [data, setData] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getRestaurants();
        setRestaurants(response);
     //  console.log("user data=> ",data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    }
  fetchFoods();
  }, []);



  console.log(restaurants)

  return (

    <div className="px-10 py-20 flex flex-col gap-10">
    <div className="flex w-full justify-center">
      <div className="w-2/3">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Enter food favorite"
          />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
      </div>
    </div>

    <div className=" flex">
      <div className="flex w-full h-screen gap-2">

        <div className="flex flex-col w-1/2 p-5 overflow-y-auto gap-6">
            {restaurants?.map((x)=>(
             <CardRestaurants key={x._id} info={x} />
            ))}
        </div>


        <div className="bg-white w-1/2 h-screen p-10 rounded">
            <div className=" w-full h-full">
              <MapRestaurants />
            </div>
        </div>
      </div>
    </div>


  </div>
  )
}

export default Restaurants