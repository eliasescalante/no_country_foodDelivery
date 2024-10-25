import React,{useEffect, useState} from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import { Link, useNavigate } from "react-router-dom";

import "./sidebar.css";



const sidebar = () => {


    const [activeDivs, setActiveDivs] = useState(null);

// Función que cambia el estado del div clickeado
const handleClick = (index) => {
 setActiveDivs(index);
};

const getDivStyles = (index) => ({

 borderBottom:activeDivs === index ? '4px solid #EBF172' : '',
 cursor: 'pointer',

});



  return (
    <div className="h-dvh">
      {/** header sidebar */}
      <div className="flex flex-col w-full items-center p-4 gap-2 border-solid border-b-4">
        <div className="w-2/3">
          <div className="w-full h-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
              className="w-100 h-100 object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            @user_user
            {}
          </div>
        </div>
      </div>

      {/** menu sidebar */}

      <div className="flex w-full pt-8 text-lg font-bold">
        <div className="w-full justify-items-end">
          <div className="w-3/4 flex flex-col gap-2">
            <div className="w-full accordion hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md pl-2">
              <Accordion transition transitionTimeout={250}>
                <AccordionItem
                  header="Mis pedidos"
                  headerClassName="text-lg font-bold p-2 bg-gray-200 cursor-pointer hover:bg-gray-300 w-full"
                >
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer w-full">
                  <Link to={`/ordersAll`} style={getDivStyles(0)} onClick={() => handleClick(0)} className='hover:text-gray-400'>Todos</Link>
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                  <Link to={`/ordersPreparation`} style={getDivStyles(1)} onClick={() => handleClick(1)} className='hover:text-gray-400'>Preparacion</Link>
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                    Enviado
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                    Cancelado
                  </div>
                  <div className="hover:bg-textPrimary bg-bgPrimary cursor-pointer">
                    Devolcuiones
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2">
                Pais/region e idioma
            </div>
            <div className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2">
                Direcciones
            </div>
            <div className="hover:bg-bgPrimary  min-h-10 flex  items-center  rounded-l-md cursor-pointer font-bold pl-2">
                Perfil
            </div>
           
          </div>
        </div>
      </div>


       {/** footer sidebar */}
        <div className="flex flex-col w-full  items-center p-4 ">
            <div className="w-full gap-2 border-solid border-t-4">
                <div>Villavicencio - Meta</div>
                <div className="">Logout</div>
            </div>
        </div>

    </div>
  );
};

export default sidebar;
