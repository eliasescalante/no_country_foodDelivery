import React from "react";

const cardProducts = ({info}) => {
    console.log(info)
  return (
    <div className="card bg-base-100 w-26 shadow-xl border-0 cursor-pointer hover:scale-105 duration-500">
      <figure>
        <img
          src= {info.images[0]}
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
                    name restaurant
                </div>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default cardProducts;
