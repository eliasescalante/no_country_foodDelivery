import React, { useEffect, useState } from "react";
import jsonData from "../../services/prueba.json";
import { GrNext } from "react-icons/gr";

const CardPresentacionProduct = ({ info }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(jsonData.categorias);
  }, []);

  const result = data?.filter(x => x.id === info.categoryId) || [];


  //console.log(info.categoryId)



  //console.log(info);

  return (
    <div className="card h-48 w-64 shadow-xl bg-cover bg-center flex  justify-end"
    style={{ backgroundImage: "url('https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600')" }}
    >
        <div className="w-full h-20 flex content-center flex-wrap justify-center">
            <div className="bg-white w-4/5 h-8 rounded-lg">
                <div className="flex justify-around content-center  flex-wrap h-full">
                  <div > {result.length > 0 ? result[0].name : 'Categoría no encontrada'}</div>
                  <div className="bg-red-200 flex justify-around content-center  flex-wrap rounded-full w-6 bg-textTerceary text-bgPrimary font-bold"><GrNext /></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardPresentacionProduct;
