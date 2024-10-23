import React, { useEffect, useState } from "react";
import jsonData from "../../services/prueba.json";

import { getFoods } from "../../services/getFoods";

import CardProducts from "../../components/cards/cardProducts";

const Categories = () => {
  const [data, setData] = useState(null);

  const [foods, setFoods] = useState(null)

  useEffect(() => {
    const fetchFoods = async () => {
        try {
          const response = await getFoods();
       
          setFoods(response);
          
       //   console.log("user data=> ",data);
        } catch (error) {
          console.error("Error fetching task data:", error);
        }
      }
    fetchFoods();
  }, []);

  //console.log(foods);






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

      <div>
        <div className="flex w-full">
          <div className="flex flex-col gap-10 ">
            <div className="flex gap-10">
              {data?.categorias?.map((x) => (
                <div key={x.id} className="w-20 h-20 cursor-pointer hover:scale-105 duration-500">
                  <div className="flex flex-col  items-center gap-1">
                    <div className="w-20 h-20 rounded-full">
                      {" "}
                      <img
                        src={x.image}
                        className="w-full h-full rounded-full"
                      />{" "}
                    </div>
                    <div className="w-full flex justify-left overflow-hidden whitespace-nowrap text-ellipsis">
                      {" "}
                      {x.name}{" "}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="pt-20">
        <div>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {foods?.map((x)=>(
               <CardProducts key={x._id} info={x} />
              ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Categories;
