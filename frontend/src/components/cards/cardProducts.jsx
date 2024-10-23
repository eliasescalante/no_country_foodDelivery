import React,{useEffect,useState} from "react";
import { getRestaurantById }  from "../../services/getRestaurants";




const cardProducts = ({info}) => {
  const [restaurant, setRestaurant] = useState({});

  const idRestaurant = info?.restaurant
  //console.log(idRestaurant)

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getRestaurantById(idRestaurant);

       // console.log(response)
        setRestaurant(response);
        //  console.log("user data=> ",data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };
    fetchFoods();
  }, []);




    //console.log(info)
  return (
    <div className="card bg-base-100 w-26 shadow-xl border-0 cursor-pointer hover:scale-105 duration-500">
      <figure>
        <img
          src= {info.imageUrl}
          alt="Shoes"
          className="w-full h-40"
        />
      </figure>
      <div className="card-body bg-bgPrimary">
        <div className="flex gap-1">
            <div className="w-10 h-10">
                <img 
                    className="w-full h-full rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDbxtSLiBOhw_ERvwpl-8aUFOZmpxNtM3NQ&s"
                />
            </div>
            <div>
                <div>
                <h2 className="card-title">{info.name}</h2>
                </div>
                <div>
                    {restaurant?.name}
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default cardProducts;
